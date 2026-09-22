import Link from "next/link";
import { Header } from "@/components/layout/header";
import { allFlashcards } from "@/data/flashcards";
import { allQuestions } from "@/data/questions";
import { getAllLessons } from "@/config/edital";

/** Atualize a data a cada nova entrega, para conferir se a versão nova está no ar. */
const APP_VERSION = "22/09/2026 · rev. 3";

const QUICK_LINKS = [
  { href: "/disciplinas", title: "Aulas", description: "Leia a teoria por disciplina e módulo." },
  { href: "/flashcards", title: "Flashcards", description: "Revise conceitos com cartões de frente e verso." },
  { href: "/jogos", title: "Jogos", description: "Associação e jogo da memória com os conceitos." },
  { href: "/questoes", title: "Questões", description: "Pratique com comentário em cada resposta." },
  { href: "/simulados", title: "Simulado", description: "Prova cronometrada com correção automática." },
  { href: "/revisoes", title: "Revisão do dia", description: "Cartões que estão na hora de revisar." },
];

export default function HomePage() {
  const lessonCount = getAllLessons().length;

  return (
    <div className="min-h-screen bg-paper">
      <Header />
      <main className="mx-auto flex max-w-content flex-col gap-8 px-6 py-12">
        <div>
          <span className="font-mono text-sm uppercase tracking-wide text-ink-muted">
            Edital nº 01/2026 — Cargo ACA
          </span>
          <h1 className="mt-3 text-4xl font-bold leading-tight">
            Plataforma de Estudos
            <br />
            <span className="text-teal">IBGE — ACA 2026</span>
          </h1>
          <p className="mt-4 text-ink-muted">
            Escolha por onde começar. Sugestão: aula → flashcards → questões.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {QUICK_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded border border-line bg-paper p-4 transition-colors hover:border-teal"
            >
              <p className="font-medium">{item.title} →</p>
              <p className="mt-1 text-sm text-ink-muted">{item.description}</p>
            </Link>
          ))}
        </div>

        <Link
          href="/dashboard"
          className="self-start rounded bg-teal px-4 py-2 text-sm font-medium text-paper transition-colors hover:bg-teal-dark"
        >
          Ver meu desempenho
        </Link>

        <p className="font-mono text-xs text-ink-muted">
          Versão {APP_VERSION} · {lessonCount} aulas · {allFlashcards.length} flashcards ·{" "}
          {allQuestions.length} questões
        </p>
      </main>
    </div>
  );
}
