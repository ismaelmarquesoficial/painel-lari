import { DocumentUpload } from '@/components/DocumentUpload';
import { DocumentList } from '@/components/DocumentList';

export default function ClientDashboard() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Base de Conhecimento</h1>
      
      <div className="grid gap-8">
        <section>
          <h2 className="text-xl font-semibold mb-4">Adicionar Documento</h2>
          <DocumentUpload />
        </section>

        <section>
          <DocumentList />
        </section>
      </div>
    </div>
  );
}
