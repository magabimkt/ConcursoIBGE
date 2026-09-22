"use client";

import { useMemo, useState } from "react";
import { Header } from "@/components/layout/header";
import { Flashcard } from "@/components/flashcards/flashcard";
import { allFlashcards } from "@/data/flashcards";
import { useFlashcardReviews } from "@/lib/use-flashcard-reviews";
import { computeUpcomingReviewCounts, getDueFlashcardIds } from "@/lib/flashcards";

const WEEKDAY_LABELS = ["dom", "seg", "ter", "qua", "qui", "sex", "sáb"];

export default function RevisoesPage() {
  const reviewStates = useFlashcardReviews();
  const [index, setIndex] = useState(0);
  const [finished, setFinished] = useState(false);

  const dueIds = useMemo(
    () => getDueFlashcardIds(allFlashcards, reviewStates),
    [reviewStates]
  );
  const dueFlashcards = allFlashcards.filter((f) => dueIds.includes(f.id));
  const upcoming = computeUpcomingReviewCounts(allFlashcards, reviewStates);
  const currentFlashcard = dueFlashcards[index];

  function handleReviewed() {
    if (index >= dueFlashcards.length - 1) {
      setFinished(true);
      return;
    }
    setIndex((i) => i + 1);
  }

  function handleRestartDeck() {
    setIndex(0);
    setFinished(false);
  }

  return (
    <div className="min-h-screen bg-paper">
      <Header />
      <main className="mx-auto max-w-content px-6 py-10">
        <h1 className="text-3xl font-bold">Revisões</h1>
        <p className="mt-1 text-ink-muted">
          Flashcards prontos para revisar hoje, com base na repetição espaçada.
        </p>

        <div className="mt-6">
          {allFlashcards.length === 0 ? (
            <p className="text-sm text-ink-muted">
              Ainda não há flashcards cadastrados — assim que houver, as
              revisões pendentes aparecerão aqui automaticamente.
            </p>
          ) : dueFlashcards.length === 0 || !currentFlashcard ? (
            <p className="text-sm text-ink-muted">
              Nenhuma revisão pendente por agora. Bom trabalho.
            </p>
          ) : finished ? (
            <div className="rounded border border-line bg-paper p-6 text-center">
              <p className="font-medium text-teal">Você revisou todos os cartões desta rodada.</p>
              <p className="mt-1 text-sm text-ink-muted">
                Os cartões marcados como “Não sabia” voltam para revisão amanhã.
              </p>
              <button
                onClick={handleRestartDeck}
                className="mt-4 rounded bg-teal px-4 py-2 text-sm font-medium text-paper hover:bg-teal-dark"
              >
                Recomeçar
              </button>
            </div>
          ) : (
            <>
              <p className="mb-3 font-mono text-sm text-ink-muted">
                {index + 1} de {dueFlashcards.length} pendentes hoje
              </p>
              <Flashcard
                key={currentFlashcard.id}
                flashcard={currentFlashcard}
                onReviewed={handleReviewed}
              />
            </>
          )}
        </div>

        {allFlashcards.length > 0 && (
          <div className="mt-8 rounded border border-line bg-paper p-4">
            <h2 className="font-medium">Próximos 7 dias</h2>
            <div className="mt-3 flex gap-2">
              {upcoming.map((u) => (
                <div
                  key={u.date}
                  className="flex flex-1 flex-col items-center rounded border border-line py-2"
                >
                  <span className="font-mono text-lg">{u.count}</span>
                  <span className="text-xs text-ink-muted">
                    {WEEKDAY_LABELS[new Date(u.date).getDay()]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
