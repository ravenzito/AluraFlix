import React, { createContext, useState, useEffect } from 'react';
import data from '../db.json';

export const VideosContext = createContext();

export const VideosProvider = ({ children }) => {
    const [videos, setVideos] = useState([]);
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        setVideos(data.videos || []);
        setCategorias(data.categorias || []);
    }, []);

    const contextValue = { videos, categorias };

    return (
        <VideosContext.Provider value={contextValue}>
            {children}
        </VideosContext.Provider>
    );
};
