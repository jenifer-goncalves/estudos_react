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

        const resposta = await fetch("https://httpbin.org/status/401");
        console.log(resposta)

        if (!resposta.ok){

            if (resposta.status === 500){
                throw new Error("Erro 500: O banco de dados ou o servidor falhou.")
            }

            if (resposta.status === 401){
                throw new Error("Erro 401: Usuário não autorizado.");
            }

            throw new Error(`Erro ${resposta.status}: URL não encontrada ou inválida.`);

        }

        // Converte a resposta da API em json (ela era uma promisse)
        const dados = await resposta.json();
        setNome(dados);

    } catch (error){
        console.log(error.message)

        if (error.message === "Failed to fetch" || !navigator.onLine){
            setErro("Não foi possível conectar ao servidor. Verifique sua internet.");
        } else {
            setErro(error.message)
        }

    } finally {
        setCarregando(false)
    }
}


return(

    <main className={styles.container}>
        <h1 className={styles.titulo}>Consulta de API</h1>
        <section className={styles.card}>
            <button className={styles.buscarButton} onClick={buscarUsuarios} disable={carregando}>
                {carregando ? "Buscando..." : "Consultar"}
            </button>
            <h2>Usuários da JSON Placeholder</h2>

            {/* Exibe mensagem de carregamento */}
            {carregando && <p>Carregando usuários...</p>}

            {/* Exibe mensagem de erro */}
            {erro && <p className={styles.erro}>{erro}</p>}

            {/* Exibe lista de usuários */}
            {!carregando && !erro &&(
                <ul className={styles.lista}>
                    {nome.map((nome) => (
                        <li key={nome.id} className={styles.item}>
                            <h3>{nome.name}</h3>
                            <p>
                                <strong>E-mail:</strong> {nome.email}
                            </p>
                            <p>
                                <strong>Cidade:</strong> {nome.address.city}
                            </p>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    </main>
    
);

}

export default ConsultarApi