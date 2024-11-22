import styles from './styles.module.scss'
import logoImg from '/public/logo.svg'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import { api } from '@/services/app'

export default function Page(){

  async function handleLogin(formData: FormData){
    "use server"

    const email = formData.get("email")
    const password = formData.get("password")

    if(email === "" || password === ""){
      return;
    }

    try{

      const response = await api.post("/backblog/auth/login", {
        email,
        password
      })

      if(!response.data.token){
        return;
      }

      console.log(response.data);

      const expressTime = 2 * 60 * 60 * 1000;
        cookies().set("session", response.data.token, {
        maxAge: expressTime,
        path: "/",
        httpOnly: false,
      })

    }catch(err){
      console.log(err);
      return;
    }

    redirect("/portal")

  }

  return(
    <>
      <div className={styles.containerCenter}>
        <Image
          src={logoImg}
          alt="Logo"
        />

        <section className={styles.login}>
          <form action={handleLogin}>
            <input 
              type="email"
              required
              name="email"
              placeholder="Digite seu email..."
              className={styles.input}
            />

            <input 
              type="password"
              required
              name="password"
              placeholder="***********"
              className={styles.input}
            />

            <button type="submit" className={styles.button}>
              Acessar
            </button>
          </form>
          
        </section>

      </div>      
    </>
  )
}