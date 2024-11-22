import Image from 'next/image';
import styles from '../ConteudoPartner/styles.module.scss'
import consultorImage from '/public/consultor.svg'; // Adapte o caminho para a imagem que você vai usar

export const ConteudoPartner = () => {
  return (
    <section className={styles.conteudoPartner}>
      <div className={styles.textTop}>
        <h3 className={styles.title}>
          Além dos benefícios e plataforma, estamos sempre à disposição para apoio, troca de experiências, possíveis
          indicações e, se necessário, complementar o seu portfólio.
        </h3>
      </div>

      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image src={consultorImage} alt="Consultor" className={styles.image} />
        </div>

        <div className={styles.textContainer}>
          <ul className={styles.benefitsList}>
            <li>
              <span className={styles.number}>1</span>
              <div>
                <h4>Redução de horas de consultoria</h4>
                <p>Redução estratégica das horas de consultoria para aumentar eficiência.</p>
              </div>
            </li>
            <li>
              <span className={styles.number}>2</span>
              <div>
                <h4>Aumento nos ganhos</h4>
                <p>Aumento significativo nos ganhos financeiros e lucratividade empresarial.</p>
              </div>
            </li>
            <li>
              <span className={styles.number}>3</span>
              <div>
                <h4>Otimização das entregas</h4>
                <p>Maximização da eficiência e qualidade das entregas.</p>
              </div>
            </li>
            <li>
              <span className={styles.number}>4</span>
              <div>
                <h4>Relatórios Automatizados</h4>
                <p>Geração automatizada de relatórios para agilizar análises e tomar decisões.</p>
              </div>
            </li>
            <li>
              <span className={styles.number}>5</span>
              <div>
                <h4>Centralização das ações</h4>
                <p>Unificação de atividades em um único ambiente para maior controle.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
