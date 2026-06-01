import { NextRequest, NextResponse } from "next/server";
import { courses, Course } from "@/lib/data";

// Base de datos en memoria (se reinicia con el servidor, OK para el lab)
const db: Course[] = [...courses];

// GET /api/courses — lista todos los cursos
export async function GET() {
  return NextResponse.json(db, { status: 200 });
}

// POST /api/courses — registra un nuevo curso
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validación básica
    if (!body.nombre || !body.categoria || !body.duracion) {
      return NextResponse.json(
        { error: "Faltan campos requeridos: nombre, categoria, duracion" },
        { status: 400 }
      );
    }

    const newCourse: Course = {
      id: db.length + 1,
      nombre: body.nombre,
      descripcion: body.descripcion || "",
      descripcionLarga: body.descripcionLarga || body.descripcion || "",
      categoria: body.categoria,
      duracion: Number(body.duracion),
      lecciones: Number(body.lecciones) || 0,
      nivel: body.nivel || "Principiante",
      instructor: body.instructor || "Por definir",
      status: body.status || "Activo",
      imagen: `https://placehold.co/400x200/7c2532/ffc29e?text=${encodeURIComponent(body.nombre)}`,
      temario: body.temario || [],
      requisitos: body.requisitos || [],
    };

    db.push(newCourse);

    return NextResponse.json(newCourse, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "JSON inválido o error del servidor" },
      { status: 500 }
    );
  }
}