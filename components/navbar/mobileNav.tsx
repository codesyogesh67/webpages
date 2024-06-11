import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import Image from "next/image"
  import { Separator } from "@/components/ui/separator"
  import NavItems from "./NavItems"
  import {NavItemsProps} from "@/types"
import Logo from "./Logo"

  interface MobileLogoProps{
    logoPath: string,
    links: NavItemsProps
  }
  
  
  const MobileNav:React.FC<MobileLogoProps> = ({logoPath,links}) => {
    return (
      <nav className="md:hidden">
        <Sheet>
          
       
          <SheetTrigger className="align-middle">
            <Image 
              src="/menu.svg"
              alt="menu"
              width={24}
              height={24}
              className="cursor-pointer"
            />
          </SheetTrigger>

          <SheetContent>
        <SheetHeader>
              <SheetTitle>
                <Logo logoPath={logoPath} />
              </SheetTitle>
              
            </SheetHeader>


            </SheetContent>
        </Sheet>
      </nav>
    )
  }
  
  export default MobileNav