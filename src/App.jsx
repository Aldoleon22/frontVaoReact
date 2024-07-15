import React, { useState, useEffect, useContext } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { TokenContext } from "./TokenContext";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Admin from "./components/Admin/Homadmin/AdHome";

const App = () => {
  const [isToken, setIsToken] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      setIsToken(true);
      navigate;
    } else {
      setIsToken(false); // Assure que l'utilisateur est déconnecté si aucun token n'est trouvé
      navigate("/"); // Redirection vers la page de login si aucun token n'est trouvé
    }
  }, [navigate]);
  // Redirection en fonction du statut de l'utilisateur
 

  return (
    <TokenContext.Provider value={[isToken, setIsToken]}>
      <Routes>
      <Route path="/Homadmin/adHome/*" element={<ProtectedRoute><Admin /></ProtectedRoute>} />
       
        <Route path="/home/*" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="" element={<Login />} />
        {/* Ajoutez d'autres routes ici */}
      </Routes>
    </TokenContext.Provider>
   

  );
};

export default App;
