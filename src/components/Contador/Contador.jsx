import { useState } from "react"
import styles from "./contador.module.css";

function Contador(){
  const [contador, setContador] = useState(0);
  const contadorFormatado = String(contador).padStart(2, '0');
  

    // Atualizar o estado dos botões
    const aumentarNum = () => {
         setContador(contador + 1);
    };

    const diminuirNum = () => {
         setContador(contador - 1);
    };

    const reiniciarNum = () => {
         setContador(0)
    };

    const numSorteado = () => {
         setContador(Math.floor(Math.random()*100) + 1)
    };


  return(
    <>
    <h1 className={styles.tituloContador}>Projeto Contador ⏱</h1>

    <div className={styles.container}>
        <h2 className={styles.numero}>{contadorFormatado}</h2>

        <div className={styles.btnEspaco}>
            <button className={styles.btnAumentar} onClick={aumentarNum}>Aumentar</button>
            <button className={styles.btnReiniciar} onClick={reiniciarNum}>Reiniciar</button>
            <button className={styles.btnDiminuir} onClick={diminuirNum}>Diminuir</button>
            <button className={styles.btnSortear} onClick={numSorteado}>Sortear</button>
        </div>

    </div>
    </>
    
  );

};

export default Contador