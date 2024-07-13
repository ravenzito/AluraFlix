import React from 'react';
import Categoria from '../Categoria';
import styles from './ListaCategorias.module.css';

function ListaCategorias({ categorias }) {
    return (
        <div className={styles.container}>
            {categorias.map((categoria) => (
                <Categoria
                    key={categoria.id}
                    nome={categoria.nome}
                    cor={categoria.cor}
                />
            ))}
        </div>
    );
}

export default ListaCategorias;
