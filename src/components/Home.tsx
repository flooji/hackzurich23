import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

interface HomeProps {}

export const Home: React.FunctionComponent<HomeProps> = (props) => {
  const [selectedOption, setSelectedOption] = useState('remy');
  const navigate = useNavigate();
  function callApi() {
    fetch('http://localhost:8080/api/v1/recipes')
        .then(response => response.json())
        .then(data => console.log(data));
  }

  // Define your radio options
  const radioOptions = [
    { id: 'remy', label: 'Default' },
    { id: 'nonna', label: 'Authentic' },
    { id: 'gordon', label: 'Gordon' },
  ];

  // Handle radio button selection
  const handleRadioChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setSelectedOption(e.target.value);
  };

  return <div className="bg-[#1a1a1a] text-white h-full w-full">
    <div className="px-4 pt-14">
      <img src={'/images/RemyLogo.png'} className="w-72 lg:w-96"/>
    </div>
    <div className="px-6 flex flex-col text-left font-semibold text-orange-600"><h1 className="text-3xl md:text-5xl my-10 leading-2">
      Good evening, chef!
    </h1>
      <h2 className="text-xl md:text-2xl text-white pb-1">
        Today's special:
      </h2>
      <div className="">
        <input
            type="text"
            name="recipe"
            id="recipe"
            className="md:my-4 px-0.5 my-2 w-full lg:w-5/12 rounded-lg border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Enter recipe URL or name a dish"
        />
      </div>
      <h3 className="text-xl mt-4 font-extrabold text-white">Please select your cooking coach:</h3>
      <div className="flex flex-col p-4 justify-center text-white">
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
      <div className="flex justify-center md:justify-start pb-2">
        <button
            className="py-2 my-6 md:my-3 bg-orange-600 hover:bg-orange-500 text-white px-8 rounded-full text-lg w-3/4 md:w-64 md:text-xl font-bold"
            onClick={() => {
              navigate('/loader');
            }}
        >
          Let's cook!
        </button>
      </div>
    </div>
  </div>;
};

Home.propTypes = {};