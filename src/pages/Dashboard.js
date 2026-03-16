import { useAuth } from '../context/AuthContext';
import './Dashboard.css';

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Bem-vindo, {user?.username}!</h1>
        <span className="dashboard-role">{user?.role}</span>
      </div>

      <div className="dashboard-content">
        <div className="dash-card">
          <span className="dash-icon">📦</span>
          <h3>Coletas este mês</h3>
          <p className="dash-number">24</p>
        </div>
        <div className="dash-card">
          <span className="dash-icon">♻</span>
          <h3>Toneladas recicladas</h3>
          <p className="dash-number">12,4t</p>
        </div>
        <div className="dash-card">
          <span className="dash-icon">🤝</span>
          <h3>Parceiros ativos</h3>
          <p className="dash-number">6</p>
        </div>
        <div className="dash-card">
          <span className="dash-icon">📜</span>
          <h3>Certificados emitidos</h3>
          <p className="dash-number">18</p>
        </div>
      </div>

      <div className="dashboard-info">
        <h2>Área Administrativa</h2>
        <p>Esta é a área restrita da Outlotes. Aqui você pode visualizar os indicadores internos da empresa.</p>
        <p>Para adicionar funcionalidades como cadastro de projetos, clientes e relatórios, entre em contato com o time de TI.</p>
      </div>
    </div>
  );
}
