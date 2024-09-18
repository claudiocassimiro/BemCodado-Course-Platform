"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface Licao {
  nome: string;
  slug: string;
}

interface Modulo {
  nome: string;
  licoes: Licao[];
}

export function ListaLicoes({
  modulo,
  params,
}: {
  modulo: Modulo;
  params: { curso: string };
}) {
  const [licoesCompletas, setLicoesCompletas] = useState<string[]>([]);

  // Função para verificar se a lição foi acessada
  const isLicaoCompleta = (slug: string) => {
    return licoesCompletas.includes(slug);
  };

  // Função para marcar a lição como completa
  const marcarLicaoCompleta = (slug: string) => {
    if (!licoesCompletas.includes(slug)) {
      const novasLicoesCompletas = [...licoesCompletas, slug];
      setLicoesCompletas(novasLicoesCompletas);
      localStorage.setItem(
        "licoesCompletas",
        JSON.stringify(novasLicoesCompletas)
      );
    }
  };

  // Função para desmarcar a lição como completa
  const desmarcarLicaoCompleta = (slug: string) => {
    const novasLicoesCompletas = licoesCompletas.filter(
      (licao) => licao !== slug
    );
    setLicoesCompletas(novasLicoesCompletas);
    localStorage.setItem(
      "licoesCompletas",
      JSON.stringify(novasLicoesCompletas)
    );
  };

  // Nova função para validar se o aluno entrou na lição
  const validarEntradaLicao = (slug: string) => {
    const licoesAcessadas = JSON.parse(
      localStorage.getItem("licoesAcessadas") || "[]"
    );
    if (!licoesAcessadas.includes(slug)) {
      licoesAcessadas.push(slug);
      localStorage.setItem("licoesAcessadas", JSON.stringify(licoesAcessadas));
    }
  };

  useEffect(() => {
    const licoesCompletasArmazenadas = JSON.parse(
      localStorage.getItem("licoesCompletas") || "[]"
    );
    setLicoesCompletas(licoesCompletasArmazenadas);
  }, []);

  return (
    <ul className="space-y-2 pl-4">
      {modulo.licoes.map((licao) => {
        const licaoCompleta = isLicaoCompleta(licao.slug);
        return (
          <li key={licao.slug} className="flex items-center">
            {licaoCompleta ? (
              <>
                <span className="text-green-500 mr-2">✔️</span>
                <button
                  onClick={() => desmarcarLicaoCompleta(licao.slug)}
                  className="text-red-500 mr-2 text-xs hover:underline"
                  title="Desmarcar como completa"
                >
                  Aperte caso não tenha terminado a lição
                </button>
              </>
            ) : (
              <span className="w-6 mr-2"></span>
            )}
            <Link
              href={`/cursos/${encodeURIComponent(params.curso)}/${licao.slug}`}
              className="text-blue-500 hover:underline"
              onClick={() => {
                validarEntradaLicao(licao.slug);
                marcarLicaoCompleta(licao.slug);
              }}
            >
              {licao.nome}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
