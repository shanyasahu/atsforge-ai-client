import Loading from "../../../components/Loading";
import { useAuth } from "../../../hooks/useAuth";
import { Navigate } from "react-router";

function Protected({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    return <Loading/>;
  }
  // Protected Route - Page accessible only to logged-in users
  if (!user) {
    return <Navigate to={"/login"} />;
  }
  return children;
}

export default Protected;
