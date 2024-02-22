import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MdOutlineArrowRightAlt } from 'react-icons/md'
const Signup = () => {
  return (
    <>
      <Head>
        <title>Signup</title>
        <meta name="description" content="Signup" />
      </Head>
      <main className="flex h-full w-full flex-col gap-8 overflow-auto bg-background text-foreground antialiased">
        <header className="flex h-16 z-10 sticky top-0 w-full shrink-0 items-center justify-between bg-inherit px-6">
          <Image src="/Assets/logo.svg" alt="logo" width={100} height={100} aria-label="Logo of website is YelpCamp" />
          <button
            title="Back to campgrounds"
            role="navigation"
            aria-label="Back to campgrounds"
            className="flex items-center gap-1 font-medium text-muted-foreground"
          >
            <MdOutlineArrowRightAlt className="rotate-180" size={20} />
            <span className="">Back to campgrounds</span>
          </button>
        </header>
        <form className="flex min-h-[50vh] w-full shrink-0 flex-col gap-6 px-6">
          <legend className="text-4xl font-bold leading-10">Start exploring camps from all around the world</legend>
          <section className="flex flex-col gap-3">
            <label id="username-label" htmlFor="username" className="font-medium capitalize text-muted-foreground">
              Username
            </label>
            <input
              type="text"
              aria-label="Enter your username"
              aria-labelledby="username-label"
              required
              name="username"
              id="username"
              placeholder="peter3khalil"
              className="w-full rounded bg-accent px-4 py-4 outline-none focus:border focus:border-muted-foreground"
            />
          </section>
          <section className="flex flex-col gap-3">
            <label id="password-label" htmlFor="password" className="font-medium capitalize text-muted-foreground">
              Password
            </label>
            <input
              type="text"
              aria-label="Enter your password"
              aria-labelledby="password-label"
              required
              name="password"
              id="password"
              placeholder="Choose Password"
              className="w-full rounded bg-accent px-4 py-4 outline-none focus:border focus:border-muted-foreground"
            />
          </section>
          <menu className="flex w-full flex-col gap-3">
            <Button type="submit" className={cn('w-full py-7 text-md')}>
              Create an account
            </Button>
            <p className="font-normal text-muted-foreground">
              <span className="mr-1">Already a user?</span>
              <Link className="font-bold text-sky-500 underline" href={'/auth/login'}>
                Sign in
              </Link>
            </p>
          </menu>
        </form>
        <footer className="flex flex-grow w-full shrink-0 flex-col gap-6 bg-accent px-6 py-8 text-accent-foreground">
          <q className="text-xl font-bold text-accent-foreground">
            YelpCamp has honestly saved me hours of research time, and the camps on here are definitely well picked and
            added.
          </q>
          <figure className="flex gap-4">
            <Image
              src="/Assets/User-Testimonial.svg"
              alt="Picture"
              width={30}
              height={30}
              aria-label="May Andrews's picture"
            />
            <figcaption className="flex flex-col text-md">
              <p className="font-bold leading-none">May Andrews</p>
              <span className="font-normal mt-1 text-muted-foreground">Professional Hiker</span>
            </figcaption>
          </figure>
        </footer>
      </main>
    </>
  )
}

export default Signup
