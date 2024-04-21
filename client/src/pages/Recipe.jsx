import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import pic from "../assets/loader.gif";
import "animate.css";

function Recipe() {
  const [userInput, setUserInput] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false); // New loading state

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const fetchRecipes = () => {
    setLoading(true); // Set loading to true when fetching data
    fetch(`https://recipe-app-o8nj.onrender.com/recipes?query=${userInput}`)
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .then(() => setImage(`${userInput}`))
      .catch((error) => console.error("Error:", error))
      .finally(() => setLoading(false)); // Set loading to false after data is fetched
  };

  return (
    <div>
      <div className="container mx-auto py-12 ">
        <h2 className="text-3xl animate__animated animate__fadeIn font-semibold mb-8 text-center poppins-regular  text-transparent text-gradient bg-gradient-to-r from-yellow-700  to-pink-800 bg-clip-text ">
          Search for Recipes
        </h2>
        <div className="w-[300px] sm:w-[512px]  mx-auto bg-white rounded-lg shadow-lg flex items-center mb-8">
          <input
            type="text"
            placeholder="Search for recipes..."
            className=" w-full py-4 px-6 focus:outline-none rounded-xl"
            value={userInput}
            onChange={handleInputChange}
          />
          <button
            onClick={fetchRecipes}
            className="bg-orange-600 text-white py-4 px-8 rounded-lg hover:bg-orange-700 transition duration-300"
          >
            Search
          </button>
        </div>
        {loading && ( // Render loader if loading is true
          <div className="flex justify-center items-center h-[200px]">
            <div className="loader">
              <img src={pic} />
            </div>
          </div>
        )}
        {image && (
          <div className="w-[310px] sm:w-3/4 h-[300px] mx-auto  sm:h-auto mb-10 ">
            <img
              src={`https://source.unsplash.com/random/900x700/?${image}`}
              alt=""
              className="mx-auto w-[300px] sm:w-3/4 h-[290px] shadow-lg  sm:h-auto object-cover rounded-xl"
            />
          </div>
        )}
        <div className="grid grid-cols-1">
          {recipes.length === 0 && !loading ? (
            <p className="text-center text-gray-600">No recipes found...</p>
          ) : (
            recipes.map((recipe, index) => (
              <div
                key={index}
                className="flex justify-center items-center mb-8"
              >
                <div className="rounded-lg shadow-lg overflow-hidden w-[400px] sm:w-[500px] md:w-[600px] lg:w-[1000px] bg-gradient-to-r from-yellow-100 to-gray-100 mx-3 sm:mx-0">
                  <div className="p-6 poppins-regular">
                    <h3 className="text-lg font-bold mb-2">{recipe.title}</h3>
                    <p className="text-gray-600 mb-2">
                      <strong>Ingredients:</strong> {recipe.ingredients}
                    </p>
                    <p className="text-gray-600 mb-2">
                      <strong>Servings:</strong> {recipe.servings}
                    </p>
                    <p className="text-gray-600 mb-2">
                      <strong>Instructions:</strong> {recipe.instructions}
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      {recipes.length !== 0 ? <Footer /> : <></>}
    </div>
  );
}

export default Recipe;
