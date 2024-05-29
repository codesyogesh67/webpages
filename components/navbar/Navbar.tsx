import React from 'react'
import Container from '@/components/Container'
import Logo from '@/components/navbar/Logo'
import Search from '@/components/navbar/Search'
import NavItems from '@/components/navbar/NavItems'
import MobileNav from './mobileNav'
// import UserMenu from '@/components/navbar/UserMenu'
// import {User} from '@prisma/client'
// import { SafeUser } from '@/types'
// import Categories from '@/components/navbar/Categories'

interface NavbarProps {
    // currentUser?: SafeUser | null;
}

const Navbar: React.FC<NavbarProps> = ({
    // currentUser
}) => {

    return (
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
                      
                        <Logo />
                        <Search /> 
                        <NavItems />
                        {/* {/* <UserMenu currentUser={currentUser} /> */}
            <MobileNav />
                    </div>
                    
                    </Container>

            </div>
            
        </div>
    )
}

export default Navbar
