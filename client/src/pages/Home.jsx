import React from "react";
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

const Home = () => {
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
      <div className="banner1  py-20 text-white text-center">
        <h1 className=" text-3xl sm:text-4xl font-semibold mb-4 mx-3 sm:mx-0 animate__animated animate__slideInLeft">
          Welcome to Your Recipe App
        </h1>
        <p className="text-lg mx-3 sm:mx-0 animate__animated animate__slideInRight">
          Discover delicious recipes for every occasion!
        </p>

        <Link className=" w-[170px] h-[50px] text-lg" to="/register">
          <button className="w-[170px] h-[50px] mt-5 bg-gradient-to-r from-red-600 to-yellow-600 hover:from-red-700 hover:to-yellow-700 rounded-lg font-serif">
            Sign Up
          </button>
        </Link>
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
                className="bg-white  animate__animated animate__fadeInUp rounded-lg shadow-lg p-6 mx-3 transition-transform duration-300 transform hover:scale-105 hover:bg-gray-100"
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

export default Home;
