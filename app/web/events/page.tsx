import type { Metadata } from "next";
import { Inter } from "next/font/google";


import Banner from "@/app/banner/events/page";
import Container from "@/components/Container";
import MobileNav from "@/components/navbar/MobileNav"
import Logo from '@/components/navbar/Logo'
import Search from '@/components/navbar/Search'
import NavItems from '@/components/navbar/NavItems'




const headerLinks = [
  {
    label: 'Home',
    route: '/',
  },
  {
    label: 'Create Event',
    route: '/events/create',
  },
  {
    label: 'My Profile',
    route: '/profile',
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
                      
                        <Logo logoPath={logoPath} />
                        <Search  /> 
                        <NavItems links={headerLinks} />
                        {/* {/* <UserMenu currentUser={currentUser} /> */}
              <MobileNav logoPath={logoPath} links={headerLinks} />
                    </div>
                    
                    </Container>

            </div>
            
        </div>

        <div className="pb-20 pt-28">
        <Banner />
     </div>
      
    </div>
  );
}
