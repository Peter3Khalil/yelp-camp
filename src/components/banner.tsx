import React from 'react'
import { Button } from './ui/button'

const Banner = () => {
  return (
    <div
      className="flex h-[60vh] w-full  items-center justify-start bg-cover bg-center bg-no-repeat  p-10  lg:h-[80vh]  lg:bg-top"
      style={{ backgroundImage: 'url(../banner2.jpg)' }}
    >
      <div className="flex flex-col  gap-5 ">
        <div className="flex flex-col gap-1">
          <h1
            style={{ fontFamily: 'Gochi Hand, cursive' }}
            className="text-5xl font-bold italic text-foreground md:text-6xl"
          >
            Women<span>&lsquo;</span>s <span className="md:block lg:inline">Collection</span>
          </h1>
          <p className="text-md font-bold md:text-lg">
            Sweatshirt, Hoodie, <span className="block md:inline">jackets, Jeans</span>
          </p>
        </div>
        <Button className="w-fit bg-foreground p-6 text-lg text-background hover:bg-popover transition-colors duration-200 ease-in-out hover:text-popover-foreground">
          Shop now
        </Button>
      </div>
    </div>
  )
}

export default Banner
