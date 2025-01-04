'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Loader2, Mail, Lock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import Link from 'next/link'

// Определение схемы валидации
const loginSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters long' }),
})

type LoginFormValues = z.infer<typeof loginSchema>

// Компонент формы логина
const LoginForm = () => {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = async (data: LoginFormValues) => {
    setLoading(true)
    // Здесь должна быть логика аутентификации
    console.log(data)
    // После успешной аутентификации:
    router.push('/home')
    setLoading(false)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-sidebar-foreground" />
                  <Input
                    {...field}
                    placeholder="Enter Email"
                    type="email"
                    className="border-2 border-sidebar-border bg-background pl-10 text-foreground"
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-sidebar-foreground" />
                  <Input
                    {...field}
                    placeholder="Enter Password"
                    type="password"
                    className="border-2 border-sidebar-border bg-background pl-10 text-foreground"
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Link href="/home" className="mt-2 block text-sm text-sidebar-foreground hover:text-custom-blue">
          Forgot Password?
        </Link>
        <Button type="submit" className="w-full bg-custom-blue text-white hover:bg-custom-blue/90" disabled={loading}>
          {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'LOGIN'}
        </Button>
      </form>
    </Form>
  )
}

export default LoginForm
