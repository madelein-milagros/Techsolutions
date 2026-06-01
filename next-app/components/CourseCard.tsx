import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import StatusBadge from "./StatusBadge";
import ActionButton from "./ActionButton";
import { CourseStatus } from "@/lib/data";

interface CourseCardProps {
  id: number;
  nombre: string;
  descripcion: string;
  categoria: string;
  duracion: number;
  status: CourseStatus;
  imagen: string;
}

export default function CourseCard({
  id,
  nombre,
  descripcion,
  categoria,
  duracion,
  status,
  imagen,
}: CourseCardProps) {
  return (
    <Card className="overflow-hidden border border-[#ffc29e] bg-white shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-2xl flex flex-col">
      <div className="relative w-full h-44">
        <Image
          src={imagen}
          alt={nombre}
          fill
          className="object-cover"
          unoptimized
        />
      </div>

      <CardHeader className="pb-1 pt-4 px-5">
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#9f353e]">
            {categoria}
          </span>
          <StatusBadge status={status} />
        </div>
        <h3 className="text-lg font-bold text-[#7c2532] mt-1 leading-tight">
          {nombre}
        </h3>
      </CardHeader>

      <CardContent className="px-5 py-2 flex-1">
        <p className="text-sm text-gray-600 leading-relaxed">{descripcion}</p>
        <p className="text-xs text-[#9f353e] mt-3 font-medium">
          ⏱ Duración: {duracion} horas
        </p>
      </CardContent>

      <CardFooter className="px-5 pb-5 pt-3">
        <Link href={`/courses/${id}`} className="w-full">
          <ActionButton label="Ver Detalles" variant="primary" />
        </Link>
      </CardFooter>
    </Card>
  );
}