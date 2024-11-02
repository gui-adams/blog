import Image from "next/image";
import styles from "./page.module.css";
import { Plataforma } from "@/components/Plataforma";
import { Conteudo } from "@/components/Conteudo";

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
        </main>
    </div>
  );
}
