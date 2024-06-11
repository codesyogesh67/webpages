import Image from "next/image";
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import Link from 'next/link'

export default function Banner() {
  return (
    <Container>

<section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="max-w-7xl lg:mx-auto w-full grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="font-bold text-[40px] leading-[48px] lg:text-[48px] lg:leading-[60px]  xl:text-[58px] xl:leading-[74px]">Discover Restaurants & Delicious Food</h1>
            <p className="p-regular-20 md:p-regular-24">Get your best place to dine in with your loved ones.</p>
            <Button size="lg" asChild className="button w-full sm:w-fit bg-red-500">
              <Link href="#events">
                Explore 
              </Link>
            </Button>
          </div>

          <Image 
            src="/assets/cafe/hero.png"
            alt="hero"
            width={1000}
            height={1000}
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
          />
        </div>
      </section> 

      
   </Container>
  
  );
}