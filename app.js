const examDate = new Date("2026-09-27T00:00:00-03:00");
const storageKey = "ibgeAcaPatos";

const disciplines = [
  { id: "portugues", name: "Língua Portuguesa", target: 15, weight: 25 },
  { id: "logico", name: "Raciocínio Lógico", target: 10, weight: 15 },
  { id: "administracao", name: "Noções de Administração", target: 35, weight: 60 }
];

const examChecklistItems = [
  "Pagamento confirmado",
  "Inscrição deferida",
  "Cartão de convocação",
  "Local de prova",
  "Documento",
  "Caneta preta",
  "Revisão final"
];

const studyTasks = [
  "Administração: funções administrativas e organização",
  "Português: interpretação e coesão textual",
  "Raciocínio: estruturas lógicas e diagramas",
  "Resolver 20 questões autorais",
  "Revisar erros das últimas 24h",
  "Revisar conteúdo de 7 dias atrás",
  "Revisar conteúdo de 15 dias atrás",
  "Atualizar resumo de pontos fracos"
];

const strategyCards = [
  {
    title: "Pontuação inteligente",
    text: "Administração representa a maior parte da prova e também é o primeiro critério de desempate. A meta prática é buscar 30+ acertos nela, sem abandonar Português."
  },
  {
    title: "Perfil de cobrança",
    text: "Treine questões de comando direto, conceitos aplicados à rotina administrativa, interpretação literal cuidadosa e alternativas com palavras absolutas, como sempre, nunca e apenas."
  },
  {
    title: "Rotina para ranking",
    text: "Estude teoria curta, faça questões no mesmo dia, registre erro por assunto e revise em 24h, 7 dias e 15 dias. A aprovação vem da repetição corrigida."
  }
];

const lessons = [
  {
    discipline: "Língua Portuguesa",
    topic: "Compreensão e interpretação de texto",
    explanation: "Interpretar é localizar informações explícitas, inferir ideias implícitas e perceber a intenção do texto. Em questões de concurso, leia o comando antes, marque palavras de oposição e confirme cada alternativa no texto.",
    example: "Se um comunicado diz que o atendimento foi transferido por manutenção, a causa é a manutenção e a consequência é a transferência.",
    summary: "Procure ideia central, relações de causa, oposição, finalidade e conclusão."
  },
  {
    discipline: "Língua Portuguesa",
    topic: "Sinônimos, antônimos, homônimos e parônimos",
    explanation: "Sinônimos têm sentido semelhante, antônimos sentido oposto, homônimos têm forma igual ou parecida com sentido diferente, e parônimos são palavras semelhantes que geram confusão.",
    example: "Ratificar é confirmar; retificar é corrigir. Eminente é importante; iminente é próximo de acontecer.",
    summary: "Observe o contexto antes de trocar uma palavra por outra."
  },
  {
    discipline: "Língua Portuguesa",
    topic: "Pontuação",
    explanation: "A pontuação organiza a leitura e marca relações sintáticas. A vírgula separa termos deslocados, enumerações e orações explicativas, mas não deve separar sujeito e verbo.",
    example: "No posto de coleta, os candidatos apresentaram documentos. A expressão inicial está deslocada e recebe vírgula.",
    summary: "Pergunte qual função o termo exerce antes de pontuar."
  },
  {
    discipline: "Língua Portuguesa",
    topic: "Estrutura e sequência lógica",
    explanation: "Frases e parágrafos precisam obedecer progressão: apresentação do tema, desenvolvimento e fechamento. Conectivos ajudam a indicar sequência, explicação, contraste e conclusão.",
    example: "Primeiro registra-se a demanda; depois confere-se o documento; por fim, arquiva-se o comprovante.",
    summary: "Ordem lógica evita contradição e repetição desnecessária."
  },
  {
    discipline: "Língua Portuguesa",
    topic: "Ortografia oficial e acentuação",
    explanation: "A ortografia cobra grafia correta, uso de hífen e emprego de letras. A acentuação depende da tonicidade e de regras como oxítonas, paroxítonas, proparoxítonas e hiatos.",
    example: "Público é proparoxítona e toda proparoxítona é acentuada. Assembleia não tem acento pelo acordo ortográfico.",
    summary: "Classifique a sílaba tônica antes de aplicar a regra."
  },
  {
    discipline: "Língua Portuguesa",
    topic: "Classes de palavras, pronomes e verbos",
    explanation: "Substantivos nomeiam, adjetivos caracterizam, verbos indicam ação, estado ou fenômeno, e pronomes substituem ou acompanham nomes. Verbos regulares seguem paradigma; irregulares mudam radical ou terminação; anômalos têm alterações profundas.",
    example: "Ser e ir são anômalos. Eu fui pode pertencer a ambos, e o contexto define o sentido.",
    summary: "Identifique a função da palavra na frase, não apenas sua forma isolada."
  },
  {
    discipline: "Língua Portuguesa",
    topic: "Concordância, regência, vozes e sintaxe",
    explanation: "Concordância ajusta verbo e nome aos seus termos. Regência trata das preposições exigidas. Voz ativa destaca quem pratica a ação; passiva destaca quem sofre. Sintaxe analisa as relações entre sujeito, predicado e complementos.",
    example: "Os documentos foram conferidos pela equipe. O sujeito sofre a ação, então há voz passiva.",
    summary: "Ache o núcleo do sujeito e o verbo principal antes de responder."
  },
  {
    discipline: "Língua Portuguesa",
    topic: "Coesão, coerência e redação oficial operacional",
    explanation: "Coesão liga partes do texto; coerência garante sentido global. Comunicados, ofícios e registros operacionais pedem clareza, objetividade, impessoalidade e informação verificável.",
    example: "Em vez de 'deu problema no sistema', prefira 'o sistema ficou indisponível das 9h às 10h'.",
    summary: "Escreva de modo claro, verificável e adequado à finalidade administrativa."
  },
  {
    discipline: "Noções de Administração",
    topic: "Aspectos gerais e sistemas abertos",
    explanation: "Administração é o processo de planejar, organizar, dirigir, coordenar e controlar recursos para alcançar objetivos. Organizações são sistemas abertos porque recebem insumos do ambiente e devolvem produtos ou serviços.",
    example: "Um posto do IBGE recebe pessoas, normas, documentos e tecnologia; entrega atendimento, registros e suporte à operação censitária.",
    summary: "Toda organização depende do ambiente e precisa se adaptar a ele."
  },
  {
    discipline: "Noções de Administração",
    topic: "Planejamento, organização, direção, coordenação e controle",
    explanation: "Planejar define objetivos; organizar distribui recursos; dirigir orienta pessoas; coordenar integra esforços; controlar compara resultado com o padrão esperado.",
    example: "Definir escala é planejamento; distribuir tarefas é organização; acompanhar execução é controle.",
    summary: "As funções administrativas se complementam no ciclo de gestão."
  },
  {
    discipline: "Noções de Administração",
    topic: "Motivação, comunicação e liderança",
    explanation: "Motivação envolve fatores que estimulam desempenho. Comunicação precisa de emissor, mensagem, canal, receptor e feedback. Liderança influencia pessoas para alcançar objetivos.",
    example: "Uma orientação clara reduz retrabalho quando inclui o que fazer, prazo, padrão esperado e canal para dúvidas.",
    summary: "Boa liderança combina direção, escuta e acompanhamento."
  },
  {
    discipline: "Noções de Administração",
    topic: "Grupos, indivíduo e trabalho em equipe",
    explanation: "Grupos eficientes têm objetivo claro, papéis definidos, confiança, comunicação e responsabilidade compartilhada. O indivíduo contribui com competências, atitudes e capacidade de cooperação.",
    example: "Uma equipe de atendimento funciona melhor quando recepção, conferência e arquivo têm fluxos combinados.",
    summary: "Equipe não é só reunião de pessoas; é coordenação orientada por objetivo."
  },
  {
    discipline: "Noções de Administração",
    topic: "Responsabilidade, autoridade, poder e delegação",
    explanation: "Responsabilidade é dever de responder por uma tarefa. Autoridade é o direito formal de decidir. Poder é capacidade de influenciar. Delegação transfere execução e autoridade compatível, mas não elimina acompanhamento.",
    example: "Delegar a conferência de fichas exige explicar padrão, prazo e forma de reportar divergências.",
    summary: "Delegar bem inclui clareza, autonomia proporcional e controle."
  },
  {
    discipline: "Noções de Administração",
    topic: "Qualidade, atendimento, documentação e arquivo",
    explanation: "Qualidade no serviço público envolve cordialidade, precisão, prazo, acessibilidade e solução adequada. Documentação e arquivo garantem rastreabilidade, preservação e consulta eficiente.",
    example: "Protocolar um documento com data, assunto e responsável facilita localização e prestação de contas.",
    summary: "Atendimento e arquivo são partes centrais da confiança administrativa."
  },
  {
    discipline: "Raciocínio Lógico",
    topic: "Estruturas lógicas e argumentação",
    explanation: "Proposições podem ser verdadeiras ou falsas. Conectivos como e, ou, se... então e não alteram o valor lógico. Argumento válido é aquele em que a conclusão decorre das premissas.",
    example: "Se todo servidor treinado atende melhor e Ana foi treinada, então Ana tende a atender melhor dentro dessa regra.",
    summary: "Separe premissas, conectivos e conclusão."
  },
  {
    discipline: "Raciocínio Lógico",
    topic: "Diagramas lógicos",
    explanation: "Diagramas representam relações entre conjuntos: inclusão, interseção e exclusão. Eles ajudam em questões com todo, algum e nenhum.",
    example: "Todo ACA é colaborador do processo, mas nem todo colaborador é ACA. O conjunto ACA fica dentro do conjunto colaboradores.",
    summary: "Transforme frases em conjuntos antes de concluir."
  },
  {
    discipline: "Raciocínio Lógico",
    topic: "Aritmética, álgebra e geometria básicas",
    explanation: "Aritmética usa operações, porcentagem, razão e proporção. Álgebra trabalha incógnitas e equações. Geometria básica envolve perímetro, área, ângulos e figuras planas.",
    example: "Se 35 de 60 questões são de Administração, isso representa 35/60 = 58,33% da prova.",
    summary: "Monte a expressão com calma e confira unidade, porcentagem ou medida."
  }
];

