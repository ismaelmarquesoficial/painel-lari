'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'

interface DocumentFormData {
  title: string
  content: string
  category: string
  file?: File
}

export function DocumentUpload() {
  const [formData, setFormData] = useState<DocumentFormData>({
    title: '',
    content: '',
    category: '',
  })
  const [file, setFile] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess(false)

    try {
      const user = (await supabase.auth.getUser()).data.user
      if (!user) throw new Error('Usuário não autenticado')

      let fileUrl = ''
      
      // Upload do arquivo se existir
      if (file) {
        const fileExt = file.name.split('.').pop()
        const fileName = `${Math.random()}.${fileExt}`
        const filePath = `${user.id}/${fileName}`

        const { error: uploadError, data } = await supabase.storage
          .from('documents')
          .upload(filePath, file)

        if (uploadError) throw uploadError
        fileUrl = data.path
      }

      // Inserir documento no banco
      const { error: insertError } = await supabase
        .from('documents')
        .insert({
          title: formData.title,
          content: formData.content,
          category: formData.category,
          file_url: fileUrl,
          user_id: user.id
        })

      if (insertError) throw insertError

      setSuccess(true)
      setFormData({ title: '', content: '', category: '' })
      setFile(null)

    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao salvar documento')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Novo Documento</h3>
          <p className="mt-1 text-sm text-gray-500">
            Adicione um novo documento à sua base de conhecimento.
          </p>
        </div>

        <div className="mt-5 md:mt-0 md:col-span-2 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Título</label>
            <input
              type="text"
              required
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Categoria</label>
            <input
              type="text"
              required
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Conteúdo</label>
            <textarea
              rows={4}
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Arquivo (opcional)</label>
            <input
              type="file"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
            />
          </div>

          {error && (
            <div className="text-sm text-red-600">{error}</div>
          )}

          {success && (
            <div className="text-sm text-green-600">Documento salvo com sucesso!</div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
          >
            {loading ? 'Salvando...' : 'Salvar Documento'}
          </button>
        </div>
      </div>
    </form>
  )
} 