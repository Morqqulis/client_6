import logo from '@/../public/logo.svg'
import LoginForm from '@/components/sections/login/LoginForm'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'

export default function LoginPage() {
  return (
    <main>
      <section className="h-full">
        <div className="container flex h-full flex-col items-center justify-center">
          <Card className="w-full max-w-[450px] border-slate-500 !bg-background">
            <CardContent className="p-6">
              <div className="flex justify-center">
                <Link href="/">
                  <Image src={logo} alt="Analytics Logo" width={96} height={96} className="mx-auto" />
                </Link>
              </div>
              <CardHeader className="mb-5 flex items-center justify-center p-0">
                <CardTitle className="mt-2 text-[22px] font-bold text-foreground">Welcome</CardTitle>
                <p className="text-[14px] font-semibold text-sidebar-foreground">Login to continue!</p>
              </CardHeader>
              <LoginForm />
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}
