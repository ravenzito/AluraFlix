import React, { useState } from 'react';
import Cards from '../Cards';
import styles from './ListaVideo.module.css';
import db from '../../db.json';

function ListaVideo({ categoria }) {
    const [videos, setVideos] = useState(db.videos.filter(video => video.categoria === categoria));

    const handleDelete = (id) => {
        const updatedVideos = videos.filter(video => video.id !== id);
        setVideos(updatedVideos);
    };

    return (
        <div className={styles.container}>
            <div className={styles.listaVideos}>
                {videos.map(video => (
                    <Cards
                        key={video.id}
                        id={video.id}
                        titulo={video.titulo}
                        capa={video.thumbnail}
                        onDelete={handleDelete}
                    />
                ))}
            </div>
        </div>
    );
}

export default ListaVideo;
