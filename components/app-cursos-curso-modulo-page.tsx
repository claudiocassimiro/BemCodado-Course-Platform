"use client";

import {
  getCursos,
  getModulos,
  getMarkdownContent,
} from "@/lib/lib-get-markdown-content";
import { SidebarComponent } from "@/components/components-sidebar";
import { MarkdownRendererComponent } from "@/components/components-markdown-renderer";

export async function generateStaticParams() {
  const cursos = await getCursos();
  const paths = [];
  for (const curso of cursos) {
    const modulos = await getModulos(curso);
    paths.push(...modulos.map((modulo) => ({ curso, modulo })));
  }
  return paths;
}

export async function Page({
  params,
}: {
  params: { curso: string; modulo: string };
}) {
  const cursos = await getCursos();
  const modulos = await getModulos(params.curso);
  const content = await getMarkdownContent(params.curso, params.modulo);

  return (
    <div className="flex">
      <SidebarComponent
        cursos={cursos}
        modulos={modulos}
        cursoAtual={params.curso}
      />
      <main className="flex-1 p-4">
        <h1 className="text-3xl font-bold mb-4">
          Curso: {params.curso} - Módulo: {params.modulo}
        </h1>
        <div className="prose max-w-none">
          <MarkdownRendererComponent content={content} />
        </div>
      </main>
    </div>
  );
}
