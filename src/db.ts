import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = import.meta.env.VITE_PUBLIC_SUPABASE_URL.toString();
const SUPABASE_ANON_KEY = import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY.toString();

export const db = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
