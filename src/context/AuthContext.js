import { createContext, useContext, useState } from 'react';

const USERS = [
  { username: 'admin', password: 'outlotes2024', role: 'Administrador' },
  { username: 'funcionario', password: 'outlotes123', role: 'Funcionário' },
];

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('outlotes_user');
    return saved ? JSON.parse(saved) : null;
  });

  function login(username, password) {
    const found = USERS.find(u => u.username === username && u.password === password);
    if (found) {
      const userData = { username: found.username, role: found.role };
      setUser(userData);
      localStorage.setItem('outlotes_user', JSON.stringify(userData));
      return true;
    }
    return false;
  }

  function logout() {
    setUser(null);
    localStorage.removeItem('outlotes_user');
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