const deepDives = {
  "Compreensão e interpretação de texto": {
    focus: "A cobrança costuma exigir leitura precisa: ideia central, informação explícita, inferência moderada, reescrita compatível e relação lógica no próprio texto. O erro comum é responder pelo que parece verdadeiro fora do texto.",
    traps: "Desconfie de alternativas que ampliam o sentido, restringem demais, trocam causa por consequência ou usam palavras absolutas. Em texto administrativo, a resposta correta tende a ser objetiva e fiel.",
    training: "Faça três passadas: comando, texto e alternativas. Elimine cada alternativa dizendo o motivo: extrapolação, contradição, redução indevida ou informação ausente."
  },
  "Sinônimos, antônimos, homônimos e parônimos": {
    focus: "O foco é vocabulário em contexto. Não basta decorar pares; é preciso perceber o sentido exato exigido pela frase.",
    traps: "Ratificar/retificar, iminente/eminente, discrição/descrição, deferir/diferir, mandado/mandato e seção/sessão/cessão são pares muito rentáveis.",
    training: "Monte uma lista de parônimos e escreva uma frase administrativa para cada palavra. Isso fixa uso, não só definição."
  },
  "Pontuação": {
    focus: "Priorize vírgula: termos deslocados, aposto, vocativo, enumeração, orações explicativas e conectivos deslocados. A regra mais lucrativa é não separar sujeito de verbo nem verbo de complemento direto.",
    traps: "Alternativas erradas costumam inserir vírgula entre sujeito e predicado ou remover vírgula de expressão deslocada no início da frase.",
    training: "Antes de marcar, encontre sujeito, verbo e complemento. Só depois avalie os termos acessórios."
  },
  "Estrutura e sequência lógica": {
    focus: "Questões desse tipo pedem progressão textual: apresentação, desenvolvimento, consequência e fechamento. Conectivos indicam o caminho.",
    traps: "Fique atento a frases que começam pela conclusão antes de apresentar a causa, ou que quebram a referência de pronomes como esse, isso, tal e referido.",
    training: "Reordene pequenos comunicados administrativos e justifique por conectivos: primeiro, depois, portanto, entretanto, por fim."
  },
  "Ortografia oficial e acentuação": {
    focus: "Estude regras por grupos: oxítonas, paroxítonas, proparoxítonas, hiatos e ditongos. Em ortografia, priorize palavras de uso administrativo.",
    traps: "A banca explora palavras como exceção, concessão, excesso, análise, usuário, público, relatório e assembleia.",
    training: "Crie cartões com palavra, regra e frase. Errou uma palavra, ela volta para revisão em 24h."
  },
  "Classes de palavras, pronomes e verbos": {
    focus: "A cobrança costuma misturar classe gramatical e função no texto. O mesmo termo pode mudar de classe conforme o uso.",
    traps: "Pronomes relativos exigem antecedente claro. Verbos anômalos, tempos compostos e correlação verbal derrubam quem só decorou nomes.",
    training: "Em cada frase, marque verbo, sujeito, pronomes e referentes. Depois explique por que a palavra exerce aquela função."
  },
  "Concordância, regência, vozes e sintaxe": {
    focus: "É o bloco gramatical mais decisivo. Domine sujeito simples e composto, verbo haver impessoal, verbo fazer indicando tempo, concordância com porcentagem, regência com preposição e transformação de voz ativa/passiva.",
    traps: "Houveram problemas, fazem dias, obedeceu o procedimento e assistiu o relatório são estruturas tentadoras e geralmente erradas no padrão formal.",
    training: "Resolva em ordem: ache o verbo, ache o sujeito, veja se o verbo é impessoal, confira preposição exigida e só então avalie concordância."
  },
  "Coesão, coerência e redação oficial operacional": {
    focus: "Para ACA, redação operacional importa porque o cargo lida com registros, comunicados, documentos e atendimento. Clareza, impessoalidade, objetividade e rastreabilidade são centrais.",
    traps: "Textos vagos, subjetivos, coloquiais ou sem data/responsável são inadequados. A banca pode pedir a versão mais clara, formal e precisa.",
    training: "Transforme frases vagas em registros objetivos: fato, data, local, providência e responsável."
  },
  "Aspectos gerais e sistemas abertos": {
    focus: "Administração é o núcleo da prova. Entenda organização como sistema: entradas, transformação, saídas, feedback e ambiente. O IBGE opera com metas, recursos, pessoas, documentos e atendimento.",
    traps: "Não trate organização como sistema fechado. Afirmações de isolamento total do ambiente tendem a ser falsas.",
    training: "Para cada conceito, crie exemplo em posto de coleta, agência, arquivo, escala, atendimento ou suporte censitário."
  },
  "Planejamento, organização, direção, coordenação e controle": {
    focus: "Saiba diferenciar as funções em casos práticos. Planejamento define objetivos; organização estrutura recursos; direção lidera; coordenação integra; controle mede e corrige.",
    traps: "A banca troca controle por planejamento e organização por direção. Procure o verbo da situação: definir, distribuir, orientar, integrar, comparar.",
    training: "Faça uma tabela com verbos típicos de cada função e resolva casos curtos até reconhecer o padrão sem hesitar."
  },
  "Motivação, comunicação e liderança": {
    focus: "Estude feedback, ruído, canais, liderança autocrática/democrática/liberal, motivação intrínseca/extrínseca e necessidades humanas no trabalho.",
    traps: "Liderança não é igual a cargo formal. Liderança é influência; autoridade é direito formal; poder é capacidade de influenciar.",
    training: "Classifique situações de equipe: problema é comunicação, motivação, liderança, conflito ou falta de coordenação?"
  },
  "Grupos, indivíduo e trabalho em equipe": {
    focus: "Grupo é reunião de pessoas; equipe tem objetivo comum, papéis, cooperação e interdependência. Em atendimento, equipe eficiente reduz erro e retrabalho.",
    traps: "Competição permanente, ausência de papéis e comunicação improvisada não são características de equipe eficiente.",
    training: "Liste sinais de equipe boa e equipe ruim em rotina administrativa. Use isso para eliminar alternativas."
  },
  "Responsabilidade, coordenação, autoridade, poder e delegação": {
    focus: "Delegação exige tarefa clara, autoridade compatível, prazo, padrão esperado e acompanhamento. Responsabilidade final não desaparece.",
    traps: "Delegar não é abandonar. Autoridade não é igual a poder informal. Responsabilidade sem autoridade suficiente gera falha de execução.",
    training: "Em cada caso, pergunte: quem decide, quem executa, quem responde, qual limite e qual controle?"
  },
  "Responsabilidade, autoridade, poder e delegação": {
    focus: "Delegação exige tarefa clara, autoridade compatível, prazo, padrão esperado e acompanhamento. Responsabilidade final não desaparece.",
    traps: "Delegar não é abandonar. Autoridade não é igual a poder informal. Responsabilidade sem autoridade suficiente gera falha de execução.",
    training: "Em cada caso, pergunte: quem decide, quem executa, quem responde, qual limite e qual controle?"
  },
  "Qualidade, atendimento, documentação e arquivo": {
    focus: "Este bloco é muito aderente ao cargo ACA. Domine urbanidade, clareza, registro, protocolo, classificação, temporalidade documental e tipos de arquivo: corrente, intermediário e permanente.",
    traps: "Atendimento rápido mas impreciso não é qualidade. Arquivo sem critério não é organização. Protocolo não é mero carimbo; é rastreabilidade.",
    training: "Simule fluxos: receber documento, conferir, protocolar, encaminhar, arquivar e recuperar informação."
  },
  "Estruturas lógicas e argumentação": {
    focus: "Treine proposições, conectivos, negação e validade. A cobrança tende a explorar equivalências simples e negação de todo, algum, nenhum e condicional.",
    traps: "A negação de todos não é nenhum; é algum não. A negação de se P então Q é P e não Q.",
    training: "Traduza frases para símbolos simples e monte pequenas tabelas-verdade quando houver dúvida."
  },
  "Diagramas lógicos": {
    focus: "Conjuntos resolvem questões com todo, algum, nenhum, pelo menos um e nem todo. Desenhar evita erro verbal.",
    traps: "Algum A é B não significa todo A é B. Nem todo A é B significa que pelo menos um A não é B.",
    training: "Desenhe círculos antes de olhar alternativas. Depois teste cada conclusão no desenho."
  },
  "Aritmética, álgebra e geometria básicas": {
    focus: "Priorize porcentagem, razão, proporção, regra de três, equações simples, perímetro, área e leitura de dados. A conta costuma ser simples; o desafio é montar corretamente.",
    traps: "Cuidado com percentual de percentual, inversão de razão, unidade de medida e área versus perímetro.",
    training: "Faça 10 contas curtas por dia, sempre escrevendo a unidade final. Velocidade vem de repetição."
  }
};

