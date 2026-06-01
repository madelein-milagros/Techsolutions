import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { courses } from "@/lib/data";
import StatusBadge from "@/components/StatusBadge";

const nivelColor: Record<string, string> = {
  Principiante: "bg-green-100 text-green-700 border border-green-200",
  Intermedio: "bg-yellow-100 text-yellow-700 border border-yellow-200",
  Avanzado: "bg-red-100 text-[#7c2532] border border-red-200",
};

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const course = courses.find((c) => c.id === Number(id));

  if (!course) notFound();

  return (
    <main className="min-h-screen bg-[#fff8f5]">
      {/* Hero */}
      <div className="relative w-full h-64 md:h-80">
        <Image
          src={course.imagen}
          alt={course.nombre}
          fill
          className="object-cover"
          unoptimized
        />
        <div className="absolute inset-0 bg-[#7c2532]/70" />
        <div className="absolute inset-0 flex flex-col justify-end px-6 pb-8 max-w-4xl mx-auto">
          <p className="text-[#ffc29e] text-xs font-bold uppercase tracking-widest mb-1">
            {course.categoria}
          </p>
          <h1 className="text-3xl md:text-4xl font-black text-white leading-tight">
            {course.nombre}
          </h1>
          <div className="flex items-center gap-3 mt-3">
            <StatusBadge status={course.status} />
            <span className={`text-xs font-semibold px-3 py-1 rounded-full ${nivelColor[course.nivel]}`}>
              {course.nivel}
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-10">
        {/* Volver */}
        <Link
          href="/courses"
          className="inline-flex items-center gap-2 text-sm text-[#9f353e] font-semibold hover:underline mb-8"
        >
          ← Volver a cursos
        </Link>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {[
            { label: "Duración", value: `${course.duracion} horas` },
            { label: "Lecciones", value: `${course.lecciones} clases` },
            { label: "Nivel", value: course.nivel },
            { label: "Instructor", value: course.instructor },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white border border-[#ffc29e] rounded-2xl px-4 py-4 shadow-sm text-center"
            >
              <p className="text-xs text-[#9f353e] font-semibold uppercase tracking-widest mb-1">
                {stat.label}
              </p>
              <p className="text-sm font-bold text-[#7c2532]">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Columna principal */}
          <div className="md:col-span-2 space-y-8">
            {/* Descripción */}
            <section>
              <h2 className="text-xl font-bold text-[#7c2532] mb-3">Sobre el curso</h2>
              <p className="text-gray-600 leading-relaxed">{course.descripcionLarga}</p>
            </section>

            {/* Temario */}
            <section>
              <h2 className="text-xl font-bold text-[#7c2532] mb-4">Temario</h2>
              <div className="space-y-3">
                {course.temario.map((modulo, i) => (
                  <div
                    key={i}
                    className="bg-white border border-[#ffc29e] rounded-2xl overflow-hidden shadow-sm"
                  >
                    <div className="flex items-center gap-3 px-5 py-3 bg-[#7c2532]">
                      <span className="text-xs font-bold text-[#ffc29e] bg-[#9f353e] rounded-full w-6 h-6 flex items-center justify-center shrink-0">
                        {i + 1}
                      </span>
                      <p className="text-sm font-bold text-[#ffc29e]">{modulo.modulo}</p>
                    </div>
                    <ul className="px-5 py-3 space-y-1">
                      {modulo.temas.map((tema) => (
                        <li key={tema} className="text-sm text-gray-600 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#d95151] shrink-0" />
                          {tema}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Requisitos */}
            <div className="bg-white border border-[#ffc29e] rounded-2xl px-5 py-5 shadow-sm">
              <h3 className="text-base font-bold text-[#7c2532] mb-3">Requisitos</h3>
              <ul className="space-y-2">
                {course.requisitos.map((req) => (
                  <li key={req} className="text-sm text-gray-600 flex items-start gap-2">
                    <span className="text-[#d95151] mt-0.5">✓</span>
                    {req}
                  </li>
                ))}
              </ul>
            </div>

            {/* Instructor */}
            <div className="bg-white border border-[#ffc29e] rounded-2xl px-5 py-5 shadow-sm">
              <h3 className="text-base font-bold text-[#7c2532] mb-3">Instructor</h3>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#7c2532] flex items-center justify-center text-[#ffc29e] font-bold text-sm shrink-0">
                  {course.instructor.charAt(0)}
                </div>
                <p className="text-sm font-semibold text-gray-700">{course.instructor}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
