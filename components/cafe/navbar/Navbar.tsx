import React from 'react'
import Container from '@/components/Container'
import Logo from '@/components/navbar/Logo'
import Search from '@/components/navbar/Search'
import NavItems from './NavItems'
import MobileNav from './mobileNav'


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
                      
                        {/* <Logo /> */}
                        <p className="text-red-500 font-bold text-2xl">HealthyCafe</p>
                       
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
