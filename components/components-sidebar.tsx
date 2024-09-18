'use client'

import Link from 'next/link'
import { useRouter } from 'next/router'

interface SidebarProps {
  cursos: string[]
  modulos: string[]
  cursoAtual?: string
}

export function SidebarComponent({ cursos, modulos, cursoAtual }: SidebarProps) {
  const router = useRouter()

  return (
    <nav className="w-64 bg-gray-100 p-4">
      <h2 className="text-xl font-bold mb-4">Cursos</h2>
      <ul>
        {cursos.map((curso) => (
          <li key={curso} className="mb-2">
            <Link href={`/cursos/${curso}`}>
              <span className={`block p-2 rounded ${cursoAtual === curso ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'}`}>
                {curso}
              </span>
            </Link>
            {cursoAtual === curso && (
              <ul className="ml-4 mt-2">
                {modulos.map((modulo) => (
                  <li key={modulo}>
                    <Link href={`/cursos/${curso}/${modulo}`}>
                      <span className={`block p-2 rounded ${router.query.modulo === modulo ? 'bg-blue-300' : 'hover:bg-gray-200'}`}>
                        {modulo}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}