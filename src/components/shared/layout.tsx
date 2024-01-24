import React, { FC } from 'react'
import Header from '../header'
import Footer from '../footer'

type Props = {
  children: React.ReactNode
}

const Layout:FC<Props> = ({children}) => {
  return (
    <main className='flex flex-col'>
      <Header />
      {children}
      <Footer />
    </main>
  )
}

export default Layout