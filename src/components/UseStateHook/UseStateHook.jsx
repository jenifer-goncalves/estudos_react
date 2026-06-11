import { useState } from "react"

function UseStateHook(){
  const [nome, setNome] = useState('Clique em mudar.');
  const [idade, setIdade] = useState(0);
  const [eFalso, seteFalso] = useState(false);
   

  //2. Atualizar os estados
  const atualizarNome = () => {
    setNome('Jeni');
  }

  const atualizarIdade = () => {
    setIdade(idade + 1);
  }

  const verificarEstado = () => {
    seteFalso(!eFalso);
  }

  return(
    <div>
        <p>Nome: {nome}</p>
        <button onclick={atualizarNome}>Mudar</button>

        <p>Idade: {idade}</p>
        <button onclick={atualizarIdade}>Incrementar</button>

        <p>É Falso?: {eFalso ? 'NÃO' : 'SIM'}</p>
        <button onclick={verificarEstado}>Verificar</button>

    </div>
  )
}

export default UseStateHook