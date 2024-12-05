-- Criar extensão para UUID se ainda não existir
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Criar ou atualizar a tabela profiles
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    name TEXT,
    role TEXT NOT NULL CHECK (role IN ('admin', 'client')),
    created_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Habilitar RLS (Row Level Security)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Remover políticas existentes se necessário
DO $$ BEGIN
    DROP POLICY IF EXISTS "Usuários podem ver seus próprios perfis" ON public.profiles;
    DROP POLICY IF EXISTS "Usuários podem atualizar seus próprios perfis" ON public.profiles;
    DROP POLICY IF EXISTS "Usuários podem inserir seus próprios perfis" ON public.profiles;
EXCEPTION
    WHEN undefined_object THEN
        NULL;
END $$;

-- Criar políticas de segurança
CREATE POLICY "Usuários podem ver seus próprios perfis"
    ON public.profiles
    FOR SELECT
    USING (auth.uid() = id);

CREATE POLICY "Usuários podem atualizar seus próprios perfis"
    ON public.profiles
    FOR UPDATE
    USING (auth.uid() = id);

CREATE POLICY "Usuários podem inserir seus próprios perfis"
    ON public.profiles
    FOR INSERT
    WITH CHECK (auth.uid() = id);

-- Criar função para atualizar updated_at se não existir
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Remover trigger se existir e criar novamente
DROP TRIGGER IF EXISTS update_profiles_updated_at ON public.profiles;
CREATE TRIGGER update_profiles_updated_at
    BEFORE UPDATE ON public.profiles
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Criar índices se não existirem
CREATE INDEX IF NOT EXISTS profiles_email_idx ON public.profiles (email);
CREATE INDEX IF NOT EXISTS profiles_role_idx ON public.profiles (role); 