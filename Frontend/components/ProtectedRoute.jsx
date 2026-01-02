import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { userData, isAuthenticated, authChecked } = useSelector(
    (state) => state.user
  );

  // ⛔ DO NOT decide anything until auth is checked
  if (!authChecked) {
    return null; // or loading spinner
  }

  if (!isAuthenticated) {
    return <Navigate to="/signin" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(userData?.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};

export default ProtectedRoute;
