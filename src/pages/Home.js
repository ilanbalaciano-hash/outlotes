import { Link } from 'react-router-dom';
import './Home.css';

const servicos = [
  { icon: '🚛', titulo: 'Coleta & Logística', desc: 'Realizamos a coleta diretamente na sua empresa com frota própria e logística eficiente.' },
  { icon: '🔒', titulo: 'Descaracterização', desc: 'Remoção de identidade visual e dados corporativos dos equipamentos com total sigilo.' },
  { icon: '💾', titulo: 'Destruição de Dados', desc: 'Sanitização certificada de HDs e mídias, garantindo proteção total das informações.' },
  { icon: '📋', titulo: 'Inventário de Ativos', desc: 'Catalogação e documentação completa dos equipamentos antes do descarte.' },
  { icon: '📜', titulo: 'Certificado de Destinação', desc: 'Emissão de certificado que comprova o correto descarte conforme normas ambientais.' },
  { icon: '♻', titulo: 'Logística Reversa', desc: 'Implementamos sistemas de retorno e destinação correta para redes e varejistas.' },
];

const stats = [
  { valor: '10.000+', label: 'Equipamentos descartados' },
  { valor: '200+', label: 'Empresas atendidas' },
  { valor: '100%', label: 'Certificados emitidos' },
  { valor: '0', label: 'Impacto ambiental negativo' },
];

const passos = [
  { num: '01', titulo: 'Solicite a Coleta', desc: 'Entre em contato pelo nosso formulário ou WhatsApp e descreva os equipamentos.' },
  { num: '02', titulo: 'Agendamos a Visita', desc: 'Nossa equipe vai até você para inventariar e recolher os materiais com segurança.' },
  { num: '03', titulo: 'Receba o Certificado', desc: 'Após o processo, você recebe o certificado de destinação correta.' },
];

export default function Home() {
  return (
    <div className="home">

      <section className="hero">
        <div className="hero-content">
          <span className="hero-badge">Gestão de Resíduos Eletrônicos</span>
          <h1>Descarte Consciente de <span>Lixo Eletrônico</span></h1>
          <p>A Outlotes oferece soluções completas para empresas que precisam descartar equipamentos com segurança, conformidade ambiental e proteção de dados.</p>
          <div className="hero-buttons">
            <Link to="/contato" className="btn-primary">Solicitar Coleta</Link>
            <Link to="/quem-somos" className="btn-secondary">Saiba Mais</Link>
          </div>
        </div>
      </section>

      <section className="stats">
        {stats.map((s, i) => (
          <div key={i} className="stat-item">
            <strong>{s.valor}</strong>
            <span>{s.label}</span>
          </div>
        ))}
      </section>

      <section className="servicos">
        <div className="servicos-inner">
          <div className="section-header">
            <h2>Nossas Soluções</h2>
            <p>Serviços completos para o ciclo de vida dos seus ativos de TI</p>
          </div>
          <div className="servicos-grid">
            {servicos.map((s, i) => (
              <div key={i} className="servico-card">
                <span className="servico-icon">{s.icon}</span>
                <h3>{s.titulo}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="como-funciona">
        <div className="section-header">
          <h2>Como Funciona</h2>
          <p>Processo simples e transparente do início ao fim</p>
        </div>
        <div className="passos">
          {passos.map((p, i) => (
            <div key={i} className="passo">
              <span className="passo-num">{p.num}</span>
              <div>
                <h3>{p.titulo}</h3>
                <p>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="gallery">
        <div className="section-header">
          <h2>Nosso Trabalho</h2>
          <p>Veja como transformamos resíduos em responsabilidade</p>
        </div>
        <div className="gallery-grid">
          <div className="gallery-item">
            <img src="https://images.unsplash.com/photo-1612965110667-4175024b0dcc?w=700&q=80" alt="Lixo eletrônico sendo reciclado" />
          </div>
          <div className="gallery-item">
            <img src="https://images.unsplash.com/photo-1582748298043-0c0d31aa506e?w=700&q=80" alt="Equipamentos eletrônicos descartados" />
          </div>
          <div className="gallery-item">
            <img src="https://images.unsplash.com/photo-1717667745934-53091623e8ee?w=700&q=80" alt="Reciclagem de resíduos eletrônicos" />
          </div>
        </div>
      </section>

      <section className="cta">
        <h2>Sua empresa está descartando corretamente?</h2>
        <p>Fale com a Outlotes e receba uma proposta personalizada para a sua necessidade.</p>
        <Link to="/contato" className="btn-primary">Falar com a Outlotes</Link>
      </section>

    </div>
  );
}
