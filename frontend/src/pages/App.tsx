function App() {


  return (
    <>
      <h1 className="flex justify-center">Sistema Paroquial Online</h1>
      <form>
        <div className="flex flex-col gap-4">
        <label className="text-start">E-mail:</label>
        <input type="text" placeholder="Digite seu e-mail" className="input-field justify-center "/>
        <label className="text-start">Senha:</label>
        <input type="password" placeholder="Digite sua Senha" className="input-field"/>
        <button type="submit" className="button">Entrar</button>
        </div>
      </form>
      <button className="flex justify-items-center">Esqueceu sua senha?</button>
    </>
  )
};

export default App
