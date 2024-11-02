import Image from "next/image";
import styles from "./page.module.css";
import { Plataforma } from "@/components/Plataforma";

export default function Home() {
  return (
    <div>
      <main>
      <section id="plataforma">
          <Plataforma />
        </section>
        </main>
    </div>
  );
}
