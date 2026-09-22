import { notFound } from "next/navigation";
import { Header } from "@/components/layout/header";
import { LessonHeader } from "@/components/lesson/lesson-header";
import { LessonActions } from "@/components/lesson/lesson-actions";
import { LessonNav } from "@/components/lesson/lesson-nav";
import { getDisciplineBySlug, getAdjacentLessons, getAllLessons } from "@/config/edital";
import { lessonContentRegistry } from "@/content/registry";

interface LessonPageParams {
  slug: string;
  moduleSlug: string;
  lessonSlug: string;
}

export function generateStaticParams() {
  const params = getAllLessons().map((l) => ({
    slug: l.disciplineSlug,
    moduleSlug: l.moduleSlug,
    lessonSlug: l.slug,
  }));
  // A publicação estática não aceita lista vazia. Enquanto nenhuma aula
  // estiver cadastrada, geramos um endereço reservado que mostra "não encontrada".
  return params.length > 0
    ? params
    : [{ slug: "_", moduleSlug: "_", lessonSlug: "_" }];
}

export default function LessonPage({ params }: { params: LessonPageParams }) {
  const discipline = getDisciplineBySlug(params.slug);
  const lessonModule = discipline?.modules.find((m) => m.slug === params.moduleSlug);
  const lesson = lessonModule?.lessons.find((l) => l.slug === params.lessonSlug);

  if (!discipline || !lessonModule || !lesson) {
    notFound();
  }

  const { previous, next } = getAdjacentLessons(lesson.slug);
  const LessonContent =
    lessonContentRegistry[`${params.slug}/${params.moduleSlug}/${params.lessonSlug}`];

  return (
    <div className="min-h-screen bg-paper">
      <Header />
      <main className="mx-auto max-w-content px-6 py-10">
        <LessonHeader
          lesson={lesson}
          disciplineName={discipline.name}
          moduleName={lessonModule.name}
        />

        <div className="mt-6">
          <LessonActions lessonSlug={lesson.slug} />
        </div>

        <div className="prose-lesson mt-8">
          {LessonContent ? (
            <LessonContent />
          ) : (
            <p className="text-sm text-ink-muted">
              O conteúdo desta aula ainda não foi escrito.
            </p>
          )}
        </div>

        <LessonNav previous={previous} next={next} />
      </main>
    </div>
  );
}
