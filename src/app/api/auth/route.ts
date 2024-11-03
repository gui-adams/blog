import { api } from "@/services/app";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { email, password } = await req.json();

    try {
        const response = await api.post("/session", { email, password });
        const token = response.data.token;
        console.log(response.data)

        if (!token) {
            return new NextResponse(JSON.stringify({ error: "Login falhou" }), { status: 401 });
        }

        const res = NextResponse.json({ message: "Login bem-sucedido" });
        res.cookies.set("session", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 10 * 60 * 60, // Exemplo: 10 horas
            path: "/",
        });

        return res;
    } catch (error) {
        return new NextResponse(JSON.stringify({ error: "Credenciais inválidas" }), { status: 401 });
    }
}
