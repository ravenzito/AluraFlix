import styles from './Cards.module.css';
import { Link } from 'react-router-dom';
import lixeira from './lixeira.png';

function Cards({ id, titulo, capa, onDelete }) {
    return (
        <div className={styles.card}>
            <Link to={`video/${id}`} className={styles.link}>
                <img src={capa} alt={titulo} className={styles.capa} />
                <h2>{titulo}</h2>
            </Link>
            <div className={styles.icons}>
                <img
                    src={lixeira}
                    alt="Deletar"
                    className={styles.icon}
                    onClick={() => onDelete(id)}
                />
            </div>
        </div>
    );
}

export default Cards;