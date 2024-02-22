import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

const Home = () => {
  return (
    <>
      <Head>
        <title>YelpCamp</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main className="flex h-[100svh] w-full flex-col overflow-auto bg-background text-foreground antialiased">
        <header className="sticky top-0 z-10 flex h-16 w-full shrink-0 items-center bg-inherit px-4">
          <Image src="/Assets/logo.svg" alt="logo" width={100} height={100} />
        </header>
        <section className="relative h-[45vh] w-full shrink-0">
          <Image src="/Assets/hero-mobile.jpg" alt="hero" layout="fill" objectFit="cover" />
        </section>
        <article className="flex w-full shrink-0 flex-col gap-4 px-4 pt-6 text-left text-lg">
          <h1 className="text-4xl font-bold">Explore the best camps on Earth.</h1>
          <p className="font-medium text-muted-foreground">
            YelpCamp is a curated list of the best camping spots on Earth. Unfiltered and unbiased reviews.
          </p>
          <ul className="flex flex-col gap-4 font-medium text-muted-foreground">
            {['Add your own camp suggestions.', 'Leave reviews and experiences.', 'See locations for all camps.'].map(
              (item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Image src="/Assets/Checkmark.svg" alt="checkmark" width={25} height={25} />
                  <span>{item}</span>
                </li>
              )
            )}
          </ul>
          <Button className={cn('w-fit px-6 py-8 text-xl')}>View Campgrounds</Button>
        </article>
        <footer className="flex w-full shrink-0 flex-col bg-inherit px-4 py-6">
          <p className="text-xl font-normal">Partnered with:</p>
          <ul className="flex items-center justify-between">
            {['Airbnb', 'Booking', 'Plum Guide'].map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <Image src={`/Assets/${item}.svg`} alt={item} width={150} height={150} />
              </li>
            ))}
          </ul>
        </footer>
      </main>
    </>
  )
}

export default Home
