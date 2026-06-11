import styles from "./MsgUsuario.module.css"

function MsgUsuario({autenticado=false, nomeUsuario}){
    autenticado ? "Bem vindo!" + nomeUsuario : "Usuário não encontrado"

}

export default MsgUsuario