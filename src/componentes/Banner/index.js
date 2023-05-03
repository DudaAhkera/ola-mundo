import styles from './Banner.module.css';
import circuloColorido from 'assets/circulo_colorido.png';
import minhaFoto from 'assets/minha_foto.png';

export default function Banner () {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
               <h1 className={styles.titulo}>
                    Olá, mundo!
               </h1>
               <p className={styles.paragrafo}>
                    Boas vindas ao meu espaco pessoal. Meu nome é Antônio Edvaldo, instrutor de Front-end da Alura. Aqui compartilho vários conhecimentos, espero que apreenda algo novo :)
               </p>
            </div>
            <div className={styles.imagens}>
                <img className={styles.circuloColorido} src={circuloColorido} alt="círculo colorido" aria-hidden={true}/>
                <img className={styles.minhaFoto} src={minhaFoto} alt='foto so Antônio Evaldo sorrindo'/>   
            </div>
        </div>
    )
}