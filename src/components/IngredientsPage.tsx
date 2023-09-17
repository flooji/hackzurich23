import React from 'react';
import { useNavigate } from 'react-router-dom';

const IngredientsPage = () => {
  const navigate = useNavigate();
  const checkboxImagePath = '/images/IngredientsCheckB.png'; // Path to checkbox image
  const backgroundImagePath = '/images/Cabonara.png'; // Path to your background image

  const handleImageClick = () => {
    alert('Image clicked!');
    // Add your desired functionality here
  };

  return (
    <div className="relative bg-[#1a1a1a] text-white h-full w-full flex flex-col justify-end">
      <div className="relative w-96 h-96">
        <img
          src={backgroundImagePath}
          className="absolute inset-0 w-full h-full object-cover opacity-50 z-0 filter grayscale"
        />
        <div className="absolute inset-0 bg-indigo-300 bg-opacity-75 z-10 filter grayscale">
          <div className="px-6 mb-4 flex flex-col text-left font-extrabold">
            <h1 className="text-xl font-extrabold">Ingredients</h1>
          </div>
          <ul className="text-xl text-white z-10">
            <li className="px-6 mb-4 flex items-center">
              350 g of spaghetti
              <img src={checkboxImagePath} alt="Checkbox" onClick={() => {
              navigate('/products-page');
            }} className="w-7 h-7" />
            </li>
            <li className="px-6 mb-4 flex items-center">
              200 g of guanciale
              <img src={checkboxImagePath} alt="Checkbox" className="w-7 h-7" />
            </li>
            <li className="px-6 mb-4 flex items-center">
              4 whole medium eggs
              <img src={checkboxImagePath} alt="Checkbox" className="w-7 h-7" />
            </li>
            <li className="px-6 mb-4 flex items-center">
              Grated Pecorino Romano
              <img src={checkboxImagePath} alt="Checkbox" className="w-7 h-7" />
            </li>
            <li className="px-6 mb-4 flex items-center">
              Ground black pepper
              <img src={checkboxImagePath} alt="Checkbox" className="w-7 h-7" />
            </li>
          </ul>
        </div>
      </div>

      <div className="flex justify-center md:justify-start pb-2">
        <button
          className="py-2 my-10 md:my-3 bg-orange-600 hover:bg-orange-500 text-white px-8 rounded-full text-lg w-3/4 md:w-64 md:text-xl font-bold"
          onClick={() => {
            navigate('/cook');
          }}
        >
          Ready
        </button>
      </div>
    </div>
  );
};

export default IngredientsPage;
