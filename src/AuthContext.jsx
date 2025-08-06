import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

const VALID_USER = {
  username: 'admin',
  password: '123456'
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // <-- loading para esperar el localStorage

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);  // <-- Ya cargó, dejamos de cargar
  }, []);

  function login(username, password) {
    if (username === VALID_USER.username && password === VALID_USER.password) {
      const loggedUser = { username };
      localStorage.setItem('user', JSON.stringify(loggedUser));
      setUser(loggedUser);
      return true;
    }
    return false;
  }

  function logout() {
    localStorage.removeItem('user');
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
