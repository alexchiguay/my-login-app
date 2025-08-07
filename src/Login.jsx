// src/pages/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import ErrorModal from './ErrorModal'; // Modal genérico

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const success = login(username, password);
    if (success) {
      navigate('/dashboard');
    } else {
      setShowModal(true);
    }
  }

  return (
    <div style={{ maxWidth: 300, margin: 'auto', padding: 20 }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
          style={{ width: '100%', marginBottom: 10, padding: 8 }}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          style={{ width: '100%', marginBottom: 10, padding: 8 }}
        />
        <button type="submit" style={{ width: '100%', padding: 8 }}>
          Ingresar
        </button>
      </form>

      {/* Modal de error */}
      {showModal && (
        <ErrorModal
          title="Error de autenticación"
          message="Credenciales inválidas"
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}
