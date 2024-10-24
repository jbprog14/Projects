import React from "react";
import bg from "../src/assets/Background-2.jpg";
import LoginForm from "./components/LoginForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div
              className="bg-cover bg-no-repeat bg-center bg-fixed h-screen w-screen"
              style={{ backgroundImage: `url(${bg})` }}
            >
              <LoginForm />
            </div>
          }
        />

        <Route
          path="/dashboard"
          element={
            <div
              className="bg-cover bg-no-repeat bg-center bg-fixed h-screen w-screen"
              style={{ backgroundImage: `url(${bg})` }}
            >
              <Dashboard />
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
