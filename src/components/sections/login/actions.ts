'use server'

import { cookies } from 'next/headers'

export async function login() {
  ;(await cookies()).set('isLoggedIn', 'true')
}
