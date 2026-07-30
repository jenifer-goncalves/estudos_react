import { useState, useEffect } from "react"
import styles from "./Tema.module.css";

function Tema() {
    const [contador, setContador] = useState(0);

    const [nome, setNome] = useState("");

    const [temaEscuro, setTemaEscuro] = useState(false);


    useEffect(() => {
    }, []);

    useEffect(() => {
    }, [contador]);

    useEffect(() => {
    }, [temaEscuro]);


    function aumentarContador() {
        setContador(contador + 1);
    }

    function diminuirContador() {
        setContador(contador - 1);
    }

    function alternarTema() {

    }

    return (
        <main className={`${styles.container}${temaEscuro ? styles.temaEscuro : styles.temaClaro}`}>
            <h1 className={styles.titulo}>Exemplos de useState e useEffect</h1>

            {/* Caso 1: Contador */}
            <section className={styles.card}>
            </section>

            {/* Caso 2: Campo de texto */}
            <section className={styles.card}>
            </section>

            {/* Caso 3: Alternância de tema */}
            <section className={styles.card}>
            </section>
        </main>
    );

}



export default Tema