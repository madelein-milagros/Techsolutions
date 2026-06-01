import CourseCard from "@/components/CourseCard";
import { courses } from "@/lib/data";

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-[#fff8f5] px-6 py-12">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-10">
        <p className="text-[#d95151] text-sm font-semibold uppercase tracking-widest mb-1">
          TechSolutions
        </p>
        <h1 className="text-4xl font-bold text-[#7c2532]">
          Cursos Tecnológicos
        </h1>
        <p className="text-gray-500 mt-2 text-base">
          Explora nuestra oferta de formación especializada.
        </p>
        <div className="w-16 h-1 bg-[#d95151] mt-4 rounded-full" />
      </div>

      {/* Grid de cursos */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </main>
  );
}