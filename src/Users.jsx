import React from 'react';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate('/login');
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Perfil de {user.username}</h1>
      <p>Este es tu perfil privado.</p>
      <button onClick={() => navigate('/dashboard')} style={{ marginRight: 10 }}>
        Ir al Dashboard
      </button>
      <button onClick={() => navigate('/profile')} style={{ marginRight: 10 }}>
        Ir al Perfil
      </button>
      <button onClick={handleLogout}>Cerrar sesión</button>
    </div>
  );
}
