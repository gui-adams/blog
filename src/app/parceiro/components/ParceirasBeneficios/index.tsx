import styles from '../ParceirasBeneficios/styles.module.scss'
import { FaHandHoldingUsd, FaChartLine, FaLightbulb, FaClipboardList, FaSyncAlt, FaBriefcase } from 'react-icons/fa';


export const ParceirasBeneficios = () => {
  return (
    <section className={styles.parceirasBeneficios}>
      <div className={styles.container}>
        <h2 className={styles.title}>Os benefícios da parceria</h2>
        <p className={styles.description}>
          Além dos benefícios e plataforma, estamos sempre à disposição para apoio, troca de
          experiências, possíveis indicações e se necessário complementar o seu portfólio.
        </p>
        <div className={styles.benefitsGrid}>
          <div className={styles.benefitItem}>
            <FaHandHoldingUsd className={styles.icon} />
            <h4>Sem custo inicial</h4>
            <p>Não há custo inicial para fechamento da parceria.</p>
          </div>
          <div className={styles.benefitItem}>
            <FaClipboardList className={styles.icon} />
            <h4>Treinamentos</h4>
            <p>Treinamentos gratuitos.</p>
          </div>
          <div className={styles.benefitItem}>
            <FaLightbulb className={styles.icon} />
            <h4>Valor agregado</h4>
            <p>Tecnologia de governança de dados para agregar valor aos serviços.</p>
          </div>
          <div className={styles.benefitItem}>
            <FaChartLine className={styles.icon} />
            <h4>Ações estratégicas</h4>
            <p>Possibilidade de pausa de uso em ações estratégicas.</p>
          </div>
          <div className={styles.benefitItem}>
            <FaSyncAlt className={styles.icon} />
            <h4>Flexibilidade</h4>
            <p>Maiores flexibilidades em propostas de licenciamento.</p>
          </div>
          <div className={styles.benefitItem}>
            <FaBriefcase className={styles.icon} />
            <h4>Portfólio</h4>
            <p>Apoio para complementar seu portfólio.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
