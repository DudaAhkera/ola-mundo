import styles from './BotaoPrincipal.modules.css';

export default function BotaoPrincipal ({ children, tamanho }){
    return (
        <button className={`
            ${styles.BotaoPrincipal}
            ${styles[tamanho]}
        `} >
            {children}
        </button>
    )
}