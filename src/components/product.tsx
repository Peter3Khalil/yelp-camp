import Image from 'next/image'
import React, { FC, useState } from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { cn } from '@/lib/utils'

type ProductProps = {
  name: string
  price: number
  image: string
  id: string | number
}

const Product: FC<ProductProps> = ({ id = 1, image = '/banner.jpg', name = 'Product Name', price = 500 }) => {
  const { handleMouseEnter, handleMouseLeave, isHovered } = useHover()
  return (
    <Link
      href={`/products/${id}`}
      className="relative flex max-h-[500px] w-full flex-col rounded p-2"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <figure className="flex h-full w-full flex-col gap-2">
        <div className="relative h-[300px] w-full">
          <Image src={image} className="absolute h-full w-full rounded" alt="Product" layout="fill" objectFit="cover" />

          <Button
            className={cn(
              'text-md absolute bottom-0 w-full px-6 py-2',
              {
                'opacity-100': isHovered,
                'opacity-0': !isHovered,
              }
            )}
          >
            Quick View
          </Button>
        </div>
        <figcaption className="flex flex-col items-center justify-center gap-1">
          <h3 className="text-xl">{name}</h3>
          <p className="">
            LE: <span>{price}</span>
          </p>
        </figcaption>
      </figure>
    </Link>
  )
}

const useHover = () => {
  const [isHovered, setIsHovered] = useState(false)
  const handleMouseEnter = () => setIsHovered(true)
  const handleMouseLeave = () => setIsHovered(false)
  return { isHovered, handleMouseEnter, handleMouseLeave }
}

export default Product
