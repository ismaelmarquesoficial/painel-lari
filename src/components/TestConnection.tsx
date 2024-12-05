'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase';

export function TestConnection() {
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [error, setError] = useState<string | null>(null);
  const supabase = createClient();

  useEffect(() => {
    async function testConnection() {
      try {
        const { data, error } = await supabase.from('profiles').select('count');
        if (error) throw error;
        setStatus('success');
      } catch (err: any) {
        setStatus('error');
        setError(err.message);
      }
    }

    testConnection();
  }, [supabase]);

  return (
    <div className="p-4 rounded-lg border">
      <h2 className="text-lg font-semibold mb-2">Status da Conexão</h2>
      {status === 'loading' && <p>Testando conexão...</p>}
      {status === 'success' && (
        <p className="text-green-600">Conexão estabelecida com sucesso!</p>
      )}
      {status === 'error' && (
        <div>
          <p className="text-red-600">Erro na conexão:</p>
          <pre className="bg-red-50 p-2 mt-2 rounded">{error}</pre>
        </div>
      )}
    </div>
  );
}
