'use client';

import { useAuth } from '@/hooks/useAuth';
import Link from 'next/link';

export function Navigation() {
  const { user, signOut } = useAuth();

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-xl font-bold text-indigo-600">
                Base de Conhecimento
              </Link>
            </div>
          </div>

          {user && (
            <div className="flex items-center">
              <span className="text-gray-700 mr-4">{user.email}</span>
              <button
                onClick={signOut}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sair
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
