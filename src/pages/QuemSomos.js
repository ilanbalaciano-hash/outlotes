import './PageCommon.css';
import './QuemSomos.css';

export default function QuemSomos() {
  return (
    <div className="page">
      <div className="page-hero">
        <h1>Quem Somos</h1>
        <p>Compromisso com um futuro sustentável.</p>
      </div>

      <div className="page-content">

        <section className="section-block">
          <h2>A Outlotes</h2>
          <p>
            A Outlotes é uma empresa especializada em gestão de resíduos eletrônicos. Desde sua fundação, temos o propósito de transformar a forma como o lixo eletrônico é tratado, unindo inovação, responsabilidade ambiental e compromisso social.
          </p>
        </section>

        <div className="qs-three-cols">
          <div className="qs-col-card">
            <h3>Nossa Missão</h3>
            <ul>
              <li>Promover a reciclagem tecnológica no Brasil.</li>
              <li>Incentivar práticas sustentáveis.</li>
              <li>Educar sobre gestão de resíduos eletrônicos.</li>
            </ul>
          </div>
          <div className="qs-col-card">
            <h3>Nosso Foco</h3>
            <ul>
              <li>Eficiência em processos de descarte.</li>
              <li>Segurança na manipulação de resíduos eletrônicos.</li>
              <li>Conformidade com as normas ambientais.</li>
            </ul>
          </div>
          <div className="qs-col-card">
            <h3>Nossos Compromissos</h3>
            <ul>
              <li>Atuar com responsabilidade ambiental e promover a inclusão digital e social.</li>
              <li>Garantimos a conformidade legal e ética, oferecendo um serviço seguro e transparente.</li>
              <li>Buscamos ser parceiros estratégicos para empresas que compartilham nossa visão de futuro.</li>
            </ul>
          </div>
        </div>

        <section className="section-block">
          <h2>Principais Objetivos</h2>
          <div className="qs-objetivos">
            <div className="qs-objetivo">
              <span className="qs-obj-num">01</span>
              <p>Transformar a forma como o lixo eletrônico é tratado.</p>
            </div>
            <div className="qs-objetivo">
              <span className="qs-obj-num">02</span>
              <p>Integrar inovação e responsabilidade ambiental.</p>
            </div>
            <div className="qs-objetivo">
              <span className="qs-obj-num">03</span>
              <p>Compromisso com a melhoria social.</p>
            </div>
          </div>
        </section>

        <section className="section-block">
          <h2>Nossos Serviços</h2>
          <p>Oferecemos soluções completas para o descarte seguro e responsável de equipamentos eletrônicos:</p>
          <div className="qs-servicos">
            <div className="qs-servico-card">
              <span className="qs-servico-icon">🔒</span>
              <h4>Descaracterização</h4>
              <p>Descaracterização com sigilo garantido.</p>
            </div>
            <div className="qs-servico-card">
              <span className="qs-servico-icon">💾</span>
              <h4>Destruição de Dados</h4>
              <p>Destruição segura de dados e reciclagem responsável dos materiais.</p>
            </div>
          </div>
        </section>

        <section className="section-block">
          <h2>Por que nos contratar?</h2>
          <div className="qs-contratar">
            <div className="qs-contratar-item">
              <span className="qs-contratar-num">1</span>
              <p>Eficiência em processos de descarte.</p>
            </div>
            <div className="qs-contratar-item">
              <span className="qs-contratar-num">2</span>
              <p>Segurança na manipulação de resíduos eletrônicos.</p>
            </div>
            <div className="qs-contratar-item">
              <span className="qs-contratar-num">3</span>
              <p>Conformidade com as normas ambientais.</p>
            </div>
          </div>
        </section>

        <section className="section-block">
          <h2>Impacto Ambiental</h2>
          <p>
            A Outlotes contribui diretamente para a redução da poluição e para a conservação dos recursos naturais. Através da reciclagem, promovemos a recuperação de metais e plásticos valiosos, a redução de resíduos em aterros e a diminuição da emissão de CO₂.
          </p>
        </section>

        <section className="section-block">
          <h2>Responsabilidade Social</h2>
          <p>
            Nosso compromisso vai além da sustentabilidade ambiental. A Outlotes investe em iniciativas de inclusão digital, colaborando com projetos sociais, escolas e cooperativas. Acreditamos que todos devem ter acesso ao conhecimento e às ferramentas digitais.
          </p>
        </section>

        <section className="section-block">
          <h2>Estratégias para aumento de desempenho</h2>
          <div className="values-grid">
            <div className="value-item">
              <strong>Tecnologia Inovadora</strong>
              <p>Investimentos em tecnologia inovadora.</p>
            </div>
            <div className="value-item">
              <strong>Equipe Qualificada</strong>
              <p>Equipe qualificada, treinada e conectada.</p>
            </div>
            <div className="value-item">
              <strong>Marketing e Expansão</strong>
              <p>Estratégia de Marketing e expansão das operações e serviços.</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
