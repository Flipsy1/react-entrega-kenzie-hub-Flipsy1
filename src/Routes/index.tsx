import { Routes, Route } from "react-router-dom";
import ProtectedRoutes from "../Components/ProtectedRoutes";

import Dashboard from "../Pages/Dashboard";
import LoginPage from "../Pages/Login";
import RegisterPage from "../Pages/Register";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" element={<ProtectedRoutes />}>
        <Route index element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default RoutesMain;
