import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

const protectedRoutes: string[] = [];
const authRoutes = ["/login"];

export async function middleware(request: NextRequest) {
  if (protectedRoutes.length === 0) {
    return NextResponse.next();
  }

  const { pathname } = request.nextUrl;

  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route),
  );
  const isAuthRoute = authRoutes.includes(pathname);

  const sessionToken = request.cookies.get("session")?.value;

  let isValidSession = false;
  if (sessionToken && process.env.AUTH_SECRET) {
    try {
      const secret = new TextEncoder().encode(process.env.AUTH_SECRET);
      await jwtVerify(sessionToken, secret);
      isValidSession = true;
    } catch (error) {}
  }

  if (isProtectedRoute && !isValidSession) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(loginUrl);
  }

  if (isAuthRoute && isValidSession) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
