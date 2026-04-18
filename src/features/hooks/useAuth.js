import { useContext, useEffect } from "react";
import { AuthContext } from "../auth/context/auth.context";
import {
  login,
  register,
  logout,
  getMe,
  googleLogin,
} from "../auth/services/auth.api";

export const useAuth = () => {
  const context = useContext(AuthContext);
  const { user, setUser, loading, setLoading } = context;

  // LOGIN
  const handleLogin = async ({ email, password }) => {
    setLoading(true);

    try {
      const data = await login({ email, password });

      if (data?.user) {
        setUser(data.user);
        return true;
      }

      return false;
    } catch (err) {
      return false;
    } finally {
      setLoading(false);
    }
  };

  // REGISTER
  const handleRegister = async ({ username, email, password }) => {
    setLoading(true);

    try {
      const data = await register({ username, email, password });

      if (data?.user) {
        setUser(data.user);
        return true;
      }

      return false;
    } catch (err) {
      return false;
    } finally {
      setLoading(false);
    }
  };

  // GOOGLE LOGIN
  const handleGoogleLogin = async (credential) => {
    setLoading(true);

    try {
      await googleLogin(credential);

      const data = await getMe();

      if (data?.user) {
        setUser(data.user);
        return true;
      }

      return false;
    } catch (err) {
      console.error(err);
      return false;
    } finally {
      setLoading(false);
    }
  };

  // LOGOUT
  const handleLogout = async () => {
    setLoading(true);

    try {
      await logout();
      setUser(null);
      return true;
    } catch (err) {
      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    user,
    loading,
    setUser,
    setLoading,
    handleLogin,
    handleRegister,
    handleLogout,
    handleGoogleLogin,
  };
};
