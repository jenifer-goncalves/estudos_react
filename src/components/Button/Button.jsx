import styles from "./button.module.css";

function Botao({texto}){
    return (
        <>
            <div>
                <button className={styles.botao}>
                {texto}
                </button>
            </div>
        </>
    );
};

export default Botao