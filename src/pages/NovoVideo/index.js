import React, { useState } from 'react';
import db from '../../db.json';
import styles from './NovoVideo.module.css';

function NovoVideo() {
    const [titulo, setTitulo] = useState('');
    const [categoria, setCategoria] = useState('');
    const [imagem, setImagem] = useState('');
    const [linkVideo, setLinkVideo] = useState('');
    const [descricao, setDescricao] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const novoVideo = {
            id: db.videos.length + 1,
            titulo,
            categoria,
            url: linkVideo,
            thumbnail: imagem,
            description: descricao,
        };

        db.videos.push(novoVideo);
        console.log('Vídeo salvo:', novoVideo);

        setTitulo('');
        setCategoria('');
        setImagem('');
        setLinkVideo('');
        setDescricao('');
    };

    const handleReset = () => {
        setTitulo('');
        setCategoria('');
        setImagem('');
        setLinkVideo('');
        setDescricao('');
    };

    return (
        <div className={styles.container}>
            <h1>Novo Vídeo</h1>
            <p>Complete o formulário para criar um novo card de vídeo.</p>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                    <label htmlFor="titulo">Título</label>
                    <input
                        type="text"
                        id="titulo"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="categoria">Categoria</label>
                    <select
                        id="categoria"
                        value={categoria}
                        onChange={(e) => setCategoria(e.target.value)}
                        required
                    >
                        <option value="">Selecione uma categoria</option>
                        {db.categorias.map(categoria => (
                            <option key={categoria.id} value={categoria.nome}>{categoria.nome}</option>
                        ))}
                    </select>
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="imagem">Imagem (URL)</label>
                    <input
                        type="text"
                        id="imagem"
                        value={imagem}
                        onChange={(e) => setImagem(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="linkVideo">Link do Vídeo</label>
                    <input
                        type="text"
                        id="linkVideo"
                        value={linkVideo}
                        onChange={(e) => setLinkVideo(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="descricao">Descrição</label>
                    <textarea
                        id="descricao"
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)}
                        required
                    ></textarea>
                </div>
                <div className={styles.buttons}>
                    <button type="submit" className={styles.saveButton}>Salvar</button>
                    <button type="button" onClick={handleReset} className={styles.resetButton}>Limpar</button>
                </div>
            </form>
        </div>
    );
}

export default NovoVideo;