const questions = [
  q("portugues", "Interpretação de texto", "Em um comunicado, lê-se: 'O atendimento presencial será suspenso na sexta-feira para atualização dos sistemas internos'. A informação principal é que:", ["o atendimento remoto será ampliado.", "a suspensão ocorrerá por atualização dos sistemas.", "os sistemas externos serão substituídos.", "a sexta-feira será ponto facultativo.", "o atendimento presencial acabou definitivamente."], 1, "O texto informa uma suspensão pontual e apresenta a causa: atualização dos sistemas internos."),
  q("portugues", "Parônimos", "Assinale a alternativa em que a palavra completa corretamente a frase: 'É necessário _____ os dados antes de enviar o relatório.'", ["ratificar", "retificar", "emergir", "imergir", "deferir"], 1, "Retificar significa corrigir. Ratificar significa confirmar."),
  q("portugues", "Pontuação", "Assinale a frase corretamente pontuada.", ["Os candidatos, devem levar documento.", "No dia da prova, os portões abrirão cedo.", "A equipe conferiu, todos os registros.", "O cartão, de convocação será divulgado.", "Os fiscais orientarão, os candidatos."], 1, "A vírgula marca o adjunto adverbial deslocado no início da frase."),
  q("portugues", "Acentuação", "A palavra acentuada pela mesma regra de 'público' é:", ["café", "também", "lâmpada", "herói", "saúde"], 2, "Público e lâmpada são proparoxítonas, e todas as proparoxítonas são acentuadas."),
  q("portugues", "Concordância", "Assinale a alternativa correta.", ["Fazem dois dias que o sistema voltou.", "Houveram muitos atendimentos.", "Existem documentos pendentes.", "A equipe conferiram os dados.", "Segue anexas as fichas."], 2, "O verbo existir concorda com o sujeito 'documentos pendentes'."),
  q("portugues", "Regência", "A frase correta quanto à regência é:", ["O servidor assistiu o candidato com atenção.", "O candidato chegou no local cedo.", "A equipe obedeceu ao procedimento.", "Preferiu revisar do que descansar.", "Informou os usuários do prazo."], 2, "Obedecer exige preposição: obedecer ao procedimento."),
  q("portugues", "Vozes verbais", "Em 'Os documentos foram arquivados pela equipe', ocorre:", ["voz ativa", "voz passiva analítica", "voz reflexiva", "voz recíproca", "oração sem sujeito"], 1, "A estrutura 'foram arquivados' indica voz passiva analítica."),
  q("portugues", "Coesão", "O conectivo que expressa conclusão é:", ["embora", "portanto", "conforme", "enquanto", "caso"], 1, "Portanto introduz conclusão."),
  q("portugues", "Sintaxe", "Em 'A conferência dos dados terminou cedo', o núcleo do sujeito é:", ["conferência", "dados", "terminou", "cedo", "dos"], 0, "O sujeito é 'A conferência dos dados', cujo núcleo é 'conferência'."),
  q("portugues", "Redação operacional", "Para um registro operacional, a melhor redação é:", ["Teve uma coisa errada lá.", "O atendimento foi estranho.", "O sistema ficou indisponível das 9h às 10h.", "Tudo deu problema.", "Resolveram mais ou menos."], 2, "Registros operacionais devem ser objetivos, verificáveis e precisos."),
  q("administracao", "Funções administrativas", "Definir metas, prazos e recursos necessários corresponde à função de:", ["controle", "planejamento", "direção", "execução informal", "avaliação disciplinar"], 1, "Planejamento define objetivos e meios para alcançá-los."),
  q("administracao", "Organizações como sistemas abertos", "Uma organização é considerada sistema aberto porque:", ["não possui hierarquia.", "atua isolada do ambiente.", "interage com ambiente, entradas e saídas.", "dispensa recursos materiais.", "elimina controle."], 2, "Sistemas abertos recebem insumos do ambiente, transformam e devolvem resultados."),
  q("administracao", "Controle", "Comparar o resultado obtido com o padrão previsto é atividade típica de:", ["organização", "controle", "liderança", "delegação", "motivação"], 1, "Controle mede desempenho e corrige desvios."),
  q("administracao", "Comunicação", "O feedback é importante porque:", ["substitui a mensagem.", "confirma ou ajusta o entendimento.", "elimina o emissor.", "impede ruídos.", "dispensa canal formal."], 1, "Feedback permite verificar se a mensagem foi entendida e ajustar falhas."),
  q("administracao", "Liderança", "Liderança, em sentido administrativo, é a capacidade de:", ["arquivar documentos.", "influenciar pessoas para objetivos comuns.", "evitar delegação.", "centralizar todas as decisões.", "substituir planejamento."], 1, "Liderança envolve influência e orientação para objetivos."),
  q("administracao", "Trabalho em equipe", "Uma equipe eficiente costuma apresentar:", ["papéis indefinidos.", "objetivos claros e cooperação.", "ausência de comunicação.", "competição permanente.", "tarefas sem prioridade."], 1, "Clareza de objetivos e cooperação aumentam a eficiência."),
  q("administracao", "Delegação", "Delegar uma tarefa significa:", ["abandonar o acompanhamento.", "transferir execução com autoridade compatível.", "eliminar responsabilidade final.", "impedir autonomia.", "dispensar padrões."], 1, "Delegação exige autoridade proporcional e acompanhamento."),
  q("administracao", "Atendimento ao público", "No atendimento ao público, qualidade envolve:", ["rapidez sem precisão.", "cordialidade, clareza e solução adequada.", "uso de linguagem confusa.", "ausência de registro.", "tratamento desigual."], 1, "Atendimento de qualidade une respeito, informação clara e encaminhamento correto."),
  q("administracao", "Arquivo", "A principal finalidade do arquivo administrativo é:", ["decorar o ambiente.", "guardar documentos sem critério.", "preservar, organizar e facilitar consulta.", "substituir o protocolo.", "eliminar rastreabilidade."], 2, "Arquivo garante preservação, organização, recuperação e prova documental."),
  q("administracao", "Autoridade e poder", "Autoridade formal é:", ["capacidade informal de persuadir.", "direito reconhecido de decidir no cargo.", "amizade entre colegas.", "ausência de responsabilidade.", "controle externo apenas."], 1, "Autoridade formal decorre do cargo ou norma."),
  q("administracao", "Motivação", "A motivação no trabalho está ligada principalmente a:", ["fatores que impulsionam comportamento e desempenho.", "somente ao salário.", "eliminação de metas.", "ausência de liderança.", "tarefas sem sentido."], 0, "Motivação envolve fatores internos e externos que orientam esforço."),
  q("administracao", "Coordenação", "Coordenação administrativa busca:", ["separar áreas sem integração.", "integrar esforços para evitar conflitos e duplicidades.", "eliminar objetivos.", "dispensar comunicação.", "reduzir controle a zero."], 1, "Coordenar é harmonizar atividades e recursos."),
  q("logico", "Estruturas lógicas", "A negação de 'Todos os documentos foram conferidos' é:", ["Nenhum documento foi conferido.", "Todos os documentos não foram conferidos.", "Algum documento não foi conferido.", "Algum documento foi conferido.", "Os documentos nunca existem."], 2, "A negação de 'todos' é 'algum não'."),
  q("logico", "Argumentação", "Se 'todo relatório revisado é confiável' e 'este relatório foi revisado', conclui-se que:", ["este relatório é confiável.", "nenhum relatório é confiável.", "este relatório não foi revisado.", "todo documento é relatório.", "a conclusão é impossível."], 0, "Pelo encadeamento lógico, o relatório revisado pertence ao conjunto dos confiáveis."),
  q("logico", "Diagramas lógicos", "A frase 'Todo ACA é candidato, mas nem todo candidato é ACA' indica que:", ["os conjuntos são iguais.", "ACA contém candidatos.", "ACA está contido em candidatos.", "não há relação.", "nenhum ACA é candidato."], 2, "O conjunto ACA é subconjunto do conjunto candidatos."),
  q("logico", "Porcentagem", "35 questões de Administração em uma prova de 60 representam aproximadamente:", ["35%", "42%", "50%", "58%", "70%"], 3, "35 dividido por 60 é aproximadamente 0,5833, ou 58%."),
  q("logico", "Álgebra", "Se x + 12 = 30, então x é igual a:", ["12", "18", "30", "42", "6"], 1, "Subtraindo 12 dos dois lados, x = 18."),
  q("logico", "Geometria", "Um retângulo de lados 4 m e 6 m tem área de:", ["10 m²", "12 m²", "20 m²", "24 m²", "48 m²"], 3, "Área do retângulo é base vezes altura: 4 x 6 = 24 m²."),
  q("logico", "Aritmética", "Se um candidato acertou 18 de 60 questões, seu percentual de acerto foi:", ["18%", "25%", "30%", "40%", "60%"], 2, "18/60 = 0,30, ou 30%."),
  q("portugues", "Ortografia", "Assinale a alternativa com grafia correta.", ["exceção", "excessão", "eseção", "exseção", "esceção"], 0, "Exceção é grafada com x e ç."),
  q("portugues", "Pronomes", "Em 'O candidato entregou seus documentos', o pronome 'seus' indica:", ["negação", "posse", "dúvida", "tempo", "modo"], 1, "Seus é pronome possessivo."),
  q("portugues", "Verbos", "Na frase 'A equipe fará a conferência', o verbo está no:", ["pretérito perfeito", "presente", "futuro do presente", "imperativo", "pretérito imperfeito"], 2, "Fará indica ação futura."),
  q("portugues", "Homônimos", "Assinale o uso correto.", ["A seção de arquivo foi organizada.", "A sessão eleitoral fica no armário.", "A cessão de documentos começou às 8h.", "A seção de cinema durou duas horas.", "A sessão de material foi gratuita ao servidor."], 0, "Seção é divisão ou setor. Sessão é reunião ou período; cessão é ato de ceder."),
  q("portugues", "Sequência lógica", "A melhor ordem para um registro operacional é:", ["conclusão, causa, fato, identificação", "identificação, fato, providência, conclusão", "opinião, hipótese, boato, fechamento", "fato, fato, fato, sem data", "assinatura, título, causa, rasura"], 1, "Registros funcionais costumam identificar, relatar o fato, indicar providência e concluir."),
  q("logico", "Conectivos", "A proposição 'João estudou e Maria revisou' será verdadeira quando:", ["ambas as partes forem verdadeiras.", "apenas João estudar.", "apenas Maria revisar.", "as duas forem falsas.", "uma delas for falsa."], 0, "No conectivo 'e', a proposição composta só é verdadeira quando as duas partes são verdadeiras."),
  q("logico", "Sequências", "Na sequência 2, 4, 8, 16, o próximo termo é:", ["18", "20", "24", "30", "32"], 4, "A sequência dobra a cada termo."),
  q("logico", "Razão e proporção", "Se 4 servidores atendem 80 pessoas em certo período, mantendo o ritmo, 2 servidores atenderiam:", ["20", "30", "40", "80", "160"], 2, "Metade dos servidores, no mesmo ritmo e período, atende metade das pessoas."),
  q("logico", "Ângulos", "Um ângulo reto mede:", ["30 graus", "45 graus", "60 graus", "90 graus", "180 graus"], 3, "Ângulo reto mede 90 graus."),
  q("administracao", "Eficiência", "Eficiência está mais relacionada a:", ["usar bem os recursos disponíveis.", "alcançar qualquer resultado sem custo.", "aumentar retrabalho.", "ignorar prazos.", "atuar sem padrão."], 0, "Eficiência é fazer melhor uso dos recursos para produzir resultados."),
  q("administracao", "Eficácia", "Eficácia significa:", ["cumprir objetivos definidos.", "reduzir comunicação.", "usar mais recursos sempre.", "evitar metas.", "centralizar tarefas."], 0, "Eficácia é atingir o objetivo previsto."),
  q("administracao", "Processos", "Um processo administrativo é melhor entendido como:", ["um conjunto ordenado de atividades.", "um documento sem uso.", "uma decisão informal isolada.", "um arquivo morto.", "uma reunião sem pauta."], 0, "Processo é sequência de atividades com finalidade."),
  q("administracao", "Organização formal", "A organização formal caracteriza-se por:", ["relações pessoais espontâneas.", "estrutura definida por normas e cargos.", "ausência de autoridade.", "fluxo sem responsabilidades.", "comunicação apenas informal."], 1, "A organização formal decorre de regras, cargos, hierarquia e atribuições."),
  q("administracao", "Organização informal", "A organização informal surge principalmente de:", ["normas legais.", "relações sociais e afinidades.", "manuais de procedimento.", "organograma oficial.", "portarias de nomeação."], 1, "Ela nasce das interações e relações espontâneas entre pessoas."),
  q("administracao", "Departamentalização", "Agrupar atividades por tipo de trabalho, como atendimento, arquivo e suporte, é exemplo de:", ["controle externo", "departamentalização", "motivação financeira", "comunicação descendente", "poder informal"], 1, "Departamentalizar é agrupar atividades segundo critérios."),
  q("administracao", "Comunicação formal", "Um memorando institucional é exemplo de comunicação:", ["formal", "aleatória", "não verbal", "sem emissor", "sem registro"], 0, "Memorandos seguem canal e formato institucionais."),
  q("administracao", "Ruídos de comunicação", "Em comunicação, ruído é:", ["qualquer interferência na mensagem.", "apenas barulho físico.", "a resposta do receptor.", "a assinatura do emissor.", "a meta do setor."], 0, "Ruído é tudo que prejudica codificação, transmissão ou compreensão."),
  q("administracao", "Comunicação descendente", "A comunicação que parte da chefia para a equipe é chamada de:", ["ascendente", "descendente", "horizontal", "diagonal externa", "informal reversa"], 1, "Descendente flui de níveis superiores para inferiores."),
  q("administracao", "Comunicação ascendente", "Um relatório enviado pela equipe à coordenação é comunicação:", ["descendente", "ascendente", "lateral sem registro", "externa anônima", "não administrativa"], 1, "Ascendente vai dos níveis operacionais para os superiores."),
  q("administracao", "Liderança democrática", "Na liderança democrática, o líder tende a:", ["ouvir a equipe e estimular participação.", "decidir tudo sozinho sempre.", "ausentar-se de todas as decisões.", "ignorar metas.", "evitar feedback."], 0, "A liderança democrática valoriza participação e orientação."),
  q("administracao", "Liderança autocrática", "Um comportamento típico de liderança autocrática é:", ["decisão centralizada.", "participação ampla.", "delegação sem controle.", "ausência de ordens.", "rotação livre de tarefas."], 0, "Na autocrática, decisões ficam concentradas no líder."),
  q("administracao", "Clima organizacional", "Clima organizacional refere-se:", ["à percepção das pessoas sobre o ambiente de trabalho.", "à temperatura da sala.", "ao arquivo físico somente.", "ao salário legal do cargo.", "ao edital de prova."], 0, "Clima é a percepção compartilhada sobre relações, práticas e ambiente."),
  q("administracao", "Cultura organizacional", "Cultura organizacional é composta por:", ["valores, hábitos, crenças e práticas compartilhadas.", "somente móveis e equipamentos.", "apenas metas mensais.", "documentos descartados.", "ausência de normas."], 0, "Cultura reúne padrões compartilhados que orientam comportamento."),
  q("administracao", "Responsabilidade", "Quando alguém assume uma tarefa e deve responder por seu resultado, há:", ["responsabilidade", "omissão", "ruído", "centralização absoluta", "improviso sem padrão"], 0, "Responsabilidade é o dever de responder por atribuições assumidas ou recebidas."),
  q("administracao", "Centralização", "Centralização ocorre quando:", ["decisões ficam concentradas em poucos níveis ou pessoas.", "todos decidem tudo sem coordenação.", "não há chefia.", "a autoridade é sempre externa.", "a equipe atua sem regras."], 0, "Centralizar é concentrar autoridade decisória."),
  q("administracao", "Descentralização", "Descentralizar significa:", ["distribuir autoridade decisória.", "eliminar controle.", "proibir delegação.", "concentrar tudo no topo.", "impedir comunicação."], 0, "Descentralização reparte decisões entre níveis ou unidades."),
  q("administracao", "Qualidade", "Um indicador de qualidade no atendimento é:", ["tempo de resposta ao usuário.", "cor da mesa.", "quantidade de boatos.", "ausência de protocolo.", "número de conversas informais."], 0, "Tempo de resposta pode medir desempenho do serviço."),
  q("administracao", "Usuário do serviço", "Tratar o usuário com urbanidade significa:", ["agir com respeito e cortesia.", "usar linguagem agressiva.", "dificultar informação.", "ignorar prioridade legal.", "evitar escuta."], 0, "Urbanidade envolve respeito, educação e atenção."),
  q("administracao", "Protocolo", "Protocolar um documento serve para:", ["registrar entrada, data e encaminhamento.", "perder o documento.", "impedir consulta.", "substituir o arquivo permanentemente.", "eliminar responsabilidade."], 0, "Protocolo cria rastreabilidade do recebimento e tramitação."),
  q("administracao", "Classificação documental", "Classificar documentos significa:", ["organizá-los conforme assunto, função ou critério definido.", "misturar arquivos.", "descartar sem análise.", "retirar data e origem.", "impedir localização."], 0, "Classificação facilita guarda, busca e gestão documental."),
  q("administracao", "Arquivo corrente", "Arquivo corrente guarda documentos:", ["em uso frequente.", "sem valor algum.", "sempre eliminados.", "históricos apenas.", "fora da instituição."], 0, "Arquivo corrente contém documentos consultados com frequência."),
  q("administracao", "Arquivo intermediário", "Arquivo intermediário reúne documentos:", ["aguardando prazo de guarda e pouco consultados.", "em uso diário intenso.", "sem origem conhecida.", "descartados imediatamente.", "sempre sigilosos por natureza."], 0, "O intermediário conserva documentos com baixa frequência de uso até destinação final."),
  q("administracao", "Arquivo permanente", "Arquivo permanente preserva documentos:", ["com valor histórico, probatório ou informativo duradouro.", "sem qualquer valor.", "a serem destruídos no mesmo dia.", "que não podem ser consultados nunca.", "apenas rascunhos pessoais."], 0, "Documentos permanentes têm valor duradouro."),
  q("administracao", "Ética no atendimento", "No atendimento público, conduta ética exige:", ["impessoalidade, respeito e sigilo quando necessário.", "favorecimento de conhecidos.", "informação incompleta por preferência pessoal.", "exposição indevida de dados.", "tratamento desigual."], 0, "Ética administrativa envolve impessoalidade, respeito e proteção de informações."),
  q("administracao", "Padronização", "A padronização de procedimentos contribui para:", ["reduzir variações e retrabalho.", "aumentar improviso.", "eliminar treinamento.", "criar decisões contraditórias.", "impedir controle."], 0, "Padrões ajudam a manter qualidade e previsibilidade."),
  q("administracao", "Treinamento", "Treinamento de equipe busca:", ["desenvolver conhecimentos, habilidades e atitudes.", "substituir todos os controles.", "evitar aprendizagem.", "aumentar dúvidas operacionais.", "eliminar objetivos."], 0, "Treinamento prepara pessoas para executar melhor suas atribuições."),
  q("administracao", "Fluxo de trabalho", "Um fluxo de trabalho bem definido ajuda a:", ["organizar etapas e responsabilidades.", "ocultar prazos.", "misturar documentos.", "reduzir transparência.", "eliminar coordenação."]
    , 0, "Fluxos claros facilitam execução, controle e orientação.")
];

