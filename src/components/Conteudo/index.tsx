import React from 'react';
import { FaShieldAlt, FaDatabase, FaHandHolding } from 'react-icons/fa';
import styles from '@/components/Conteudo/styles.module.scss';

export const Conteudo: React.FC = () => {
  return (
    <>
      <section className={styles.servicesSection} aria-labelledby="services-heading">
        <div className={styles.sectionContent}>
          <h2 id="services-heading">Serviços</h2>
          <p>
            <span>
              SimpleWay é uma solução acessível para garantir a conformidade com a LGPD
              e simplificar a gestão de proteção e privacidade de dados.
            </span>
          </p>
        </div>
      </section>
      <section className={styles.iconSection}>
        <div className={styles.iconItem}>
          <FaShieldAlt size={45} color="#0074bc" />
          <h3>Auxílio na conformidade<br />com a LGPD</h3>
          <p>
            <span>
              Ferramentas para a sua<br /> empresa cumprir os<br /> requisitos da lei de proteção de dados.
            </span>
          </p>
        </div>
        <div className={styles.iconItem}>
          <FaDatabase size={45} color="#0074bc" />
          <h3>Mapeamento de<br />dados pessoais</h3>
          <p>
            <span>
              Ajudamos a sua empresa a<br /> compreender como os dados são usados nas atividades do seu negócio.
            </span>
          </p>
        </div>
        <div className={styles.iconItem}>
          <FaHandHolding size={45} color="#0074bc" />
          <h3>Gerenciamento<br />das ações</h3>
          <p>
            <span>
              Gerencie as ações de<br /> conformidade à LGPD mantendo as atividades em um único local.
            </span>
          </p>
        </div>
      </section>
    </>
  );
};
