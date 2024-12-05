import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lari Painel',
  description: 'Painel de controle',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
} 