import { useState } from "react"
import styles from "./contador.module.css";

function Contador(){
  const [contador, setContador] = useState(0);
  const numeroSort = (Math.floor(Math.random()*50) + 1);

    // Atualizar o estado dos botões
    const aumentarNum = () => {
        return setContador(contador + 1);
    };

    const diminuirNum = () => {
        return setContador(contador - 1);
    };

    const reiniciarNum = () => {
        return setContador(0)
    };

    const numSorteado = () => {
        return setContador(numeroSort)
    };


  return(
    <>
    <h1 className={styles.tituloContador}>Projeto Contador</h1>

    <div className={styles.container}>
        <h2 className={styles.numero}>{contador}</h2>

        <div className={styles.btnEspaco}>
            <button className={styles.btnAumentar} onclick={aumentarNum}>Aumentar</button>
            <button className={styles.btnReiniciar} onclick={reiniciarNum}>Reiniciar</button>
            <button className={styles.btnDiminuir} onclick={diminuirNum}>Diminuir</button>
            <button className={styles.btnSortear} onclick={numSorteado}>Sortear</button>
        </div>

    </div>
    </>
    
  );

};

export default Contador