import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/** Serve the same Viilasa mark for default `/favicon.ico` requests without duplicating asset bytes. */
export function middleware(req: NextRequest) {
  if (req.nextUrl.pathname === "/favicon.ico") {
    return NextResponse.rewrite(new URL("/viilasa-logo.svg", req.url));
  }
}

export const config = {
  matcher: "/favicon.ico",
};
