"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import plataforma2 from "/public/plataforma2.svg";
import styles from "../Plataforma/style.module.scss";
import { getDataHome } from "@/utils/actions/get-data";

// Função para buscar os textos do Cosmic no lado do servidor
export const fetchPlatformTexts = async () => {
  const data = await getDataHome();
  const metadata = data?.object?.metadata;

  return {
    titulo: metadata?.plataforma_titulo || "Plataforma de Governança de Privacidade & Proteção de Dados",
    descricao: metadata?.plataforma_descricao || "Automatize e otimize seu Programa de Governança e Privacidade com a plataforma de melhor relação custo x benefício do mercado brasileiro.",
    textoDestacado1: metadata?.plataforma_texto_destacado1 || "Governança de Privacidade",
    textoDestacado2: metadata?.plataforma_texto_destacado2 || "Proteção de Dados",
    subTextoDestacado: metadata?.plataforma_subtexto_destacado || "melhor relação custo x benefício do mercado brasileiro.",
  };
};

export const Plataforma: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [texts, setTexts] = useState({
    titulo: "",
    descricao: "",
    textoDestacado1: "",
    textoDestacado2: "",
    subTextoDestacado: "",
  });

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

  // Busca os textos do Cosmic no cliente
  useEffect(() => {
    const fetchTexts = async () => {
      const data = await fetchPlatformTexts();
      setTexts(data);
    };

    fetchTexts();
  }, []);

  // Insere o script do RD Station quando o pop-up é aberto
  useEffect(() => {
    if (showPopup) {
      const existingScript = document.querySelector(
        `script[src="https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js"]`
      );

      if (!existingScript) {
        const script = document.createElement("script");
        script.src = "https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js";
        script.async = true;
        script.onload = () => {
          if (window.RDStationForms) {
            new window.RDStationForms(
              "form-sw-superior-376ea9fca7ce1c245ff3",
              "UA-215748891-3"
            ).createForm();
          }
        };
        document.body.appendChild(script);
      } else {
        if (window.RDStationForms) {
          new window.RDStationForms(
            "form-sw-superior-376ea9fca7ce1c245ff3",
            "UA-215748891-3"
          ).createForm();
        }
      }
    }
  }, [showPopup]);

  return (
    <>
      <div className={styles.containerHeader}>
        <section className={styles.ctaText}>
          <h1>
            {texts.titulo.split(" ").map((word, index) => {
              const isHighlighted =
                texts.textoDestacado1.split(" ").includes(word) ||
                texts.textoDestacado2.split(" ").includes(word);
              return (
                <React.Fragment key={index}>
                  {isHighlighted ? (
                    <span className={styles.textoDestacado}>{word}</span>
                  ) : (
                    word
                  )}
                  {" "}
                </React.Fragment>
              );
            })}
          </h1>
          <p>
            {texts.descricao.split("\n").map((line, index) =>
              index > 0 ? (
                <>
                  <br />
                  <span key={index} className={styles.subtextoDestacado}>
                    {texts.subTextoDestacado}
                  </span>
                </>
              ) : (
                line
              )
            )}
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

      {showPopup && (
        <div className={styles.modalOverlay} onClick={handleClosePopup}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button onClick={handleClosePopup} className={styles.closeButton}>
              ×
            </button>
            <div role="main" id="form-sw-superior-376ea9fca7ce1c245ff3"></div>
          </div>
        </div>
      )}
    </>
  );
};
