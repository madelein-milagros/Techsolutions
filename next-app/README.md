# TechSolutions — Plataforma de Cursos Tecnológicos

Aplicación web para gestión y visualización de cursos tecnológicos, construida con Next.js 14+, TypeScript y Tailwind CSS.

---

## Tecnologías

- **Next.js 16** — App Router, Server Components, rutas dinámicas
- **TypeScript** — tipado estricto en todo el proyecto
- **Tailwind CSS 4** — estilos utilitarios
- **shadcn/ui** — componentes de UI (Card, Badge, Button, Tabs)
- **Unsplash** — imágenes reales para cada curso

---

## Estructura del proyecto

```
next-app/
├── app/
│   ├── layout.tsx               # Layout global con navbar
│   ├── page.tsx                 # Página de inicio
│   ├── courses/
│   │   ├── page.tsx             # Lista de todos los cursos
│   │   └── [id]/page.tsx        # Detalle de un curso
│   ├── dashboard/
│   │   └── page.tsx             # Panel de estadísticas
│   └── api/
│       └── courses/
│           └── route.ts         # API REST (GET y POST)
├── components/
│   ├── CourseCard.tsx           # Tarjeta de curso
│   ├── StatusBadge.tsx          # Badge de estado del curso
│   ├── ActionButton.tsx         # Botón reutilizable
│   └── ui/                     # Componentes shadcn/ui
├── lib/
│   └── data.ts                  # Datos de cursos y tipos TypeScript
└── public/                      # Archivos estáticos
```

---

## Páginas

| Ruta | Descripción |
|------|-------------|
| `/` | Inicio con acceso a cursos y dashboard |
| `/courses` | Grid de todos los cursos disponibles |
| `/courses/[id]` | Detalle del curso: temario, instructor, requisitos |
| `/dashboard` | Estadísticas y tabla filtrable por estado |

## API

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| `GET` | `/api/courses` | Devuelve todos los cursos |
| `POST` | `/api/courses` | Registra un curso nuevo |

### Ejemplo POST

```json
{
  "nombre": "Docker para Devs",
  "descripcion": "Contenedores desde cero.",
  "categoria": "DevOps",
  "duracion": 25,
  "nivel": "Intermedio",
  "instructor": "Juan Pérez"
}
```

---

## Instalación y uso

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build de producción
npm run build
npm start
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

---

## Cursos incluidos

| Curso | Categoría | Nivel | Estado |
|-------|-----------|-------|--------|
| React Avanzado | Frontend | Avanzado | Activo |
| Next.js Full Stack | Full Stack | Intermedio | Activo |
| TypeScript Profesional | Lenguajes | Intermedio | En Progreso |
| Tailwind CSS Mastery | Frontend | Principiante | Finalizado |
| Node.js y Express | Backend | Intermedio | Activo |
| PostgreSQL Avanzado | Base de Datos | Avanzado | En Progreso |
