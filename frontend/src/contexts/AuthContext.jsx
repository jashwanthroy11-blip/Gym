import { createContext, useContext, useEffect, useState } from 'react';
import api from '../services/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('gym_user');
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    if (user?.token) {
      localStorage.setItem('gym_user', JSON.stringify(user));
      api.defaults.headers.common.Authorization = `Bearer ${user.token}`;
    } else {
      localStorage.removeItem('gym_user');
      delete api.defaults.headers.common.Authorization;
    }
  }, [user]);

  const login = async (email, password) => {
    const response = await api.post('/auth/login', { email, password });
    setUser({ ...response.data.user, token: response.data.token });
    return response.data;
  };

  const signup = async (payload) => {
    const response = await api.post('/auth/signup', payload);
    setUser({ ...response.data.user, token: response.data.token });
    return response.data;
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
