import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "./pics/logo.png";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div
      className="bg-cover bg-center min-h-screen"
      style={{
        backgroundImage: `url('https://cdn.pixabay.com/photo/2016/11/29/04/42/conifers-1867371_1280.jpg')`,
      }}
    >
      <header className="flex justify-between p-4 ">
        {/* Logo Section */}
        <div className="flex items-center">
          <img src={logo} alt="logo" className="rounded-full w-[150px]" />
        </div>
      </header>

      {/* Title Section */}
      <div className="flex flex-col items-center text-center mt-19 text-white">
        <h1 className="text-[15rem] lg:text-[12rem] font-bold text-[#c6ef67] ">
          EarthEcho
        </h1>

        <p className="text-2xl lg:text-4xl text-[#72d73f] -mt-4">
          Small Acts, Big Impacts
        </p>
      </div>

      {/* Authentication Buttons */}
      <div className="flex justify-center mt-12 space-x-4">
        <button
          onClick={() => {
            navigate("/login");
          }}
          className="text-lg lg:text-xl bg-[#c6ef67] text-gray-800 border-2 border-green-700 px-8 py-3 rounded-2xl shadow-lg hover:bg-green-700 hover:text-white transition duration-300"
        >
          Sign In
        </button>
        <button
          onClick={() => {
            navigate("/login");
          }}
          className="text-lg lg:text-xl bg-[#c6ef67] text-gray-800 border-2 border-green-700 px-8 py-3 rounded-2xl shadow-lg hover:bg-green-700 hover:text-white transition duration-300"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
