"use client";

import { useEffect } from "react";
import styles from "../Contato/styles.module.scss";
import { loadRDStationScript, createRDStationForm } from "@/utils/rdStation";


export function Contato() {
    useEffect(() => {
      console.log("Iniciando carregamento do formulário de contato.");
  
      loadRDStationScript()
        .then(() => {
          createRDStationForm("form-sw-inferior-b09f359bf3c7a9bce55f", "UA-215748891-3");
        })
        .catch((error) => {
          console.error("Erro ao carregar ou criar o formulário do RD Station:", error);
        });
    }, []);
  
    return (
      <div className={styles.contatodiv}>
        <h2>Simplifique a sua Proteção de Dados</h2>
        <p>
          <span>
            Acompanhe uma demonstração prática da plataforma e teste a solução com a sua equipe
            gratuitamente.
            <br />
          </span>
          <span className={styles.centralizado}>
            Conte com o suporte dos especialistas SimpleWay.
          </span>
          <span className={styles.centralizado}>
            Tem interesse em parcerias? Contacte-nos!
          </span>
        </p>
        <div id="form-sw-inferior-b09f359bf3c7a9bce55f" className={styles.form}></div>
      </div>
    );
  }
  