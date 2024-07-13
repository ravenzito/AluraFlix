import React, { useContext } from 'react';
import styles from './Banner.module.css';
import useVideoRotation from 'hooks/useVideoRotation';
import VideoPlayer from '../VideoPlayer';
import { VideosContext } from 'context/VideoContext';

function Banner() {
    const { videos, categorias } = useContext(VideosContext);
    const { currentVideo } = useVideoRotation(videos);

    const currentCategory = currentVideo 
        ? categorias.find(cat => cat.nome === currentVideo.categoria)
        : {};

    const bannerStyle = currentVideo 
        ? { 
            backgroundImage: `url(${currentVideo.thumbnail})`, 
            borderColor: currentCategory?.cor || '#FFFFFF'
        } 
        : {};

    return (
        <div className={styles.banner} style={bannerStyle}>
            <div className={styles.overlay}>
                {currentVideo && (
                    <div className={styles.content}>
                        <div className={styles.textContainer}>
                            <h1 style={{ borderColor: currentCategory?.cor }}>{currentVideo.titulo}</h1>
                            <p className={styles.description}>{currentVideo.description}</p>
                        </div>
                        <div className={styles.playerContainer}>
                            <VideoPlayer video={currentVideo} borderColor={currentCategory?.cor} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Banner;