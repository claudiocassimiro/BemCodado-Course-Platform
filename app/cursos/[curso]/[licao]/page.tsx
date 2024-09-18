// app/cursos/[curso]/[licao]/page.tsx
import fs from "fs/promises";
import path from "path";
import Link from "next/link";
import { MarkdownRendererComponent } from "@/components/components-markdown-renderer";

export default async function Page({
  params,
}: {
  params: { curso: string; licao: string };
}) {
  // Decodifica e formata o nome do curso e da lição
  const cursoDecodificado = decodeURIComponent(params.curso)
    .replace(/[^a-zA-ZÀ-ÿ\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (l) => l.toUpperCase())
    .replace(/\b(E|De|Do|Da|Dos|Das|Com)\b/g, (word) => word.toLowerCase())
    .replace(/([Â-Û])([A-Z])/g, (match, p1, p2) => p1 + p2.toLowerCase())
    .replace(/L C B Gica/, "Lógica")
    .replace(/Programa C A C A O/, "Programação");

  const licaoDecodificada = decodeURIComponent(params.licao)
    .replace(/-+/g, " ")
    .replace(/(\d+)\s+/, "$1 - ")
    .replace(/\b(o|a|os|as|no|na|nos|nas)\b/gi, (word) => word.toLowerCase())
    .replace(/visão geral/i, "Visão geral -"); // Adiciona um hífen após "Visão geral"

  // Define o caminho da pasta do curso no diretório 'public/cursos'
  const cursoDiretorio = path.join(
    process.cwd(),
    "public",
    "cursos",
    cursoDecodificado
  );

  let content = "";
  let arquivoEncontrado = false;

  try {
    // Lê todos os arquivos e pastas no diretório do curso
    const itens = await fs.readdir(cursoDiretorio, { withFileTypes: true });

    // Procura por um arquivo que corresponda à lição em todos os módulos
    for (const item of itens) {
      if (
        item.isDirectory() &&
        (item.name.startsWith("Módulo") || item.name.startsWith("0 -"))
      ) {
        const moduloDiretorio = path.join(cursoDiretorio, item.name);
        const arquivosModulo = await fs.readdir(moduloDiretorio);
        for (const arquivo of arquivosModulo) {
          if (
            arquivo.toLowerCase().endsWith(".md") &&
            arquivo.toLowerCase().includes(licaoDecodificada.toLowerCase())
          ) {
            const arquivoPath = path.join(moduloDiretorio, arquivo);
            content = await fs.readFile(arquivoPath, "utf-8");
            arquivoEncontrado = true;
            break;
          }
        }

        if (arquivoEncontrado) break;
      } else if (
        item.isFile() &&
        item.name.toLowerCase().endsWith(".md") &&
        item.name.toLowerCase().includes(licaoDecodificada.toLowerCase())
      ) {
        const arquivoPath = path.join(cursoDiretorio, item.name);
        content = await fs.readFile(arquivoPath, "utf-8");
        arquivoEncontrado = true;
        break;
      }
    }

    if (!arquivoEncontrado) {
      throw new Error("Arquivo da lição não encontrado");
    }
  } catch (error) {
    console.error("Erro ao ler o arquivo de lição:", error);
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">
          Curso: {cursoDecodificado} - Lição: {licaoDecodificada}
        </h1>
        <p className="text-red-500">
          Erro ao carregar o conteúdo da lição. Verifique se o arquivo existe.
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <Link
        href={`/cursos/${encodeURIComponent(cursoDecodificado)}`}
        className="text-blue-500 hover:underline mb-4 inline-block"
      >
        &larr; Voltar para o curso
      </Link>
      <h1 className="text-2xl font-bold mb-4">
        Curso: {cursoDecodificado} - Lição: {licaoDecodificada}
      </h1>
      <MarkdownRendererComponent content={content} />
      <Link
        href={`/cursos/${encodeURIComponent(cursoDecodificado)}`}
        className="text-blue-500 hover:underline mt-4 inline-block"
      >
        &larr; Voltar para o curso
      </Link>
    </div>
  );
}
