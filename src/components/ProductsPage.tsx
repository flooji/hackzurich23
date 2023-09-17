import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductsPage = () => {
  const navigate = useNavigate();
  const backgroundImagePath = 'images/Cabonara.png'; // Path to your background image

  return (
    <div className="relative bg-[#1a1a1a] text-white h-full w-full flex flex-col justify-end">
      <div className="relative w-96 h-96">
        <img
          src={backgroundImagePath}
          className="absolute inset-0 w-full h-full object-cover opacity-50 z-0 filter grayscale"
        />
        <div className="absolute inset-0 bg-indigo-300 bg-opacity-75 z-10 filter grayscale">
          <div className="px-6 mb-4 flex flex-col text-left font-extrabold">
            <h1 className="text-xl font-extrabold">Select Product</h1>
          </div>
          

          <ul className="text-xl text-white z-10">
            <li>
              <div className="px-6 mb-4 flex items-center">
                <div className="image">
                  <img src='images/BioSPag1.png' className="w-20 h-20" />
                </div>
                <div className="text-sm">
                  Migro Bio Vollkorn Spaghettini
                </div>
              </div>
            </li>
            <li>
              <div className="px-6 mb-4 flex items-center">
                <div className="image">
                <img src='images/AlnaturaSpag.png' className="w-20 h-20" />
                </div>
                <div className="text-sm">
                  Alnatura Vollkorn Spaghetti
                </div>
              </div>
            </li>
            <li>
              <div className="px-6 mb-4 flex items-center">
                <div className="image">
                <img src='images/GranoSpag.png' className="w-20 h-20" />
                </div>
                <div className="text-sm">
                  Molisana Spaghetti Vollkorn
                </div>
              </div>
            </li>
            <li>
              <div className="px-6 mb-4 flex items-center">
                <div className="image">
                <img src='images/UrDinkel.png' className="w-20 h-20" />
                </div>
                <div className="text-sm">
                  Aus der Region Bio Spaghetti 2x 500g
                </div>
              </div>
            </li>
          </ul>



        </div>
      </div>

      <div className="flex justify-center md:justify-start pb-2">
        <button
          className="py-2 my-6 md:my-3 bg-orange-600 hover:bg-orange-500 text-white px-8 rounded-full text-lg w-3/4 md:w-64 md:text-xl font-bold"
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

export default ProductsPage;
