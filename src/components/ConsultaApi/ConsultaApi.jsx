import { useState, useEffect } from "react"
import styles from "./consultaApi.module.css"

function Consultar(){



return(
    <>
    <main>
        <h1 className={styles.tituloPrincipal}>Consulta de API</h1>
        <section>
            <button>Consultar</button>
            <h2>Usuários da JSON Placeholder</h2>
            <span>Nome</span>
            <span></span>
            <span></span>
        </section>
    </main>
    </>
)

}

export default Consultar