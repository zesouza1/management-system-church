
function App() {
  const System = {name: 'system', href: '/System.tsx'};


  return (
    <>
      <h1 className="flex justify-center m-10">Sistema Paroquial Online</h1>
      <form className="flex flex-col p-6 shadow-lg justify-center rounded-md w-96 m-auto bg-orange-100">
        <div className="flex flex-col gap-2 items-center">
        <label className="text-start">E-mail:</label>
        <input type="text" placeholder="Digite seu e-mail" className="input-field bg-white border-1 pl-3"/>
        <label className="text-start">Senha:</label>
        <input type="password" placeholder="Digite sua Senha" className="input-field bg-white border-1 pl-3"/>
        <button className="m-2 bg-amber-500 text-white hover:bg-amber-600 w-20"><a href={System.href}>Entrar</a></button>
        <button className="m-1 bg-amber-500 text-white flex-col-none hover:bg-amber-600 w-50">Esqueceu sua senha?</button>
        </div>
      </form>      
    </>
  )
};

export default App
