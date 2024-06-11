import Image from "next/image";
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import Link from 'next/link'


interface Props {
    
}

const Banner = (props: Props) => {
    return (
        <>
            {/* <div className="z-40 relative h-[500px] xs:h-[600px] 2xl:h-[700px]">
                <Image src="/assets/travel/hero.png" layout="fill" objectFit="cover" /> */}
            <Container>
               
                    

                    <section className="absolute py-5 md:py-10 h-full">
        <div className="max-w-7xl lg:mx-auto w-full grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8 text-white ">
            <h1 className="font-bold text-[40px] leading-[48px] lg:text-[48px] lg:leading-[60px]  xl:text-[58px] xl:leading-[74px]"> Leave the office behind and <span className="text-orange">unwind</span></h1>
            {/* <p className="p-regular-20 md:p-regular-24">Book and learn helpful tips from 3,168+ mentors in world-class companies with our global community.</p> */}
            <p className="text-center md:text-left mt-6 mr-2">We are here to help you take care of your legality with the best service especially for you.</p>

                            
          </div>

         
        </div>
      </section> 

                
                <div className="absolute bottom-[-350px] md:bottom-[-180px] lg:bottom-[-50px] w-full md:w-auto">
                    <div className="w-full md:flex md:justify-center">
                        <div className="md:max-w-[750px] lg:max-w-[1050px] bg-black/50">
                            <div className="px-6 py-8 shadow-lg ">
                                <div className="grid md:grid-cols-4 lg:grid-cols-5 grid-cols-1 gap-6 md:gap-5 lg:gap-3 text-white">

                                    <input  placeholder="I want to go." className="bg-gray-400 p-2 px-4 rounded-[4px] mr-2 placeholder:text-white" />
                                    <input placeholder="Check in" className="bg-gray-400  p-2 px-4 rounded-[4px] mr-2 placeholder:text-white" />
                                    <input placeholder="Check out" className="bg-gray-400  p-2 px-4 rounded-[4px] mr-2 placeholder:text-white" />
                                    <input placeholder="Travellers" className="bg-gray-400  p-2 px-4 rounded-[4px] mr-2 placeholder:text-white" />
                                    <button className="bg-green-400  text-white py-3 px-5 text-sm rounded-[4px] md:col-start-2 md:col-end-4 lg:col-start-5 lg:col-end-6">Find available cabins</button>

                                </div>

                            </div></div>
                    </div>
                    </div>
            

                    </Container>
            {/* </div> */}
        </>
          
    )
}

export default Banner
