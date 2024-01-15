import { NextResponse } from 'next/server'
 
export function middleware(request) {
  const path = request.nextUrl.pathname

    const isPathPublic = path === "/authorization" || path === "/adminAuth" || path === "/expertAuth"

    const token = request.cookies.get("Login Token")?.value || ""
    

    if (isPathPublic && token) {
        if (path === "/adminAuth") {
          return NextResponse.redirect(new URL("/admin", request.nextUrl))
        } else if (path === "/expertAuth") {
          return NextResponse.redirect(new URL("/expert", request.nextUrl))
        } else if (path === "/authorization") {
          return NextResponse.redirect(new URL("/dashboard", request.nextUrl))
        }
    }
    
    if (!isPathPublic && !token) {
      if (path === "/admin") {
        return NextResponse.redirect(new URL("/adminAuth", request.nextUrl))
      } else if (path === "/expert") {
        return NextResponse.redirect(new URL("/expertAuth", request.nextUrl))
      } else if (path === "/dashboard") {
        return NextResponse.redirect(new URL("/authorization", request.nextUrl))
      }
        // return NextResponse.rewrite(new URL('/authorization', request.url))
    }
}
 
export const config = {
  matcher: [
    "/authorization",
    "/dashboard/:path*",
    "/adminAuth",
    "/admin/:path*",
    "/expertAuth",
    "/expert/:path*",
    // "/api/createOrder"
  ],
}