let state = loadState();
let deferredInstallPrompt = null;
let simQuestions = [];
let simStartedAt = null;
let timerHandle = null;

function q(discipline, topic, text, alternatives, answer, explanation) {
  return { id: `${discipline}-${topic}-${text}`.replace(/\W+/g, "-").toLowerCase(), discipline, topic, text, alternatives, answer, explanation };
}

function loadState() {
  const saved = localStorage.getItem(storageKey);
  const base = saved ? JSON.parse(saved) : {};
  return {
    checks: base.checks || {},
    tasks: base.tasks || {},
    performance: base.performance || {},
    simAnswers: base.simAnswers || {},
    optionOrders: base.optionOrders || {}
  };
}

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(state));
}

function renderCountdown() {
  const today = new Date();
  const diff = Math.ceil((examDate - today) / 86400000);
  document.querySelector("#daysLeft").textContent = Math.max(0, diff);
}

function renderProgress() {
  const container = document.querySelector("#progressCards");
  container.innerHTML = disciplines.map((discipline) => {
    const stats = questionStatsFor(discipline.id);
    const percent = Math.min(100, Math.round((stats.correct / Math.max(1, discipline.target)) * 100));
    return `
      <article class="progress-card">
        <h3>${discipline.name}</h3>
        <p class="muted">${stats.correct} acertos registrados · meta de referência ${discipline.target}</p>
        <div class="bar" aria-label="Progresso em ${discipline.name}"><span style="width:${percent}%"></span></div>
      </article>
    `;
  }).join("");
}

