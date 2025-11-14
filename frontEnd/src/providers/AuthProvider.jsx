import { createContext, useContext, useMemo, useState, useEffect } from 'react';
import { decodeJwt, isTokenValid } from '../utils/jwt';

const STORAGE_KEY = 'auth';
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);
  const [user, setUser] = useState(null); // decoded payload

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const saved = JSON.parse(raw);
      if (saved?.token && isTokenValid(saved.token)) {
        setToken(saved.token);
        setRefreshToken(saved.refreshToken || null);
        setUser(decodeJwt(saved.token) || null);
      } else {
        localStorage.removeItem(STORAGE_KEY);
      }
    } catch {}
  }, []);

  const login = ({ token: newToken, refreshToken: newRefreshToken }) => {
    setToken(newToken);
    setRefreshToken(newRefreshToken || null);
    const payload = decodeJwt(newToken);
    setUser(payload || null);
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ token: newToken, refreshToken: newRefreshToken || null })
    );
  };

  const logout = () => {
    setToken(null);
    setRefreshToken(null);
    setUser(null);
    localStorage.removeItem(STORAGE_KEY);
  };

  const isAuthenticated = !!(token && isTokenValid(token));

  const value = useMemo(
    () => ({ token, refreshToken, user, isAuthenticated, login, logout }),
    [token, refreshToken, user, isAuthenticated]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;