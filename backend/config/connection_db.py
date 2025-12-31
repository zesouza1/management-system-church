from supabase import create_client
import os
from dotenv import load_dotenv

load_dotenv()
supabase_url = str(os.getenv("supabase_url"))
supabase_key = str(os.getenv("supabase_key"))

supabase = create_client(supabase_url, supabase_key)
def get_supabase_client():
    return supabase
