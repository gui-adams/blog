import Link from 'next/link';
import { FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';
import Image from 'next/image';
import styles from './footer.module.scss';
import sw2 from '/public/sw2.svg';

export function Footer() {
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.container}>
                    <div className={styles['logo-icons']}>
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
                            <Link href="https://www.facebook.com/plataformasimpleway" target="_blank" rel="noopener noreferrer">
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
                    </div>

                    <div className={styles.links}>
                        <h4>Plataforma</h4>
                        <Link href="https://app.podium.com.br/login">Login</Link>
                        <Link href="/termos">Termos de Uso</Link>
                        <Link href="/politica">Política de Privacidade</Link>
                    </div>

                    <div className={styles['newsletter-address-phone']}>
                        <div className={styles.newsletter}>
                            <h4>Newsletter</h4>
                            <span>Quer receber notícias e novidades sobre a SimpleWay?<br/>
                                Se inscreva para não perder nenhum conteúdo.</span>
                            <form>
                                <input type="text" placeholder="Seu nome" className={styles.inputField} />
                                <input type="email" placeholder="Seu email" className={styles.inputField} />
                                <button type="submit">Inscrever-se</button>
                            </form>
                        </div>
                    </div>
                </div>
            </footer>
            
            <div className={styles.copyright}>
                <p>© SimpleWay - Todos os direitos reservados.</p>
            </div>
        </>
    );
}
