import { TestConnection } from '@/components/TestConnection';

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Teste de Conexão</h1>
      <TestConnection />
    </div>
  );
}
