'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Document } from '@/types';

export function DocumentList() {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDocuments();
  }, []);

  async function fetchDocuments() {
    try {
      const { data, error } = await supabase
        .from('documents')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setDocuments(data || []);
    } catch (error) {
      console.error('Erro ao buscar documentos:', error);
      alert('Erro ao carregar documentos');
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Documentos</h2>
      <div className="grid gap-4">
        {documents.map((doc) => (
          <div
            key={doc.id}
            className="p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="font-medium">{doc.title}</h3>
            <p className="text-sm text-gray-500">Categoria: {doc.category}</p>
            {doc.content && (
              <p className="mt-2 text-gray-600">{doc.content}</p>
            )}
            {doc.file_url && (
              <a
                href={doc.file_url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-indigo-600 hover:text-indigo-500"
              >
                Ver arquivo anexo
              </a>
            )}
            <p className="mt-2 text-sm text-gray-500">
              Criado em: {new Date(doc.created_at).toLocaleDateString()}
            </p>
          </div>
        ))}
        {documents.length === 0 && (
          <p className="text-gray-500">Nenhum documento encontrado</p>
        )}
      </div>
    </div>
  );
}
