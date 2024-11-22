"use client";

import { usePathname } from "next/navigation";
import Script from "next/script";

export default function RDScriptLoader() {
  const pathname = usePathname();

  // Verifica se o ambiente é cliente e se a rota corresponde antes de carregar o script
  if (
    typeof window !== 'undefined' &&
    (pathname === "/login" ||
    pathname === "/portal" ||
    pathname === "/portal/blog/category" ||
    pathname === "/portal/blog/post" ||
    pathname === "/portal/blog/post/new")
  ) {
    return null;
  }

  return (
    <Script
      src="https://d335luupugsy2.cloudfront.net/js/loader-scripts/4da2eb19-66eb-4fe4-85ab-62540c6208f2-loader.js"
      strategy="afterInteractive"
    />
  );
}
