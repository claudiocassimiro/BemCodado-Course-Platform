// app/cursos/page.tsx
import fs from "fs/promises";
import path from "path";
import Link from "next/link";
import { Book } from "lucide-react";

export default async function Page() {
  const coursesPath = path.join(process.cwd(), "public", "cursos");
  let courses: string[] = [];

  try {
    await fs.access(coursesPath);
    const files = await fs.readdir(coursesPath);
    courses = (
      await Promise.all(
        files.map(async (file) => {
          const filePath = path.join(coursesPath, file);
          const stats = await fs.stat(filePath);
          return stats.isDirectory() ? file : null;
        })
      )
    ).filter((course): course is string => course !== null);
  } catch (error) {
    console.error(
      "Erro ao ler o diretório de cursos ou o diretório não existe:",
      error
    );
  }

  return (
    <div className="container mx-auto p-4 max-w-6xl">
      <h1 className="text-3xl font-bold mb-8 text-center text-white">
        Cursos Disponíveis
      </h1>
      {courses.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <Link
              key={course}
              href={`/cursos/${encodeURIComponent(course)}`}
              className="bg-card hover:bg-accent text-card-foreground p-6 rounded-lg shadow-md transition-colors duration-200 flex flex-col items-center justify-center text-center"
            >
              <Book className="w-12 h-12 mb-4 text-primary" />
              <span className="text-lg font-semibold">{course}</span>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center text-muted-foreground">
          <p className="text-xl">Nenhum curso disponível no momento.</p>
          <p className="mt-2">
            Por favor, volte mais tarde para ver novos cursos.
          </p>
        </div>
      )}
    </div>
  );
}
