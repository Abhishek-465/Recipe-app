import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/userContext";
import { Link } from "react-router-dom";
import pic1 from "../assets/pizza.jpg";
import pic2 from "../assets/chicken.jpg";
import pic3 from "../assets/burger.jpg";
import breakfast from "../assets/breakfast.jpg";
import lunch from "../assets/lunch.jpg";
import dinner from "../assets/dinner.jpg";
import food from "../assets/food1.jpg";
import Footer from "../components/Footer";
import "animate.css";

const Dashboard = () => {
  const { user } = useContext(UserContext);
  const reviews = [
    {
      name: "Jazz Sen",
      image: breakfast,
      comment: "A very good app to learn cooking.",
    },
    {
      name: "Sameer Das",
      image: lunch,
      comment: "Innovative recipes are also available.",
    },
    { name: "Md Antony", image: dinner, comment: "Brilliant website to use." },
    {
      name: "Mark Frost",
      image: food,
      comment: "Made my day with some amazing breakfast recipes.",
    },
  ];
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero section */}
      <div className="banner  py-20 text-white text-center">
        {user ? (
          <h1 className=" text-3xl sm:text-4xl font-bold mb-4 mx-3 sm:mx-0 animate__animated animate__slideInLeft">
            Hello {user.name}
          </h1>
        ) : (
          <h1 className=" text-3xl sm:text-4xl font-bold mb-4 mx-3 sm:mx-0 animate__animated animate__slideInLeft">
            Explore the wide range of delicious recipes
          </h1>
        )}
        <p className="text-lg mx-3 sm:mx-0 animate__animated animate__slideInRight">
          Discover delicious recipes for every occasion!
        </p>

        <Link className=" w-[170px] h-[50px] text-lg" to="/recipe">
          <button className="w-[170px] h-[50px] mt-5 bg-gradient-to-r from-red-600 to-yellow-600 hover:from-red-700 hover:to-yellow-700 rounded-lg font-serif">
            Search
          </button>
        </Link>
      </div>

      {/* Featured Recipes */}
      <div className="container mx-auto py-12 ">
        <h2 className="text-2xl font-bold mb-4 ml-5 sm:ml-0 text-transparent text-gradient bg-gradient-to-r from-orange-900  to-gray-900 bg-clip-text ">
          Featured Recipes
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-2 md:px-0">
          {/*Featured Recipe Cards */}
          <div className="animate__animated animate__fadeInUp bg-slate-300 rounded-lg shadow-lg p-6 transition-transform duration-300 transform hover:scale-105 hover:bg-gray-200">
            <Link to="/pizza">
              <img
                src={pic1}
                alt="Recipe"
                className="w-full h-48 object-cover mb-4 rounded-lg"
              />
            </Link>
            <h3 className="text-xl font-bold mb-2">Delicious Pizza</h3>
            <p className="text-gray-600 ">
              Make restuarant styled pizzas now at home.
            </p>
          </div>
          <div className=" animate__animated animate__fadeInUp bg-slate-300 rounded-lg shadow-lg p-6 transition-transform duration-300 transform hover:scale-105 hover:bg-gray-200">
            <Link to="/chicken">
              <img
                src={pic2}
                alt="Recipe"
                className="w-full h-48 object-cover mb-4 rounded-lg"
              />
            </Link>
            <h3 className="text-xl font-bold mb-2">Chicken Wings</h3>
            <p className="text-gray-600 ">
              Awesome Chicken wings recipe with home made ingredients.
            </p>
          </div>
          <div className=" animate__animated animate__fadeInUp bg-slate-300 rounded-lg shadow-lg p-6 transition-transform duration-300 transform hover:scale-105 hover:bg-gray-200">
            <Link to="/burger">
              <img
                src={pic3}
                alt="Recipe"
                className="w-full h-48 object-cover mb-4 rounded-lg"
              />
            </Link>
            <h3 className="text-xl font-bold mb-2">Tasty Burgers</h3>
            <p className="text-gray-600 ">Explore the variety of burgers.</p>
          </div>
          {/* Repeat this block for each featured recipe */}
        </div>
      </div>

      {/* Reviews */}
      <div className="bg-gray-200 py-12">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-4 ml-5 sm:ml-0 text-transparent text-gradient bg-gradient-to-r from-yellow-900  to-pink-800 bg-clip-text ">
            Top Reviews
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 mx-3 transition-transform duration-300 transform hover:scale-105 hover:bg-gray-100"
              >
                <h3 className="text-lg font-bold mb-2">{review.name}</h3>
                <img
                  src={review.image}
                  alt=""
                  className="w-full h-32 object-cover mb-4 rounded-lg"
                />
                <p className="text-gray-600">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
