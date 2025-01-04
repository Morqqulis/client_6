import { headers } from 'next/headers'
import AppSidebar from '@/components/common/AppSidebar/AppSidebar'
import Header from '@/components/common/Header'
import { SidebarProvider } from '@/components/ui/sidebar'
import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const primaryFont = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Analytics AI',
  description: 'Analytics AI',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const headersList = headers()
  const showSidebar = (await headersList).get('x-show-sidebar') === 'true'
   console.log(showSidebar)
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
