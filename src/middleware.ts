import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { api } from './services/app';

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Permite rotas públicas
  if (pathname.startsWith("/_next") || pathname === "/") {
    return NextResponse.next();
  }

  // Verifica a existência do token no cookie
  const token = req.cookies.get('session')?.value;

  
  if (pathname.startsWith("/portal")) {
    if (!token) {
      return NextResponse.redirect(new URL("/", req.url));
    }

    // Valida o token com o backend
    const isValid = await validateToken(token);

    console.log("Token válido?", isValid); // Log do resultado da validação (true ou false)

    if (!isValid) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  return NextResponse.next();
}

// Função de validação do token
async function validateToken(token: string) {
  try {
    const response = await api.get("/backblog/auth/validate-token", {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.status === 200;
  } catch (error) {
    console.error("Token inválido ou expirado:", error);
    return false; // Retorna false para redirecionar o usuário caso o token seja inválido ou expirado
  }
}

