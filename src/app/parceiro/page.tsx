import Head from 'next/head';
import React from 'react';
import { PlataformaPartner } from './components/plataformaPartner';
import { ConteudoPartner } from './components/ConteudoPartner';
import { ParceirasBeneficios } from './components/ParceirasBeneficios';
import { ContatoPartner } from './components/ContatoPartner';

export default function Parceiro() {
  return (
    <>
      <Head>
        <title>Parceiros</title>
      </Head>
      <main>
        <section id="sejaParceiro">
          <PlataformaPartner /> {/* Nome do componente com inicial maiúscula */}
        </section>
        <section id="ConteudoPartner">
          <ConteudoPartner /> {/* Nome do componente com inicial maiúscula */}
        </section>
        <section id="ParceirasBeneficios">
          <ParceirasBeneficios /> {/* Nome do componente com inicial maiúscula */}
        </section>
        <section id="ContatoPartner">
          <ContatoPartner /> {/* Nome do componente com inicial maiúscula */}
        </section>
      </main>
    </>
  );
}
