'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';

export function DocumentUpload() {
  const [uploading, setUploading] = useState(false);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [content, setContent] = useState('');
  const [file, setFile] = useState<File | null>(null);

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !category) return;

    try {
      setUploading(true);

      let fileUrl = '';
      
      // Upload do arquivo se existir
      if (file) {
        const fileExt = file.name.split('.').pop();
        const fileName = `${Math.random()}.${fileExt}`;
        const { data: fileData, error: uploadError } = await supabase.storage
          .from('documents')
          .upload(fileName, file);

        if (uploadError) throw uploadError;
        
        // Get public URL
        const { data: { publicUrl } } = supabase.storage
          .from('documents')
          .getPublicUrl(fileName);
          
        fileUrl = publicUrl;
      }

      // Criar registro no banco de dados
      const { data, error } = await supabase
        .from('documents')
        .insert([
          {
            title,
            category,
            content,
            file_url: fileUrl || null,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
          },
        ])
        .select();

      if (error) throw error;

      // Limpar formulário
      setTitle('');
      setCategory('');
      setContent('');
      setFile(null);
      alert('Documento enviado com sucesso!');
    } catch (error) {
      console.error('Erro ao fazer upload:', error);
      alert('Erro ao fazer upload do documento');
    } finally {
      setUploading(false);
    }
  };

  return (
    <form onSubmit={handleUpload} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Título
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </label>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Categoria
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </label>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Conteúdo
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            rows={4}
          />
        </label>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Arquivo (opcional)
          <input
            type="file"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            className="mt-1 block w-full"
          />
        </label>
      </div>

      <button
        type="submit"
        disabled={uploading}
        className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50"
      >
        {uploading ? 'Enviando...' : 'Enviar Documento'}
      </button>
    </form>
  );
}
