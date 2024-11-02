
import { Plataforma } from "@/components/Plataforma";
import { Conteudo } from "@/components/Conteudo";
import { Lgpd } from "@/components/Lgpd";

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
        </main>
    </div>
  );
}
