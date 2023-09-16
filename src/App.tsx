import React, { useState, useEffect } from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./components/Home";
import {Loader} from "./components/Loader";
import {Cook} from "./components/cook";
import IngredientsPage from "./components/IngredientsPage";

function App() {
    return (
        <div className="App font-nunito h-screen">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}>
                    </Route>
                    <Route path={"/IngredientsPage"} element={<IngredientsPage />}>
                    </Route>
                    <Route path={"/Loader"} element={<Loader />}>
                    </Route>
                    <Route path={"/cook"} element={<Cook />}>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
