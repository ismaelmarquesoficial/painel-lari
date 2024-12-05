import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json()

    // Tentar fazer login primeiro
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    })

    if (error) {
      // Traduzir mensagens de erro comuns
      if (error.message === 'Invalid login credentials') {
        return NextResponse.json(
          { error: 'Email ou senha incorretos' },
          { status: 400 }
        )
      }

      return NextResponse.json(
        { error: error.message },
        { status: 400 }
      )
    }

    // Se o login foi bem sucedido, buscar o perfil
    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', data.user.id)
      .single()

    if (profileError) {
      console.error('Erro ao buscar perfil:', profileError)
      // Mesmo se houver erro ao buscar o perfil, permitir o login
    }

    // Retornar dados da sessão
    return NextResponse.json({
      success: true,
      user: {
        id: data.user.id,
        email: data.user.email,
        ...data.user.user_metadata,
        profile: profile || null
      },
      session: data.session
    })

  } catch (error: any) {
    console.error('Erro no login:', error)
    return NextResponse.json(
      { error: 'Erro ao fazer login. Tente novamente.' },
      { status: 500 }
    )
  }
} 