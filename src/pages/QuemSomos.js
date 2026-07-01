import './QuemSomos.css';

export default function QuemSomos() {
  return (
    <div className="qs-page">

      {/* ── HERO ── */}
      <div className="qs-hero">
        <div className="qs-hero-content">
          <span className="qs-badge">Conheça a Outlotes</span>
          <h1>Compromisso com um <span>Futuro Sustentável</span></h1>
          <p>Transformamos a gestão de resíduos eletrônicos unindo inovação, responsabilidade ambiental e compromisso social.</p>
        </div>
      </div>

      {/* ── SOBRE ── */}
      <section className="qs-sobre">
        <div className="qs-sobre-inner">
          <div className="qs-sobre-texto">
            <span className="qs-label">Quem Somos</span>
            <h2>A empresa por trás do descarte consciente</h2>
            <p>A Outlotes é uma empresa especializada em gestão de resíduos eletrônicos. Desde sua fundação, temos o propósito de transformar a forma como o lixo eletrônico é tratado, unindo inovação, responsabilidade ambiental e compromisso social.</p>
          </div>
          <div className="qs-sobre-stats">
            <div className="qs-stat">
              <strong>10k+</strong>
              <span>Equipamentos descartados</span>
            </div>
            <div className="qs-stat">
              <strong>200+</strong>
              <span>Empresas atendidas</span>
            </div>
            <div className="qs-stat">
              <strong>100%</strong>
              <span>Certificados emitidos</span>
            </div>
            <div className="qs-stat">
              <strong>0</strong>
              <span>Impacto ambiental negativo</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSÃO / FOCO / COMPROMISSOS ── */}
      <section className="qs-mfc">
        <div className="qs-mfc-inner">
          <div className="qs-section-header">
            <span className="qs-label">Nossa Essência</span>
            <h2>O que nos move</h2>
          </div>
          <div className="qs-mfc-grid">
            <div className="qs-mfc-card">
              <div className="qs-mfc-icon">🎯</div>
              <h3>Nossa Missão</h3>
              <ul>
                <li>Promover a reciclagem tecnológica no Brasil</li>
                <li>Incentivar práticas sustentáveis</li>
                <li>Educar sobre gestão de resíduos eletrônicos</li>
              </ul>
            </div>
            <div className="qs-mfc-card qs-mfc-card--destaque">
              <div className="qs-mfc-icon">🔍</div>
              <h3>Nosso Foco</h3>
              <ul>
                <li>Eficiência em processos de descarte</li>
                <li>Segurança na manipulação de resíduos</li>
                <li>Conformidade com normas ambientais</li>
              </ul>
            </div>
            <div className="qs-mfc-card">
              <div className="qs-mfc-icon">🤝</div>
              <h3>Compromissos</h3>
              <ul>
                <li>Responsabilidade ambiental e inclusão digital</li>
                <li>Conformidade legal e ética em tudo</li>
                <li>Parceiros estratégicos para o futuro</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── OBJETIVOS ── */}
      <section className="qs-objetivos">
        <div className="qs-objetivos-inner">
          <div className="qs-section-header">
            <span className="qs-label">Nossa Direção</span>
            <h2>Principais Objetivos</h2>
          </div>
          <div className="qs-obj-grid">
            <div className="qs-obj-item">
              <span className="qs-obj-num">01</span>
              <div>
                <h3>Transformação</h3>
                <p>Transformar a forma como o lixo eletrônico é tratado no Brasil.</p>
              </div>
            </div>
            <div className="qs-obj-item">
              <span className="qs-obj-num">02</span>
              <div>
                <h3>Inovação</h3>
                <p>Integrar inovação e responsabilidade ambiental em cada processo.</p>
              </div>
            </div>
            <div className="qs-obj-item">
              <span className="qs-obj-num">03</span>
              <div>
                <h3>Impacto Social</h3>
                <p>Comprometimento com a melhoria social e inclusão digital.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── POR QUE CONTRATAR ── */}
      <section className="qs-porque">
        <div className="qs-porque-inner">
          <div className="qs-section-header qs-section-header--light">
            <span className="qs-label qs-label--light">Nossos Diferenciais</span>
            <h2>Por que escolher a Outlotes?</h2>
          </div>
          <div className="qs-porque-grid">
            <div className="qs-porque-card">
              <span className="qs-porque-icon">⚡</span>
              <h3>Eficiência</h3>
              <p>Processos otimizados de descarte com agilidade e rastreabilidade em cada etapa.</p>
            </div>
            <div className="qs-porque-card">
              <span className="qs-porque-icon">🔐</span>
              <h3>Segurança</h3>
              <p>Manipulação segura de resíduos eletrônicos com destruição certificada de dados.</p>
            </div>
            <div className="qs-porque-card">
              <span className="qs-porque-icon">📋</span>
              <h3>Conformidade</h3>
              <p>Total conformidade com normas ambientais brasileiras e emissão de certificados.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── IMPACTO + SOCIAL ── */}
      <section className="qs-dupla">
        <div className="qs-dupla-inner">
          <div className="qs-dupla-card">
            <span className="qs-dupla-icon">🌱</span>
            <span className="qs-label">Meio Ambiente</span>
            <h3>Impacto Ambiental</h3>
            <p>Contribuímos diretamente para a redução da poluição e conservação dos recursos naturais. Promovemos a recuperação de metais e plásticos valiosos, redução de resíduos em aterros e diminuição da emissão de CO₂.</p>
          </div>
          <div className="qs-dupla-card qs-dupla-card--verde">
            <span className="qs-dupla-icon">👥</span>
            <span className="qs-label qs-label--light">Sociedade</span>
            <h3>Responsabilidade Social</h3>
            <p>Nosso compromisso vai além da sustentabilidade. Investimos em inclusão digital colaborando com projetos sociais, escolas e cooperativas. Acreditamos que todos devem ter acesso ao conhecimento e ferramentas digitais.</p>
          </div>
        </div>
      </section>

      {/* ── ESTRATÉGIAS ── */}
      <section className="qs-estrategias">
        <div className="qs-estrategias-inner">
          <div className="qs-section-header">
            <span className="qs-label">Crescimento</span>
            <h2>Estratégias de Desempenho</h2>
          </div>
          <div className="qs-est-grid">
            <div className="qs-est-item">
              <div className="qs-est-num">📈</div>
              <h3>Tecnologia Inovadora</h3>
              <p>Investimentos contínuos em tecnologia para processos mais eficientes e rastreáveis.</p>
            </div>
            <div className="qs-est-item">
              <div className="qs-est-num">👨‍💼</div>
              <h3>Equipe Qualificada</h3>
              <p>Time especializado, treinado e conectado com as melhores práticas do setor.</p>
            </div>
            <div className="qs-est-item">
              <div className="qs-est-num">📣</div>
              <h3>Expansão e Marketing</h3>
              <p>Estratégia de marketing estruturada para expansão das operações e serviços.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
