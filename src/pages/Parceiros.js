import './Parceiros.css';

const parceiros = [
  {
    id: 1,
    nome: 'EcoTech Reciclagem',
    descricao: 'Especialista em reciclagem de metais preciosos e componentes eletrônicos.',
    tipo: 'Reciclagem',
  },
  {
    id: 2,
    nome: 'Verde Log',
    descricao: 'Empresa de logística sustentável para transporte seguro de resíduos.',
    tipo: 'Logística',
  },
  {
    id: 3,
    nome: 'Instituto Ambiental BR',
    descricao: 'ONG parceira em campanhas de conscientização sobre descarte de eletrônicos.',
    tipo: 'ONG',
  },
  {
    id: 4,
    nome: 'SeguraTech',
    descricao: 'Responsável pela destruição segura de dados em equipamentos descartados.',
    tipo: 'Segurança de Dados',
  },
  {
    id: 5,
    nome: 'Prefeitura de São Paulo',
    descricao: 'Parceria para pontos de coleta públicos e campanhas educativas.',
    tipo: 'Governo',
  },
  {
    id: 6,
    nome: 'Refab Eletrônicos',
    descricao: 'Remanufatura e doação de equipamentos recuperados para escolas públicas.',
    tipo: 'Remanufatura',
  },
];

export default function Parceiros() {
  return (
    <div className="page">
      <div className="page-hero">
        <h1>Nossos Parceiros</h1>
        <p>Trabalhamos junto a empresas e instituições comprometidas com a sustentabilidade.</p>
      </div>

      <div className="parceiros-grid">
        {parceiros.map(p => (
          <div key={p.id} className="parceiro-card">
            <span className="parceiro-tipo">{p.tipo}</span>
            <h3>{p.nome}</h3>
            <p>{p.descricao}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