function renderStrategy() {
  const container = document.querySelector("#strategyCards");
  if (!container) return;
  container.innerHTML = strategyCards.map((card) => `
    <article class="strategy-card">
      <h3>${card.title}</h3>
      <p class="muted">${card.text}</p>
    </article>
  `).join("");
}

function renderChecklist(id, items, bucket, summaryId) {
  const container = document.querySelector(id);
  container.innerHTML = items.map((item, index) => `
    <label class="check-item">
      <input type="checkbox" data-bucket="${bucket}" data-index="${index}" ${state[bucket][index] ? "checked" : ""}>
      <span>${item}</span>
    </label>
  `).join("");
  const done = items.filter((_, index) => state[bucket][index]).length;
  document.querySelector(summaryId).textContent = `${done}/${items.length}`;
}

function renderLessons() {
  const select = document.querySelector("#lessonFilter");
  select.innerHTML = ["Todas", ...disciplines.map((item) => item.name)].map((name) => `<option>${name}</option>`).join("");
  select.addEventListener("change", updateLessons);
  updateLessons();
}

function updateLessons() {
  const filter = document.querySelector("#lessonFilter").value;
  const filtered = filter === "Todas" ? lessons : lessons.filter((lesson) => lesson.discipline === filter);
  document.querySelector("#lessonList").innerHTML = filtered.map((lesson) => `
    <article class="lesson-card">
      <div class="lesson-meta">
        <span class="pill">${lesson.discipline}</span>
        <span class="pill">${lesson.topic}</span>
      </div>
      <h3>${lesson.topic}</h3>
      <p>${lesson.explanation}</p>
      ${deepDiveTemplate(lesson.topic)}
      <details>
        <summary>Exemplo e resumo</summary>
        <p><strong>Exemplo:</strong> ${lesson.example}</p>
        <p><strong>Resumo:</strong> ${lesson.summary}</p>
      </details>
    </article>
  `).join("");
}

