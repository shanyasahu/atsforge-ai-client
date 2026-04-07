import { useAuth } from "../../../hooks/useAuth";
import { Navigate } from "react-router";

function Protected({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    return <h1>Loading...</h1>;
  }
  // Protected Route - Page accessible only to logged-in users
  if (!user) {
    return <Navigate to={"/login"} />;
  }
  return children;
}

export default Protected;
