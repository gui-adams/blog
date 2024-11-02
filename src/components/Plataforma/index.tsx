"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import plataforma2 from '/public/plataforma2.svg';
import styles from '@/components/Plataforma/style.module.scss';

declare global {
  interface Window {
    RDStationForms?: {
      createForm: (id: string, accountId: string) => void;
    };
  }
}

export const Plataforma: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);

  // Função para abrir o pop-up
  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowPopup(true);
  };

  // Função para fechar o pop-up
  const handleClosePopup = (e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
    e.preventDefault();
    setShowPopup(false);
  };

  // Insere o script do RD Station quando o pop-up é aberto
  useEffect(() => {
    if (showPopup) {
      const existingScript = document.querySelector(
        `script[src="https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js"]`
      );

      if (!existingScript) {
        const script = document.createElement('script');
        script.src = 'https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js';
        script.async = true;
        script.onload = () => {
          if (window.RDStationForms && typeof window.RDStationForms.createForm === 'function') {
            window.RDStationForms.createForm('form-sw-superior-376ea9fca7ce1c245ff3', 'UA-215748891-3');
          } else {
            console.error("RDStationForms não carregou corretamente ou createForm não está disponível.");
          }
        };
        document.body.appendChild(script);
      } else if (window.RDStationForms && typeof window.RDStationForms.createForm === 'function') {
        window.RDStationForms.createForm('form-sw-superior-376ea9fca7ce1c245ff3', 'UA-215748891-3');
      } else {
        console.error("RDStationForms já existe, mas createForm não está disponível.");
      }
    }
  }, [showPopup]);

  return (
    <>
      <div className={styles.containerHeader}>
        <section className={styles.ctaText}>
          <h1>
            Plataforma de{' '}
            <span className={styles.textoDestacado}>Governança de<br />Privacidade</span> &{' '}
            <span className={styles.textoDestacado}>Proteção de Dados</span>
          </h1>
          <p>
            Automatize e otimize seu Programa de Governança<br />
            e Privacidade com a plataforma de{' '}
            <span className={styles.subtextoDestacado}>melhor relação<br />custo x benefício do mercado brasileiro.</span>
          </p>
          <button onClick={handleButtonClick} className={styles.ctaButton}>Garanta seu Teste Gratuito</button>
        </section>
        <div className={styles.imageContainer}>
          <Image src={plataforma2} alt="Plataforma de Governança e Proteção de Dados" className={styles.image} />
        </div>
      </div>

      {/* Renderiza o pop-up se showPopup for true */}
      {showPopup && (
        <div className={styles.modalOverlay} onClick={handleClosePopup}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button onClick={handleClosePopup} className={styles.closeButton}>×</button>
            <div role="main" id="form-sw-superior-376ea9fca7ce1c245ff3"></div>
          </div>
        </div>
      )}
    </>
  );
};
