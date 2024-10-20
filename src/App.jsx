import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from "./components/DashBoard";
import Login from "./components/Login";
import { useState } from "react";
import LandingPage from "./components/LandingPage";
import { RecoilRoot } from "recoil";
import LeaderBoard from "./components/Leaderboard";
import Calender from "./components/Calender";
import Notifications from "./components/Notifications";

export default function App() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/login"
            element={<Login isLogin={isLogin} setIsLogin={setIsLogin} />}
          />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/leaderboard" element={<LeaderBoard />} />
          <Route path="/calender" element={<Calender />} />
          <Route path="/notifications" element={<Notifications />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
