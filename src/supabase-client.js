import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL; // URL de Supabase
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY; // Clave de Supabase

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
