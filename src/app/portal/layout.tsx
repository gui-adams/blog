// src/app/portal/layout.tsx
import {Toaster} from 'sonner'
import { HeaderPortal } from './components/header_portal';

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeaderPortal />
      <Toaster
          position="top-center"
          richColors // Ativando richColors para cores mais vivas

          toastOptions={{
            duration: 6000, // Duração do toast em milissegundos

          }}
          />
      {children}
    </>
  );
}
