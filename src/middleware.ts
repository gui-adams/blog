import { NextRequest, NextResponse } from "next/server";
import { getCookieServer } from "@/utils/cookieServer";
import { api } from "./services/app";

export async function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;

    // Permitir acesso sem redirecionamento em rotas públicas
    if (pathname.startsWith("/_next") || pathname === "/login" || pathname === "/api/auth/login") {
        return NextResponse.next();
    }

    // Obter o token do cookie
    const token = getCookieServer(req);

    // Rotas protegidas
    if (pathname.startsWith("/portal")) {
        if (!token) {
            return NextResponse.redirect(new URL("/login", req.url));
        }

        const isValid = await validateToken(token);
        if (!isValid) {
            return NextResponse.redirect(new URL("/login", req.url));
        }
    }

    return NextResponse.next();
}

async function validateToken(token: string) {
    try {
        // Valida o token com uma chamada ao backend
        await api.get("/me", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return true;
    } catch (error) {
        return false;
    }
}
