import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function POST(request: Request) {
  try {
    const { userId, email, name } = await request.json()

    const { data: profile, error } = await supabaseAdmin
      .from('profiles')
      .upsert([
        {
          id: userId,
          email: email,
          role: 'client',
          name: name || ''
        }
      ])
      .select()
      .single()

    if (error) throw error

    return NextResponse.json(profile)
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    )
  }
} 