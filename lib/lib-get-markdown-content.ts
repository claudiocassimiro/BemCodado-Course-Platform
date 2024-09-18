import fs from "fs";
import path from "path";

export async function getMarkdownContent(curso: string, modulo: string) {
  const filePath = path.join(
    process.cwd(),
    "public",
    "cursos",
    curso,
    `${modulo}.md`
  );
  const fileContent = await fs.promises.readFile(filePath, "utf8");
  return fileContent;
}

export async function getCursos() {
  const cursosPath = path.join(process.cwd(), "public", "cursos");
  const cursos = await fs.promises.readdir(cursosPath);
  return cursos;
}

export async function getModulos(curso: string) {
  const modulosPath = path.join(process.cwd(), "public", "cursos", curso);
  const modulos = await fs.promises.readdir(modulosPath);
  return modulos.map((modulo) => modulo.replace(".md", ""));
}
