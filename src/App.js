import React from 'react';
import AppRoutes from './routes.js';
import ListaCategorias from './componentes/ListaCategorias';
import ListaVideo from 'componentes/ListaVideo/index.js';
import { VideosProvider } from 'context/VideoContext.js';
import Banner from 'componentes/Banner/index.js';

function App() {
    return (
        <VideosProvider>
            <div>
                <AppRoutes>
                    <Banner />
                    <ListaCategorias />
                    <ListaVideo />
                </AppRoutes>
            </div>
        </VideosProvider>
    );
}

export default App;