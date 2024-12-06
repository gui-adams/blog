import React from 'react';
import {
  FaTasks,
  FaSitemap,
  FaMap,
  FaShieldAlt,
  FaDatabase,
  FaFileAlt,
  FaCheckSquare,
  FaUserShield,
} from 'react-icons/fa';
import styles from '@/components/Lgpd/styles.module.scss';
import { getDataHome } from '@/utils/actions/get-data';

// Definindo tipos para o retorno de `getDataHome`
interface Metadata {
  titulo_3?: string;
  description_3?: string;
  icone_4?: string;
  icone_5?: string;
  icone_6?: string;
  icone_7?: string;
  icone_8?: string;
  icone_9?: string;
  icone_10?: string;
  icone_11?: string;
}

interface DataObject {
  object?: {
    metadata?: Metadata;
  };
}

export const Lgpd = async () => {
  try {
    // Busca os dados da API Cosmic diretamente no lado do servidor
    const data: DataObject = await getDataHome();
    console.log('Data fetched:', data);

    // Obtém metadata ou utiliza um objeto vazio para evitar erros
    const metadata = data?.object?.metadata ?? {};

    // Define valores padrão caso os campos não existam
    const titulo3 = metadata.titulo_3 || 'LGPD';
    const description3 =
      metadata.description_3 || 'Descrição não disponível no momento.';
    const icones = [
      { icon: <FaTasks size={48} />, text: metadata.icone_4 || 'Conteúdo não disponível.' },
      { icon: <FaSitemap size={48} />, text: metadata.icone_5 || 'Conteúdo não disponível.' },
      { icon: <FaMap size={48} />, text: metadata.icone_6 || 'Conteúdo não disponível.' },
      { icon: <FaShieldAlt size={48} />, text: metadata.icone_7 || 'Conteúdo não disponível.' },
      { icon: <FaDatabase size={48} />, text: metadata.icone_8 || 'Conteúdo não disponível.' },
      { icon: <FaFileAlt size={48} />, text: metadata.icone_9 || 'Conteúdo não disponível.' },
      { icon: <FaCheckSquare size={48} />, text: metadata.icone_10 || 'Conteúdo não disponível.' },
      { icon: <FaUserShield size={48} />, text: metadata.icone_11 || 'Conteúdo não disponível.' },
    ];

    // Divide os ícones em duas linhas com 4 ícones cada
    const firstRow = icones.slice(0, 4);
    const secondRow = icones.slice(4, 8);

    return (
      <>
        <div className={styles.lgpd}>
          <div className={styles.lgpdHeader}>
            <h2>{titulo3}</h2>
            <p>{description3}</p>
          </div>
        </div>

        <section className={styles.iconSection}>
          <div className={styles.iconRow}>
            {firstRow.map((item, index) => (
              <div key={index} className={styles.iconItem}>
                {item.icon}
                <p>{item.text}</p>
              </div>
            ))}
          </div>
          <div className={styles.iconRow}>
            {secondRow.map((item, index) => (
              <div key={index} className={styles.iconItem}>
                {item.icon}
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </section>
      </>
    );
  } catch (error) {
    console.error('Error fetching data:', error);
    return <div>Error loading content</div>;
  }
};
