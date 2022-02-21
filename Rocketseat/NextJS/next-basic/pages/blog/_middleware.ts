import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  // return new Response('Hello World!');
  const redirect = new URL('/', req.url);
  return NextResponse.redirect(redirect);
}