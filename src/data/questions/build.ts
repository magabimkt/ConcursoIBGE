import type { Difficulty, Question } from "@/types";

/**
 * Formato compacto para escrever questões:
 * [assunto, subassunto, dificuldade, enunciado, [A, B, C, D, E], letra correta, comentário, palavras-chave]
 */
export type QuestionTuple = [
  string,
  string,
  Difficulty,
  string,
  [string, string, string, string, string],
  "a" | "b" | "c" | "d" | "e",
  string,
  string[],
];

const LETTERS = ["a", "b", "c", "d", "e"] as const;

export function buildQuestions(
  disciplineSlug: string,
  idPrefix: string,
  tuples: QuestionTuple[]
): Question[] {
  return tuples.map(
    ([subject, subtopic, difficulty, statement, alternatives, correct, explanation, keywords], index) => ({
      id: `${idPrefix}-q-${index + 1}`,
      disciplineSlug,
      subject,
      subtopic,
      difficulty,
      statement,
      alternatives: alternatives.map((text, i) => ({
        id: LETTERS[i]!,
        text: `${LETTERS[i]!.toUpperCase()}) ${text}`,
      })),
      correctAlternativeId: correct,
      explanation,
      keywords,
    })
  );
}
