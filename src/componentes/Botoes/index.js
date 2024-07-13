import React from 'react';
import styles from './Botoes.module.css';

const Botoes = ({ salvar, limpar }) => {
    return (
        <div className={styles.botoesContainer}>
            <button className={styles.botaoSalvar} onClick={salvar}>Salvar</button>
            <button className={styles.botaoLimpar} onClick={limpar}>Limpar</button>
        </div>
    );
}

export default Botoes;