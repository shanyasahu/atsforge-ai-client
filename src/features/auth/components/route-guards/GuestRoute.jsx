import { Navigate } from "react-router";
import { useAuth } from "../../../hooks/useAuth";
import Loading from "../../../components/Loading";

function GuestRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    return <Loading />;
  }

  return user ? <Navigate to="/dashboard" /> : children;
}

export default GuestRoute;
