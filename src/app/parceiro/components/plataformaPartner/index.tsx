import Image from 'next/image';
import parceiros from "/public/parceiros.svg";
import styles from '../plataformaPartner/style.module.scss';

export const PlataformaPartner = () => {


  return (
    <>
      <div className={styles.containerHeader}>
        <section className={styles.ctaText}>
          <h1>
            Seja um parceiro<br/>
            da SimpleWay
          </h1>
          <p>
            <span>
            Aproveite os benefícios da execução de projetos e ações relacionadas a Governança da Proteção e Privacidade de dados.
            </span>
          </p>
          <br />
          <a href="#ContatoPartner" className={styles.btn}>Quero ser Parceiro</a>
        </section>
        <div className={styles.imagem}>
          <Image src={parceiros} alt="parceiros" />
        </div>
      </div>
    </>
  );
};
