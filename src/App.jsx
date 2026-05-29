import Aluno from './components/Alunos/Alunos.jsx';
import Card from './components/Card/Card.jsx';

function Aluno() {
  
  return (
    <>
      <p>Nome: {Aluno.nome}</p>
      <p>Idade: {Aluno.idade}</p>
      <p>Ativo: {Aluno.ativo}</p>
    </>
  );
}

export default App(){
  return (
    <section>
      <Aluno />
      <Aluno />
      <Aluno />
    </section>
  );
}