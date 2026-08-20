import { useState, useEffect } from "react"


function Produto(){
 useEffect(() => {
    async function ProdutoApi(){
    const resposta = await fetch("https://ranekapi.origamid.dev/json/api/produto");
    console.log(resposta)

    const pesquisa = await resposta.json();
    console.log(pesquisa)
    console.log(pesquisa.nome)
    console.log(pesquisa.preco)

 }
  
 ProdutoApi();

   
 }, []);
    
 return(
    <>
    </>
 )

    
    
    
}
    



export default Produto
