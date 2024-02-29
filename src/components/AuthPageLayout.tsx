import Image from 'next/image'
import React, { FC } from 'react'
import { cn } from '@/lib/utils'
import { MdOutlineArrowRightAlt } from 'react-icons/md'
type AuthPageLayoutProps = {
    children: React.ReactNode
    link:React.ReactNode 
}
const AuthPageLayout:FC<AuthPageLayoutProps> = ({link,children}) => {
  return (
    <main className="flex h-full w-full flex-col gap-8 overflow-auto bg-background text-foreground antialiased lg:flex-row lg:gap-0">
      <section className="flex w-full shrink-0 flex-col gap-8 px-6 md:px-8 lg:w-[60%] lg:justify-center lg:px-44">
        <header className="sticky top-0 z-10 flex h-16 w-full shrink-0 items-center justify-between bg-inherit lg:absolute lg:w-[calc(60%-22rem)]">
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
        <form className="flex min-h-[50vh] w-full shrink-0 flex-col">
          <legend className="mb-6 text-4xl font-bold leading-10 lg:mb-4 lg:text-3xl">
            Start exploring camps from all around the world
          </legend>
          <div className="flex w-full flex-col gap-6 md:w-[80%] lg:w-full lg:gap-4">
            {children}
          </div>

          <p className="mt-4 font-normal text-muted-foreground">
            
            {link}
          </p>
        </form>
      </section>
      <footer className="flex w-full flex-1 shrink-0 flex-grow flex-col gap-6 bg-accent px-6 py-8 text-accent-foreground md:px-8 lg:justify-center lg:px-24">
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
            className="size-12 lg:size-10"
          />
          <figcaption className="flex flex-col text-md">
            <p className="font-bold leading-none">May Andrews</p>
            <span className="mt-1 font-normal text-muted-foreground">Professional Hiker</span>
          </figcaption>
        </figure>
      </footer>
    </main>
  )
}
type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string
  name: string
  id: string
  placeholder: string
  className?: string
  type?: string
  props?: React.InputHTMLAttributes<HTMLInputElement>
}
export const Input: FC<InputProps> = ({ label, name, id, placeholder, type = 'text', className, ...props }) => {
  return (
    <section className="flex flex-col gap-3 lg:gap-2">
      <label id={`${name} label`} htmlFor={id} className="font-medium capitalize text-muted-foreground">
        {label}
      </label>
      <div>
        <input
          {...props}
          type={type}
          aria-label={`Enter your ${label}`}
          aria-labelledby={`${name} label`}
          required
          name={name}
          id={id}
          placeholder={placeholder}
          className={cn(
            'h-12 w-full rounded border border-transparent bg-accent px-4 outline-none focus:border-muted-foreground',
            className
          )}
        />
      </div>
    </section>
  )
}

export default AuthPageLayout
