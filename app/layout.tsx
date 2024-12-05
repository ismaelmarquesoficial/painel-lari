import type { Metadata } from 'next'
import { AuthProvider } from './contexts/AuthContext'
import './globals.css'

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
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
} 