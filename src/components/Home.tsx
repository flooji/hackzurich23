import AppHeader from "./AppHeader";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

interface HomeProps {}

export const Home: React.FunctionComponent<HomeProps> = (props) => {
  const [selectedOption, setSelectedOption] = useState('option1');
  const navigate = useNavigate();
  function callApi() {
    fetch('http://localhost:8080/api/v1/recipes')
        .then(response => response.json())
        .then(data => console.log(data));
  }

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

  return <div className="bg-gray-900 text-white h-screen w-full">
    <AppHeader />
    <div className="px-6 flex flex-col text-left"><h1 className="text-5xl my-10 leading-2">
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
      <div className="flex flex-col p-4 justify-center">
        {radioOptions.map((option) => (
            <label key={option.id} className="flex w-10">
              <input className="mr-2"
                     type="radio"
                     color="text-orange-600"
                     value={option.id}
                     checked={selectedOption === option.id}
                     onChange={handleRadioChange}
              />
              {option.label}
            </label>
        ))}
      </div>
      <div className="text-center">
        <button
            className="mt-4 bg-orange-600 text-white px-8 py-2 rounded-full text-lg w-1/2"
            onClick={() => {
              navigate('/cook');
            }}
        >
          Let's cook!
        </button>
      </div>
      <button onClick={callApi}></button>
    </div>
  </div>;
};

Home.propTypes = {};