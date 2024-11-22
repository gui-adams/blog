"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import plataforma2 from "/public/plataforma2.svg";
import styles from "../Plataforma/style.module.scss";

export const Plataforma: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);

  // Função para abrir o pop-up
  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // Prevenir comportamento padrão
    setShowPopup(true);
  };
  // Função para fechar o pop-up
  const handleClosePopup = (e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
    e.preventDefault(); // Prevenir comportamento padrão
    setShowPopup(false);
  };

   // Insere o script do RD Station quando o pop-up é aberto
   useEffect(() => {
    if (showPopup) {
      // Verificar se o script já existe para evitar duplicações
      const existingScript = document.querySelector(
        `script[src="https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js"]`
      );

      if (!existingScript) {
        const script = document.createElement('script');
        script.src = 'https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js';
        script.async = true;
        script.onload = () => {
          if (window.RDStationForms) {
            new window.RDStationForms('form-sw-superior-376ea9fca7ce1c245ff3', 'UA-215748891-3').createForm();
          }
        };
        document.body.appendChild(script);
      } else {
        // Se o script já existir, apenas criar o formulário se necessário
        if (window.RDStationForms) {
          new window.RDStationForms('form-sw-superior-376ea9fca7ce1c245ff3', 'UA-215748891-3').createForm();
        }
      }
    }
  }, [showPopup]);

  return (
    <>
      <div className={styles.containerHeader}>
        <section className={styles.ctaText}>
          <h1>
            Plataforma de{" "}
            <span className={styles.textoDestacado}>
              Governança de<br />Privacidade
            </span>{" "}
            &{" "}
            <span className={styles.textoDestacado}>Proteção de Dados</span>
          </h1>
          <p>
            Automatize e otimize seu Programa de Governança<br />
            e Privacidade com a plataforma de{" "}
            <span className={styles.subtextoDestacado}>
              melhor relação<br />custo x benefício do mercado brasileiro.
            </span>
          </p>
          <button onClick={handleButtonClick} className={styles.ctaButton}>
          Solicite uma Demonstração
          </button>
        </section>
        <div className={styles.imageContainer}>
          <Image
            src={plataforma2}
            alt="Plataforma de Governança e Proteção de Dados"
            className={styles.image}
          />
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
