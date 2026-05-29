import Aluno from './components/Alunos/Alunos.jsx';
import Card from './components/Card/Card.jsx';

function App() {
  

  return (
    <>
      <p>Nome: {Aluno.nome}</p>
      <p>Idade: {Aluno.idade}</p>
      <p>Ativo: {Aluno.ativo}</p>
    </>
  );
}

export default App