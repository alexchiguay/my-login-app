import React from 'react';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate('/login');
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Bienvenido, {user.username}</h1>
      <button onClick={() => navigate('/profile')} style={{ marginRight: 10 }}>
        Ir al Perfil
      </button>
      <button onClick={() => navigate('/users')} style={{ marginRight: 10 }}>
        Ir al Usuarios
      </button>
      <button onClick={handleLogout}>Cerrar sesión</button>
    </div>
  );
}
