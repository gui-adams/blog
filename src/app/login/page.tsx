import styles from '@/app/login/styles.module.scss';
import logo from '/public/logo.svg';
import Image from 'next/image';
import { redirect } from 'next/navigation';

export default function Login() {
    async function handleLogin(formData: FormData) {
        "use server";

        const email = formData.get("email");
        const password = formData.get("password");

        if (!email || !password) {
            return;
        }

        try {
            const response = await fetch("/api/auth", {
                method: "POST",
                body: JSON.stringify({ email, password }),
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if (!response.ok) {
                console.error("Erro de autenticação");
                return;
            }

            redirect("/portal");
        } catch (err) {
            console.error("Erro:", err);
        }
    }

    return (
        <div className={styles.containerCenter}>
            <Image src={logo} alt="Logo SW" />
            <section className={styles.login}>
                <form action={handleLogin}>
                    <input type="email" required name="email" placeholder='Digite seu email...' className={styles.input} />
                    <input type="password" required name="password" placeholder='************' className={styles.input} />
                    <button type="submit">Acessar</button>
                </form>
            </section>
        </div>
    );
}
