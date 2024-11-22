"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, FormEvent } from "react";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import styles from "./footer.module.scss";
import sw2 from "/public/sw2.svg";

export function Footer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name || !email) {
      setMessage("Preencha todos os campos.");
      return;
    }

    try {
      const response = await fetch("/api/rd", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage(data.message);
        setSubmitted(true);
      } else {
        setMessage("Erro ao se inscrever. Tente novamente.");
      }
    } catch (error) {
      setMessage("Erro ao se inscrever. Tente novamente.");
    }
  };

  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles["logo-icons"]}>
            <div className={styles.logo}>
              <Image src={sw2} alt="logo_simpleway" width={180} />
            </div>
            <div className={styles.icones}>
              <Link href="https://www.instagram.com/simpleway.tech/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className={styles.icon} />
              </Link>
              <Link href="https://www.linkedin.com/company/sw-simpleway/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className={styles.icon} />
              </Link>
              <Link href="https://www.facebook.com/plataformasimpleway/" target="_blank" rel="noopener noreferrer">
                <FaFacebook className={styles.icon} />
              </Link>
            </div>
          </div>

          <div className={styles.links}>
            <h4>Páginas</h4>
            <Link href="/">Plataforma</Link>
            <Link href="/#lgpd">LGPD</Link>
            <Link href="/#planos">Planos</Link>
            <Link href="/#faq">FAQ</Link>
            <Link href="/#sobre">Sobre Nós</Link>
            <Link href="/parceiro">Parceiros</Link>
            <Link href="/blog">Blog</Link>
          </div>

          <div className={styles.links}>
            <h4>Plataforma</h4>
            <Link href="https://app.podium.com.br/login">Login</Link>
            <Link href="/termos">Termos de Uso</Link>
            <Link href="/politica">Política de Privacidade</Link>
          </div>

          <div className={styles["newsletter-address-phone"]}>
            {!submitted ? (
              <div className={styles.newsletter}>
                <h4>Newsletter</h4>
                <span>Quer receber notícias e novidades sobre a SimpleWay?<br />Se inscreva para não perder nenhum conteúdo.</span>
                <form className={styles.formnew} onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Digite seu nome aqui"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={styles.inputField}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Digite seu e-mail aqui"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={styles.inputField}
                  />
                  <button type="submit">Se inscrever</button>
                </form>
                {message && <p>{message}</p>}
              </div>
            ) : (
              <div className={styles.thankYouMessage}>
                <h2>Obrigado!</h2>
                <p>Você se inscreveu com sucesso na nossa newsletter.</p>
              </div>
            )}
          </div>
        </div>
      </footer>

      <div className={styles.copyright}>
        <p>© SimpleWay - Todos os direitos reservados.</p>
      </div>
    </>
  );
}
