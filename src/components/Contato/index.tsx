"use client"; // Componente renderizado no lado do cliente

import { useEffect } from 'react';
import styles from './styles.module.scss';

export function Contato() {
  useEffect(() => {
    const existingScript = document.querySelector(
      `script[src="https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js"]`
    );

    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js';
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        if (window.RDStationForms) {
          if (!document.querySelector('#form-sw-inferior-b09f359bf3c7a9bce55f .rdstation-form')) {
            new window.RDStationForms('form-sw-inferior-b09f359bf3c7a9bce55f', 'UA-215748891-3').createForm();
          }
        }
      };
    } else {
      if (window.RDStationForms && !document.querySelector('#form-sw-inferior-b09f359bf3c7a9bce55f .rdstation-form')) {
        new window.RDStationForms('form-sw-inferior-b09f359bf3c7a9bce55f', 'UA-215748891-3').createForm();
      }
    }
  }, []);

  return (
    <div className={styles.contatoContainer}>
      <h2>Simplifique a sua Proteção de Dados</h2>
      <p>
        <span>
          Acompanhe uma demonstração prática da plataforma e teste a solução com a sua equipe gratuitamente.
        </span>
        <span className={styles.centralizado}>
          Conte com o suporte dos especialistas SimpleWay.
        </span>
        <span className={styles.centralizado}>
          Tem interesse em parcerias? Contacte-nos!
        </span>
      </p>

      <div id="form-sw-inferior-b09f359bf3c7a9bce55f" className={styles.formContainer}></div>
    </div>
  );
}
