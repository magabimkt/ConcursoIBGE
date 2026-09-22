import type { Discipline, LessonMeta } from "@/types";

/**
 * Estrutura de disciplinas e módulos do Edital nº 01/2026 (IBFC/IBGE),
 * cargo Agente Censitário Administrativo (ACA).
 *
 * Cada módulo corresponde a um tópico do conteúdo programático oficial.
 * As aulas (lessons) de cada módulo ainda não existem — serão adicionadas
 * numa etapa futura de criação de conteúdo. Por enquanto os arrays de
 * `lessons` ficam vazios; o dashboard e a navegação já sabem lidar com
 * módulos sem aulas.
 */
export const disciplines: Discipline[] = [
  {
    slug: "lingua-portuguesa",
    name: "Língua Portuguesa",
    description: "15 questões na prova — peso 1,00.",
    modules: [
      { slug: "compreensao-interpretacao", name: "Compreensão e interpretação de texto", order: 1, lessons: [{ slug: "compreender-e-interpretar-textos", title: "Compreender e interpretar textos", disciplineSlug: "lingua-portuguesa", moduleSlug: "compreensao-interpretacao", theme: "Explícito e implícito, erros de alternativa e tipos de texto", estimatedMinutes: 25, difficulty: "medio", objectives: ["Diferenciar compreensão de interpretação", "Reconhecer extrapolação, redução e contradição", "Identificar pressupostos e tipos de texto"], order: 1 }] },
      { slug: "significacao-das-palavras", name: "Significação das palavras: sinônimos, antônimos, homônimos e parônimos", order: 2, lessons: [{ slug: "sinonimos-antonimos-homonimos-e-paronimos", title: "Sinônimos, antônimos, homônimos e parônimos", disciplineSlug: "lingua-portuguesa", moduleSlug: "significacao-das-palavras", theme: "Sentido das palavras e parônimos mais cobrados", estimatedMinutes: 20, difficulty: "facil", objectives: ["Distinguir homônimos de parônimos", "Dominar os parônimos mais cobrados", "Reconhecer sentido denotativo e conotativo"], order: 1 }] },
      { slug: "pontuacao-sequencia", name: "Pontuação e sequência lógica de frases e parágrafos", order: 3, lessons: [{ slug: "pontuacao-e-sequencia-logica", title: "Pontuação e sequência lógica", disciplineSlug: "lingua-portuguesa", moduleSlug: "pontuacao-sequencia", theme: "Vírgula obrigatória e proibida, outros sinais e ordenação de frases", estimatedMinutes: 25, difficulty: "medio", objectives: ["Aplicar as regras da vírgula", "Usar ponto e vírgula, dois-pontos e travessão", "Ordenar frases e parágrafos pela lógica"], order: 1 }] },
      { slug: "ortografia-acentuacao", name: "Ortografia oficial e acentuação gráfica", order: 4, lessons: [{ slug: "ortografia-e-acentuacao-grafica", title: "Ortografia e acentuação gráfica", disciplineSlug: "lingua-portuguesa", moduleSlug: "ortografia-acentuacao", theme: "Regras de acentuação, Acordo Ortográfico e dúvidas frequentes", estimatedMinutes: 25, difficulty: "facil", objectives: ["Aplicar as regras de acentuação", "Conhecer as mudanças do Acordo Ortográfico", "Usar os porquês, mal/mau e há/a"], order: 1 }] },
      { slug: "classes-de-palavras", name: "Classes de palavras", order: 5, lessons: [{ slug: "as-dez-classes-de-palavras", title: "As dez classes de palavras", disciplineSlug: "lingua-portuguesa", moduleSlug: "classes-de-palavras", theme: "Classes variáveis e invariáveis e mudança de classe", estimatedMinutes: 20, difficulty: "facil", objectives: ["Reconhecer as dez classes de palavras", "Identificar a mudança de classe", "Analisar os usos do que e do se"], order: 1 }] },
      { slug: "concordancia", name: "Concordância nominal e verbal", order: 6, lessons: [{ slug: "concordancia-verbal-e-nominal", title: "Concordância verbal e nominal", disciplineSlug: "lingua-portuguesa", moduleSlug: "concordancia", theme: "Casos especiais mais cobrados em prova", estimatedMinutes: 25, difficulty: "medio", objectives: ["Aplicar a concordância com verbos impessoais", "Diferenciar voz passiva sintética de sujeito indeterminado", "Concordar anexo, obrigado, meio e é proibido"], order: 1 }] },
      { slug: "regencia", name: "Regência nominal e verbal", order: 7, lessons: [{ slug: "regencia-nominal-verbal-e-crase", title: "Regência nominal, verbal e crase", disciplineSlug: "lingua-portuguesa", moduleSlug: "regencia", theme: "Verbos de regência cobrada e regras da crase", estimatedMinutes: 30, difficulty: "medio", objectives: ["Aplicar a regência dos verbos mais cobrados", "Usar o teste do masculino na crase", "Reconhecer crase proibida e facultativa"], order: 1 }] },
      { slug: "verbos-vozes", name: "Verbos regulares, irregulares e anômalos. Vozes verbais", order: 8, lessons: [{ slug: "verbos-e-vozes-verbais", title: "Verbos e vozes verbais", disciplineSlug: "lingua-portuguesa", moduleSlug: "verbos-vozes", theme: "Regulares, irregulares, anômalos e transposição de vozes", estimatedMinutes: 25, difficulty: "medio", objectives: ["Classificar verbos regulares, irregulares e anômalos", "Conjugar verbos derivados", "Transpor da voz ativa para a passiva"], order: 1 }] },
      { slug: "pronomes", name: "Emprego dos pronomes", order: 9, lessons: [{ slug: "emprego-dos-pronomes", title: "Emprego dos pronomes", disciplineSlug: "lingua-portuguesa", moduleSlug: "pronomes", theme: "Retos e oblíquos, colocação, demonstrativos e relativos", estimatedMinutes: 25, difficulty: "medio", objectives: ["Usar pronomes retos e oblíquos", "Aplicar próclise, mesóclise e ênclise", "Usar demonstrativos e relativos"], order: 1 }] },
      { slug: "sintaxe", name: "Sintaxe: termos essenciais, integrantes e acessórios da oração", order: 10, lessons: [{ slug: "termos-da-oracao", title: "Termos da oração", disciplineSlug: "lingua-portuguesa", moduleSlug: "sintaxe", theme: "Termos essenciais, integrantes e acessórios", estimatedMinutes: 30, difficulty: "dificil", objectives: ["Identificar sujeito e predicado", "Distinguir objetos e complemento nominal", "Reconhecer adjuntos, aposto e vocativo"], order: 1 }] },
      { slug: "coesao-coerencia", name: "Coesão e coerência textual", order: 11, lessons: [{ slug: "coesao-e-coerencia-textual", title: "Coesão e coerência textual", disciplineSlug: "lingua-portuguesa", moduleSlug: "coesao-coerencia", theme: "Referenciação e sentido dos conectivos", estimatedMinutes: 25, difficulty: "medio", objectives: ["Reconhecer anáfora e catáfora", "Classificar conectivos pelo sentido", "Identificar incoerências"], order: 1 }] },
      { slug: "redacao-textos-oficiais", name: "Redação e reescrita de comunicados, ofícios e registros operacionais", order: 12, lessons: [{ slug: "redacao-oficial-e-reescrita", title: "Redação oficial e reescrita", disciplineSlug: "lingua-portuguesa", moduleSlug: "redacao-textos-oficiais", theme: "Manual de Redação, padrão ofício, tratamento e fechos", estimatedMinutes: 25, difficulty: "medio", objectives: ["Conhecer os atributos da redação oficial", "Usar pronomes de tratamento e fechos", "Avaliar reescritas de frases"], order: 1 }] },
    ],
  },
  {
    slug: "raciocinio-logico-quantitativo",
    name: "Raciocínio Lógico Quantitativo",
    description: "10 questões na prova — peso 1,00.",
    modules: [
      { slug: "estruturas-logicas-argumentacao", name: "Estruturas lógicas e lógica de argumentação", order: 1, lessons: [{ slug: "proposicoes-conectivos-e-negacoes", title: "Proposições, conectivos e negações", disciplineSlug: "raciocinio-logico-quantitativo", moduleSlug: "estruturas-logicas-argumentacao", theme: "Tabela-verdade, De Morgan, condicional e quantificadores", estimatedMinutes: 30, difficulty: "medio", objectives: ["Julgar proposições com e, ou, se... então", "Negar proposições compostas e quantificadas", "Reconhecer a contrapositiva"], order: 1 }] },
      { slug: "diagramas-logicos", name: "Diagramas lógicos", order: 2, lessons: [{ slug: "diagramas-logicos-e-conjuntos", title: "Diagramas lógicos e conjuntos", disciplineSlug: "raciocinio-logico-quantitativo", moduleSlug: "diagramas-logicos", theme: "Todo, algum, nenhum e contagem com interseção", estimatedMinutes: 25, difficulty: "medio", objectives: ["Representar quantificadores em diagramas", "Testar conclusões válidas", "Resolver problemas com interseção"], order: 1 }] },
      { slug: "aritmetica", name: "Aritmética", order: 3, lessons: [{ slug: "porcentagem-razao-proporcao-e-regra-de-tres", title: "Porcentagem, razão, proporção e regra de três", disciplineSlug: "raciocinio-logico-quantitativo", moduleSlug: "aritmetica", theme: "Porcentagem, proporção, regra de três, MMC, MDC e juros simples", estimatedMinutes: 35, difficulty: "medio", objectives: ["Calcular porcentagens e variações sucessivas", "Resolver regra de três direta e inversa", "Aplicar MMC, MDC e juros simples"], order: 1 }] },
      { slug: "algebra-basica", name: "Álgebra básica", order: 4, lessons: [{ slug: "equacoes-e-sistemas", title: "Equações e sistemas", disciplineSlug: "raciocinio-logico-quantitativo", moduleSlug: "algebra-basica", theme: "Equações do 1º e 2º graus e sistemas", estimatedMinutes: 30, difficulty: "medio", objectives: ["Traduzir problemas em equações", "Resolver sistemas de equações", "Resolver equações do 2º grau"], order: 1 }] },
      { slug: "geometria-basica", name: "Geometria básica", order: 5, lessons: [{ slug: "perimetros-areas-e-volumes", title: "Perímetros, áreas e volumes", disciplineSlug: "raciocinio-logico-quantitativo", moduleSlug: "geometria-basica", theme: "Figuras planas, sólidos, ângulos e Pitágoras", estimatedMinutes: 25, difficulty: "facil", objectives: ["Calcular perímetros e áreas", "Calcular volumes e converter em litros", "Aplicar o Teorema de Pitágoras"], order: 1 }] },
    ],
  },
  {
    slug: "nocoes-de-administracao",
    name: "Noções de Administração",
    description: "35 questões na prova — peso 1,00.",
    modules: [
      { slug: "aspectos-gerais-administracao", name: "Aspectos gerais da Administração e organizações como sistemas abertos", order: 1, lessons: [{ slug: "administracao-e-organizacoes-como-sistemas", title: "Administração e organizações como sistemas abertos", disciplineSlug: "nocoes-de-administracao", moduleSlug: "aspectos-gerais-administracao", theme: "Conceitos, teorias e características dos sistemas abertos", estimatedMinutes: 25, difficulty: "medio", objectives: ["Definir Administração e organização", "Associar teorias a seus focos", "Explicar as características dos sistemas abertos"], order: 1 }] },
      { slug: "funcoes-administrativas", name: "Funções administrativas: planejamento, organização, direção, coordenação e controle", order: 2, lessons: [{ slug: "o-ciclo-administrativo", title: "O ciclo administrativo (PODC)", disciplineSlug: "nocoes-de-administracao", moduleSlug: "funcoes-administrativas", theme: "Planejamento, organização, direção e controle", estimatedMinutes: 20, difficulty: "facil", objectives: ["Definir as quatro funções administrativas", "Diferenciar planejamento estratégico, tático e operacional", "Distinguir eficiência, eficácia e efetividade"], order: 1 }] },
      { slug: "motivacao-comunicacao-lideranca", name: "Motivação, comunicação e liderança", order: 3, lessons: [{ slug: "motivacao-lideranca-e-comunicacao", title: "Motivação, liderança e comunicação", disciplineSlug: "nocoes-de-administracao", moduleSlug: "motivacao-comunicacao-lideranca", theme: "Maslow, Herzberg, estilos de liderança e processo de comunicação", estimatedMinutes: 25, difficulty: "medio", objectives: ["Aplicar as teorias de Maslow, Herzberg e McGregor", "Reconhecer estilos de liderança e fontes de poder", "Identificar os elementos do processo de comunicação"], order: 1 }] },
      { slug: "grupos-trabalho-em-equipe", name: "Eficiência de grupos e trabalho em equipe", order: 4, lessons: [{ slug: "grupos-e-trabalho-em-equipe", title: "Grupos e trabalho em equipe", disciplineSlug: "nocoes-de-administracao", moduleSlug: "grupos-trabalho-em-equipe", theme: "Grupo e equipe, etapas de Tuckman e conflitos", estimatedMinutes: 20, difficulty: "facil", objectives: ["Diferenciar grupo de equipe", "Ordenar as etapas de formação", "Reconhecer formas de lidar com conflitos"], order: 1 }] },
      { slug: "autoridade-delegacao", name: "Responsabilidade, coordenação, autoridade, poder e delegação", order: 5, lessons: [{ slug: "autoridade-poder-e-delegacao", title: "Autoridade, poder e delegação", disciplineSlug: "nocoes-de-administracao", moduleSlug: "autoridade-delegacao", theme: "Responsabilidade, coordenação, autoridade, poder e delegação", estimatedMinutes: 25, difficulty: "medio", objectives: ["Diferenciar autoridade, poder e responsabilidade", "Entender o que a delegação transfere", "Comparar centralização e descentralização"], order: 1 }] },
      { slug: "qualidade-em-servicos", name: "Qualidade na prestação de serviços", order: 6, lessons: [{ slug: "qualidade-na-prestacao-de-servicos", title: "Qualidade na prestação de serviços", disciplineSlug: "nocoes-de-administracao", moduleSlug: "qualidade-em-servicos", theme: "Características dos serviços, SERVQUAL e ferramentas da qualidade", estimatedMinutes: 25, difficulty: "medio", objectives: ["Reconhecer as características dos serviços", "Conhecer as dimensões da qualidade", "Aplicar PDCA, Ishikawa e Pareto"], order: 1 }] },
      { slug: "atendimento-ao-publico", name: "Noções de atendimento ao público", order: 7, lessons: [{ slug: "nocoes-de-atendimento-ao-publico", title: "Noções de atendimento ao público", disciplineSlug: "nocoes-de-administracao", moduleSlug: "atendimento-ao-publico", theme: "Princípios, comunicação, situações difíceis e direitos do usuário", estimatedMinutes: 20, difficulty: "facil", objectives: ["Aplicar os princípios do bom atendimento", "Agir em situações difíceis", "Conhecer prioridades e direitos do usuário"], order: 1 }] },
      { slug: "documentacao-e-arquivo", name: "Noções de documentação e arquivo", order: 8, lessons: [{ slug: "gestao-de-documentos-e-arquivo", title: "Gestão de documentos e arquivo", disciplineSlug: "nocoes-de-administracao", moduleSlug: "documentacao-e-arquivo", theme: "Três idades, tabela de temporalidade, protocolo e métodos de arquivamento", estimatedMinutes: 25, difficulty: "medio", objectives: ["Explicar a teoria das três idades", "Entender a tabela de temporalidade e a destinação final", "Conhecer as atividades do protocolo e os métodos de arquivamento"], order: 1 }] },
    ],
  },
];

export function getDisciplineBySlug(slug: string): Discipline | undefined {
  return disciplines.find((d) => d.slug === slug);
}

export function getAllModulesCount(): number {
  return disciplines.reduce((total, d) => total + d.modules.length, 0);
}

export interface FlatLesson extends LessonMeta {
  disciplineName: string;
  moduleName: string;
}

export function getAllLessons(): FlatLesson[] {
  return disciplines.flatMap((d) =>
    d.modules.flatMap((m) =>
      m.lessons.map((l) => ({ ...l, disciplineName: d.name, moduleName: m.name }))
    )
  );
}

export function getAdjacentLessons(currentSlug: string): {
  previous: FlatLesson | null;
  next: FlatLesson | null;
} {
  const all = getAllLessons();
  const index = all.findIndex((l) => l.slug === currentSlug);
  if (index === -1) return { previous: null, next: null };

  return {
    previous: index > 0 ? all[index - 1]! : null,
    next: index < all.length - 1 ? all[index + 1]! : null,
  };
}
