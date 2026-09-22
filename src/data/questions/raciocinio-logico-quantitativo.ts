import type { Question } from "@/types";
import { buildQuestions, type QuestionTuple } from "./build";

/** Adicione novas questões sempre no FINAL da lista. */
const questions: QuestionTuple[] = [
  [
    "Estruturas lógicas", "Condicional", "facil",
    "A proposição “Se chove, então a coleta é adiada” é falsa quando:",
    ["chove e a coleta é adiada.", "não chove e a coleta é adiada.", "chove e a coleta não é adiada.", "não chove e a coleta não é adiada.", "nunca, pois é sempre verdadeira."],
    "c",
    "O condicional “se p, então q” só é falso quando p é verdadeira e q é falsa (V → F): choveu e a coleta não foi adiada.",
    ["condicional", "tabela-verdade", "se então"],
  ],
  [
    "Estruturas lógicas", "Negação da conjunção", "medio",
    "A negação de “O agente é pontual e organizado” é:",
    ["O agente não é pontual e não é organizado.", "O agente não é pontual ou não é organizado.", "O agente é pontual ou organizado.", "Se o agente é pontual, então não é organizado.", "O agente não é pontual nem organizado."],
    "b",
    "Lei de De Morgan: negar “p e q” resulta em “não p ou não q”. Troca-se o “e” por “ou” e negam-se as duas partes.",
    ["De Morgan", "negação", "conjunção"],
  ],
  [
    "Estruturas lógicas", "Negação do condicional", "dificil",
    "A negação de “Se estudo, então sou aprovado” é:",
    ["Se não estudo, então não sou aprovado.", "Estudo e não sou aprovado.", "Não estudo e sou aprovado.", "Se sou aprovado, então estudo.", "Não estudo ou sou aprovado."],
    "b",
    "A negação de “se p, então q” é “p e não q”: mantém-se a primeira parte e nega-se a segunda. Cuidado: a alternativa A não é negação.",
    ["negação", "condicional", "p e não q"],
  ],
  [
    "Estruturas lógicas", "Equivalência", "dificil",
    "É logicamente equivalente a “Se o formulário está completo, então ele é enviado”:",
    ["Se o formulário é enviado, então está completo.", "Se o formulário não está completo, então não é enviado.", "Se o formulário não é enviado, então não está completo.", "O formulário está completo e não é enviado.", "O formulário está completo ou é enviado."],
    "c",
    "A contrapositiva (“se não q, então não p”) é equivalente ao condicional original. As alternativas A e B são armadilhas clássicas: não são equivalentes.",
    ["contrapositiva", "equivalência", "condicional"],
  ],
  [
    "Diagramas lógicos", "Negação de quantificadores", "medio",
    "A negação de “Todos os recenseadores usaram o tablet” é:",
    ["Nenhum recenseador usou o tablet.", "Algum recenseador não usou o tablet.", "Todos os recenseadores não usaram o tablet.", "Algum recenseador usou o tablet.", "Nenhum recenseador deixou de usar o tablet."],
    "b",
    "Para negar “todo”, basta mostrar um caso contrário: “algum ... não”. “Nenhum” é um exagero e não é a negação.",
    ["quantificadores", "todo", "negação"],
  ],
  [
    "Diagramas lógicos", "Conclusão válida", "dificil",
    "Sabe-se que “Todo agente é servidor” e que “Algum servidor é estudante”. Com base apenas nessas informações, é correto concluir que:",
    ["todo agente é estudante.", "algum agente é estudante.", "nenhum agente é estudante.", "é possível que nenhum agente seja estudante.", "todo estudante é agente."],
    "d",
    "Os estudantes podem ser servidores que não são agentes. Como não há garantia de interseção entre agentes e estudantes, só se pode dizer que é possível que nenhum agente seja estudante.",
    ["diagramas", "silogismo", "todo", "algum"],
  ],
  [
    "Aritmética", "Porcentagem", "medio",
    "Um produto custava R$ 200,00 e teve dois aumentos sucessivos: 10% e, depois, 20%. O preço final passou a ser:",
    ["R$ 260,00", "R$ 262,00", "R$ 264,00", "R$ 266,00", "R$ 270,00"],
    "c",
    "200 × 1,10 = 220; 220 × 1,20 = 264. Aumentos sucessivos se multiplicam (1,1 × 1,2 = 1,32), não se somam.",
    ["porcentagem", "aumentos sucessivos"],
  ],
  [
    "Aritmética", "Regra de três inversa", "medio",
    "Quatro agentes visitam todos os domicílios de um setor em 6 dias. Mantido o mesmo ritmo, em quantos dias 3 agentes fariam o mesmo trabalho?",
    ["4,5", "6", "7", "8", "9"],
    "d",
    "Menos agentes, mais dias: grandezas inversas. 4 × 6 = 24 “agentes-dia”; 24 ÷ 3 = 8 dias.",
    ["regra de três", "inversamente proporcional"],
  ],
  [
    "Aritmética", "MMC", "facil",
    "Um supervisor visita o setor A a cada 6 dias e o setor B a cada 8 dias. Se visitou os dois hoje, voltará a visitá-los no mesmo dia daqui a:",
    ["12 dias.", "14 dias.", "24 dias.", "36 dias.", "48 dias."],
    "c",
    "Eventos que se repetem e coincidem: MMC(6, 8) = 24.",
    ["MMC", "múltiplo comum"],
  ],
  [
    "Aritmética", "Juros simples", "facil",
    "Um capital de R$ 1.000,00, aplicado a juros simples de 2% ao mês durante 5 meses, rende juros de:",
    ["R$ 50,00", "R$ 100,00", "R$ 110,00", "R$ 200,00", "R$ 1.100,00"],
    "b",
    "J = C × i × t = 1.000 × 0,02 × 5 = 100. Atenção: R$ 1.100,00 é o montante (capital + juros), não os juros.",
    ["juros simples", "capital", "taxa"],
  ],
  [
    "Álgebra básica", "Equação do 1º grau", "facil",
    "A soma de um número com o seu dobro é 45. Esse número é:",
    ["9", "12", "15", "18", "22,5"],
    "c",
    "x + 2x = 45 → 3x = 45 → x = 15.",
    ["equação", "primeiro grau"],
  ],
  [
    "Geometria básica", "Teorema de Pitágoras", "medio",
    "Um terreno retangular mede 12 m por 5 m. A medida da sua diagonal é:",
    ["11 m", "12 m", "13 m", "15 m", "17 m"],
    "c",
    "A diagonal é a hipotenusa: d² = 12² + 5² = 144 + 25 = 169 → d = 13 m.",
    ["Pitágoras", "diagonal", "retângulo"],
  ],
];

export const raciocinioLogicoQuestions: Question[] = buildQuestions(
  "raciocinio-logico-quantitativo",
  "rlq",
  questions
);
