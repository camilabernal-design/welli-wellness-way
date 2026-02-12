import { useState } from 'react';
import '../styles/LoginPage.css';

export default function LoginPage({ onLogin }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const DEFAULT_PASSWORD = 'welliesbienestar'; // Contraseña por defecto

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (password === DEFAULT_PASSWORD) {
      setError('');
      onLogin();
      setPassword('');
    } else {
      setError('Contraseña incorrecta');
      setPassword('');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Welli - Clínica de Ventas</h1>
        <p className="login-subtitle">Ingresa la contraseña para continuar</p>
        
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="password-input"
            autoFocus
          />
          <button type="submit" className="login-button">
            Ingresar
          </button>
        </form>

        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
}
