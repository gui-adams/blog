"use client"; // Componente renderizado no lado do cliente

import styles from './styles.module.scss';

export function Faq() {
  return (
    <div className={styles.faqContainer}>
      <div className={styles.faqHeader}>
        <h2>FAQ</h2>
        <p>
          <span>As perguntas e respostas mais frequentes</span>
        </p>
      </div>

      <div className={styles.faqContent}>
        <details>
          <summary>Como funciona o suporte?</summary>
          <span>Temos uma equipe que está preparada para esclarecer suas dúvidas e auxiliar nas informações necessárias. Você poderá abrir um ticket com suas dúvidas ou problemas diretamente na plataforma.</span>
        </details>

        <details>
          <summary>Existe algum custo de instalação?</summary>
          <span>Não. Você assina o plano de sua preferência, cria seu login e senha e já pode acessar sua conta. Será cobrada apenas a mensalidade após o período de teste gratuito.</span>
        </details>

        <details>
          <summary>As informações que colocarei na Plataforma ficarão seguras?</summary>
          <span>Temos controles de segurança em diversos níveis e mantemos nossos servidores em datacenters avançados e com alta disponibilidade.</span>
        </details>

        <details>
          <summary>SimpleWay pode ser acessado em qualquer navegador?</summary>
          <span>Sim, pode ser acessado em qualquer navegador.</span>
        </details>

        <details>
          <summary>Consigo acessar a plataforma mesmo sem internet?</summary>
          <span>SimpleWay é uma plataforma online em cloud e requer acesso à internet.</span>
        </details>

        <details>
          <summary>Como é feito o armazenamento dos dados?</summary>
          <span>O armazenamento de dados no SimpleWay é diretamente em nuvem, com alta disponibilidade e backups diários.</span>
        </details>

        <details>
          <summary>Posso mudar de plano a qualquer hora?</summary>
          <span>Sim. Poderá mudar de plano a qualquer hora, basta seguir as orientações da equipe técnica.</span>
        </details>

        <details>
          <summary>Posso fazer um teste antes de decidir?</summary>
          <span>O SimpleWay disponibiliza um período de teste gratuito. Neste período, todas as funcionalidades estão disponíveis de acordo com o plano.</span>
        </details>
      </div>
    </div>
  );
}
