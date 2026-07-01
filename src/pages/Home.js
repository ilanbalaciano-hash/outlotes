import { useState } from 'react';
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

const equipamentos = [
  {
    marca: 'Dell',
    logo: '/logos/dell.png',
    modelos: ['OptiPlex', 'Latitude', 'Inspiron', 'Precision', 'Vostro'],
  },
  {
    marca: 'HP',
    logo: '/logos/logo hp.webp',
    modelos: ['EliteBook', 'ProBook', 'EliteDesk', 'ProDesk', 'Pavilion'],
  },
  {
    marca: 'Lenovo',
    logo: '/logos/lenovo.png',
    modelos: ['ThinkPad', 'ThinkCentre', 'IdeaPad', 'Legion', 'ThinkBook'],
  },
  {
    marca: 'Montados',
    logo: null,
    icon: '🖥️',
    modelos: ['Desktops montados', 'Workstations', 'Servidores', 'All-in-One'],
  },
];

const faqs = [
  {
    pergunta: 'Como funciona a coleta?',
    resposta: 'Você preenche o formulário com os dados da sua empresa. Nossa equipe entra em contato para agendar uma visita, realiza o inventário dos equipamentos e faz a coleta no local. Todo o processo é documentado.',
  },
  {
    pergunta: 'Minha empresa recebe algum valor pelos equipamentos?',
    resposta: 'Sim! Dependendo do estado de conservação, modelo e quantidade dos equipamentos, realizamos avaliação e podemos oferecer contrapartida financeira. Entre em contato para uma avaliação gratuita.',
  },
  {
    pergunta: 'Em quanto tempo o certificado de destinação é emitido?',
    resposta: 'O certificado é emitido em até 5 dias úteis após a conclusão do processo de destinação dos equipamentos.',
  },
  {
    pergunta: 'Quais equipamentos vocês aceitam?',
    resposta: 'Aceitamos computadores, notebooks, monitores, servidores e periféricos das marcas Dell, HP e Lenovo. Também compramos máquinas montadas. Entre em contato para verificar outros equipamentos.',
  },
  {
    pergunta: 'A coleta tem algum custo para minha empresa?',
    resposta: 'Não! A coleta é gratuita. Você ainda recebe o certificado de destinação ambiental sem custo adicional.',
  },
];

const passos = [
  { num: '01', titulo: 'Solicite a Coleta', desc: 'Preencha o formulário abaixo com os dados da sua empresa e descreva os equipamentos.' },
  { num: '02', titulo: 'Agendamos a Visita', desc: 'Nossa equipe vai até você para inventariar e recolher os materiais com segurança.' },
  { num: '03', titulo: 'Receba o Certificado', desc: 'Após o processo, você recebe o certificado de destinação correta.' },
];

function formatCNPJ(value) {
  return value
    .replace(/\D/g, '')
    .replace(/^(\d{2})(\d)/, '$1.$2')
    .replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')
    .replace(/\.(\d{3})(\d)/, '.$1/$2')
    .replace(/(\d{4})(\d)/, '$1-$2')
    .slice(0, 18);
}

