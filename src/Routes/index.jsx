import { Routes, Route } from "react-router-dom";

import LoginPage from "../Pages/Login";

import RegisterPage from "../Pages/Register";

const RoutesMain = () => {
  <Routes>
    <Route path="/" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage />} />
    <Route path="/dashboard" />
  </Routes>;
};

export default RoutesMain;
