import './Contato.css';

export default function Contato() {
  return (
    <div className="page">

      <div className="contato-hero">
        <div className="contato-hero-content">
          <span className="contato-hero-badge">Fale Conosco</span>
          <h1>Contato</h1>
          <p>Fale com a nossa equipe — estamos prontos para te atender.</p>
        </div>
      </div>

      <div className="contato-content">
        <section className="contato-section">
          <h2>Informações de Contato</h2>
          <div className="info-list">

            <a href="https://wa.me/5521964901237" target="_blank" rel="noreferrer" className="info-item info-item-link">
              <div className="info-icons">
                <svg className="whatsapp-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.17 1.6 5.99L0 24l6.18-1.62A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.22-3.48-8.52zM12 22c-1.85 0-3.67-.5-5.25-1.44l-.38-.22-3.67.96.98-3.58-.25-.4A9.93 9.93 0 0 1 2 12C2 6.48 6.48 2 12 2c2.67 0 5.18 1.04 7.07 2.93A9.93 9.93 0 0 1 22 12c0 5.52-4.48 10-10 10zm5.44-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.91-2.2-.24-.57-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.27.49 1.7.63.72.23 1.37.2 1.88.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35z" fill="#25D366"/>
                </svg>
              </div>
              <div>
                <strong>Telefone / WhatsApp</strong>
                <p>(21) 96490-1237</p>
                <span className="info-cta">Clique para abrir no WhatsApp →</span>
              </div>
            </a>

            <div className="info-item">
              <div className="info-icons">
                <span className="info-icon">📧</span>
              </div>
              <div>
                <strong>E-mail</strong>
                <p>outlotes@gmail.com</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icons">
                <span className="info-icon">🕐</span>
              </div>
              <div>
                <strong>Horário de Atendimento</strong>
                <p>Segunda a Sexta: 9h às 17h</p>
              </div>
            </div>

          </div>
        </section>
      </div>

    </div>
  );
}
