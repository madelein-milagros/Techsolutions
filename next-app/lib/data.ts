export type CourseStatus = "Activo" | "En Progreso" | "Finalizado";
export type CourseNivel = "Principiante" | "Intermedio" | "Avanzado";

export interface Course {
  id: number;
  nombre: string;
  descripcion: string;
  descripcionLarga: string;
  categoria: string;
  duracion: number;
  lecciones: number;
  nivel: CourseNivel;
  instructor: string;
  status: CourseStatus;
  imagen: string;
  temario: { modulo: string; temas: string[] }[];
  requisitos: string[];
}

export const courses: Course[] = [
  {
    id: 1,
    nombre: "React Avanzado",
    descripcion: "Domina hooks, context, performance y patrones modernos de React.",
    descripcionLarga:
      "Este curso te lleva al siguiente nivel en React. Aprenderás a construir aplicaciones escalables usando hooks personalizados, Context API, optimización de rendimiento con memo y useCallback, y los patrones de diseño más usados en la industria.",
    categoria: "Frontend",
    duracion: 40,
    lecciones: 52,
    nivel: "Avanzado",
    instructor: "Carlos Mendoza",
    status: "Activo",
    imagen: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
    temario: [
      { modulo: "Hooks Avanzados", temas: ["useReducer", "useRef", "useCallback", "useMemo", "Hooks personalizados"] },
      { modulo: "Manejo de Estado", temas: ["Context API", "Zustand", "Redux Toolkit", "Jotai"] },
      { modulo: "Performance", temas: ["React.memo", "Lazy loading", "Code splitting", "Profiler"] },
      { modulo: "Patrones", temas: ["Compound components", "Render props", "HOCs", "Headless UI"] },
    ],
    requisitos: ["Conocimiento básico de React", "JavaScript ES6+", "Manejo de JSX"],
  },
  {
    id: 2,
    nombre: "Next.js Full Stack",
    descripcion: "Construye aplicaciones completas con App Router, Server Actions y más.",
    descripcionLarga:
      "Aprende a construir aplicaciones full stack modernas con Next.js 14+. Desde el App Router y los Server Components hasta la integración con bases de datos, autenticación y despliegue en producción con Vercel.",
    categoria: "Full Stack",
    duracion: 50,
    lecciones: 68,
    nivel: "Intermedio",
    instructor: "Ana Rodríguez",
    status: "Activo",
    imagen: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    temario: [
      { modulo: "App Router", temas: ["Layouts", "Loading UI", "Error boundaries", "Route groups"] },
      { modulo: "Server Components", temas: ["RSC vs Client Components", "Data fetching", "Streaming"] },
      { modulo: "Server Actions", temas: ["Formularios", "Mutaciones", "Revalidación de caché"] },
      { modulo: "Full Stack", temas: ["API Routes", "Prisma + PostgreSQL", "NextAuth.js", "Deploy en Vercel"] },
    ],
    requisitos: ["React intermedio", "JavaScript/TypeScript básico", "HTML y CSS"],
  },
  {
    id: 3,
    nombre: "TypeScript Profesional",
    descripcion: "Tipos avanzados, generics, decoradores y configuración enterprise.",
    descripcionLarga:
      "Domina TypeScript a nivel profesional. Este curso cubre desde tipos avanzados y generics hasta la configuración de proyectos enterprise, integración con linters y herramientas de calidad de código.",
    categoria: "Lenguajes",
    duracion: 30,
    lecciones: 38,
    nivel: "Intermedio",
    instructor: "Luis Fernández",
    status: "En Progreso",
    imagen: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    temario: [
      { modulo: "Tipos Avanzados", temas: ["Union & Intersection", "Mapped types", "Conditional types", "Template literals"] },
      { modulo: "Generics", temas: ["Funciones genéricas", "Interfaces genéricas", "Constraints", "Utility types"] },
      { modulo: "Configuración", temas: ["tsconfig avanzado", "Path aliases", "Strict mode", "Declaration files"] },
      { modulo: "Patterns", temas: ["Decoradores", "Mixins", "Builder pattern", "Type guards"] },
    ],
    requisitos: ["JavaScript ES6+ sólido", "Conceptos básicos de TypeScript", "POO básica"],
  },
  {
    id: 4,
    nombre: "Tailwind CSS Mastery",
    descripcion: "Diseño responsive, componentes utilitarios y personalización avanzada.",
    descripcionLarga:
      "Convierte tu flujo de trabajo de diseño con Tailwind CSS. Aprenderás a crear interfaces modernas y responsivas sin salir del HTML, personalizar el tema a fondo y construir un sistema de diseño propio.",
    categoria: "Frontend",
    duracion: 20,
    lecciones: 28,
    nivel: "Principiante",
    instructor: "Sofía Torres",
    status: "Finalizado",
    imagen: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    temario: [
      { modulo: "Fundamentos", temas: ["Clases utilitarias", "Responsive design", "Flexbox & Grid", "Dark mode"] },
      { modulo: "Personalización", temas: ["tailwind.config", "Colores personalizados", "Tipografía", "Spacing"] },
      { modulo: "Componentes", temas: ["Botones", "Cards", "Modales", "Navegación", "Formularios"] },
      { modulo: "Avanzado", temas: ["@apply", "Plugins", "Animaciones", "JIT mode"] },
    ],
    requisitos: ["HTML y CSS básico", "No requiere JavaScript"],
  },
  {
    id: 5,
    nombre: "Node.js y Express",
    descripcion: "APIs REST, middleware, autenticación JWT y conexión a bases de datos.",
    descripcionLarga:
      "Construye servidores robustos y APIs REST profesionales con Node.js y Express. Aprende a manejar autenticación con JWT, conectar bases de datos, escribir middleware y estructurar proyectos backend escalables.",
    categoria: "Backend",
    duracion: 45,
    lecciones: 58,
    nivel: "Intermedio",
    instructor: "Diego Vargas",
    status: "Activo",
    imagen: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    temario: [
      { modulo: "Node.js Core", temas: ["Event loop", "Módulos", "File system", "Streams", "HTTP nativo"] },
      { modulo: "Express", temas: ["Routing", "Middleware", "Error handling", "Validación con Zod"] },
      { modulo: "Autenticación", temas: ["JWT", "Bcrypt", "Refresh tokens", "Roles y permisos"] },
      { modulo: "Base de Datos", temas: ["MongoDB con Mongoose", "PostgreSQL con pg", "Migraciones", "ORM"] },
    ],
    requisitos: ["JavaScript ES6+", "Conocimiento básico de HTTP", "Terminal/CLI básico"],
  },
  {
    id: 6,
    nombre: "PostgreSQL Avanzado",
    descripcion: "Consultas complejas, optimización, stored procedures y transacciones.",
    descripcionLarga:
      "Lleva tus habilidades de base de datos al máximo con PostgreSQL. Aprenderás a escribir consultas complejas, optimizar el rendimiento con índices y EXPLAIN, usar stored procedures y manejar transacciones correctamente.",
    categoria: "Base de Datos",
    duracion: 35,
    lecciones: 44,
    nivel: "Avanzado",
    instructor: "María López",
    status: "En Progreso",
    imagen: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&q=80",
    temario: [
      { modulo: "Consultas Avanzadas", temas: ["JOINs complejos", "CTEs", "Window functions", "Subqueries"] },
      { modulo: "Optimización", temas: ["Índices", "EXPLAIN ANALYZE", "Vacuuming", "Particionado"] },
      { modulo: "Programabilidad", temas: ["Stored procedures", "Funciones PL/pgSQL", "Triggers", "Views"] },
      { modulo: "Administración", temas: ["Transacciones ACID", "Backups", "Roles y permisos", "Replicación"] },
    ],
    requisitos: ["SQL básico/intermedio", "Conocimiento de bases de datos relacionales"],
  },
];
