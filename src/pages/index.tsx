import Banner from '@/components/banner'
import ProductsContainer from '@/components/productsContainer'
import Subscribe from '@/components/subscribe'
import Head from 'next/head'
import React from 'react'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className="flex flex-col">
        <Banner />
        <ProductsContainer />
        <Subscribe/>
      </div>
    </>
  )
}
