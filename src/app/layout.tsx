import AppSidebar from '@/components/common/AppSidebar/AppSidebar'
import Header from '@/components/common/Header/Header'
import { SidebarProvider } from '@/components/ui/sidebar'
import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { headers } from 'next/headers'

const primaryFont = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Analytics AI',
  description: 'Analytics AI',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const showSidebar = (await headers()).get('X-Sidebar') === 'true'

  return (
    <html lang="en">
      <body className={`dark antialiased ${primaryFont.className}`}>
        {showSidebar ? (
          <SidebarProvider>
            <AppSidebar />
            <div className="wrapper">
              <Header />
              {children}
            </div>
          </SidebarProvider>
        ) : (
          <div className="wrapper">{children}</div>
        )}
      </body>
    </html>
  )
}
