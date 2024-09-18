'use client'

import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'BemCodado - Plataforma de Cursos',
  description: 'Aprenda programação com a BemCodado',
}

export function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <header className="bg-blue-600 text-white p-4">
          <h1 className="text-2xl font-bold">BemCodado</h1>
        </header>
        {children}
      </body>
    </html>
  )
}