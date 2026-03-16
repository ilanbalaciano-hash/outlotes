import './PageCommon.css';

export default function QuemSomos() {
  return (
    <div className="page">
      <div className="page-hero">
        <h1>Quem Somos</h1>
        <p>Conheça a empresa que está transformando o destino do lixo eletrônico no Brasil.</p>
      </div>

      <div className="page-content">
        <section className="section-block">
          <h2>Nossa História</h2>
          <p>
            A Outlotes nasceu da necessidade de oferecer uma solução responsável e sustentável para o descarte de resíduos eletrônicos. Fundada com o propósito de unir tecnologia e consciência ambiental, a empresa cresce ano a ano, ampliando seu impacto positivo no meio ambiente e na sociedade.
          </p>
        </section>

        <section className="section-block">
          <h2>Nossa Missão</h2>
          <p>
            Oferecer soluções seguras e sustentáveis para o descarte de lixo eletrônico, contribuindo para um planeta mais limpo e para a economia circular.
          </p>
        </section>

        <section className="section-block">
          <h2>Nossa Visão</h2>
          <p>
            Ser referência nacional em gestão de resíduos eletrônicos, reconhecida pela excelência, responsabilidade ambiental e inovação.
          </p>
        </section>

        <section className="section-block">
          <h2>Nossos Valores</h2>
          <div className="values-grid">
            <div className="value-item">
              <strong>Sustentabilidade</strong>
              <p>Cada decisão é tomada pensando no impacto ambiental.</p>
            </div>
            <div className="value-item">
              <strong>Transparência</strong>
              <p>Agimos com ética e clareza em todas as nossas relações.</p>
            </div>
            <div className="value-item">
              <strong>Inovação</strong>
              <p>Buscamos constantemente melhores formas de reciclar e reutilizar.</p>
            </div>
            <div className="value-item">
              <strong>Responsabilidade</strong>
              <p>Comprometidos com as leis ambientais e com a sociedade.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
