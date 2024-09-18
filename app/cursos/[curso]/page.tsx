import fs from "fs/promises";
import path from "path";
import Link from "next/link";
import { ListaLicoes } from "@/components/lista-lições";
import { ChevronLeft, Book } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Licao {
  nome: string;
  slug: string;
}

interface Modulo {
  nome: string;
  licoes: Licao[];
}

export default async function Page({ params }: { params: { curso: string } }) {
  const cursoDecodificado = decodeURIComponent(params.curso).replace(
    /[^a-zA-ZÀ-ÿ\s]/g,
    ""
  );

  const coursePath = path.join(
    process.cwd(),
    "public",
    "cursos",
    cursoDecodificado
  );

  let modulos: Modulo[] = [];

  try {
    await fs.access(coursePath);

    const listarConteudoDiretorio = async (
      diretorio: string
    ): Promise<Modulo[]> => {
      const conteudo = await fs.readdir(diretorio, { withFileTypes: true });
      const modulosLocais: Modulo[] = [];

      for (const item of conteudo) {
        if (item.isDirectory()) {
          const licoes = await listarLicoes(path.join(diretorio, item.name));
          modulosLocais.push({ nome: item.name, licoes });
        } else if (item.isFile() && item.name.endsWith(".md")) {
          if (modulosLocais.length === 0) {
            modulosLocais.push({ nome: "Geral", licoes: [] });
          }
          const licaoNome = item.name.replace(".md", "");
          const licaoSlug = licaoNome.replace(/\s+/g, "-").toLowerCase();
          modulosLocais[0].licoes.push({ nome: licaoNome, slug: licaoSlug });
        }
      }

      return modulosLocais;
    };

    const listarLicoes = async (diretorio: string): Promise<Licao[]> => {
      const arquivos = await fs.readdir(diretorio);
      return arquivos
        .filter((arquivo) => arquivo.endsWith(".md"))
        .map((arquivo) => {
          const licaoNome = arquivo.replace(".md", "");
          const licaoSlug = licaoNome.replace(/\s+/g, "-").toLowerCase();
          return { nome: licaoNome, slug: licaoSlug };
        });
    };

    modulos = await listarConteudoDiretorio(coursePath);
  } catch (error) {
    console.error("Erro ao acessar ou ler o diretório do curso:", error);
    return (
      <div className="container mx-auto p-4 max-w-4xl">
        <Link href="/cursos" passHref>
          <Button variant="ghost" className="mb-4">
            <ChevronLeft className="mr-2 h-4 w-4" /> Voltar para a lista de
            cursos
          </Button>
        </Link>
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              Curso: {cursoDecodificado}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-red-500">
              Desculpe, não foi possível carregar o conteúdo deste curso. Por
              favor, verifique se o curso existe e tente novamente mais tarde.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (modulos.length === 0) {
    return (
      <div className="container mx-auto p-4 max-w-4xl">
        <Link href="/cursos" passHref>
          <Button
            variant="ghost"
            className="mb-6 hover:bg-gray-100 transition-colors"
          >
            <ChevronLeft className="mr-2 h-4 w-4" /> Voltar para a lista de
            cursos
          </Button>
        </Link>
        <Card className="shadow-lg">
          <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <CardTitle className="text-3xl font-bold">
              {cursoDecodificado}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="text-center space-y-4">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <h3 className="mt-2 text-sm font-medium text-gray-900">
                Sem conteúdo disponível
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Este curso ainda não possui módulos ou conteúdo disponível.
              </p>
              <div className="mt-6">
                <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                  Solicitar atualização
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <Link href="/cursos" passHref>
        <Button variant="ghost" className="mb-4">
          <ChevronLeft className="mr-2 h-4 w-4" /> Voltar para a lista de cursos
        </Button>
      </Link>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold flex items-center">
            <Book className="mr-2 h-6 w-6" />
            Curso: {cursoDecodificado}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <AcordeonModulos modulos={modulos} params={params} />
        </CardContent>
      </Card>
    </div>
  );
}

function AcordeonModulos({
  modulos,
  params,
}: {
  modulos: Modulo[];
  params: { curso: string };
}) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {modulos.map((modulo, index) => (
        <AccordionItem value={`item-${index}`} key={index}>
          <AccordionTrigger className="text-lg font-semibold">
            {modulo.nome}
          </AccordionTrigger>
          <AccordionContent>
            <ListaLicoes modulo={modulo} params={params} />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
