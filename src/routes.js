import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PaginaBase from './pages/PaginaBase';
import Inicio from './pages/Inicio';
import NovoVideo from './pages/NovoVideo';
import NaoEncontrada from './pages/NaoEncontrada';
import PlayerVideoPage from 'pages/PlayerVideoPage';

function AppRoutes() {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/" element={<PaginaBase />}>
                        <Route index element={<Inicio />} />
                        <Route path="novoVideo" element={<NovoVideo />} />
                        <Route path="video/:id" element={<PlayerVideoPage />} />
                        <Route path="*" element={<NaoEncontrada />} />
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default AppRoutes;