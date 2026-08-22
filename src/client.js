import { createClient } from '@supabase/supabase-js'

const URL = 'https://zopgpvyxaaxzqjtthylx.supabase.co'
const API_KEY = 'sb_publishable_TK6Anblsfr-9rleeXv3Z3w_czhsGoiz'

export const supabase = createClient(URL, API_KEY);