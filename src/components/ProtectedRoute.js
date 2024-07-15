import { Navigate } from "react-router-dom";
import { TokenContext } from "../TokenContext";
import { useContext } from "react";
import { getToken } from "../utils/common";

const ProtectedRoute = ({ children }) => {
  const [isToken, setIsToken] = useContext(TokenContext);
  const token = getToken();

  if (!isToken && !token) {
    return <Navigate to="/Login" />;
  }

  return children;
};

export default ProtectedRoute;
