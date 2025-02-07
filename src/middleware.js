import { NextResponse } from "next/server";
import { getSession } from "./app/lib/authentication";
import { cookies } from "next/headers"; // Import cookies function

export async function middleware(request) {
  const response = NextResponse.next();
  const url = request.nextUrl.pathname;
  const jwtToken = request.cookies.get("jwt")?.value;
  const userData = await getSession();
  const userRole = userData?.role;

  console.log("userData---", userData);

  // ✅ Allow static files and Next.js assets to be loaded
  if (
    url.startsWith("/_next/") ||
    url.startsWith("/static/") ||
    /\.(.*)$/.test(url)
  ) {
    return NextResponse.next();
  }

  // 🚨 If not logged in, prevent access to `/suspend`
  if (!jwtToken && url.startsWith("/suspend")) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  // 🚨 If logged in and suspended, redirect to `/suspend`
  if (jwtToken && userData?.suspend && !url.startsWith("/suspend")) {
    console.log("User is suspended. Redirecting...");
    return NextResponse.redirect(new URL("/suspend", request.url));
  }

  // 🚨 If the user’s role is not "user", remove cookies and redirect
  if (jwtToken && userRole !== "user") {
    console.log("Invalid role. Removing cookies and redirecting...");
    response.cookies.delete("jwt");
    response.cookies.delete("user");
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  // 🚨 Allow only authenticated users with role "user" to access protected routes
  if (url.startsWith("/me") || url.startsWith("/content")) {
    if (!jwtToken || userRole !== "user") {
      return NextResponse.redirect(new URL("/auth/login", request.url));
    }
  }

  // 🚨 Prevent authenticated users from accessing login/signup pages
  if (jwtToken && userRole === "user") {
    if (url.startsWith("/auth/login") || url.startsWith("/auth/signup")) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  return response;
}

export const config = {
  matcher: "/:path*", // Runs on all routes
};
