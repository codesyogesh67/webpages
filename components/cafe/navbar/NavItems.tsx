'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'


const headerLinks = [
  {
    label: 'Home',
    route: '/',
  },
  {
    label: 'Reservation',
    route: '/reservation',
  },
  {
    label: 'Services',
    route: '/services',
  },
  {
    label: 'Foods',
    route: '/foods',
  },
]



const NavItems = () => {
  const pathname = usePathname();

  return (
    <ul className="hidden pl-10 md:flex  md:items-center flex w-full flex-col items-start gap-10 md:flex-row">
      {headerLinks.map((link) => {
        const isActive = pathname === link.route;
        
        return (
          <li
            key={link.route}
            className={`${
              isActive && 'text-primary-500'
            } flex-center p-medium-16 whitespace-nowrap`}
          >
            <Link href={link.route}>{link.label}</Link>
          </li>
        )
      })}
    </ul>
  )
}

export default NavItems