function formatTelefone(value) {
  return value
    .replace(/\D/g, '')
    .replace(/^(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .slice(0, 15);
}

function FormularioColeta() {
  const [form, setForm] = useState({ empresa: '', cnpj: '', contato: '', telefone: '' });
  const [captcha, setCaptcha] = useState(false);
  const [enviado, setEnviado] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    if (name === 'cnpj') return setForm(f => ({ ...f, cnpj: formatCNPJ(value) }));
    if (name === 'telefone') return setForm(f => ({ ...f, telefone: formatTelefone(value) }));
    setForm(f => ({ ...f, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!captcha) return alert('Por favor, confirme que você não é um robô.');

    const mensagem =
      `Olá! Tenho interesse em solicitar uma coleta. Seguem meus dados:%0A%0A` +
      `🏢 *Empresa:* ${form.empresa}%0A` +
      `📄 *CNPJ:* ${form.cnpj}%0A` +
      `👤 *Contato:* ${form.contato}%0A` +
      `📞 *Telefone:* ${form.telefone}`;

    if (window.gtag) {
      window.gtag('event', 'conversion', { send_to: 'AW-878445240/AXnkCM3f6ukaELiF8KID' });
    }
    window.open(`https://wa.me/5521964901237?text=${mensagem}`, '_blank');
    setEnviado(true);
  }

  if (enviado) {
    return (
      <div className="form-sucesso">
        <span className="form-sucesso-icon">✅</span>
        <h3>Solicitação enviada!</h3>
        <p>Você será redirecionado para o WhatsApp. Em breve nossa equipe entrará em contato.</p>
      </div>
    );
  }

  return (
    <form className="coleta-form" onSubmit={handleSubmit}>
      <div className="form-field">
        <label>Nome da Empresa (Razão Social)</label>
        <input name="empresa" value={form.empresa} onChange={handleChange} placeholder="Ex: Outlotes Informática Ltda" required />
      </div>
      <div className="form-field">
        <label>CNPJ</label>
        <input name="cnpj" value={form.cnpj} onChange={handleChange} placeholder="00.000.000/0000-00" required />
      </div>
      <div className="form-row">
        <div className="form-field">
          <label>Nome do Contato</label>
          <input name="contato" value={form.contato} onChange={handleChange} placeholder="Seu nome" required />
        </div>
        <div className="form-field">
          <label>Telefone</label>
          <input name="telefone" value={form.telefone} onChange={handleChange} placeholder="(00) 00000-0000" required />
        </div>
      </div>
      <div className="recaptcha-box">
        <label className="recaptcha-label">
          <input type="checkbox" checked={captcha} onChange={e => setCaptcha(e.target.checked)} />
          <span>Não sou um robô</span>
        </label>
        <div className="recaptcha-logo">
          <span>reCAPTCHA</span>
          <small>Privacidade · Termos</small>
        </div>
      </div>
      <button type="submit" className="btn-form">Solicitar Coleta</button>
    </form>
  );
}

function FaqItem({ pergunta, resposta }) {
  const [aberto, setAberto] = useState(false);
  return (
    <div className={`faq-item ${aberto ? 'faq-item--aberto' : ''}`} onClick={() => setAberto(!aberto)}>
      <div className="faq-pergunta">
        <span>{pergunta}</span>
        <span className="faq-icon">{aberto ? '−' : '+'}</span>
      </div>
      {aberto && <div className="faq-resposta">{resposta}</div>}
    </div>
  );
}

export default function Home() {
  function scrollToForm() {
    document.getElementById('solicitar').scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className="home">

      <section className="hero">
        <div className="hero-content">
          <span className="hero-badge">Gestão de Resíduos Eletrônicos</span>
          <h1>Descarte Consciente de <span>Lixo Eletrônico</span></h1>
          <p>A Outlotes oferece soluções completas para empresas que precisam descartar equipamentos com segurança, conformidade ambiental e proteção de dados.</p>
          <div className="hero-buttons">
            <button onClick={scrollToForm} className="btn-primary">Solicitar Coleta</button>
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

      <section className="equipamentos">
        <div className="equipamentos-inner">
          <div className="section-header">
            <h2>Equipamentos que Compramos</h2>
            <p>Avaliamos e compramos equipamentos corporativos das principais marcas do mercado</p>
          </div>
          <div className="equipamentos-grid">
            {equipamentos.map((e, i) => (
              <div key={i} className="equipamento-card">
                <div className="equipamento-logo">
                  {e.logo ? (
                    <img src={e.logo} alt={e.marca} />
                  ) : (
                    <span className="equipamento-icon">{e.icon}</span>
                  )}
                </div>
                <h3>{e.marca}</h3>
                <ul>
                  {e.modelos.map((m, j) => <li key={j}>{m}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <p className="equipamentos-obs">Não encontrou sua marca? <strong>Entre em contato</strong> — avaliamos outros modelos.</p>
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

      <section id="solicitar" className="solicitar-section">
        <div className="solicitar-inner">
          <div className="solicitar-texto">
            <h2>Solicite uma Coleta</h2>
            <p>Interessado em descartar seus equipamentos corretamente? Preencha o formulário e nossa equipe entrará em contato.</p>
          </div>
          <div className="solicitar-card">
            <FormularioColeta />
          </div>
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

      <section className="faq">
        <div className="faq-inner">
          <div className="section-header">
            <h2>Perguntas Frequentes</h2>
            <p>Tire suas dúvidas sobre nosso processo</p>
          </div>
          <div className="faq-list">
            {faqs.map((f, i) => <FaqItem key={i} pergunta={f.pergunta} resposta={f.resposta} />)}
          </div>
        </div>
      </section>

      <section className="cta">
        <h2>Sua empresa está descartando corretamente?</h2>
        <p>Fale com a Outlotes e receba uma proposta personalizada para a sua necessidade.</p>
        <button onClick={scrollToForm} className="btn-primary">Falar com a Outlotes</button>
      </section>

    </div>
  );
}
