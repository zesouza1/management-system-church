from config.connection_db import get_supabase_client

supabase = get_supabase_client()

def login_user(email: str, password: str):
    response = supabase.auth.sign_in_with_password({"email": email, "password": password})
    user = response.user
    if user:
        return {
            "message": "Login realizado com sucesso"
        }
    else:
        print("Login failed:", response.user)
        return {"message": "Login não realizado"}

    

    
def logoff_user():
    response = supabase.auth.sign_out()
    if response is None:
        return {"message": "O usuario foi deslogado com sucesso"}
    else:
        print("Logout failed:", response.user)
        return {"message": "Logoff não realizado"}