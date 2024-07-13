import styles from './Rodape.module.css';
import logo from './logo.png'

function Rodape() {
    return(
        <footer className={styles.rodape}>
            <img className={styles.img} src={logo} alt='logo AluraFlix'/>
            <h2>Desenvolvido por Yudi Kavaguti.</h2>
        </footer>

    )
}

export default Rodape;