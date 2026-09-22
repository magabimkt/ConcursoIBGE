import type { Difficulty, Flashcard } from "@/types";

/**
 * Flashcards de Raciocínio Lógico Quantitativo.
 * Formato: [assunto, frente (conceito), verso (definição), dificuldade]
 * Adicione novos cartões sempre no FINAL da lista.
 */
const cards: [string, string, string, Difficulty][] = [
  // Estruturas lógicas
  ["Estruturas lógicas", "Proposição", "Frase declarativa que pode ser julgada como verdadeira ou falsa.", "facil"],
  ["Estruturas lógicas", "Conjunção (p e q)", "Só é verdadeira quando as duas partes são verdadeiras.", "facil"],
  ["Estruturas lógicas", "Disjunção (p ou q)", "Só é falsa quando as duas partes são falsas.", "facil"],
  ["Estruturas lógicas", "Condicional (se p, então q)", "Só é falsa quando p é verdadeira e q é falsa (V → F).", "medio"],
  ["Estruturas lógicas", "Bicondicional (p se e somente se q)", "Verdadeira quando p e q têm o mesmo valor lógico.", "medio"],
  ["Estruturas lógicas", "Negação de “p e q”", "“não p ou não q” (Lei de De Morgan).", "medio"],
  ["Estruturas lógicas", "Negação de “p ou q”", "“não p e não q” (Lei de De Morgan).", "medio"],
  ["Estruturas lógicas", "Negação de “se p, então q”", "“p e não q”.", "dificil"],
  ["Estruturas lógicas", "Contrapositiva de “se p, então q”", "“se não q, então não p” (é equivalente).", "dificil"],
  ["Estruturas lógicas", "Equivalência do condicional", "“se p, então q” equivale a “não p ou q”.", "dificil"],
  ["Estruturas lógicas", "Tautologia", "Proposição composta sempre verdadeira, em qualquer caso.", "medio"],

  // Quantificadores e diagramas
  ["Diagramas lógicos", "Negação de “Todo A é B”", "“Algum A não é B”.", "medio"],
  ["Diagramas lógicos", "Negação de “Nenhum A é B”", "“Algum A é B”.", "medio"],
  ["Diagramas lógicos", "Negação de “Algum A é B”", "“Nenhum A é B”.", "medio"],
  ["Diagramas lógicos", "“Todo A é B” no diagrama", "O conjunto A fica inteiro dentro do conjunto B.", "facil"],

  // Aritmética
  ["Aritmética", "Aumentos sucessivos de 10% e 20%", "1,10 × 1,20 = 1,32 → aumento total de 32%.", "medio"],
  ["Aritmética", "Descontos sucessivos de 20% e 20%", "0,80 × 0,80 = 0,64 → desconto total de 36%.", "medio"],
  ["Aritmética", "Calcular x% de um valor", "Multiplique o valor por x/100. Ex.: 15% de 200 = 30.", "facil"],
  ["Aritmética", "MMC", "Menor múltiplo comum. Usado em eventos que se repetem juntos.", "facil"],
  ["Aritmética", "MDC", "Maior divisor comum. Usado para dividir em partes iguais e máximas.", "facil"],
  ["Aritmética", "Regra de três inversa", "Quando uma grandeza aumenta e a outra diminui. Ex.: mais agentes, menos dias.", "medio"],
  ["Aritmética", "Juros simples", "J = C × i × t (capital × taxa × tempo).", "medio"],

  // Álgebra e geometria
  ["Álgebra básica", "Equação do 1º grau", "Isole x fazendo a operação inversa nos dois lados da igualdade.", "facil"],
  ["Geometria básica", "Área do retângulo", "Base × altura.", "facil"],
  ["Geometria básica", "Área do triângulo", "(Base × altura) ÷ 2.", "facil"],
  ["Geometria básica", "Área do círculo", "π × r² (pi vezes o raio ao quadrado).", "facil"],
  ["Geometria básica", "Teorema de Pitágoras", "Hipotenusa² = cateto² + cateto². Ex.: 3, 4 e 5.", "medio"],
  ["Geometria básica", "Soma dos ângulos internos do triângulo", "180 graus.", "facil"],
];

export const raciocinioLogicoFlashcards: Flashcard[] = cards.map(
  ([subject, front, back, difficulty], index) => ({
    id: `rlq-fc-${index + 1}`,
    disciplineSlug: "raciocinio-logico-quantitativo",
    subject,
    front,
    back,
    difficulty,
  })
);
