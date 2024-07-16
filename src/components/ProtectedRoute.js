import { Navigate } from "react-router-dom";
import { TokenContext } from "../TokenContext";
import { useContext } from "react";
import { getToken } from "../utils/common";

const ProtectedRoute = ({ children, requiredRole }) => {
  const [isToken] = useContext(TokenContext);
  const role = localStorage.getItem('role');

  if (!isToken) {
    return <Navigate to="" />;
  }

  if (requiredRole && role !== requiredRole) {
    return <Navigate to="" />;
  }

  return children;
};

export default ProtectedRoute;