// src/components/ErrorModal.jsx
import React from 'react';

export default function ErrorModal({ title = "Error", message, onClose }) {
  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
      backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex',
      justifyContent: 'center', alignItems: 'center', zIndex: 1000
    }}>
      <div style={{
        backgroundColor: 'white', padding: 20, borderRadius: 8,
        maxWidth: 300, textAlign: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
      }}>
        <h3 style={{ marginBottom: 10, color: 'red' }}>{title}</h3>
        <p>{message}</p>
        <button onClick={onClose} style={{ marginTop: 15, padding: 8 }}>
          Cerrar
        </button>
      </div>
    </div>
  );
}
