import { useState, useEffect } from "react"
import styles from "./Tema.module.css";

function Tema() {
    const [contador, setContador] = useState(0);

    const [nome, setNome] = useState("");

    const [temaEscuro, setTemaEscuro] = useState(false);


    useEffect(() => {
        console.log('Componente carregado pela primeira vez')
    }, []);

    useEffect(() => {
        console.log('Contador foi alterado para: ', contador)
    }, [contador]);

    useEffect(() => {
        console.log('Tema alterado:', temaEscuro ? "Escuro" : "Claro")
    }, [temaEscuro]);


    function aumentarContador() {
        setContador(contador + 1);
    }

    function diminuirContador() {
        setContador(contador - 1);
    }

    function alternarTema() {
        setTemaEscuro(!temaEscuro)

    }

    return (
        <main className={`${styles.container}${temaEscuro ? styles.temaEscuro : styles.temaClaro}`}>
            <h1 className={styles.titulo}>Exemplos de useState e useEffect</h1>

            {/* Caso 1: Contador */}
            <section className={styles.card}>
                <h1 >1. Contador (useState)</h1>
                <p className={styles.valor}>{contador}</p>
                <div className={styles.botoes}>
                    <button className={styles.botaoTema} onClick={aumentarContador}>+</button>
                    <button className={styles.botaoTema} onClick={diminuirContador}>-</button>
                </div>
                <p>O useEffect observa a variável <strong>contador</strong> e executa sempre que ela muda</p>
            </section>

            {/* Caso 2: Campo de texto */}
            <section className={styles.card}>
                <h1>2. Campo de texto (useState)</h1>
                <input className={styles.input} type="text" placeholder="Digite seu nome" value={nome} onChange={(e) => setNome(e.target.value)}/>
                <p>Olá {nome || "visitante"}</p>
            </section>

            {/* Caso 3: Alternância de tema */}
            <section className={styles.card}>
                <h1>3. Alternância de tema (useState)</h1>
                <button className={styles.botaoTema} onClick={alternarTema}>
                    Alternar para tema {temaEscuro ? "Claro" : "Escuro"}
                </button>
                <p>O useEffect observa a variável <strong>temaEscuro</strong> e o executa sempre que o tema é alterado</p>
            </section>
        </main>
    );

}



export default Tema