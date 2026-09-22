import type { Question } from "@/types";
import { buildQuestions, type QuestionTuple } from "./build";

/** Adicione novas questões sempre no FINAL da lista. */
const questions: QuestionTuple[] = [
  [
    "Compreensão e interpretação", "Ideia central", "facil",
    "Leia: “O Censo não é apenas uma contagem de pessoas: é o retrato que orienta onde construir escolas, postos de saúde e estradas.” De acordo com o trecho, o Censo:",
    ["serve somente para contar a população.", "tem utilidade restrita ao próprio IBGE.", "fornece informações que orientam decisões de políticas públicas.", "substitui o planejamento do governo.", "é realizado com a finalidade de construir escolas."],
    "c",
    "O trecho diz que o Censo vai além da contagem e orienta onde investir. A alternativa E confunde o uso das informações com a finalidade da pesquisa; a A contraria o “não é apenas”.",
    ["interpretação", "ideia central", "Censo"],
  ],
  [
    "Concordância", "Verbo haver", "facil",
    "Assinale a frase correta quanto à concordância verbal:",
    ["Haviam muitos domicílios fechados.", "Houveram falhas na coleta.", "Havia muitos domicílios fechados.", "Devem haver erros no formulário.", "Fazem três meses que o censo começou."],
    "c",
    "“Haver” no sentido de existir é impessoal e fica no singular, e passa essa impessoalidade ao auxiliar (“deve haver”). “Fazer” indicando tempo também fica no singular (“Faz três meses”).",
    ["haver", "impessoal", "concordância"],
  ],
  [
    "Concordância", "Voz passiva sintética", "medio",
    "Está de acordo com a norma-padrão:",
    ["Aluga-se salas comerciais.", "Vende-se apartamentos.", "Consertam-se computadores.", "Precisam-se de recenseadores.", "Faz-se entregas."],
    "c",
    "Na voz passiva sintética (verbo transitivo direto + se), o verbo concorda com o sujeito: “computadores são consertados”. Com preposição (“precisa-se de”), o “se” indetermina o sujeito e o verbo fica no singular.",
    ["voz passiva sintética", "pronome se", "concordância"],
  ],
  [
    "Concordância", "Concordância nominal", "medio",
    "Está correta a concordância nominal em:",
    ["Segue anexo as planilhas.", "Seguem anexas as planilhas.", "Segue anexas as planilhas.", "Seguem anexo as planilhas.", "Seguem anexos as planilhas."],
    "b",
    "“Anexo” é adjetivo e concorda com o substantivo: planilhas → anexas. O verbo também concorda com o sujeito plural: seguem.",
    ["anexo", "concordância nominal"],
  ],
  [
    "Regência", "Crase", "facil",
    "O uso do acento grave indicativo de crase está correto em:",
    ["Fui à pé até o setor.", "Entreguei o relatório à ela.", "Refiro-me à coordenadora da equipe.", "Começou à chover.", "Estava disposto à colaborar."],
    "c",
    "“Referir-se a” + “a coordenadora” = à. Não há crase antes de palavra masculina (pé), de pronome pessoal (ela) nem de verbo (chover, colaborar).",
    ["crase", "acento grave", "regência"],
  ],
  [
    "Regência", "Regência verbal", "medio",
    "Quanto à regência verbal, está correto:",
    ["Assisti o treinamento ontem.", "Prefiro trabalhar do que estudar.", "O servidor obedeceu o regulamento.", "Assisti ao treinamento ontem.", "Prefiro mais café do que chá."],
    "d",
    "“Assistir”, no sentido de ver, exige a preposição “a”. “Obedecer” também exige “a”. “Preferir” pede “a” e não admite “mais” nem “do que”: prefiro café a chá.",
    ["assistir", "preferir", "obedecer", "regência"],
  ],
  [
    "Significação das palavras", "Parônimos", "medio",
    "O relatório continha um erro; por isso, o coordenador pediu que o agente ______ o dado. Depois, a diretoria ______ a versão corrigida, confirmando-a oficialmente. Completam corretamente as lacunas:",
    ["retificasse — ratificou", "ratificasse — retificou", "retificasse — retificou", "ratificasse — ratificou", "ratificasse — deferiu"],
    "a",
    "Retificar = corrigir (o dado errado). Ratificar = confirmar (a versão corrigida).",
    ["ratificar", "retificar", "parônimos"],
  ],
  [
    "Pontuação", "Vírgula", "facil",
    "A pontuação está correta em:",
    ["Os agentes do IBGE, visitaram os domicílios.", "O coordenador, pediu os relatórios.", "Maria, a supervisora, revisou os dados.", "Os dados coletados, foram enviados.", "A equipe de campo, concluiu a etapa."],
    "c",
    "Não se separa o sujeito do verbo por vírgula. Em C, “a supervisora” é aposto explicativo e deve mesmo vir entre vírgulas.",
    ["vírgula", "sujeito e verbo", "aposto"],
  ],
  [
    "Ortografia e acentuação", "Acordo Ortográfico", "medio",
    "Estão grafadas corretamente, segundo o Acordo Ortográfico vigente:",
    ["idéia, heróico, assembléia", "ideia, heroico, assembleia", "ideia, heróico, assembléia", "idéia, heroico, assembleia", "ideía, heroíco, assembleía"],
    "b",
    "Os ditongos abertos “éi” e “ói” em palavras paroxítonas perderam o acento: ideia, heroico, assembleia.",
    ["acentuação", "ditongo aberto", "acordo ortográfico"],
  ],
  [
    "Coesão e coerência", "Conectivo concessivo", "medio",
    "Em “Embora o prazo fosse curto, a equipe concluiu a coleta”, a conjunção “embora” pode ser substituída, sem alteração de sentido, por:",
    ["porque", "portanto", "ainda que", "assim que", "mas"],
    "c",
    "“Embora” e “ainda que” são concessivas: admitem um obstáculo que não impede o fato. “Porque” é causal, “portanto” conclusiva, “assim que” temporal e “mas” adversativa (exigiria reescrever a frase).",
    ["embora", "concessiva", "conectivos"],
  ],
  [
    "Coesão e coerência", "Conectivo adversativo", "facil",
    "A palavra que estabelece relação de oposição é:",
    ["portanto", "porque", "contudo", "conforme", "logo"],
    "c",
    "“Contudo” é adversativa, como mas, porém e todavia. “Portanto” e “logo” são conclusivas; “porque”, causal; “conforme”, conformativa.",
    ["contudo", "adversativa", "oposição"],
  ],
  [
    "Emprego dos pronomes", "Colocação pronominal", "medio",
    "A colocação pronominal está correta em:",
    ["Não entregaram-me o relatório.", "Me entregaram o relatório.", "Não me entregaram o relatório.", "Nunca disse-lhe isso.", "Quem avisou-te?"],
    "c",
    "Palavras negativas (não, nunca) e pronomes interrogativos (quem) atraem o pronome para antes do verbo (próclise). Na norma-padrão, não se inicia frase com pronome oblíquo átono.",
    ["próclise", "colocação pronominal", "palavra atrativa"],
  ],
  [
    "Redação oficial", "Fechos", "medio",
    "Em um ofício dirigido a uma autoridade de hierarquia superior, o fecho adequado, segundo o Manual de Redação da Presidência da República, é:",
    ["Atenciosamente,", "Respeitosamente,", "Cordialmente,", "Sem mais para o momento,", "Abraços,"],
    "b",
    "“Respeitosamente” é usado para autoridades de hierarquia superior; “Atenciosamente”, para mesma hierarquia ou inferior.",
    ["ofício", "fecho", "redação oficial"],
  ],
];

export const linguaPortuguesaQuestions: Question[] = buildQuestions(
  "lingua-portuguesa",
  "lp",
  questions
);
