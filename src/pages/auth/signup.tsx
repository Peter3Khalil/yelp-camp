import AuthPageLayout, { Input } from '@/components/AuthPageLayout'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

const Signup = () => {
  return (
    <>
      <Head>
        <title>Signup</title>
        <meta name="description" content="Signup" />
      </Head>
      <AuthPageLayout
        link={
          <>
            <span className="mr-1">Already a user?</span>
            <Link className="font-bold text-sky-500 underline" href={'/auth/login'}>
              Sign in
            </Link>
          </>
        }
      >
        <Input label="username" name="username" id="username" placeholder="Enter your username" />
        <Input label="Password" name="Password" id="Password" placeholder="Choose Password" />
        <Button type="submit" className={cn('h-12 w-full cursor-pointer text-md')}>
          Create an account
        </Button>
      </AuthPageLayout>
    </>
  )
}


export default Signup
