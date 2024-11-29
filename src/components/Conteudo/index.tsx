import React from 'react';
import { FaShieldAlt, FaDatabase, FaHandHolding } from 'react-icons/fa';
import styles from '@/components/Conteudo/styles.module.scss';
import { getDataHome } from '@/utils/actions/get-data';

export const Conteudo = async () => {
  try {
    // Busca os dados da API Cosmic diretamente no lado do servidor
    const data = await getDataHome();
    const metadata = data?.object?.metadata;

    // Verifica se os campos icone_1, icone_2 e icone_3 existem
    const icone1 = metadata?.icone_1 ?? 'Conteúdo não disponível.';
    const icone2 = metadata?.icone_2 ?? 'Conteúdo não disponível.';
    const icone3 = metadata?.icone_3 ?? 'Conteúdo não disponível.';
    const titulo2 = metadata?.titulo_2 ?? 'Serviços';
    const description2 = metadata?.description_2 ?? 'Descrição não disponível no momento.';

    return (
      <>
        <section className={styles.servicesSection} aria-labelledby="services-heading">
          <div className={styles.sectionContent}>
            <h2 id="services-heading">{titulo2}</h2>
            <p>
              <span>{description2}</span>
            </p>
          </div>
        </section>
        <section className={styles.iconSection}>
          <div className={styles.iconItem}>
            <FaShieldAlt size={45} color="#0074bc" />
            <p>
              <span>{icone1}</span>
            </p>
          </div>
          <div className={styles.iconItem}>
            <FaDatabase size={45} color="#0074bc" />
            <p>
              <span>{icone2}</span>
            </p>
          </div>
          <div className={styles.iconItem}>
            <FaHandHolding size={45} color="#0074bc" />
            <p>
              <span>{icone3}</span>
            </p>
          </div>
        </section>
      </>
    );
  } catch (error) {
    console.error('Error fetching data:', error);
    return <div>Error loading content</div>;
  }
};