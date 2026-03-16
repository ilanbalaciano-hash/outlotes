import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Navbar.css';

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate('/');
  }

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <span className="logo-icon">♻</span> Outlotes
      </Link>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/quem-somos">Quem Somos</Link></li>
        <li><Link to="/projetos">Projetos</Link></li>
        <li><Link to="/parceiros">Parceiros</Link></li>
        <li><Link to="/contato">Contato</Link></li>
        {user ? (
          <>
            <li><Link to="/dashboard">Área Interna</Link></li>
            <li><button className="btn-logout" onClick={handleLogout}>Sair</button></li>
          </>
        ) : (
          <li><Link to="/login" className="btn-login">Login</Link></li>
        )}
      </ul>
    </nav>
  );
}
