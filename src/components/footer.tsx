import React, { FC } from 'react'
import { AiFillFacebook, AiOutlineInstagram } from './shared/icons'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from './ui/button'
import Logo from './shared/logo'

type FooterContentType = {
  title: string
  links: { title: string; href: string; icon?: React.ReactNode }[]
  content?: React.ReactNode
}

const FooterContent: FooterContentType[] = [
  {
    title: 'Support',
    links: [
      { title: 'Shipping Policy', href: '#' },
      { title: 'Exchange Policy', href: '#' },
      { title: 'Privacy Policy', href: '#' },
      { title: 'Terms of service', href: '#' },
    ],
  },
  {
    title: 'Subscribe',
    links: [],
    content: (
      <div className="flex w-full flex-col items-center gap-2 text-center">
        <p className="text-sm">Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
        <form className="flex h-10 w-full max-w-[400px] rounded border">
          <input
            className="w-full rounded bg-background px-2 py-1 text-foreground outline-none"
            type="email"
            placeholder="Email Address"
          />
          <Button className="rounded-l-none">Subscribe</Button>
        </form>
      </div>
    ),
  },
  {
    title: 'Follow us',
    links: [
      { title: 'Facebook', href: '#', icon: <AiFillFacebook /> },
      { title: 'Instagram', href: '#', icon: <AiOutlineInstagram /> },
    ],
  },
]

const Footer = () => {
  return (
    <footer className="flex min-h-[300px]  w-full flex-col items-center gap-2 justify-between p-4 md:flex-row">
      <Logo />
      <div className="hidden w-full md:block">
        <FooterForLargeScreen />
      </div>
      <div className="w-full md:hidden">
        <FooterForMobile />
      </div>
    </footer>
  )
}
const FooterForLargeScreen = () => {
  return (
    <div id='footer-large' className="w-full grid grid-cols-3 gap-6 px-10 justify-center">
      {FooterContent.map((item, index) => (
        <div key={index} className="flex flex-col gap-2 items-center">
          <h1 className='text-xl font-medium'>{item.title}</h1>
          <ul className="flex flex-col gap-2">
            {item.links.map((link, index) => (
              <li key={index} className="flex items-center gap-2">
                {link.icon}
                <a href={link.href}>{link.title}</a>
              </li>
            ))}
          </ul>
          <div className="w-full">{item.content}</div>
        </div>
      ))}
    </div>
  )
}
const FooterForMobile = () => {
  return (
    <>
      {FooterContent.map((item, index) => (
        <MyAccordion key={index} className="w-full" trigger={<h1>{item.title}</h1>}>
          <ul className="flex flex-col gap-2">
            {item.links.map((link, index) => (
              <li key={index} className="flex items-center gap-2">
                {link.icon}
                <a href={link.href}>{link.title}</a>
              </li>
            ))}
          </ul>
          {item.content}
        </MyAccordion>
      ))}
    </>
  )
}

type AccordionProps = {
  trigger: React.ReactNode
  children: React.ReactNode
  className?: string
}
const MyAccordion: FC<AccordionProps> = ({ trigger, className, children }) => {
  return (
    <Accordion className={className} type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>{trigger}</AccordionTrigger>
        <AccordionContent>{children}</AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
export default Footer
