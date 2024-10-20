import React, { useState } from "react";
import { Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { email } from "../atoms/email";

const Button = ({ children, className, ...props }) => (
  <Link to={"/dashboard"}>
    <button
      className={`px-4 py-2 rounded font-semibold text-white ${className}`}
      {...props}
    >
      {children}
    </button>
  </Link>
);

const Input = ({ className, ...props }) => (
  <input
    className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 ${className}`}
    {...props}
  />
);

export default function Login({ isLogin, setIsLogin }) {
  const setEmail = useSetRecoilState(email);
  const name = useRecoilValue(email);
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempted with:", email, password);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#f6f4d2] via-[#d4e09b] to-[#90a955]">
      <header className="bg-opacity-0 text-[#386641] p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-4xl font-bold flex items-center">
            <Leaf size={64} className="font-sans mr-2" />
            EarthEcho
          </h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-2xl hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-2xl hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="flex-grow  container mx-auto my-8 px-4 pt-20">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-center text-[#386641] mb-6">
              Login to Your Eco Account
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <Input
                  type="email"
                  id="email"
                  value={name}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mt-1"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <Input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="mt-1 mb-5"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-[#6A994A] hover:bg-[#386641]"
              >
                Log In
              </Button>
            </form>
            <p className="mt-4 text-center text-sm text-gray-600">
              Don't have an account?{" "}
              <a href="#" className="text-green-600 hover:underline">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </main>

      <footer className="bg-opacity-0 text-white p-4 mt-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Eco Action Platform. All rights reserved.</p>
          <p className="font-sans mt-2 text-sm">
            Together, we can make a difference for our planet.
          </p>
        </div>
      </footer>
    </div>
  );
}
