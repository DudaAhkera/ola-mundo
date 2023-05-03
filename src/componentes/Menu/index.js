import styles from './Menu.module.css';
import MenuLink from '../MenuLink';

export default function Menu () {

//    const localizacao = useLocation();

    return (
        <header>
            <nav className={styles.navegacao}>
{/*             <a className={styles.link} href="/"> Início</a>
                <a className={styles.link} href="/sobremim"> Sobre Mim</a> 
                <Link className={`
                    ${styles.link}
                    ${localizacao.pathname === '/' ? styles.linkDestacado : "" }
                `} to="/"> Início</Link>
                <Link className={`
                    ${styles.link}
                    ${localizacao.pathname === '/sobremim' ? styles.linkDestacado : "" }
                `} to="sobremim"> Sobre Mim</Link>*/}
                <MenuLink to='/'>
                    Início
                </MenuLink>
                <MenuLink to='/sobremim'>
                    Sobre mim...
                </MenuLink>

            </nav>
        </header>
    )
}