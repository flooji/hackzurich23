import React from 'react';

const IngredientsPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4 text-center">Ingredients</h1>
        <ul>
          <li className="mb-2">Ingredient 1</li>
          <li className="mb-2">Ingredient 2</li>
          <li className="mb-2">Ingredient 3</li>
          <li className="mb-2">Ingredient 4</li>
          <li className="mb-2">Ingredient 5</li>
        </ul>
        <button className="bg-orange-500 text-white rounded-md p-2 mt-4 w-full hover:bg-orange-600 transition-colors duration-300">
          Ready
        </button>
      </div>
    </div>
  );
};

export default IngredientsPage;
