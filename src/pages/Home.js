import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Descarte Consciente de <span>Lixo Eletrônico</span></h1>
          <p>A Outlotes transforma resíduos eletrônicos em soluções sustentáveis, protegendo o meio ambiente e gerando valor para empresas e pessoas.</p>
          <div className="hero-buttons">
            <Link to="/projetos" className="btn-primary">Ver Projetos</Link>
            <Link to="/contato" className="btn-secondary">Fale Conosco</Link>
          </div>
        </div>
      </section>

      <section className="features">
        <h2>Por que escolher a Outlotes?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <span className="feature-icon">♻</span>
            <h3>Descarte Responsável</h3>
            <p>Processamos eletrônicos de forma segura, garantindo zero impacto ambiental negativo.</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">📜</span>
            <h3>Certificado de Descarte</h3>
            <p>Emitimos certificados que comprovam o correto descarte dos seus equipamentos.</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">🚛</span>
            <h3>Coleta no Local</h3>
            <p>Realizamos a coleta diretamente na sua empresa ou residência com comodidade.</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">🤝</span>
            <h3>Parcerias Estratégicas</h3>
            <p>Trabalhamos com parceiros certificados para garantir o melhor destino aos resíduos.</p>
          </div>
        </div>
      </section>

      <section className="cta">
        <h2>Pronto para descartar seus eletrônicos corretamente?</h2>
        <p>Entre em contato conosco e receba uma proposta personalizada para a sua empresa.</p>
        <Link to="/contato" className="btn-primary">Solicitar Coleta</Link>
      </section>
    </div>
  );
}
