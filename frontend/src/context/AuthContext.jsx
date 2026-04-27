import React, { createContext, useContext, useState, useEffect } from 'react';
import api from '../utils/api';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem('dinegrid_user');
    const token = localStorage.getItem('dinegrid_token');
    
    if (stored && token) {
      const parsed = JSON.parse(stored);
      setUser(parsed);
      setRole(parsed.role);
    }
    setLoading(false);
  }, []);

  const login = async (email, password, selectedRole) => {
    try {
      const response = await api.post('/auth/login', { email, password, role: selectedRole });
      const { token, data } = response.data;
      
      localStorage.setItem('dinegrid_token', token);
      localStorage.setItem('dinegrid_user', JSON.stringify(data.user));
      
      setUser(data.user);
      setRole(data.user.role);
      
      return data.user;
    } catch (error) {
      throw error.response?.data?.message || 'Login failed. Please try again.';
    }
  };

  const signup = async (name, email, password, selectedRole) => {
    try {
      const response = await api.post('/auth/signup', { name, email, password, role: selectedRole });
      const { token, data } = response.data;
      
      localStorage.setItem('dinegrid_token', token);
      localStorage.setItem('dinegrid_user', JSON.stringify(data.user));
      
      setUser(data.user);
      setRole(data.user.role);
      
      return data.user;
    } catch (error) {
      throw error.response?.data?.message || 'Signup failed. Please try again.';
    }
  };

  const logout = () => {
    localStorage.removeItem('dinegrid_token');
    localStorage.removeItem('dinegrid_user');
    setUser(null);
    setRole(null);
  };

  return (
    <AuthContext.Provider value={{ user, role, loading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
};

export default AuthContext;
