import { useState } from "react"
import styles from "./contador.module.css";

function Contador(){
  const [contador, setContador] = useState(0);
  const [estadoNum, setEstadoNum] = useState(false)

 const aumentarNum = () => {
        setContador(contador + 1);
  }

 const diminuirNum = () => {
        setContador(contador - 1);
  }

 const reiniciarNum = () => {
        setContador(contador === 0)
  }



  return(

    
    <div className={styles.container}>
        <h2 className={styles.numero}>{contador}</h2>

        <div className={styles.btnEspaco}>
            <button className={styles.btnAumentar} onclick={aumentarNum}>Aumentar</button>
            <button className={styles.btnReiniciar} onclick={reiniciarNum}>Reiniciar</button>
            <button className={styles.btnDiminuir} onclick={diminuirNum}>Diminuir</button>
        </div>

    </div>
  )

}



export default Contador