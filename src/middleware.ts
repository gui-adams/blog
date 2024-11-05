import { NextRequest, NextResponse } from 'next/server'
import { api } from "@/services/api"
import { getCookieServer } from './lib/cookieServer';

export async function middleware(req: NextRequest){
  const { pathname } = req.nextUrl

  if(pathname.startsWith("/_next") || pathname === "/"){
    return NextResponse.next();
  }

  const token = getCookieServer();
  console.log(token)
  
  if(pathname.startsWith("/portal")){
    if(!token){
      return NextResponse.redirect(new URL("/", req.url))
    }

    const isValid = await validateToken(token)
    console.log(isValid);

    if(!isValid){
      return NextResponse.redirect(new URL("/", req.url))
    }
  }

  return NextResponse.next();

}


async function validateToken(token: string){
  if (!token) return false;

  try{
    await api.post("/backblog/auth/login", {
      headers:{
        Authorization: `Bearer ${token}`
      }
    })

    return true;
  }catch(err){
    console.log(err)
    return false;
  }
}