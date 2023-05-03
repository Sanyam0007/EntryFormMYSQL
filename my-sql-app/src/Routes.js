import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Signup } from "./Signup";
import { Users } from "./Users";

export const Routing = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