function deepDiveTemplate(topic) {
  const deep = deepDives[topic];
  if (!deep) return "";
  return `
    <div class="lesson-deep">
      <div><strong>Como costuma cair</strong>${deep.focus}</div>
      <div><strong>Armadilhas</strong>${deep.traps}</div>
      <div><strong>Treino de alto rendimento</strong>${deep.training}</div>
    </div>
  `;
}

function renderQuestionFilters() {
  const disciplineSelect = document.querySelector("#questionDiscipline");
  disciplineSelect.innerHTML = `<option value="todas">Todas as disciplinas</option>${disciplines.map((item) => `<option value="${item.id}">${item.name}</option>`).join("")}`;
  disciplineSelect.addEventListener("change", () => {
    renderTopicFilter();
    renderQuestions();
  });
  document.querySelector("#questionTopic").addEventListener("change", renderQuestions);
  renderTopicFilter();
}

function renderTopicFilter() {
  const discipline = document.querySelector("#questionDiscipline").value;
  const topicSelect = document.querySelector("#questionTopic");
  const scoped = discipline === "todas" ? questions : questions.filter((item) => item.discipline === discipline);
  const topics = [...new Set(scoped.map((item) => item.topic))];
  topicSelect.innerHTML = `<option value="todos">Todos os assuntos</option>${topics.map((topic) => `<option>${topic}</option>`).join("")}`;
}

