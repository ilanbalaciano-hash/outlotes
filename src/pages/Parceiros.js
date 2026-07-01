import './Parceiros.css';

const parceiros = [
  {
    id: 1,
    nome: 'Prefeitura do Rio de Janeiro',
    descricao: 'Parceria para coleta e destinação correta de resíduos eletrônicos em órgãos públicos municipais.',
    tipo: 'Governo',
    logo: '/logos/prefeitura-rio.png',
  },
  {
    id: 2,
    nome: 'Hotel Sheraton',
    descricao: 'Gestão e descarte responsável de equipamentos de TI e eletrônicos da rede hoteleira.',
    tipo: 'Hotelaria',
    logo: '/logos/sheraton.jpg',
  },
  {
    id: 4,
    nome: 'Infraero',
    descricao: 'Gestão de resíduos eletrônicos e logística reversa em aeroportos administrados pela empresa.',
    tipo: 'Infraestrutura',
    logo: '/logos/OIP.webp',
  },
  {
    id: 5,
    nome: 'Robert Half',
    descricao: 'Coleta e destinação certificada de equipamentos corporativos com emissão de laudos.',
    tipo: 'Recursos Humanos',
    logo: '/logos/robert-half-logo-png_seeklogo-353775.png',
  },
  {
    id: 6,
    nome: 'Botafogo F.C.',
    descricao: 'Descarte responsável de equipamentos eletrônicos das instalações do clube.',
    tipo: 'Esporte',
    logo: '/logos/baixados.webp',
  },
  {
    id: 7,
    nome: 'Shopping Nova América',
    descricao: 'Implementação de pontos de coleta de eletrônicos e logística reversa no empreendimento.',
    tipo: 'Varejo',
    logo: '/logos/logo-shopping-nova-america.jpg',
  },
  {
    id: 8,
    nome: 'Grupo Technos',
    descricao: 'Parceria para descarte e reciclagem de componentes eletrônicos da linha de produção.',
    tipo: 'Indústria',
    logo: '/logos/OIP (1).webp',
  },
  {
    id: 9,
    nome: 'Laboratórios Richet',
    descricao: 'Destinação segura de equipamentos laboratoriais e eletrônicos com conformidade ambiental.',
    tipo: 'Saúde',
    logo: '/logos/OIP.jfif',
  },
  {
    id: 10,
    nome: 'OI Futuro',
    descricao: 'Projeto de inclusão digital com reaproveitamento de equipamentos coletados e certificados.',
    tipo: 'Telecom',
    logo: '/logos/oi futuro .webp',
  },
  {
    id: 11,
    nome: 'Infraprev',
    descricao: 'Gestão e descarte de ativos de TI com emissão de certificados de destinação ambiental.',
    tipo: 'Previdência',
    logo: '/logos/infraqm5.png',
  },
  {
    id: 14,
    nome: 'Viação Redentor',
    descricao: 'Destinação correta de equipamentos eletrônicos e sistemas embarcados da frota.',
    tipo: 'Transporte',
    logo: '/logos/logo_viacao_redentor.png',
  },
];

function ParceiroCard({ parceiro }) {
  function handleImgError(e) {
    e.target.style.display = 'none';
    e.target.nextSibling.style.display = 'flex';
  }

  return (
    <div className="parceiro-card">
      <div className="parceiro-logo-wrap">
        <img
          src={parceiro.logo}
          alt={`Logo ${parceiro.nome}`}
          className="parceiro-logo"
          onError={handleImgError}
        />
        <div className="parceiro-logo-fallback" style={{ display: 'none' }}>
          <span>{parceiro.nome.charAt(0)}</span>
        </div>
      </div>
      <span className="parceiro-tipo">{parceiro.tipo}</span>
      <h3>{parceiro.nome}</h3>
      <p>{parceiro.descricao}</p>
    </div>
  );
}

export default function Parceiros() {
  return (
    <div className="page">

      <div className="parceiros-hero">
        <div className="parceiros-hero-content">
          <span className="parceiros-hero-badge">Nossos Parceiros</span>
          <h1>Empresas que confiam na <span>Outlotes</span></h1>
          <p>Atendemos empresas privadas, órgãos públicos e instituições de todo o Brasil com excelência e responsabilidade ambiental.</p>
        </div>
      </div>

      <div className="parceiros-body">
        <div className="parceiros-grid">
          {parceiros.map(p => (
            <ParceiroCard key={p.id} parceiro={p} />
          ))}
        </div>
      </div>

    </div>
  );
}
