"use client"

import Link from 'next/link'
import MaxWidthWrapper from './max-width-wrapper'
// import { Icons } from '@/components/Icons'
// import NavItems from './NavItems'
// import { buttonVariants } from './ui/button'
// import { cookies } from 'next/headers'
import MobileNav from './mobile-nav'
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from './ui/navigation-menu'
import { Instagram, Linkedin, Twitter } from 'lucide-react'
import { Separator } from './ui/separator'



const Navbar = () => {
  // const nextCookies = cookies()

  return (
    <div className='bg-transparent z-50 top-0 inset-x-0 h-16'>
      <header className='relative bg-transparent'>
        <MaxWidthWrapper>
          <div className='w-full'>
            <div className='flex h-18 items-center gap-64 w-full justify-between py-6'>
              <MobileNav />

              <div className='ml-4 flex lg:ml-0'>
                <Link href='/' className='relative z-0'>
                  {/* <Icons.logo className='h-32 w-48' /> */}
                  <span className='z-20 relative font-medium text-lg'><span className='text-white'>Joã</span>o Costa</span>
                  <div className="w-9 h-9 bg-primary rounded-full absolute -z-1 -top-1 -left-1"></div>
                </Link>
              </div>

              {/* <div className='hidden z-50 lg:ml-8 lg:block lg:self-stretch'>
                <NavItems />
              </div> */}

              {/* <div className='ml-auto flex items-center'>
                <div className='hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6'>
                  <NavItems />
                </div>
              </div> */}
              <NavigationMenu className='hidden lg:flex' >
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <Link href="/about" legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        About me
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/projects" legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Projects
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/contact" legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Contact me
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              <NavigationMenu className='hidden lg:flex' >
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <Link href="/about" legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        <Linkedin size={24} />
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/projects" legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        <Instagram size={24} />
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/contact" legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        <Twitter size={24} />
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <Separator />
        </MaxWidthWrapper>
      </header>
    </div>
  )
}

export default Navbar
