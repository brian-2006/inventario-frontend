import { createContext, useContext, useMemo, useState, useEffect, useCallback } from 'react';
import { decodeJwt, isTokenValid } from '../utils/jwt';

import EmptyStatePage from '../components/molecules/EmptyState'
import PortableWifiOffIcon from '@mui/icons-material/PortableWifiOff';
import CircularProgress from '@mui/material/CircularProgress';
const STORAGE_KEY = 'auth';
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Cargar el estado de autenticación al iniciar
  useEffect(() => {
    const loadAuthData = () => {
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) {
          setIsLoading(false);
          return;
        }

        const saved = JSON.parse(raw);
        if (saved?.token) {
          if (isTokenValid(saved.token)) {
            const decodedUser = decodeJwt(saved.token);
            setToken(saved.token);
            setRefreshToken(saved.refreshToken || null);
            setUser(decodedUser);
          } else {
            // Si el token expiró, limpiamos el localStorage
            localStorage.removeItem(STORAGE_KEY);
          }
        }
      } catch (error) {
        console.error('Error al cargar la autenticación:', error);
        localStorage.removeItem(STORAGE_KEY);
      } finally {
        setIsLoading(false);
      }
    };

    loadAuthData();
  }, []);

  const login = useCallback(({ token: newToken, refreshToken: newRefreshToken }) => {
    if (!newToken) return;

    try {
      const decodedUser = decodeJwt(newToken);
      const authData = {
        token: newToken,
        refreshToken: newRefreshToken || null
      };

      localStorage.setItem(STORAGE_KEY, JSON.stringify(authData));
      
      setToken(newToken);
      setRefreshToken(newRefreshToken || null);
      setUser(decodedUser);
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      throw error;
    }
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setToken(null);
    setRefreshToken(null);
    setUser(null);
  }, []);

  // Verificar si el token sigue siendo válido
  const isAuthenticated = useMemo(() => {
    if (!token) return false;
    return isTokenValid(token);
  }, [token]);

  const value = useMemo(
    () => ({
      token,
      refreshToken,
      user,
      isAuthenticated,
      isLoading,
      login,
      logout
    }),
    [token, refreshToken, user, isAuthenticated, isLoading, login, logout]
  );

  if (isLoading) {
    return <EmptyStatePage
      icon={<CircularProgress/>}
      title = "login"
      description=' cargando inicio de sesion'
    /> // O un componente de carga
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider');
  }
  return context;
};

export default AuthProvider;