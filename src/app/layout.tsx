import type { Metadata } from "next";
import Script from "next/script"; // Correção da importação do Script
import localFont from "next/font/local";
import "../styles/globals.scss"; // Importação corrigida
import ClientPathnameHandler from "@/components/ClientPathnameHandler";
import RDScriptLoader from "@/components/RDScriptLoader/RDScriptLoader";
import { Toaster } from "sonner";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "SimpleWay",
  description: "Plataforma de Governança de Privacidade e Proteção de dados",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MFFHHFJ2');
          `}
        </Script>

        <meta
          name="adopt-website-id"
          content="5c8404b1-12ec-499b-bee8-750eb314ae7f"
        />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MFFHHFJ2"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <ClientPathnameHandler>
          <Toaster
            position="top-center"
            richColors
            toastOptions={{
              duration: 5000,
            }}
          />
          {children}
        </ClientPathnameHandler>

        {/* Script existente */}
        <Script
          src="//tag.goadopt.io/injector.js?website_code=5c8404b1-12ec-499b-bee8-750eb314ae7f"
          className="adopt-injector"
          strategy="afterInteractive"
        />

        {/* Carregamento Condicional do Script do RD Station */}
        <RDScriptLoader />
      </body>
    </html>
  );
}
