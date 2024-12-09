"use client";

import { useEffect } from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import politica_new from "/public/politica_new.svg";
import { loadRDStationScript, createRDStationForm } from "@/utils/rdStation"; // Importa funções utilitárias


export function Newsletter() {
  useEffect(() => {
    console.log("Iniciando carregamento do formulário de newsletter.");

    loadRDStationScript()
      .then(() => {
        createRDStationForm("form-sw-newsletter_meio-de-pagina-8af7ae1b1f0b43741e1a", "UA-215748891-3");
      })
      .catch((error) => {
        console.error("Erro ao carregar ou criar o formulário do RD Station:", error);
      });
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
        <div id="form-sw-newsletter_meio-de-pagina-8af7ae1b1f0b43741e1a" className={styles.form}></div>
      </div>
    </div>
  );
}