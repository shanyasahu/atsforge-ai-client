import { useContext, useEffect } from "react";
import { AuthContext } from "../auth/context/auth.context";
import { login, register, logout, getMe } from "../auth/services/auth.api";

export const useAuth = () => {
  const context = useContext(AuthContext);

  const { user, setUser, loading, setLoading } = context;

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

  useEffect(() => {
    const getAndSetUser = async () => {
      try {
        const data = await getMe();

        if (data?.user) {
          setUser(data.user);
          return true;
        } else {
          setUser(null);
          return false;
        }
      } catch (err) {
        setUser(null);
        return false;
      } finally {
        setLoading(false);
      }
    };

    getAndSetUser();
  }, [[setUser, setLoading]]);

  return { user, loading, handleLogin, handleRegister, handleLogout };
};
