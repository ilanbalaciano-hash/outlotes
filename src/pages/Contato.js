import './Contato.css';
import './PageCommon.css';

export default function Contato() {
  return (
    <div className="page">
      <div className="page-hero">
        <h1>Dados da Empresa</h1>
        <p>Entre em contato conosco ou nos visite.</p>
      </div>

      <div className="page-content">
        <div className="contato-grid">
          <section className="section-block">
            <h2>Informações de Contato</h2>

            <div className="info-list">
              <div className="info-item">
                <span className="info-icon">📞</span>
                <div>
                  <strong>Telefone / WhatsApp</strong>
                  <p>(11) 99999-0000</p>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon">📧</span>
                <div>
                  <strong>E-mail</strong>
                  <p>contato@outlotes.com.br</p>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon">📍</span>
                <div>
                  <strong>Endereço</strong>
                  <p>Rua das Indústrias, 500 — São Paulo, SP</p>
                  <p>CEP: 01310-000</p>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon">🕐</span>
                <div>
                  <strong>Horário de Atendimento</strong>
                  <p>Segunda a Sexta: 8h às 18h</p>
                  <p>Sábado: 8h às 12h</p>
                </div>
              </div>
            </div>
          </section>

          <section className="section-block">
            <h2>Dados Empresariais</h2>
            <div className="info-list">
              <div className="info-item">
                <span className="info-icon">🏢</span>
                <div>
                  <strong>Razão Social</strong>
                  <p>Outlotes Soluções Ambientais Ltda.</p>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon">📄</span>
                <div>
                  <strong>CNPJ</strong>
                  <p>00.000.000/0001-00</p>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon">🏦</span>
                <div>
                  <strong>Inscrição Estadual</strong>
                  <p>000.000.000.000</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
