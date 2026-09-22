import type { FlashcardReviewState, QuestionAttempt, UserProgress } from "@/types";
import { getItem, setItem, storageKeys } from "@/lib/storage";
import { emptyProgress } from "@/lib/stats";
import { getAllLessons } from "@/config/edital";

function readProgress(): UserProgress {
  return getItem<UserProgress>(storageKeys.progress, emptyProgress);
}

function writeProgress(progress: UserProgress): void {
  setItem(storageKeys.progress, progress);
}

function localDateKey(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

/**
 * Registra atividade de estudo: atualiza a sequência de dias (streak) e
 * soma minutos estimados ao histórico de estudo.
 * Estimativas: questão = 2 min, flashcard = 0,5 min, aula = tempo estimado da aula.
 */
function registerActivity(progress: UserProgress, minutes: number): UserProgress {
  const now = new Date();
  const today = localDateKey(now);
  const yesterdayDate = new Date(now);
  yesterdayDate.setDate(now.getDate() - 1);
  const yesterday = localDateKey(yesterdayDate);

  let streakDays = progress.streakDays;
  if (progress.lastStudyDate === today) {
    streakDays = Math.max(1, streakDays);
  } else if (progress.lastStudyDate === yesterday) {
    streakDays = streakDays + 1;
  } else {
    streakDays = 1;
  }

  return {
    ...progress,
    streakDays,
    lastStudyDate: today,
    studySessions: [
      ...progress.studySessions,
      {
        id: `${now.getTime()}`,
        startedAt: now.toISOString(),
        endedAt: now.toISOString(),
        minutesStudied: minutes,
      },
    ],
  };
}

export function recordQuestionAttempt(
  attempt: Omit<QuestionAttempt, "answeredAt">
): UserProgress {
  const progress = readProgress();
  const updated: UserProgress = registerActivity(
    {
      ...progress,
      questionAttempts: [
        ...progress.questionAttempts,
        { ...attempt, answeredAt: new Date().toISOString() },
      ],
    },
    2
  );
  writeProgress(updated);
  return updated;
}

export function toggleLessonComplete(lessonSlug: string): UserProgress {
  const progress = readProgress();
  const existing = progress.lessons[lessonSlug];
  const nowCompleted = !existing?.completed;
  const lessonMinutes =
    getAllLessons().find((l) => l.slug === lessonSlug)?.estimatedMinutes ?? 0;

  const withLesson: UserProgress = {
    ...progress,
    lessons: {
      ...progress.lessons,
      [lessonSlug]: {
        lessonSlug,
        completed: nowCompleted,
        favorited: existing?.favorited ?? false,
        completedAt: nowCompleted ? new Date().toISOString() : null,
      },
    },
  };
  const updated = nowCompleted ? registerActivity(withLesson, lessonMinutes) : withLesson;
  writeProgress(updated);
  return updated;
}

export function toggleLessonFavorite(lessonSlug: string): UserProgress {
  const progress = readProgress();
  const existing = progress.lessons[lessonSlug];

  const updated: UserProgress = {
    ...progress,
    lessons: {
      ...progress.lessons,
      [lessonSlug]: {
        lessonSlug,
        completed: existing?.completed ?? false,
        favorited: !existing?.favorited,
        completedAt: existing?.completedAt ?? null,
      },
    },
  };
  writeProgress(updated);
  return updated;
}

function readFlashcardReviews(): Record<string, FlashcardReviewState> {
  return getItem<Record<string, FlashcardReviewState>>(
    storageKeys.flashcardReviews,
    {}
  );
}

/**
 * Repetição espaçada simplificada (não é o algoritmo SM-2 completo, mas
 * segue o mesmo princípio: acertar aumenta o intervalo, errar reseta).
 * O formato salvo (FlashcardReviewState) já é compatível com uma futura
 * migração para SM-2 completo sem precisar mudar os dados existentes.
 */
export function recordFlashcardReview(
  flashcardId: string,
  knew: boolean
): Record<string, FlashcardReviewState> {
  const reviews = readFlashcardReviews();
  const previous = reviews[flashcardId];

  const repetitions = knew ? (previous?.repetitions ?? 0) + 1 : 0;
  const intervalDays = knew ? Math.min(60, (previous?.intervalDays ?? 1) * 2) : 1;
  const easeFactor = previous?.easeFactor ?? 2.5;

  const dueDate = new Date();
  dueDate.setDate(dueDate.getDate() + intervalDays);

  const updated: Record<string, FlashcardReviewState> = {
    ...reviews,
    [flashcardId]: {
      flashcardId,
      easeFactor,
      intervalDays,
      repetitions,
      dueDate: dueDate.toISOString(),
      lastReviewedAt: new Date().toISOString(),
    },
  };

  setItem(storageKeys.flashcardReviews, updated);
  writeProgress(registerActivity(readProgress(), 0.5));
  return updated;
}
