import { Navigate } from "react-router";
import { useAuth } from "../../../hooks/useAuth";

function GuestRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return user ? <Navigate to="/dashboard" /> : children;
}

export default GuestRoute;
