"use client";

import { useEffect } from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import politica_new from "/public/politica_new.svg";

export function Newsletter() {
  useEffect(() => {
    // Verificar se o formulário já foi criado para evitar duplicação
    const formExists = document.querySelector(
      "#form-sw-newsletter_meio-de-pagina-8af7ae1b1f0b43741e1a .rdstation-form"
    );

    if (!formExists) {
      const existingScript = document.querySelector(
        `script[src="https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js"]`
      );

      if (!existingScript) {
        // Adicionar o script do RD Station dinamicamente
        const script = document.createElement("script");
        script.src =
          "https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js";
        script.async = true;
        document.body.appendChild(script);

        // Configurar o formulário do RD Station quando o script for carregado
        script.onload = () => {
          if (window.RDStationForms) {
            new window.RDStationForms(
              "form-sw-newsletter_meio-de-pagina-8af7ae1b1f0b43741e1a",
              "UA-215748891-3"
            ).createForm();
          }
        };
      } else if (window.RDStationForms) {
        // Se o script já existir, apenas criar o formulário
        new window.RDStationForms(
          "form-sw-newsletter_meio-de-pagina-8af7ae1b1f0b43741e1a",
          "UA-215748891-3"
        ).createForm();
      }
    }
  }, []);

  return (
    <div className={styles.newsletter}>
      <div className={styles.carta}>
        <Image
          src={politica_new}
          alt="Ilustração de política de privacidade"
          width={180}
          height={250}
        />
      </div>
      <div className={styles.formContainer}>
        <h2>Se inscreva na nossa newsletter</h2>
        <p>Receba atualizações sobre privacidade e proteção de dados.</p>
        {/* Formulário do RD Station */}
        <div
          id="form-sw-newsletter_meio-de-pagina-8af7ae1b1f0b43741e1a"
          className={styles.form}
        ></div>
      </div>
    </div>
  );
}
