import React from "react";
import HomePage from "./HomePage";
import logo from "./pics/logo.png";
import { useNavigate } from "react-router-dom";
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

const DashBoard = () => {
  return (
    <div>
      <div>
        <Header />
        <HomePage />
      </div>
    </div>
  );
};

const NavItem = ({ children, isActive }) => (
  <li
    className={`px-4 py-2 ${
      isActive ? "bg-green-700 text-white" : "hover:bg-green-100"
    } rounded-md transition-colors duration-200`}
  >
    {children}
  </li>
);

const Header = () => {
  const navigate = useNavigate();
  return (
    <div>
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img src={logo} className="w-14 h-14 rounded-full"></img>
            <div>
              <h1 className="font-bold text-xl">EarthEcho</h1>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
            </div>
            <button className="p-2 bg-green-100 rounded-full hover:bg-green-200 transition-colors duration-200">
              <User size={24} className="text-green-700" />
            </button>
          </div>
        </div>
      </header>

      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-2">
          <ul className="flex space-x-4">
            <NavItem isActive>
              <Home size={18} className="inline mr-2" />
              <div>Home</div>
            </NavItem>
            <NavItem>
              <Award size={18} className="inline mr-2" />
              <div
                onClick={() => {
                  navigate("/leaderboard");
                }}
              >
                Leaderboard
              </div>
            </NavItem>
            <NavItem>
              <Calendar size={18} className="inline mr-2" />
              <div
                onClick={() => {
                  navigate("/calender");
                }}
              >
                Calendar
              </div>
            </NavItem>
            <NavItem>
              <Bell size={18} className="inline mr-2" />
              <div
                onClick={() => {
                  navigate("/notifications");
                }}
              >
                Notifications
              </div>
            </NavItem>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default DashBoard;
