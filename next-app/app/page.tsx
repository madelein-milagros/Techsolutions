import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fff8f5] flex flex-col items-center justify-center text-center px-6">
      <p className="text-[#d95151] text-sm font-semibold uppercase tracking-widest mb-3">
        Bienvenido a
      </p>
      <h1 className="text-6xl font-black text-[#7c2532] leading-tight">
        TechSolutions
      </h1>
      <p className="text-gray-500 mt-4 max-w-md text-lg">
        Plataforma de gestión de cursos tecnológicos modernos.
      </p>
      <div className="flex gap-4 mt-8">
        <Link
          href="/courses"
          className="bg-[#7c2532] text-[#ffc29e] px-6 py-3 rounded-xl font-semibold hover:bg-[#9f353e] transition-colors"
        >
          Ver Cursos
        </Link>
        <Link
          href="/dashboard"
          className="border border-[#7c2532] text-[#7c2532] px-6 py-3 rounded-xl font-semibold hover:bg-[#ffc29e] transition-colors"
        >
          Dashboard
        </Link>
      </div>
    </main>
  );
}