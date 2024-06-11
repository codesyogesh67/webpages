import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { cn } from "@/lib/utils"
import Banner from "@/app/banner/travel/page";
import Container from "@/components/Container";
import MobileNav from "@/components/navbar/MobileNav"
import Logo from '@/components/navbar/Logo'
import Search from '@/components/navbar/Search'
import NavItems from '@/components/navbar/NavItems'
import Image from "next/image";




const headerLinks = [
  {
    label: 'Our Cabins',
    route: '/cabins',
  },
  {
    label: 'Get Inspired',
    route: '/get-inspired',
  },
  {
    label: 'Gift a stay',
    route: '/stay',
    },
    {
        label: 'About Us',
        route: '/about-us',
      },
]




const logoPath = '/assets/events/logo.svg';

export default function PageLayout() {
  return (
   <div>
 <div className="fixed w-full bg-white z-50 shadow-sm ">
            <div className="py-4 border-b-[1px]"
            >
               <Container>
                    <div
                        className="
                        flex
                        flex-row
                        items-center
                        justify-between
                        gap-3
             
                    ">
                      
                          {/* <Logo logoPath={logoPath} /> */}
                          <p className="cursor-pointer"><span className="text-green-300 font-medium">UNWIND</span><span className="text-green-500 font-bold">CABINS</span></p>
                        <Search  disable/> 
                        <NavItems links={headerLinks}  />
                        {/* {/* <UserMenu currentUser={currentUser} /> */}
              <MobileNav logoPath={logoPath} links={headerLinks} />
                    </div>
                    
                    </Container>

            </div>
            
        </div>

     
      <div className="z-40 relative h-[600px] xs:h-[600px] 2xl:h-[700px]">
          <Image src="/assets/travel/hero.png" layout="fill" objectFit="cover" />
          <div className="pt-28 pb-20">
          <Banner />
          </div> 
     </div>
      
    </div>
  );
}
