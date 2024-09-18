"use client";

import Link from "next/link";
import { getCursos } from "@/lib/lib-get-markdown-content";

export async function Page() {
  const cursos = await getCursos();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Bem-vindo à BemCodado</h1>
      <p className="mb-4">Escolha um curso para começar:</p>
      <ul>
        {cursos.map((curso) => (
          <li key={curso} className="mb-2">
            <Link href={`/cursos/${curso}`}>
              <span className="text-blue-500 hover:underline">{curso}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
