import { useState, useEffect } from "react"
import styles from "./consultaApi.module.css"

function ConsultarApi(){
const [nome, setNome] = useState([]);
const [erro, setErro] = useState("");
const [carregando, setCarregando] = useState(false);

async function buscarUsuarios(){
    setCarregando(true)
    setErro("");

    try{

        // const resposta = await fetch("https://httpbin.org/status/401");
        const resposta = await fetch("https://jsonplaceholder.typicode.com/users");
        console.log(resposta)

        if (!resposta.ok){

        }

        // Converte a resposta da API em json (ela era uma promisse)
        const dados = await resposta.json();
        setNome(dados);

    } catch (error){

    } finally {
        setCarregando(false)
    }
}


return(

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
    
)

}

export default ConsultarApi