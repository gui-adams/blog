"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import styles from "./footer.module.scss";
import sw2 from "/public/sw2.svg";
import { loadRDStationScript, createRDStationForm } from "@/utils/rdStation";

export function Footer() {
  useEffect(() => {
    // Carregar o script do RD Station e criar o formulário no rodapé
    loadRDStationScript()
      .then(() => {
        createRDStationForm("footer_newsletter-ba8e84ed578dd6b2a378", "UA-215748891-3");
      })
      .catch((error) => {
        console.error("Erro ao carregar ou criar o formulário do RD Station no rodapé:", error);
      });
  }, []);

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
            {/* Apenas o formulário do RD Station */}
            <div
              role="main"
              id="footer_newsletter-ba8e84ed578dd6b2a378"
              className={styles.formContainer}
            ></div>
          </div>
        </div>
      </footer>

      <div className={styles.copyright}>
        <p>© SimpleWay - Todos os direitos reservados.</p>
      </div>
    </>
  );
}
