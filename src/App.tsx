import React from 'react';
import logo from './logo.svg';
import './App.css';
import VoiceRecorder from "./VoiceRecorder";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./Home";
import Cook from "./Cook";
import {Switch} from "@mantine/core";
import AppHeader from "./AppHeader";

function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route path={"/"}>
                        <Home/>
                    </Route>
                    <Route path={"/cook"}>
                        <Cook/>
                    </Route>
                </Switch>
            </BrowserRouter>
            <AppHeader/>
            <p>Default text</p>
        </div>
    );
}

export default App;
