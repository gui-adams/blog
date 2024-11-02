
import { Plataforma } from "@/components/Plataforma";
import { Conteudo } from "@/components/Conteudo";
import { Lgpd } from "@/components/Lgpd";
import { Video } from "@/components/Video";
import { Newsletter } from "@/components/Newsletter";
import { TicketItem } from "@/components/Planos";
import { Faq } from "@/components/Faq";

export default function Home() {
  return (
    <div>
      <main>
      <section id="plataforma">
          <Plataforma />
        </section>
        <section id="conteudo">
          <Conteudo />
        </section>
        <section id="lgpd">
          <Lgpd />
        </section>
        <section id="video">
          <Video />
        </section>
        <section id="newsletter">
          <Newsletter />
        </section>
        <section id="planos">
          <TicketItem />
        </section>
        <section id="faq">
          <Faq />
        </section>
        </main>
    </div>
  );
}
