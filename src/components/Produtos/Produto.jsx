import { useState, useEffect } from "react"


const Produto = ({ produto }) => {

    const [pesquisa, setPesquisa] = useState(null);
    
    useEffect(() => {

    async function ProdutoApi(){

        if (produto !== null){
        const resposta = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`);

        const pesquisa = await resposta.json();
        setPesquisa(pesquisa)
        } 
    }
    ProdutoApi();
}, [produto]);

if (pesquisa === null) return null;
  
 return(
    <main>
        <h1>Produtos</h1>
        <p>Nome: {pesquisa.nome}</p>
        <p>Preço: {pesquisa.preco}</p>
    </main>
 );
};


export default Produto
