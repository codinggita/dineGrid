import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem('dinegrid_user');
    if (stored) {
      const parsed = JSON.parse(stored);
      setUser(parsed);
      setRole(parsed.role);
    }
    setLoading(false);
  }, []);

  const login = (email, password, selectedRole) => {
    const userData = { email, role: selectedRole, name: email.split('@')[0] };
    localStorage.setItem('dinegrid_user', JSON.stringify(userData));
    setUser(userData);
    setRole(selectedRole);
    return userData;
  };

  const signup = (name, email, password, selectedRole) => {
    const userData = { email, role: selectedRole, name };
    localStorage.setItem('dinegrid_user', JSON.stringify(userData));
    setUser(userData);
    setRole(selectedRole);
    return userData;
  };

  const logout = () => {
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
