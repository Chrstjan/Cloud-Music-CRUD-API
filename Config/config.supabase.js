import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();

const supabaseUrl = process.env.Supabase_url;
const supabaseApiKey = process.env.Supabase_api_key;

export const supabase = createClient(supabaseUrl, supabaseApiKey);
