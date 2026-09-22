import type { Difficulty, Flashcard } from "@/types";

/**
 * Flashcards de Língua Portuguesa.
 * Formato: [assunto, frente (conceito), verso (definição), dificuldade]
 * Adicione novos cartões sempre no FINAL da lista.
 */
const cards: [string, string, string, Difficulty][] = [
  // Concordância
  ["Concordância", "Verbo haver (sentido de existir)", "É impessoal e fica no singular: “Havia muitos candidatos.”", "facil"],
  ["Concordância", "Verbo fazer (tempo decorrido)", "É impessoal e fica no singular: “Faz dois anos que estudo.”", "facil"],
  ["Concordância", "Voz passiva sintética", "O verbo concorda com o sujeito: “Vendem-se casas.”", "medio"],
  ["Concordância", "Índice de indeterminação do sujeito", "Verbo fica no singular: “Precisa-se de agentes.”", "medio"],
  ["Concordância", "Sujeito composto antes do verbo", "Verbo vai para o plural: “O chefe e o agente saíram.”", "facil"],
  ["Concordância", "Anexo, obrigado, mesmo", "Concordam com o substantivo: “Seguem anexas as planilhas.”", "medio"],
  ["Concordância", "É proibido / É necessário", "Sem artigo, fica invariável: “É proibido entrada.” Com artigo: “É proibida a entrada.”", "dificil"],

  // Regência e crase
  ["Regência", "Assistir (ver)", "Exige a preposição “a”: “Assisti ao treinamento.”", "medio"],
  ["Regência", "Preferir", "Prefere-se uma coisa A outra, sem “do que”: “Prefiro café a chá.”", "medio"],
  ["Regência", "Obedecer", "Exige a preposição “a”: “Obedeça ao regulamento.”", "facil"],
  ["Regência", "Visar (ter como objetivo)", "Exige a preposição “a”: “O curso visa à aprovação.”", "dificil"],
  ["Regência", "Crase", "Fusão da preposição “a” com o artigo “a”: “Fui à reunião.”", "facil"],
  ["Regência", "Crase proibida", "Antes de palavra masculina, verbo e pronomes como “ela”, “esta” e “você”.", "medio"],
  ["Regência", "Crase em horas", "Usa-se na indicação exata de horas: “Chegou às 8h.”", "facil"],

  // Significação das palavras
  ["Significação das palavras", "Ratificar x retificar", "Ratificar: confirmar. Retificar: corrigir.", "medio"],
  ["Significação das palavras", "Eminente x iminente", "Eminente: importante. Iminente: prestes a acontecer.", "medio"],
  ["Significação das palavras", "Descrição x discrição", "Descrição: ato de descrever. Discrição: reserva, qualidade de discreto.", "facil"],
  ["Significação das palavras", "Sessão, seção e cessão", "Sessão: reunião. Seção: divisão, setor. Cessão: ato de ceder.", "medio"],
  ["Significação das palavras", "Deferir x diferir", "Deferir: aprovar um pedido. Diferir: adiar ou ser diferente.", "dificil"],
  ["Significação das palavras", "Infringir x infligir", "Infringir: desrespeitar uma regra. Infligir: aplicar uma pena.", "dificil"],

  // Ortografia e acentuação
  ["Ortografia e acentuação", "Paroxítona terminada em ditongo", "Leva acento: história, série, água.", "medio"],
  ["Ortografia e acentuação", "Ditongos abertos éi e ói em paroxítonas", "Perderam o acento: ideia, assembleia, heroico.", "medio"],
  ["Ortografia e acentuação", "Tem x têm", "Tem: singular (ele tem). Têm: plural (eles têm).", "facil"],

  // Pontuação
  ["Pontuação", "Vírgula entre sujeito e verbo", "É proibida: não se separa o sujeito do seu verbo.", "facil"],
  ["Pontuação", "Aposto explicativo", "Vem entre vírgulas: “Recife, capital de PE, recebeu o censo.”", "facil"],
  ["Pontuação", "Adjunto adverbial deslocado", "Quando longo e antecipado, costuma vir com vírgula.", "medio"],

  // Coesão, classes e pronomes
  ["Coesão e coerência", "Conectivo adversativo", "Indica oposição: mas, porém, contudo, todavia, entretanto.", "facil"],
  ["Coesão e coerência", "Conectivo concessivo", "Indica concessão: embora, ainda que, mesmo que.", "medio"],
  ["Coesão e coerência", "Conectivo conclusivo", "Indica conclusão: portanto, logo, por isso, pois (depois do verbo).", "medio"],
  ["Emprego dos pronomes", "Próclise obrigatória", "Pronome antes do verbo com palavras atrativas: não, nunca, que, quem.", "medio"],
  ["Emprego dos pronomes", "Mesóclise", "Pronome no meio do verbo, no futuro, sem palavra atrativa: “Far-se-á.”", "dificil"],

  // Redação oficial
  ["Redação oficial", "Fecho “Respeitosamente”", "Para autoridades de hierarquia superior.", "medio"],
  ["Redação oficial", "Fecho “Atenciosamente”", "Para autoridades de mesma hierarquia ou inferior.", "medio"],
  ["Redação oficial", "Atributos da redação oficial", "Clareza, concisão, impessoalidade, formalidade e padronização.", "facil"],
];

export const linguaPortuguesaFlashcards: Flashcard[] = cards.map(
  ([subject, front, back, difficulty], index) => ({
    id: `lp-fc-${index + 1}`,
    disciplineSlug: "lingua-portuguesa",
    subject,
    front,
    back,
    difficulty,
  })
);
