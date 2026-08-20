import { useState, useEffect } from "react"


function Produto(){
const [nome, setNome] = useState([]);
const [erro, setErro] = useState("");


async function ProdutoApi(){
setErro("");

try{
    const resposta = await fetch("https://ranekapi.origamid.dev/json/api/produto/");
    console.log(resposta)

    const pesquisa = resposta.json;
    setNome(pesquisa)

    
} catch (error){
        console.log(error.message)

        if (error.message === "Failed to fetch" || !navigator.onLine){
            setErro("Não foi possível conectar ao servidor. Verifique sua internet.");
        } else {
            setErro(error.message)
        }

}
    


return(
    <>
    <h1>{nome.nome}</h1>
    <p>{preco.preco}</p>
    </>
)

}
    
}


export default Produto
