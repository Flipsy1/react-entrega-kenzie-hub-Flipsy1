import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Dashboard from "../Pages/Dashboard";
import LoginPage from "../Pages/Login";
import RegisterPage from "../Pages/Register";

const RoutesMain = () => {
  const [authentication, setAuthentication] = useState(false);

  return (
    <Routes>
      <Route
        path="/"
        element={<LoginPage setAuthentication={setAuthentication} />}
      />
      <Route path="/register" element={<RegisterPage />} />
      <Route
        path="/dashboard"
        element={
          <Dashboard
            authentication={authentication}
            setAuthentication={setAuthentication}
          />
        }
      />
    </Routes>
  );
};

export default RoutesMain;
