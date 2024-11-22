"use client"; // Habilitar o modo de cliente

import { useEffect } from 'react';
import styles from '../ContatoPartner/contato.module.scss';

export function ContatoPartner() {
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
                    new window.RDStationForms('form-sw-parceiros-2cafca4bfb1311aa087e', 'UA-215748891-3').createForm();
                }
            };
        } else {
            // Se o script já existir, apenas criar o formulário se necessário
            if (window.RDStationForms) {
                new window.RDStationForms('form-sw-parceiros-2cafca4bfb1311aa087e', 'UA-215748891-3').createForm();
            }
        }
    }, []);

    return (
        <div className={styles.contatodiv}>
            <h2>Contato</h2>
            <p>
                <span>
                    Quer ser uma empresa parceira? <br /> Solicite nosso atendimento preenchendo o formulário abaixo.
                </span>
            </p>

            {/* Container onde o formulário do RD Station será inserido */}
            <div id="form-sw-parceiros-2cafca4bfb1311aa087e" className={styles.form}></div>
        </div>
    );
}
