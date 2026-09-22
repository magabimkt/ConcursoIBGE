import type { Difficulty, Flashcard } from "@/types";

/**
 * Flashcards de Noções de Administração.
 * Formato: [assunto, frente (conceito), verso (definição), dificuldade]
 * Adicione novos cartões sempre no FINAL da lista, para não mudar os
 * identificadores dos cartões que você já revisou.
 */
const cards: [string, string, string, Difficulty][] = [
  // Aspectos gerais e organizações como sistemas abertos
  ["Aspectos gerais da Administração", "Administração", "Processo de planejar, organizar, dirigir e controlar recursos para alcançar objetivos.", "facil"],
  ["Aspectos gerais da Administração", "Eficiência", "Uso correto dos recursos. Foco nos meios: fazer certo as coisas.", "facil"],
  ["Aspectos gerais da Administração", "Eficácia", "Alcance dos objetivos. Foco nos resultados: fazer as coisas certas.", "facil"],
  ["Aspectos gerais da Administração", "Efetividade", "Impacto real e duradouro gerado na sociedade ou no público atendido.", "medio"],
  ["Aspectos gerais da Administração", "Sistema aberto", "Organização que troca energia, informação e recursos com o ambiente.", "facil"],
  ["Aspectos gerais da Administração", "Entradas (insumos)", "Recursos que a organização recebe do ambiente: pessoas, dados, materiais.", "facil"],
  ["Aspectos gerais da Administração", "Retroação (feedback)", "Informação sobre as saídas que volta ao sistema para ajustar o funcionamento.", "medio"],
  ["Aspectos gerais da Administração", "Entropia negativa", "Esforço do sistema aberto para evitar a desorganização e o desgaste.", "dificil"],
  ["Aspectos gerais da Administração", "Homeostase", "Tendência do sistema a manter o equilíbrio interno diante de mudanças.", "medio"],
  ["Aspectos gerais da Administração", "Equifinalidade", "Um mesmo resultado pode ser alcançado por caminhos diferentes.", "dificil"],
  ["Aspectos gerais da Administração", "Sinergia", "O todo produz mais do que a soma das partes trabalhando isoladas.", "medio"],

  // Funções administrativas
  ["Funções administrativas", "Planejamento", "Define objetivos e decide antecipadamente o que fazer e como fazer.", "facil"],
  ["Funções administrativas", "Organização", "Divide o trabalho e distribui tarefas, recursos, autoridade e responsabilidades.", "facil"],
  ["Funções administrativas", "Direção", "Conduz as pessoas: comunicação, motivação e liderança na execução.", "facil"],
  ["Funções administrativas", "Controle", "Compara o realizado com o planejado e corrige os desvios.", "facil"],
  ["Funções administrativas", "Coordenação", "Harmoniza e sincroniza esforços de diferentes pessoas e setores.", "medio"],
  ["Funções administrativas", "Planejamento estratégico", "Nível institucional, longo prazo, envolve a organização inteira.", "medio"],
  ["Funções administrativas", "Planejamento tático", "Nível intermediário, médio prazo, focado em departamentos ou áreas.", "medio"],
  ["Funções administrativas", "Planejamento operacional", "Nível operacional, curto prazo, focado em tarefas e rotinas.", "medio"],
  ["Funções administrativas", "Fayol", "Autor clássico que definiu as funções: prever, organizar, comandar, coordenar e controlar.", "medio"],
  ["Funções administrativas", "Departamentalização", "Agrupamento de atividades em unidades: por função, produto, cliente, região ou processo.", "medio"],

  // Motivação, comunicação e liderança
  ["Motivação, comunicação e liderança", "Pirâmide de Maslow", "Necessidades em hierarquia: fisiológicas, segurança, sociais, estima e autorrealização.", "medio"],
  ["Motivação, comunicação e liderança", "Fatores higiênicos (Herzberg)", "Salário, condições e supervisão: evitam insatisfação, mas não motivam.", "dificil"],
  ["Motivação, comunicação e liderança", "Fatores motivacionais (Herzberg)", "Reconhecimento, responsabilidade e crescimento: geram satisfação.", "dificil"],
  ["Motivação, comunicação e liderança", "Teoria X (McGregor)", "Visão de que as pessoas evitam o trabalho e precisam ser controladas.", "medio"],
  ["Motivação, comunicação e liderança", "Teoria Y (McGregor)", "Visão de que as pessoas gostam de trabalhar e buscam responsabilidade.", "medio"],
  ["Motivação, comunicação e liderança", "Liderança autocrática", "O líder decide sozinho e impõe as ordens ao grupo.", "facil"],
  ["Motivação, comunicação e liderança", "Liderança democrática", "O líder conduz e orienta, mas o grupo participa das decisões.", "facil"],
  ["Motivação, comunicação e liderança", "Liderança liberal (laissez-faire)", "O líder quase não interfere; o grupo decide com total liberdade.", "facil"],
  ["Motivação, comunicação e liderança", "Ruído na comunicação", "Qualquer interferência que distorce a mensagem entre emissor e receptor.", "facil"],
  ["Motivação, comunicação e liderança", "Comunicação formal", "Segue os canais oficiais e a hierarquia da organização.", "facil"],

  // Grupos e equipes
  ["Grupos e trabalho em equipe", "Grupo x equipe", "Na equipe há objetivo comum, habilidades complementares e responsabilidade mútua.", "medio"],
  ["Grupos e trabalho em equipe", "Etapas de Tuckman", "Formação, conflito (tormenta), normatização e desempenho.", "dificil"],

  // Autoridade, poder e delegação
  ["Autoridade, poder e delegação", "Autoridade", "Direito formal, ligado ao cargo, de dar ordens e tomar decisões.", "facil"],
  ["Autoridade, poder e delegação", "Poder", "Capacidade de influenciar o comportamento de outras pessoas.", "facil"],
  ["Autoridade, poder e delegação", "Delegação", "Transferência de autoridade para um subordinado; a responsabilidade final não se transfere.", "medio"],
  ["Autoridade, poder e delegação", "Poder de referência", "Influência baseada na admiração e identificação com a pessoa.", "dificil"],
  ["Autoridade, poder e delegação", "Poder de competência (perícia)", "Influência baseada no conhecimento técnico ou experiência.", "medio"],
  ["Autoridade, poder e delegação", "Centralização", "Decisões concentradas no topo da hierarquia.", "facil"],

  // Qualidade e atendimento
  ["Qualidade na prestação de serviços", "Intangibilidade", "Serviço não pode ser tocado nem estocado antes de ser prestado.", "medio"],
  ["Qualidade na prestação de serviços", "Inseparabilidade", "Produção e consumo do serviço acontecem ao mesmo tempo.", "medio"],
  ["Qualidade na prestação de serviços", "Perecibilidade", "Serviço não pode ser guardado para uso futuro.", "medio"],
  ["Qualidade na prestação de serviços", "Variabilidade", "A qualidade do serviço varia conforme quem presta, quando e onde.", "medio"],
  ["Qualidade na prestação de serviços", "Ciclo PDCA", "Planejar, executar (Do), verificar (Check) e agir corretivamente (Act).", "medio"],
  ["Atendimento ao público", "Presteza", "Atender com rapidez e disposição, sem demora desnecessária.", "facil"],
  ["Atendimento ao público", "Cortesia", "Tratar o cidadão com educação, respeito e atenção.", "facil"],
  ["Atendimento ao público", "Objetividade no atendimento", "Informar de forma clara e direta o que o cidadão precisa.", "facil"],

  // Documentação e arquivo
  ["Documentação e arquivo", "Teoria das três idades", "Arquivo corrente, intermediário e permanente.", "facil"],
  ["Documentação e arquivo", "Arquivo corrente", "Documentos em uso frequente, consultados no dia a dia do setor.", "facil"],
  ["Documentação e arquivo", "Arquivo intermediário", "Documentos pouco consultados que aguardam eliminação ou guarda permanente.", "medio"],
  ["Documentação e arquivo", "Arquivo permanente", "Documentos de valor histórico, probatório ou informativo; guardados para sempre.", "medio"],
  ["Documentação e arquivo", "Tabela de temporalidade", "Instrumento que define prazos de guarda e a destinação final dos documentos.", "medio"],
  ["Documentação e arquivo", "Princípio da proveniência", "Documentos de um mesmo produtor não devem ser misturados com os de outro.", "dificil"],
  ["Documentação e arquivo", "Protocolo", "Recebe, registra, distribui, controla a tramitação e expede documentos.", "facil"],
  ["Documentação e arquivo", "Método alfabético", "Arquivamento pelo nome de pessoas ou instituições.", "facil"],
  ["Documentação e arquivo", "Método dígito-terminal", "Numérico: lê-se o número pelos dígitos finais, em grupos.", "dificil"],
  ["Documentação e arquivo", "Valor primário", "Valor administrativo do documento para quem o produziu.", "medio"],
  ["Documentação e arquivo", "Valor secundário", "Valor histórico ou de pesquisa, para além do uso administrativo.", "medio"],
];

export const nocoesDeAdministracaoFlashcards: Flashcard[] = cards.map(
  ([subject, front, back, difficulty], index) => ({
    id: `adm-fc-${index + 1}`,
    disciplineSlug: "nocoes-de-administracao",
    subject,
    front,
    back,
    difficulty,
  })
);
