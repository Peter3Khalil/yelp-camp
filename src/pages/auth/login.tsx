import AuthPageLayout, { Input } from '@/components/AuthPageLayout'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

const Login = () => {
  return (
    <AuthPageLayout
      link={
        <>
          <span className="mr-1">Not a user yet?</span>
          <Link className="font-bold text-sky-500 underline" href={'/auth/signup'}>
            Create an account
          </Link>
        </>
      }
    >
      <Input label="username" name="username" id="username" placeholder="peter3khalil" />
      <Input label="Password" name="Password" id="Password" placeholder="Enter Your Password" />
      <Button type="submit" className={cn('h-12 w-full cursor-pointer text-md')}>
        Login
      </Button>
    </AuthPageLayout>
  )
}

export default Login
