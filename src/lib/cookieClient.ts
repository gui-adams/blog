import { getCookie } from "cookies-next";
import { cookies } from "next/headers";

export function getCookieClient(){
    const token = cookies().get('session')?.value;

    return token || null;

}