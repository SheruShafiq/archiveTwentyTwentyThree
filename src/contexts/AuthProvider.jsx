import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "@/contexts/AuthContext";

const AuthContextProvider = ({ children }) => {
  const [session, setSession] = useState(null);
  const [expiresAt, setExpiresAt] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const initSession = async () => {
      const response = await fetch('/api/sessions/init');
      const data = await response.json();
      setExpiresAt(response.headers.get("x-session-expires"))
      setSession(data);
      setLoading(false);
    };
    if (!session?.csrf) {
      initSession();
    }
  }, [session]);

  const login = async (data) => {
    setSession(data);
    navigate("/profile");
  };

  const logout = async () => {
    const response = await fetch('/api/sessions/logout', { method: 'DELETE', headers: { "X-CSRF-Token": session.csrf } });
    const data = await response.json();
    setSession(data);
    navigate("/login", { replace: true });
  };

  const extendSession = async () => {
    const response = await fetch('/api/sessions/init');
    const data = await response.json();
    setExpiresAt(response.headers.get("x-session-expires"))
    setSession(data);
  };

  const value = {
    session,
    loading,
    login,
    logout,
    expiresAt,
    setExpiresAt,
    setSession,
    extendSession
  }

  if (!session || !session.csrf) {
    return <span>Loading...</span>
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;