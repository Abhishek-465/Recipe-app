import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import { UserContextProvider } from "../context/userContext";
import Dashboard from "./pages/Dashboard";
import Recipe from "./pages/Recipe";
import Pizza from "./pages/Pizza";
import Burger from "./pages/Burger";
import Chicken from "./pages/Chicken";
axios.defaults.baseURL = "https://recipe-app-o8nj.onrender.com";
axios.defaults.withCredentials = true;
function App() {
  return (
    <UserContextProvider>
      <div className="aleo-styling">
        <Navbar />
        <Toaster position="bottom-left" toastOptions={{ duration: 2000 }} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/recipe" element={<Recipe />} />
          <Route path="/pizza" element={<Pizza />} />
          <Route path="/burger" element={<Burger />} />
          <Route path="/chicken" element={<Chicken />} />
        </Routes>
      </div>
    </UserContextProvider>
  );
}

export default App;
