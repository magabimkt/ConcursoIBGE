import Link from "next/link";

interface StatCardProps {
  label: string;
  value: string | number;
  accent?: "teal" | "ochre" | "brick";
  /** Quando informado, o cartão vira um link para a seção correspondente. */
  href?: string;
}

const accentClasses = {
  teal: "text-teal",
  ochre: "text-ochre",
  brick: "text-brick",
};

export function StatCard({ label, value, accent = "teal", href }: StatCardProps) {
  const content = (
    <>
      <p className="text-sm text-ink-muted">{label}</p>
      <p className={`mt-1 font-mono text-3xl font-medium ${accentClasses[accent]}`}>
        {value}
      </p>
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="block rounded border border-line bg-paper p-4 transition-colors hover:border-teal"
      >
        {content}
      </Link>
    );
  }

  return <div className="rounded border border-line bg-paper p-4">{content}</div>;
}
