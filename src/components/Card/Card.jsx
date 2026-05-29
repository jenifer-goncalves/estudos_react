import styles from "./card.module.css";

function Card({imagem, titulo, p}){
    return (
        <>
            <div className={styles.card}>
                <img>{imagem}</img>
                <h1>{titulo}</h1>
                <p>{p}</p>
            </div>
        </>
    );
};

export default Card