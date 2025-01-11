import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()
  const currentPath = request.nextUrl.pathname
  const sidebarlessPages = ['/auth']
  const isLoggedIn = request.cookies.get('isLoggedIn')?.value === 'true'

  if (sidebarlessPages.includes(currentPath)) {
    response.headers.set('X-Sidebar', 'false')
  } else {
    response.headers.set('X-Sidebar', 'true')
  }

  if (!isLoggedIn && !sidebarlessPages.includes(currentPath)) {
    return NextResponse.redirect(new URL('/auth', request.url))
  }

  return response
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
