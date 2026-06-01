import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TechSolutions – Cursos",
  description: "Sistema de gestión de cursos tecnológicos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        {/* Navbar */}
        <nav className="bg-[#7c2532] text-[#ffc29e] px-6 py-4 flex items-center justify-between shadow-md">
          <span className="text-xl font-black tracking-tight">
            Tech<span className="text-[#ffc29e]">Solutions</span>
          </span>
          <div className="flex gap-6 text-sm font-semibold">
            <a href="/" className="hover:text-white transition-colors">Inicio</a>
            <a href="/courses" className="hover:text-white transition-colors">Cursos</a>
            <a href="/dashboard" className="hover:text-white transition-colors">Dashboard</a>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}