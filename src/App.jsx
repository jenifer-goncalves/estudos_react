import Alunos from './components/Alunos/Alunos.jsx';
import Botao from './components/Button/Button.jsx';
import Card from './components/Card/Card.jsx';


function App() {
  return (
    <>
    <img 
      src={imagem} 
      alt="Tentativa" 
    />

    <Alunos nome={'jeni'} idade={17} ativo={true}/>
    <Alunos nome={'jeni'} idade={17} ativo={true}/>
    <Alunos nome={'jeni'} idade={17} ativo={true}/>

    <Botao texto={"Clique aqui!"}/>

    <Card/>
    </>
  );
};

export default App