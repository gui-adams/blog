// app/(shared)/components/Header.tsx

import styles from './header.module.scss';
import Image from 'next/image';
import logo from '/public/logo.svg';
import Link from 'next/link';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <Link href="/">
          <Image src={logo} alt="Simpleway Logo" className={styles.logo} priority />
        </Link>
        <input type="checkbox" id="menu-toggle" className={styles.menuToggle} />
        <label htmlFor="menu-toggle" className={styles.menuButton}>
          <span className={styles.menuIcon}></span>
        </label>
        <nav className={styles.navMenu}>
          <Link href="/">Plataforma</Link>
          <Link href="/#lgpd">LGPD</Link>
          <Link href="/#planos">Planos</Link>
          <Link href="/#faq">FAQ</Link>
          <Link href="/#sobre">Sobre</Link>
          <Link href="/parceiro">Parceiros</Link>
          <Link href="https://app.podium.com.br/login" className={styles.loginButton}>
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
}
