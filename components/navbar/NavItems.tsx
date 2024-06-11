'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import {NavItemsProps} from "@/types"

const NavItems: React.FC<NavItemsProps>  = ({ links }) => {
  const pathname = usePathname();

  return (
    <ul className="hidden md:justify-end md:flex  md:items-center flex w-full flex-col items-start gap-10 md:flex-row">

      {links?.map((link) => {
        const isActive = pathname === link.route;
        
        return (
          <li
            key={link.route}
            className={`${
              isActive && 'text-primary-500'
              } flex-center p-medium-16 whitespace-nowrap
              hover:text-green-500 cursor-pointer hover:border-b-2 hover:border-green-500
              `}
          >
            <Link href={link.route}>{link.label}</Link>
          </li>
        )
      })}
    </ul>
  )
}

export default NavItems