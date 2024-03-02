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
        <meta name="viewport" content="viewport-fit=cover" />
      </Head>
      <main className="fixed left-0 top-0 flex h-full w-full flex-col overflow-auto bg-background text-foreground antialiased">
        {/* Hidden for large screen */}
        <header className="sticky top-0 z-10 flex h-16 w-full shrink-0 items-center bg-inherit px-4 md:h-24 md:px-10 lg:hidden">
          <Image aria-label="Logo of website is YelpCamp" src="/Assets/logo.svg" alt="logo" width={100} height={100} />
        </header>
        {/* ************** */}
        <div className="flex flex-col lg:h-full lg:flex-row">
          <section className="relative h-[45vh] w-full shrink-0 md:h-[38vh] lg:order-2  lg:h-full lg:w-[40%]">
            <picture className="h-full w-full">
              <source media="(min-width: 1024px)" srcSet="/Assets/hero-large.jpg" />
              <Image
                src="/Assets/hero-mobile.jpg"
                alt="hero"
                layout="fill"
                className="absolute left-0 top-0 object-cover"
              />
            </picture>
          </section>
          <section className="lg:flex lg:h-full lg:flex-1 lg:shrink-0 lg:flex-col lg:px-32">
            <header className="hidden h-20 w-full shrink-0 items-center bg-background  lg:flex">
              <Image src="/Assets/logo.svg" alt="logo" width={100} height={100} />
            </header>
            <div className="lg:flex lg:h-full lg:w-full lg:items-center lg:justify-center">
              <article className="flex w-full shrink-0 flex-col gap-2 px-8 pt-6 text-left text-lg md:px-10 md:pt-10 md:text-xl lg:gap-2 lg:px-0 lg:pt-0 lg:text-[16px]">
                <h1 className="text-4xl font-bold leading-none md:text-5xl">
                  Explore the best <span className="lg:block">camps on Earth.</span>
                </h1>
                <p className="font-medium text-muted-foreground lg:w-[70%]">
                  YelpCamp is a curated list of the best camping spots on Earth. Unfiltered and unbiased reviews.
                </p>
                <ul className="flex flex-col gap-4 font-medium text-muted-foreground lg:mt-2 lg:gap-3">
                  {[
                    'Add your own camp suggestions.',
                    'Leave reviews and experiences.',
                    'See locations for all camps.',
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Image
                        src="/Assets/Checkmark.svg"
                        alt="checkmark"
                        width={25}
                        height={25}
                        className="size-[20px] md:size-[25px]"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button className={cn('mt-2 w-fit px-4 py-6 text-lg md:text-md lg:mt-4')}>View Campgrounds</Button>
                <footer className="mt-4 flex w-full shrink-0 flex-col bg-inherit pb-6 lg:mt-6">
                  <p className="text-xl font-normal">Partnered with:</p>
                  <ul className="flex items-center justify-between">
                    {['Airbnb', 'Booking', 'Plum Guide'].map((item, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Image src={`/Assets/${item}.svg`} alt={item} width={150} height={150} />
                      </li>
                    ))}
                  </ul>
                </footer>
              </article>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}

export default Home
