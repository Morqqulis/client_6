import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  const isLoginPage = request.nextUrl.pathname === '/'

  response.headers.set('x-show-sidebar', isLoginPage ? 'false' : 'true')

  return response
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
