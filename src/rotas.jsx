import React from "react";
import Display from "./pages/display";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function Rotas() {
    return (
        <>
            <BrowserRouter>

            <Routes>
                <Route path="/" element={<Display />}/>
            </Routes>

            </BrowserRouter>
        </>
    );
}

export default Rotas;