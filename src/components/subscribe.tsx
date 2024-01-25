import React from 'react'
import { Button } from './ui/button'

const Subscribe = () => {
  return (
    <div className="flex h-[200px] gap-4 w-full flex-col items-center justify-center bg-accent px-4 text-center text-accent-foreground">
      <h1 className="text-2xl font-bold">Subscribe</h1>
      <div className='flex flex-col gap-2 items-center'>
        <p className="text-sm">Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
        <form className="flex h-10 w-full max-w-[400px] border rounded">
          <input className="w-full rounded outline-none px-2 py-1 bg-background text-foreground" type="email" placeholder="Email Address" />
          <Button className="rounded-l-none">Subscribe</Button>
        </form>
      </div>
    </div>
  )
}

export default Subscribe
