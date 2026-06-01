import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { courses } from "@/lib/data";
import StatusBadge from "@/components/StatusBadge";

export default function DashboardPage() {
  const total = courses.length;
  const activos = courses.filter((c) => c.status === "Activo").length;
  const finalizados = courses.filter((c) => c.status === "Finalizado").length;
  const enProgreso = courses.filter((c) => c.status === "En Progreso").length;

  const stats = [
    { label: "Total de Cursos", value: total, color: "bg-[#7c2532]", text: "text-[#ffc29e]" },
    { label: "Activos", value: activos, color: "bg-[#9f353e]", text: "text-[#ffc29e]" },
    { label: "En Progreso", value: enProgreso, color: "bg-[#d95151]", text: "text-white" },
    { label: "Finalizados", value: finalizados, color: "bg-[#ff8479]", text: "text-[#7c2532]" },
  ];

  return (
    <main className="min-h-screen bg-[#fff8f5] px-6 py-12">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-10">
          <p className="text-[#d95151] text-sm font-semibold uppercase tracking-widest mb-1">
            TechSolutions
          </p>
          <h1 className="text-4xl font-bold text-[#7c2532]">Dashboard</h1>
          <p className="text-gray-500 mt-2">Panel de control de cursos tecnológicos.</p>
          <div className="w-16 h-1 bg-[#d95151] mt-4 rounded-full" />
        </div>

        {/* Tarjetas estadísticas */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {stats.map((stat) => (
            <Card
              key={stat.label}
              className={`${stat.color} border-none shadow-md rounded-2xl`}
            >
              <CardHeader className="pb-1 pt-4 px-5">
                <CardTitle className={`text-xs font-semibold uppercase tracking-widest ${stat.text} opacity-80`}>
                  {stat.label}
                </CardTitle>
              </CardHeader>
              <CardContent className="px-5 pb-5">
                <p className={`text-5xl font-black ${stat.text}`}>{stat.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tabs */}
        <Tabs defaultValue="todos">
          <TabsList className="bg-[#ffc29e] rounded-xl mb-6">
            <TabsTrigger
              value="todos"
              className="data-[state=active]:bg-[#7c2532] data-[state=active]:text-[#ffc29e] text-[#7c2532] font-semibold rounded-lg"
            >
              Todos
            </TabsTrigger>
            <TabsTrigger
              value="activos"
              className="data-[state=active]:bg-[#7c2532] data-[state=active]:text-[#ffc29e] text-[#7c2532] font-semibold rounded-lg"
            >
              Activos
            </TabsTrigger>
            <TabsTrigger
              value="progreso"
              className="data-[state=active]:bg-[#7c2532] data-[state=active]:text-[#ffc29e] text-[#7c2532] font-semibold rounded-lg"
            >
              En Progreso
            </TabsTrigger>
            <TabsTrigger
              value="finalizados"
              className="data-[state=active]:bg-[#7c2532] data-[state=active]:text-[#ffc29e] text-[#7c2532] font-semibold rounded-lg"
            >
              Finalizados
            </TabsTrigger>
          </TabsList>

          {/* Tab: Todos */}
          <TabsContent value="todos">
            <CourseTable courses={courses} />
          </TabsContent>

          {/* Tab: Activos */}
          <TabsContent value="activos">
            <CourseTable courses={courses.filter((c) => c.status === "Activo")} />
          </TabsContent>

          {/* Tab: En Progreso */}
          <TabsContent value="progreso">
            <CourseTable courses={courses.filter((c) => c.status === "En Progreso")} />
          </TabsContent>

          {/* Tab: Finalizados */}
          <TabsContent value="finalizados">
            <CourseTable courses={courses.filter((c) => c.status === "Finalizado")} />
          </TabsContent>
        </Tabs>

      </div>
    </main>
  );
}

// Subcomponente tabla
function CourseTable({ courses }: { courses: typeof import("@/lib/data").courses }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-[#ffc29e]">
      <table className="w-full text-sm">
        <thead className="bg-[#7c2532] text-[#ffc29e]">
          <tr>
            <th className="px-5 py-3 text-left font-semibold">Curso</th>
            <th className="px-5 py-3 text-left font-semibold">Categoría</th>
            <th className="px-5 py-3 text-left font-semibold">Duración</th>
            <th className="px-5 py-3 text-left font-semibold">Estado</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((c, i) => (
            <tr
              key={c.id}
              className={i % 2 === 0 ? "bg-white" : "bg-[#fff8f5]"}
            >
              <td className="px-5 py-3 font-medium text-[#7c2532]">{c.nombre}</td>
              <td className="px-5 py-3 text-gray-600">{c.categoria}</td>
              <td className="px-5 py-3 text-gray-600">{c.duracion}h</td>
              <td className="px-5 py-3">
                <StatusBadge status={c.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}