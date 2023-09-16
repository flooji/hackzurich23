import React, { useState, useEffect } from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Layout} from "./components/Layout";
import {Home} from "./components/home";
import {Cook} from "./components/cook";

function App() {

    
    const [loadAudio, setLoadAudio] = useState(false);
    const [audioSrc, setAudioSrc] = useState<string | null>(null);


    useEffect(() => {
        if (!loadAudio) return;

        async function fetchAudio() {
            const url = "https://api.elevenlabs.io/v1/text-to-speech/EXAVITQu4vr4xnSDxMaL"
            const data = {
                "text": "Hi! My name is Bella, nice to meet you!",
                "model_id": "eleven_monolingual_v1",
                "voice_settings": {
                  "stability": 0.5,
                  "similarity_boost": 0.5
                }
              }
            const requestOptions = {
                method: 'POST',
                headers:{
                    "Accept": "audio/mpeg",
                    "Content-Type": "application/json",
                    "xi-api-key": "e8158a5af2206088830149d46ce766bd"
                  },
                body: JSON.stringify(data) // Convert data to string format
            };

            const response = await fetch(url, requestOptions);

            if (response.ok) {
                const audioData = await response.blob();
                const audioUrl = URL.createObjectURL(audioData);
                setAudioSrc(audioUrl);
            } else {
                console.error('Failed to fetch audio');
            }
        }

        fetchAudio();

        return () => {
            if (audioSrc) {
                // Revoke the Object URL to free up resources
                URL.revokeObjectURL(audioSrc);
            }
        };
    }, [loadAudio]);



    return (
        <div className="App"><nav></nav>
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
                <button onClick={() => setLoadAudio(true)}>Load and Play Audio</button>
                {audioSrc && (
                    <audio autoPlay>
                        <source src={audioSrc} type="audio/mpeg" />
                        Your browser does not support the audio element.
                    </audio>
                )}
            </div>
        </div>
    );
}

export default App;
