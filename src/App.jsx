import "./App.css";

import { Routes, Route } from "react-router-dom";

import LoginPage from "./Pages/Login";
import RegisterPage from "./Pages/Register";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useState } from "react";
import Dashboard from "./Pages/Dashboard";

function App() {
  const [authentication, setAuthentication] = useState(false);

  return (
    <div className="App">
      <>
        <ToastContainer />
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
      </>
    </div>
  );
}

export default App;
