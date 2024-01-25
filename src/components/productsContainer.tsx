import React from 'react'
import Product from './product'
import { Button } from './ui/button'

const ProductsContainer = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4 p-4">
      <h1 className="text-2xl font-bold">New Collection</h1>
      <ul className="flex w-full flex-col gap-2 md:flex-row md:flex-wrap md:justify-center">
        {Array.from({ length: 10 }).map((_, index) => {
          return (
            <li key={index} className="w-full md:w-[300px]">
              <Product id={index} image='/banner.jpg' name={`Product${index+1}`} price={100}/>
            </li>
          )
        })}
      </ul>
      <Button className="text-md px-6 py-2">
        View More
      </Button>
    </div>
  )
}

export default ProductsContainer
