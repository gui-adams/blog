"use client"; // Garantir que o componente é client-side
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { deleteCookie } from 'cookies-next';
import { LogOutIcon } from 'lucide-react';
import logo2 from '/public/logo.svg';
import headerPortal from '../header_portal/headerPotal.module.scss'; // Certifique-se de que o caminho e o nome estão corretos

export function HeaderPortal() {
  const router = useRouter();

  // Função de logout
  async function handleLogout(event: React.FormEvent) {
    event.preventDefault(); // Evitar comportamento padrão
    deleteCookie("session"); // Deletar cookie de sessão
    router.replace("/login"); // Redirecionar para a página de login
  }

  return (
    <header className={headerPortal.headerContainer}>
      <div className={headerPortal.headerContent}>
        <Link href="/portal">
          {/* Imagem da logo do portal */}
          <Image src={logo2} alt="Logo do portal" priority />
        </Link>

        <nav>
          {/* Links de navegação */}
          <Link href="/portal/blog/category">Categoria</Link>
          <Link href="/portal/blog/post">Post</Link>
          <Link href="/portal/users">Alterar Senha</Link> {/* Novo link para a listagem de posts */}

          {/* Formulário de logout */}
          <form onSubmit={handleLogout}>
            <button type='submit' className={headerPortal.logoutButton}>
              <LogOutIcon size={24} color="#0473BA" />
            </button>
          </form>
        </nav>
      </div>
    </header>
  );
}
