import React, { useState } from 'react';
import Banner from '../../componentes/Banner';
import ListaCategorias from '../../componentes/ListaCategorias';
import ListaVideo from '../../componentes/ListaVideo';
import data from '../../db.json';
import Modal from '../../componentes/Modal';
import Botoes from '../../componentes/Botoes';
import styles from './Inicio.module.css';

function Inicio() {
    const [modalAberto, setModalAberto] = useState(false);

    const abrirModal = () => {
        setModalAberto(true);
    }

    const fecharModal = () => {
        setModalAberto(false);
    }

    return (
        <>
            <Banner />
            <div className="videos-por-categoria">
                {data.categorias.map(categoria => (
                    <div className={styles.container} key={categoria.id}>
                        <ListaCategorias categorias={[categoria]} />
                        <ListaVideo categoria={categoria.nome} />
                    </div>
                ))}
            </div>
            {modalAberto && (
                <Modal onClose={fecharModal}>
                    <form>
                        {/* Inputs para título, categoria, imagem, vídeo e descrição */}
                    </form>
                    <Botoes salvar={() => console.log('Salvar')} limpar={() => console.log('Limpar')} />
                </Modal>
            )}
        </>
    );
}

export default Inicio;