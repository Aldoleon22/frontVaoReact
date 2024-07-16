import React, { useState, useEffect, useContext } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { TokenContext } from "./TokenContext";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Admin from "./components/Admin/Homadmin/AdHome";
import User from "./components/User/HomeUser/UserHome";

const App = () => {
  const [isToken, setIsToken] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      setIsToken(true);
    } else {
      setIsToken(false);
      navigate("/");
    }
  }, [navigate]);

  return (
    <TokenContext.Provider value={[isToken, setIsToken]}>
      <Routes>
        <Route path="/HomeUser/UserHome/*" element={<ProtectedRoute requiredRole="user"><User /></ProtectedRoute>} />
        <Route path="/Homadmin/AdHome/*" element={<ProtectedRoute requiredRole="admin"><Admin /></ProtectedRoute>} />
        <Route path="/home/*" element={<ProtectedRoute requiredRole="superAdmin"><Home /></ProtectedRoute>} />
        <Route path="/" element={<Login />} />
        {/* Ajoutez d'autres routes ici */}
      </Routes>
    </TokenContext.Provider>
  );
};

export default App;
