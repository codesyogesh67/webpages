'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

interface LogoProps{
  logoPath:string
}


const Logo: React.FC<LogoProps> = ({ logoPath }) => {
  const router = useRouter();

  return ( 
    <Image
      onClick={() => router.push('/')}
      className="cursor-pointer" 
      src={logoPath}
      height="100" 
      width="100" 
      alt="Logo" 
    />
   );
}
 
export default Logo;