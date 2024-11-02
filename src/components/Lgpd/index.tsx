import React from 'react';
import { FaTasks, FaSitemap, FaMap, FaShieldAlt, FaDatabase, FaFileAlt, FaCheckSquare, FaUserShield } from 'react-icons/fa';
import styles from '@/components/Lgpd/styles.module.scss';

export function Lgpd() {
  return (
    <>
      <div className={styles.lgpd}>
        <div className={styles.lgpdHeader}>
          <h2>LGPD</h2>
          <p>
            SimpleWay simplifica a jornada de conformidade com a Lei Geral de Proteção de Dados,
            empregando tecnologia para aprimorar ações, como:
          </p>
        </div>
      </div>

      <section className={styles.iconSection}>
        <div className={styles.iconRow}>
          <div className={styles.iconItem}>
            <FaTasks size={48} />
            <p>Gerenciamento do Programa de Proteção e Privacidade de Dados</p>
          </div>
          <div className={styles.iconItem}>
            <FaSitemap size={48} />
            <p>Visão da estrutura organizacional por organograma e processo de negócios</p>
          </div>
          <div className={styles.iconItem}>
            <FaMap size={48} />
            <p>Mapeamento de operações de tratamento, fornecedores, repositórios e mais</p>
          </div>
          <div className={styles.iconItem}>
            <FaShieldAlt size={48} />
            <p>Avaliação de privacidade (ISO 27001) e questionários específicos</p>
          </div>
        </div>
        <div className={styles.iconRow}>
          <div className={styles.iconItem}>
            <FaDatabase size={48} />
            <p>Gestão do dicionário de dados com mais de 600 itens inclusos</p>
          </div>
          <div className={styles.iconItem}>
            <FaFileAlt size={48} />
            <p>Relatórios</p>
          </div>
          <div className={styles.iconItem}>
            <FaCheckSquare size={48} />
            <p>Programas de Compliance</p>
          </div>
          <div className={styles.iconItem}>
            <FaUserShield size={48} />
            <p>Titulares</p>
          </div>
        </div>
      </section>
    </>
  );
}
