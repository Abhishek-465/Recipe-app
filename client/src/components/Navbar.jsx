import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaReact } from "react-icons/fa"; // Import the FaReact icon from react-icons
import { UserContext } from "../../context/userContext";

const Navbar = () => {
  const { user } = useContext(UserContext);
  return (
    <nav className={` bg-gradient-to-r from-orange-900 to-red-800 p-4`}>
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          
          {user ? (
            <Link
              to="/dashboard"
              className="flex items-center text-white text-xl font-bold"
            >
              <FaReact className="mr-2 mb-1" /> Your Recipe App
            </Link>
          ) : (
            <Link
              to="/"
              className="flex items-center text-white text-xl font-bold"
            >
              <FaReact className="mr-2 mb-1" /> Your Recipe App
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
