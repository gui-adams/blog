"use client"; // Componente renderizado no lado do cliente

import React from 'react';
import Image from 'next/image';
import nos from '/public/nos.png';
import styles from './styles.module.scss'; // Certifique-se de que o caminho do arquivo de estilo esteja correto

export function Sobre() {
  return (
    <div className={styles.sobreContainer}>
      <div className={styles.texto}>
        <h2>Sobre Nós</h2>
        <p>
          Com sede no Brasil, a SimpleWay é resultado da experiência de uma equipe com atuação no mercado de Proteção de Dados desde 1997.
          Nossa plataforma foi pensada para atender as necessidades de empresas de pequeno, médio e grande porte.
        </p>
        <p>
          Com uma visão prática da realidade nas empresas, facilita o dia-a-dia das áreas responsáveis pela Segurança da Informação e Privacidade.
          Oferecemos simplicidade e economia para as empresas que precisam adequar-se às novas legislações de Proteção e 
          Privacidade de Dados (LGPD, GDPR e outras), mas possuem limitações orçamentárias e equipes enxutas.
        </p>
      </div>
      <div className={styles.imagem}>
        <Image src={nos} alt="Sobre nós" />
      </div>
    </div>
  );
}
