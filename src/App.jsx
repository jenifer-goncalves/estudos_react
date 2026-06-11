import Alunos from './components/Alunos/Alunos.jsx';
import Botao from './components/Button/Button.jsx';
import Card from './components/Card/Card.jsx';
import MsgUsuario from './components/MensagemUsuario/MsgUsuario.jsx';


function App() {
  return (
    <>

    <Alunos nome={'jeni'} idade={17} ativo={true}/>
    <Alunos nome={'jeni'} idade={17} ativo={true}/>
    <Alunos nome={'jeni'} idade={17} ativo={true}/>

    <Botao texto={"Clique aqui!"}/>

    <Card/>

    <MsgUsuario nomeUsuario={'SENAI'}/>
    <MsgUsuario autenticado={true} nomeUsuario={'SENAI'}/>
    </>
  );
};

export default App