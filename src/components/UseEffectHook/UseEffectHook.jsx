import {useEffect, useState } from "react";
import styles from "./UseEffectHook.module.css"

function UseEffectHook(){
    
    const [contador, setContador] = useState(0);

    const titulo = 'Clicou '
    console.log('Sempre ocorre, mas antes do useEffect')


    useEffect(() => {
        console.log('Ocorre quando renderizar')
    });

    useEffect(() => {
        console.log('Ocorre quando renderizar primeira vez')
    }, []);

    useEffect(() => {
        console.log('Ocorre quando renderizar o Contador')
    }, [contador]);

    useEffect(() => {
        document.title = titulo + contador
    }, [contador]);


    return <button className={styles.btnAumentar}
    onClick={() => setContador(contador + 1)}>{contador}</button>
}

export default UseEffectHook