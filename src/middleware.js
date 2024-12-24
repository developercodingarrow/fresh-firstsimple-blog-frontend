import { NextResponse } from "next/server";
import { getSession } from "./app/lib/authentication";
import { cookies } from "next/headers"; // Import cookies function
import { v4 as uuidv4 } from "uuid";

function generateSessionId() {
  return `${uuidv4()}-${Date.now()}`; // Combines UUID and timestamp
}
export async function middleware(request) {
  const cookieStore = cookies();
  const sessionId = cookieStore.get("sessionId")?.value;

  if (!sessionId) {
    const newSessionId = generateSessionId();

    // Create response object and set the sessionId cookie
    const response = NextResponse.next();
    response.cookies.set("sessionId", newSessionId, {
      httpOnly: true, // To prevent client-side access to the cookie
      maxAge: 60 * 60 * 24 * 30, // Set cookie expiry (30 days)
      path: "/",
      secure: process.env.NODE_ENV === "production", // Secure cookies in production
    });

    // Return the modified response with the new cookie
    return response;
  }

  const isAuthToken = request.cookies.get("jwt")?.value;

  const userData = await getSession(); // Get decrypted user data
  const userRole = userData?.role; // Ensure user data is valid before accessing the role
  const url = request.nextUrl.pathname;

  // If user is logged in, prevent access to login or registration pages
  if (isAuthToken) {
    if (url.startsWith("/auth/login") || url.startsWith("/auth/signup")) {
      return NextResponse.redirect(new URL("/", request.url)); // Redirect to the home page
    }
  }

  // If the user is not logged in, restrict access to protected routes
  if (!isAuthToken || !userData) {
    if (url.startsWith("/me") || url.startsWith("/new-blog")) {
      return NextResponse.redirect(new URL("/auth/login", request.url)); // Redirect to login
    }

    // Allow access to authentication pages
    return NextResponse.next();
  }

  // Role-based access control for logged-in users
  if (userRole === "user") {
    // Allow access to `/me` and `/new-blog` paths for users
    if (url.startsWith("/me") || url.startsWith("/new-blog")) {
      return NextResponse.next();
    } else {
      // Restrict access to any other area for regular users
      return NextResponse.redirect(new URL("/auth/login", request.url));
    }
  }

  // Default fallback for other roles or conditions
  return NextResponse.redirect(new URL("/auth/login", request.url));
}

export const config = {
  matcher: ["/me/:path*", "/auth/:path*", "/new-blog/:slug*"],
};
