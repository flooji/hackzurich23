import React, {useState} from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./components/Home";
import {Cook} from "./components/cook";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDQ_BWrPw0E9lMg8WRuumeI7GX8V3QldIo",
    authDomain: "hackzurich23.firebaseapp.com",
    projectId: "hackzurich23",
    storageBucket: "hackzurich23.appspot.com",
    messagingSenderId: "876062842794",
    appId: "1:876062842794:web:bbdc41d32afd9e829495d3",
    measurementId: "G-ZD75DKY9TY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function App() {
    const [selectedOption, setSelectedOption] = useState('option1');

    // Define your radio options
    const radioOptions = [
        { id: 'remy', label: 'Remy' },
        { id: 'nonna', label: 'Nonna' },
        { id: 'gordon', label: 'Gordon' },
    ];

    // Handle radio button selection
    const handleRadioChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setSelectedOption(e.target.value);
    };

    function callApi() {
        fetch('http://localhost:8080/api/v1/recipes')
            .then(response => response.json())
            .then(data => console.log(data));
    }

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
            <div className="p-5 bg-amber-300 h-screen w-full">
                <h1 className="text-5xl m-6 leading-2">
                    Good evening, chef!
                </h1>
                <h2 className="text-2xl">
                    Today's special:
                </h2>
                <div className="flex justify-center">
                    <input
                        type="text"
                        name="recipe"
                        id="recipe"
                        className="m-4 w-full lg:w-5/12 rounded-lg border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Put a url from a recipe here..."
                    />
                </div>
                <h3 className="text-xl mt-8">Please select your cooking coach:</h3>
                <div className="flex flex-col p-4 justify-center items-center">
                    {radioOptions.map((option) => (
                        <label key={option.id} className="flex w-10">
                            <input className="mr-2"
                                type="radio"
                                value={option.id}
                                checked={selectedOption === option.id}
                                onChange={handleRadioChange}
                            />
                             {option.label}
                        </label>
                    ))}
                </div>
                <button
                    className="mt-4 bg-amber-900 text-amber-200 px-8 py-2 rounded-full text-lg"
                    onClick={() => {
                        // Add your button click logic here
                    }}
                >
                    Let's cook!
                </button>
                <button onClick={callApi}></button>
            </div>
        </div>
    );
}

export default App;
