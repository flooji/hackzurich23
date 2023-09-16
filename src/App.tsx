import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./components/Home";
import {Cook} from "./components/cook";

function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}>
                    </Route>
                    <Route path={"/cook"} element={<Cook />}>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
