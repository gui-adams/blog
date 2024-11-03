import { NextRequest } from "next/server";

export function getCookieServer(req: NextRequest) {
    const tokenCookie = req.cookies.get("session");
    const token = tokenCookie?.value; // Obtém o valor do cookie
    return token;
}