function renderQuestions() {
  const discipline = document.querySelector("#questionDiscipline").value;
  const topic = document.querySelector("#questionTopic").value;
  const filtered = questions.filter((item) => {
    const disciplineMatch = discipline === "todas" || item.discipline === discipline;
    const topicMatch = topic === "todos" || item.topic === topic;
    return disciplineMatch && topicMatch;
  });
  document.querySelector("#questionList").innerHTML = filtered.map((item) => questionTemplate(item, "practice")).join("");
  renderQuestionStats();
}

function questionTemplate(item, mode) {
  const perf = state.performance[item.id];
  const status = perf ? (perf === "correct" ? "Acertei" : "Errei") : "Sem marcação";
  const order = optionOrderFor(item, mode);
  const answerLetter = String.fromCharCode(65 + order.indexOf(item.answer));
  return `
    <article class="question-card" data-question="${item.id}">
      <div class="lesson-meta">
        <span class="pill">${disciplineName(item.discipline)}</span>
        <span class="pill">${item.topic}</span>
      </div>
      <h3>${item.text}</h3>
      <div class="alternatives">
        ${order.map((originalIndex, index) => `
          <label class="alternative">
            <input type="radio" name="${mode}-${item.id}" value="${originalIndex}">
            <span>${String.fromCharCode(65 + index)}) ${item.alternatives[originalIndex]}</span>
          </label>
        `).join("")}
      </div>
      <div class="question-actions">
        <button class="mark" data-action="showAnswer" data-id="${item.id}">Ver gabarito</button>
        ${mode === "practice" ? `<button class="mark good" data-action="markCorrect" data-id="${item.id}">Acertei</button><button class="mark bad" data-action="markWrong" data-id="${item.id}">Errei</button>` : ""}
        ${mode === "sim" ? `<button class="mark" data-action="saveSimAnswer" data-id="${item.id}">Salvar resposta</button>` : ""}
        <span class="pill">${status}</span>
      </div>
      <div class="feedback" id="feedback-${mode}-${item.id}">
        <strong>Gabarito: ${answerLetter}</strong>
        <p>${item.explanation}</p>
      </div>
    </article>
  `;
}

