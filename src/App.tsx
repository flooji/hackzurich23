import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Layout} from "./components/Layout";
import {Home} from "./components/home";
import {Cook} from "./components/cook";

function App() {

    function callApi() {
        fetch('http://localhost:8080/api/v1/recipes')
            .then(response => response.json())
            .then(data => console.log(data));
    }

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="/cook" element={<Cook />} />
                    </Route>
                </Routes>
            </BrowserRouter>
            <div className="p-5 bg-amber-300 h-full w-full">
                <h1 className="text-3xl">
                    Good evening chef!
                </h1>
                <h2 className="text-xl">
                    Today's special:
                </h2>
                <button onClick={callApi}></button>
            </div>
        </div>
    );
}

export default App;
