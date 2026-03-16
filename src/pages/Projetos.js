import './Projetos.css';

const projetos = [
  {
    id: 1,
    titulo: 'Coleta em Empresa de TI — São Paulo',
    descricao: 'Recolhimento e destinação de 2.000 equipamentos obsoletos de uma empresa de tecnologia, incluindo computadores, monitores e servidores.',
    itens: '2.000 equipamentos',
    ano: '2023',
    certificado: true,
  },
  {
    id: 2,
    titulo: 'Campanha de Descarte — Prefeitura Municipal',
    descricao: 'Parceria com prefeitura para coleta pública de eletrônicos em pontos estratégicos da cidade, atingindo mais de 5 mil cidadãos.',
    itens: '8 toneladas coletadas',
    ano: '2023',
    certificado: true,
  },
  {
    id: 3,
    titulo: 'Reciclagem de Baterias — Indústria Automotiva',
    descricao: 'Gestão e descarte seguro de baterias e componentes eletrônicos de linha de montagem de veículos elétricos.',
    itens: '500 baterias',
    ano: '2024',
    certificado: true,
  },
  {
    id: 4,
    titulo: 'Logística Reversa — Rede de Varejo',
    descricao: 'Implementação de sistema de logística reversa em rede com 30 lojas, garantindo retorno e destinação correta de produtos devolvidos.',
    itens: '30 pontos de coleta',
    ano: '2024',
    certificado: true,
  },
];

export default function Projetos() {
  return (
    <div className="page">
      <div className="page-hero">
        <h1>Projetos Realizados</h1>
        <p>Confira alguns dos projetos que já realizamos com sucesso.</p>
      </div>

      <div className="projetos-grid">
        {projetos.map(p => (
          <div key={p.id} className="projeto-card">
            <div className="projeto-header">
              <span className="projeto-ano">{p.ano}</span>
              {p.certificado && <span className="projeto-cert">✔ Certificado</span>}
            </div>
            <h3>{p.titulo}</h3>
            <p>{p.descricao}</p>
            <div className="projeto-info">
              <span>📦 {p.itens}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