function optionOrderFor(item, mode) {
  const key = `${mode}:${item.id}`;
  if (!state.optionOrders[key]) {
    state.optionOrders[key] = shuffledIndexes(item.alternatives.length);
    saveState();
  }
  return state.optionOrders[key];
}

function shuffledIndexes(length) {
  const indexes = Array.from({ length }, (_, index) => index);
  for (let index = indexes.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [indexes[index], indexes[swapIndex]] = [indexes[swapIndex], indexes[index]];
  }
  return indexes;
}

function renderQuestionStats() {
  const values = Object.values(state.performance);
  const correct = values.filter((item) => item === "correct").length;
  const wrong = values.filter((item) => item === "wrong").length;
  document.querySelector("#questionStats").textContent = `${correct} acertos · ${wrong} erros`;
}

function questionStatsFor(discipline) {
  return questions.filter((item) => item.discipline === discipline).reduce((acc, item) => {
    if (state.performance[item.id] === "correct") acc.correct += 1;
    if (state.performance[item.id] === "wrong") acc.wrong += 1;
    return acc;
  }, { correct: 0, wrong: 0 });
}

function disciplineName(id) {
  return disciplines.find((item) => item.id === id)?.name || id;
}

function wireGlobalClicks() {
  document.addEventListener("click", (event) => {
    const action = event.target.dataset.action;
    const id = event.target.dataset.id;
    if (action === "showAnswer") showAnswer(id);
    if (action === "markCorrect") markPerformance(id, "correct");
    if (action === "markWrong") markPerformance(id, "wrong");
    if (action === "studyToday") openView("plano");
    if (action === "saveSimAnswer") saveSimAnswer(id);
  });

  document.addEventListener("change", (event) => {
    const bucket = event.target.dataset.bucket;
    if (!bucket) return;
    state[bucket][event.target.dataset.index] = event.target.checked;
    saveState();
    renderChecklist("#examChecklist", examChecklistItems, "checks", "#examChecklistSummary");
    renderChecklist("#studyTasks", studyTasks, "tasks", "#studyTasksSummary");
  });
}

function showAnswer(id) {
  document.querySelectorAll(`[id$="${id}"]`).forEach((item) => item.classList.add("visible"));
}

function markPerformance(id, value) {
  state.performance[id] = value;
  saveState();
  renderProgress();
  renderQuestions();
}

function saveSimAnswer(id) {
  const selected = document.querySelector(`input[name="sim-${id}"]:checked`);
  if (!selected) return;
  state.simAnswers[id] = Number(selected.value);
  saveState();
}

function openView(viewId) {
  document.querySelectorAll(".view").forEach((view) => view.classList.toggle("active", view.id === viewId));
  document.querySelectorAll(".bottom-nav button").forEach((button) => button.classList.toggle("active", button.dataset.view === viewId));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function wireNavigation() {
  document.querySelectorAll(".bottom-nav button").forEach((button) => {
    button.addEventListener("click", () => openView(button.dataset.view));
  });
}

function startSim() {
  state.simAnswers = {};
  Object.keys(state.optionOrders).forEach((key) => {
    if (key.startsWith("sim:")) delete state.optionOrders[key];
  });
  saveState();
  simQuestions = [
    ...pickQuestions("portugues", 15),
    ...pickQuestions("logico", 10),
    ...pickQuestions("administracao", 35)
  ];
  simStartedAt = Date.now();
  clearInterval(timerHandle);
  timerHandle = setInterval(renderTimer, 1000);
  document.querySelector("#finishSim").disabled = false;
  document.querySelector("#simSummary").innerHTML = `<article class="result-card">Simulado iniciado com ${simQuestions.length} questões. Responda e salve cada alternativa antes de finalizar.</article>`;
  document.querySelector("#simQuestionList").innerHTML = simQuestions.map((item) => questionTemplate(item, "sim")).join("");
  renderTimer();
}

function pickQuestions(discipline, amount) {
  const base = questions.filter((item) => item.discipline === discipline);
  const picked = [];
  while (picked.length < amount) {
    picked.push(base[picked.length % base.length]);
  }
  return picked.map((item, index) => ({ ...item, id: `${item.id}-sim-${index}` }));
}

function finishSim() {
  clearInterval(timerHandle);
  document.querySelector("#finishSim").disabled = true;
  const report = disciplines.map((discipline) => {
    const scoped = simQuestions.filter((item) => item.discipline === discipline.id);
    const correct = scoped.filter((item) => state.simAnswers[item.id] === item.answer).length;
    return { ...discipline, total: scoped.length, correct };
  });
  const total = report.reduce((sum, item) => sum + item.correct, 0);
  const weak = [...report].sort((a, b) => (a.correct / a.total) - (b.correct / b.total))[0];
  document.querySelector("#simSummary").innerHTML = `
    <article class="result-card">
      <h3>Resultado: ${total}/60</h3>
      <p>${total >= 18 && report.every((item) => item.correct >= 1) ? "Você atingiu o critério mínimo neste simulado." : "Ainda não atingiu o critério mínimo neste simulado."}</p>
      <p><strong>Ponto fraco principal:</strong> ${weak.name}</p>
    </article>
    ${report.map((item) => `<article class="result-card"><strong>${item.name}</strong><p>${item.correct}/${item.total} acertos</p></article>`).join("")}
  `;
}

function renderTimer() {
  if (!simStartedAt) return;
  const seconds = Math.floor((Date.now() - simStartedAt) / 1000);
  const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
  const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  const s = String(seconds % 60).padStart(2, "0");
  document.querySelector("#timer").textContent = `${h}:${m}:${s}`;
}

function setupInstallPrompt() {
  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredInstallPrompt = event;
    document.querySelector("#installButton").hidden = false;
  });
  document.querySelector("#installButton").addEventListener("click", async () => {
    if (!deferredInstallPrompt) return;
    deferredInstallPrompt.prompt();
    await deferredInstallPrompt.userChoice;
    deferredInstallPrompt = null;
    document.querySelector("#installButton").hidden = true;
  });
}

function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js");
  }
}

function init() {
  renderCountdown();
  renderProgress();
  renderStrategy();
  renderChecklist("#examChecklist", examChecklistItems, "checks", "#examChecklistSummary");
  renderChecklist("#studyTasks", studyTasks, "tasks", "#studyTasksSummary");
  renderLessons();
  renderQuestionFilters();
  renderQuestions();
  wireNavigation();
  wireGlobalClicks();
  setupInstallPrompt();
  registerServiceWorker();
  document.querySelector("#startSim").addEventListener("click", startSim);
  document.querySelector("#finishSim").addEventListener("click", finishSim);
}

init();
