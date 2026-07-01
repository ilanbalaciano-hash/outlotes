import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="footer-logo">♻ Outlotes</span>
          <p>Gestão responsável de resíduos eletrônicos. Descarte seguro, certificado e sustentável.</p>
          <a href="https://wa.me/5521964901237" target="_blank" rel="noreferrer" className="footer-whatsapp">
            💬 (21) 96490-1237
          </a>
        </div>
        <div className="footer-links">
          <h4>Navegação</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/quem-somos">Quem Somos</Link></li>
            <li><Link to="/projetos">Projetos</Link></li>
            <li><Link to="/parceiros">Parceiros</Link></li>
            <li><Link to="/contato">Contato</Link></li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Soluções</h4>
          <ul>
            <li><span>Coleta & Logística</span></li>
            <li><span>Destruição de Dados</span></li>
            <li><span>Certificado de Destinação</span></li>
            <li><span>Logística Reversa</span></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Outlotes Informática — Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
