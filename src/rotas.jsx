import React from "react";


import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginaFotos from "./pages/PaginaFotos";

function Rotas() {
    return (
        <>
            <BrowserRouter>

            <Routes>
                <Route path="/" element={<PaginaFotos />}/>
            </Routes>

            </BrowserRouter>
        </>
    );
}

export default Rotas;