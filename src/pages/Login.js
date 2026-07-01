import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Login.css';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [captcha, setCaptcha] = useState(false);
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setError('');
    if (!captcha) {
      setError('Por favor, confirme que você não é um robô.');
      return;
    }
    const ok = login(username, password);
    if (ok) {
      navigate('/dashboard');
    } else {
      setError('Usuário ou senha inválidos.');
    }
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-logo">
          <span>♻</span> Outlotes
        </div>
        <h2>Área Interna</h2>
        <p className="login-subtitle">Acesso exclusivo para colaboradores</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Usuário</label>
            <input
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
              placeholder="Digite seu usuário"
              required
            />
          </div>
          <div className="form-group">
            <label>Senha</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Digite sua senha"
              required
            />
          </div>

          <div className="login-recaptcha">
            <label className="recaptcha-check">
              <input
                type="checkbox"
                checked={captcha}
                onChange={e => setCaptcha(e.target.checked)}
              />
              <span>Não sou um robô</span>
            </label>
            <div className="recaptcha-brand">
              <span>reCAPTCHA</span>
              <small>Privacidade · Termos</small>
            </div>
          </div>

          {error && <div className="login-error">{error}</div>}
          <button type="submit" className="login-btn">Entrar</button>
        </form>
      </div>
    </div>
  );
}
