// src/components/ClientPathnameHandler.tsx
"use client"; // Marcando como Client Component

import { usePathname } from 'next/navigation';
import { Header } from '../Header';
import { Footer } from '../Footer';

export default function ClientPathnameHandler({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <>
      {/* Verifica se a rota atual é /portal */}
      {pathname.startsWith('/portal') ? (
        <>
          {children}
        </>
      ) : (
        <>
          <Header /> {/* Cabeçalho global para todas as rotas exceto /portal */}
          {children}
          <Footer />
        </>
      )}
    </>
  );
}
