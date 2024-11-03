import { getCookie } from "cookies-next";

export function getCookieClient() {
  const token = getCookie("session"); // Pegando o cookie "session"
  return token;
}
