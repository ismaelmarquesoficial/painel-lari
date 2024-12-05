export interface Document {
  id: string;
  title: string;
  content: string;
  category: string;
  file_url?: string;
  created_at: string;
  updated_at: string;
  user_id: string;
}

export interface Category {
  id: string;
  name: string;
  description?: string;
  created_at: string;
}

export interface User {
  id: string;
  email: string;
  role: 'client' | 'admin';
  created_at: string;
}
