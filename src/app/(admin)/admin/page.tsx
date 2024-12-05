import { DocumentList } from '@/components/DocumentList';

export default function AdminDashboard() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Painel Administrativo</h1>
      
      <div className="grid gap-8">
        <section>
          <DocumentList />
        </section>
      </div>
    </div>
  );
}
