import Link from "next/link";
import type { DisciplineProgressStat } from "@/lib/stats";

export function DisciplineProgressList({
  disciplines,
}: {
  disciplines: DisciplineProgressStat[];
}) {
  return (
    <div className="rounded border border-line bg-paper p-4">
      <h2 className="text-lg font-semibold">Progresso por disciplina</h2>
      <div className="mt-3 flex flex-col gap-1">
        {disciplines.map((d) => (
          <Link
            key={d.slug}
            href={`/disciplinas/${d.slug}`}
            className="-mx-2 block rounded px-2 py-2 transition-colors hover:bg-teal-light"
          >
            <div className="flex items-center justify-between gap-3 text-sm">
              <span>{d.name}</span>
              <span className="whitespace-nowrap font-mono text-ink-muted">
                {d.completedLessons}/{d.totalLessons} aulas →
              </span>
            </div>
            <div className="mt-1 h-2 w-full overflow-hidden rounded bg-line">
              <div
                className="h-full bg-teal transition-all"
                style={{ width: `${d.percent}%` }}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
