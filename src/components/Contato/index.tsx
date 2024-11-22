"use client";

import { useEffect } from 'react';
import styles from '../Contato/styles.module.scss';

export function Contato() {
    useEffect(() => {
        // Verificar se o script já existe para evitar duplicação
        const existingScript = document.querySelector(
            `script[src="https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js"]`
        );

        if (!existingScript) {
            // Adicionar o script do RD Station dinamicamente
            const script = document.createElement('script');
            script.src =
                'https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js';
            script.async = true;
            document.body.appendChild(script);

            // Configurar o formulário do RD Station quando o script for carregado
            script.onload = () => {
                if (window.RDStationForms) {
                    // Verificar se o formulário já foi criado
                    if (!document.querySelector('#form-sw-inferior-b09f359bf3c7a9bce55f .rdstation-form')) {
                        new window.RDStationForms('form-sw-inferior-b09f359bf3c7a9bce55f', 'UA-215748891-3').createForm();
                    }
                }
            };
        } else {
            // Se o script já existir, apenas criar o formulário se necessário
            if (window.RDStationForms && !document.querySelector('#form-sw-inferior-b09f359bf3c7a9bce55f .rdstation-form')) {
                new window.RDStationForms('form-sw-inferior-b09f359bf3c7a9bce55f', 'UA-215748891-3').createForm();
            }
        }
    }, []);

    return (
        <div className={styles.contatodiv}>
            <h2>Simplifique a sua Proteção de Dados</h2>
            <p>
                <span>
                    Acompanhe uma demonstração prática da plataforma e teste a solução com a sua equipe gratuitamente.<br />
                </span>
                <span className={styles.centralizado}>
                    Conte com o suporte dos especialistas SimpleWay.
                </span>
                <span className={styles.centralizado}>
                    Tem interesse em parcerias? Contacte-nos!
                </span>
            </p>

            {/* Container onde o novo formulário do RD Station será inserido */}
            <div id="form-sw-inferior-b09f359bf3c7a9bce55f" className={styles.form}></div>
        </div>
    );
}
