'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'

interface Profile {
  id: string
  email: string
  role: string
  name?: string
}

export default function DashboardPage() {
  const router = useRouter()
  const [profile, setProfile] = useState<Profile | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [isEditing, setIsEditing] = useState(false)
  const [editForm, setEditForm] = useState({
    name: ''
  })

  useEffect(() => {
    async function loadProfile() {
      try {
        const { data: { session }, error: sessionError } = await supabase.auth.getSession()

        if (sessionError) {
          throw sessionError
        }

        if (!session) {
          router.push('/login')
          return
        }

        // Criar/atualizar perfil via API
        const response = await fetch('/api/profile', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userId: session.user.id,
            email: session.user.email,
            name: session.user.user_metadata?.name
          })
        })

        if (!response.ok) {
          throw new Error('Erro ao carregar perfil')
        }

        const profile = await response.json()
        setProfile(profile)

      } catch (err) {
        console.error('Erro:', err)
        setError(err instanceof Error ? err.message : 'Erro ao carregar perfil')
      } finally {
        setLoading(false)
      }
    }

    loadProfile()
  }, [router])

  useEffect(() => {
    if (profile) {
      setEditForm({ name: profile.name || '' })
    }
  }, [profile])

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push('/login')
  }

  const handleUpdateProfile = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: profile?.id,
          email: profile?.email,
          name: editForm.name
        })
      })

      if (!response.ok) {
        throw new Error('Erro ao atualizar perfil')
      }

      const updatedProfile = await response.json()
      setProfile(updatedProfile)
      setIsEditing(false)
    } catch (err) {
      console.error('Erro:', err)
      setError(err instanceof Error ? err.message : 'Erro ao atualizar perfil')
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Carregando...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg text-red-600">{error}</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center space-x-4">
              <h1 className="text-xl font-semibold">Dashboard</h1>
              <nav className="hidden md:flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-gray-900">Documentos</a>
                <a href="#" className="text-gray-600 hover:text-gray-900">Configurações</a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-sm">
                <p className="text-gray-900">{profile?.name || profile?.email}</p>
                <p className="text-gray-500 text-xs">{profile?.role}</p>
              </div>
              <button
                onClick={handleSignOut}
                className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700"
              >
                Sair
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white shadow rounded-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">
                Bem-vindo, {profile?.name || profile?.email}!
              </h2>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="text-blue-600 hover:text-blue-500"
              >
                {isEditing ? 'Cancelar' : 'Editar Perfil'}
              </button>
            </div>

            {isEditing ? (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Nome</label>
                  <input
                    type="text"
                    value={editForm.name}
                    onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                    className="mt-1 block w-full rounded-md border p-2"
                  />
                </div>
                <button
                  onClick={handleUpdateProfile}
                  disabled={loading}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 disabled:bg-blue-400"
                >
                  {loading ? 'Salvando...' : 'Salvar'}
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <p>Aqui você poderá:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Gerenciar seus documentos</li>
                  <li>Visualizar informações</li>
                  <li>Atualizar seu perfil</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
} 