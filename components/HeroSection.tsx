"use client" // this is a client component

import React from 'react'
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        
        
        <div className="">
          <Image
            src="/jiralone2.jpg"
            alt=""
            width={1500}
            height={1500}
            className="h-auto max-w-sm rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
          />
        </div>



        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">Hi, I&#39;m  <span className="font-semibold text-black">
              ReNeoAndy {" "}
            </span>!</h1>
          <div className="text-lg mt-4 mb-6 md:text-2xl">
            And {" "}
            <span className="font-semibold text-black">
              someone told me  {" "}
            </span>
            that we assume that what we are experiencing is <span className="font-semibold text-black">
              life  {" "}
            </span>
           
          </div>
    
          
        </div>
        
        
      </div>
      
   


      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce cursor-pointer" />
        </Link>
      </div>
    </section>
  )
}

export default HeroSection