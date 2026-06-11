import Alunos from './components/Alunos/Alunos.jsx';
import Botao from './components/Button/Button.jsx';
import Card from './components/Card/Card.jsx';
import MsgUsuario from './components/MensagemUsuario/MsgUsuario.jsx';
import UseStateHook from './components/UseStateHook/UseStateHook.jsx';
import Contador from './components/Contador/Contador.jsx';


function App() {

  const objeto = 
  {
    id: 1, 
    nome:'João'
  };

  const styles = 
  {
    containerFrutas: 'classe-azul',
    'container-legumes': 'classe-verde'
  };

  return (
    <>

    <Alunos nome={'jeni'} idade={17} ativo={true}/>
    <Alunos nome={'jeni'} idade={17} ativo={true}/>
    <Alunos nome={'jeni'} idade={17} ativo={true}/>

    <Botao texto={"Clique aqui!"}/>

    <Card/>

    <p>Ponto: {objeto.nome}</p>
    <p>Colchetes: {objeto['nome']}</p>

    <MsgUsuario nomeUsuario={'SENAI'}/>
    <MsgUsuario autenticado={true} nomeUsuario={'SENAI'}/>

    <UseStateHook/>
    <Contador/>
    </>
  );
};

export default App