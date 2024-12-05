import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req: request, res });
  
  // Verificar a sessão atual
  const { data: { session } } = await supabase.auth.getSession();

  // Rotas públicas que não precisam de autenticação
  const publicRoutes = ['/login', '/register'];
  if (publicRoutes.includes(request.nextUrl.pathname)) {
    if (session) {
      // Se já estiver logado, redireciona para a home
      return NextResponse.redirect(new URL('/', request.url));
    }
    return res;
  }

  // Rotas protegidas que precisam de autenticação
  if (!session) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Verificar acesso à área administrativa
  if (request.nextUrl.pathname.startsWith('/admin')) {
    const { data: profile } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', session.user.id)
      .single();

    if (profile?.role !== 'admin') {
      // Se não for admin, redireciona para a home
      return NextResponse.redirect(new URL('/', request.url));
    }
  }

  return res;
}

// Configurar quais rotas o middleware deve processar
export const config = {
  matcher: [
    // Rotas que precisam de autenticação
    '/',
    '/admin/:path*',
    // Rotas públicas
    '/login',
    '/register',
    // Ignorar arquivos estáticos
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
