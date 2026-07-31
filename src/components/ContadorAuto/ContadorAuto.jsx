import { useState, useEffect } from "react"
import styles from "./ContadorAuto.module.css"

function ContadorAuto(){
  const [contador, setContador] = useState(0);
  const contadorFormatado = String(contador).padStart(2, '0');

  const [automatico, setAutomatico] = useState(false);
  
  useEffect(() => {
    
    let relogio;

    if (automatico) {
        relogio = setInterval(() => {
            setContador((valorAtual) => valorAtual + 1);
        }, 1000);
    }

        return () => clearInterval(relogio);
    }, [automatico]);

    const alternarAutomatico = () => {
        setAutomatico(!automatico);
    }

    // Atualizar o estado dos botões
    const aumentarNum = () => {
         setContador(contador + 1);
    };

    const diminuirNum = () => {
         setContador(contador - 1);
    };

    const reiniciarNum = () => {
         setContador(0)
         setAutomatico(false)
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
            <button classname={styles.btnAuto} onClick={alternarAutomatico}>
                {automatico ? 'Parar' : 'Iniciar'}
            </button>
        </div>

    </div>
    </>
    
  );

};

export default ContadorAuto