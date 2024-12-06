"use client";

import Image from 'next/image';
import { useState, useEffect, FormEvent } from 'react';
import styles from './styles.module.scss';
import politica_new from '/public/politica_new.svg';
import { getDataHome } from '@/utils/actions/get-data';

export function Newsletter() {
  const [isChecked, setIsChecked] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Estado para os textos dinâmicos
  const [dynamicTexts, setDynamicTexts] = useState({
    title: 'Se inscreva na nossa newsletter.',
    subtitle: 'Venha se atualizar sobre Privacidade e Proteção de Dados.',
    checkboxLabel: 'Eu concordo e aceito a Política de Privacidade.',
  });

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name || !email || !isChecked) {
      setMessage('Preencha todos os campos e aceite a política de privacidade.');
      return;
    }

    try {
      const response = await fetch('/api/rd', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage(data.message);
        setSubmitted(true);
      } else {
        setMessage('Erro ao se inscrever. Tente novamente.');
      }
    } catch (error) {
      setMessage('Erro ao se inscrever. Tente novamente.');
    }
  };

  // Busca os textos do Cosmic no lado do cliente
  useEffect(() => {
    const fetchDynamicTexts = async () => {
      try {
        const data = await getDataHome(); // Função para buscar dados do Cosmic
        const metadata = data?.object?.metadata;

        setDynamicTexts({
          title: metadata?.newsletter_title || dynamicTexts.title,
          subtitle: metadata?.newsletter_subtitle || dynamicTexts.subtitle,
          checkboxLabel: metadata?.newsletter_checkbox || dynamicTexts.checkboxLabel,
        });
      } catch (error) {
        console.error('Erro ao buscar textos do Cosmic:', error);
      }
    };

    fetchDynamicTexts();
  }, []);

  return (
    <div className={styles.newsletter}>
      {!submitted ? (
        <>
          <div className={styles.carta}>
            <Image src={politica_new} alt="Ilustração de política de privacidade" width={180} height={250} />
          </div>
          <form className={styles.formnew} onSubmit={handleSubmit}>
            <div className={styles.rd}>
              <h3>{dynamicTexts.title}</h3>
              <p>
                <span>{dynamicTexts.subtitle}</span>
              </p>
              <input
                type="text"
                name="name"
                placeholder="Digite seu nome aqui"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                name="email"
                placeholder="Digite seu e-mail aqui"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={styles.checkboxContainer}>
              <input
                type="checkbox"
                id="privacyPolicy"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="privacyPolicy">
                Eu concordo e aceito a{' '}
                <a
                  href="https://simpleway.tech/politica"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'underline' }} // Estilo direto
                >
                  Política de Privacidade
                </a>.
              </label>
            </div>
            <button type="submit" disabled={!isChecked}>
              Se inscrever
            </button>
          </form>
          {message && <p>{message}</p>}
        </>
      ) : (
        <div className={styles.thankYouMessage}>
          <h2>Obrigado!</h2>
          <p>Você se inscreveu com sucesso na nossa newsletter.</p>
        </div>
      )}
    </div>
  );
}
