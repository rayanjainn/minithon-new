import React from "react";
import logo from "./pics/logo.png";
import {
  Search,
  User,
  Home,
  Award,
  Calendar,
  Bell,
  Facebook,
  Twitter,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col bg-green-50">
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-green-700 mb-4">
            Small Acts, Big Impacts
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Your Eco Journey Starts Here!
          </p>
          <button className="bg-green-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-green-600 transition-colors duration-200">
            Get Started
          </button>
        </div>
      </main>

      <footer className="bg-white border-t">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <img src={logo} className="w-8 h-8 rounded-full mr-2"></img>
              <span className="font-semibold">EarthEcho</span>
            </div>
            <div className="flex space-x-4 mb-4 md:mb-0">
              <a
                href="#"
                className="text-gray-600 hover:text-green-500 transition-colors duration-200"
              >
                <Facebook size={24} />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-green-500 transition-colors duration-200"
              >
                <Twitter size={24} />
              </a>
            </div>
            <div className="flex space-x-4 text-sm text-gray-500">
              <a href="#" className="hover:underline">
                Contact
              </a>
              <a href="#" className="hover:underline">
                Copyright
              </a>
              <a href="#" className="hover:underline">
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
