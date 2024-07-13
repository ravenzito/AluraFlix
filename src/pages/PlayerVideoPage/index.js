import React from 'react';
import db from '../../db.json';
import { useParams } from 'react-router-dom';
import Player from 'componentes/Player';
import styles from './PlayerVideoPage.module.css'

function PlayerVideoPage() {
    const { id } = useParams();
    const videoId = parseInt(id, 10);
    const video = db.videos.find(video => video.id === videoId);

    if (!video) {
        return <div>Vídeo não encontrado</div>;
    }

    return (
        <section className={styles.player}>
            <h1>{video.titulo}</h1>
            <Player video={video} />
        </section>
    );
}

export default PlayerVideoPage;