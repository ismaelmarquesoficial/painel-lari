import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'

// Cliente Supabase com service role key para bypass de RLS
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!, // Service role key em vez de anon key
  {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true
    }
  }
)

// Cliente normal para autenticação
const supabaseAuth = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export async function POST(request: Request) {
  try {
    const { name, email, password } = await request.json()

    await delay(1000)

    // Usar cliente normal para signup
    const { data: authData, error: authError } = await supabaseAuth.auth.signUp({
      email,
      password,
      options: {
        data: { 
          name,
          role: 'client'
        },
        emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`
      }
    })

    if (authError) {
      if (authError.message.includes('security purposes')) {
        return NextResponse.json(
          { error: 'Por favor, aguarde alguns segundos antes de tentar novamente.' },
          { status: 429 }
        )
      }
      throw authError
    }

    if (!authData.user) {
      throw new Error('Erro ao criar usuário')
    }

    await delay(1000)

    // Usar cliente admin para inserir o perfil
    const { error: profileError } = await supabaseAdmin
      .from('profiles')
      .insert({
        id: authData.user.id,
        email: authData.user.email,
        role: 'client'
      })

    if (profileError) {
      console.error('Erro ao criar perfil:', profileError)
      return NextResponse.json(
        { error: profileError.message },
        { status: 400 }
      )
    }

    return NextResponse.json({
      success: true,
      message: 'Conta criada com sucesso! Verifique seu email para confirmar o cadastro.'
    })

  } catch (error: any) {
    console.error('Erro:', error)
    return NextResponse.json(
      { error: error.message },
      { status: 400 }
    )
  }
} 