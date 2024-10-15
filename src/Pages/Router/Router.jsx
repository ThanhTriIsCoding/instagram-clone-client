import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import HomePage from "../../Pages/HomePage/HomePage";
import Profile from "../Profile/Profile";

const AppRoutes = () => {
  return (
    <div>
      <div className="flex">
        <div className="w-[20%] border border-1-state-500">
          <Sidebar />
        </div>
        <div className="w-full">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/username" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default AppRoutes;
