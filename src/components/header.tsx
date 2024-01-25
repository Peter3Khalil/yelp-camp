import React from 'react'
import { AiOutlineMenu, AiOutlineSearch, AiOutlineShoppingCart } from './shared/icons'
import Link from 'next/link'
import Logo from './shared/logo'

type LinkType = {
  href: string
  label: string
}

const links: LinkType[] = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/products',
    label: 'all products',
  },
  {
    href: '/collections',
    label: 'collections',
  },
]

const Header = () => {
  return (
    <header className="sticky top-0 z-10 flex h-20 w-full items-center justify-between border-b bg-background px-4 text-foreground lg:px-6">
      <button className="text-xl lg:hidden" title="menu" aria-label="Open Menu">
        <AiOutlineMenu />
      </button>
      <Logo />
      <nav className="hidden gap-12 lg:flex" aria-label="Primary">
        <ul className="flex gap-12">
          {links.map((link, index) => {
            return (
              <li key={index}>
                <Link href={link.href}>
                  <p className="border-b-2 border-transparent font-medium uppercase transition-all duration-200 ease-linear hover:border-foreground">
                    {link.label}
                  </p>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
      <ul className="flex items-center gap-4" role="toolbar" aria-label="Search and shopping cart">
        <button title="Search" className="text-xl" aria-label="Search">
          <AiOutlineSearch />
        </button>
        <button title="Open Cart" className="text-xl" aria-label="Shopping Cart">
          <AiOutlineShoppingCart />
        </button>
      </ul>
    </header>
  )
}

export default Header
