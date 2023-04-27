"use client" // this is a client component

import React from "react"
import Image from "next/image"
import Typewriter from 'typewriter-effect';
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"

const skills = [
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "ThreeJS" },
  { skill: "GitHub" },

]

const POOskills = [
    { skill: "Java" },
    { skill: "Python" },
    { skill: "RStudio" },
    { skill: "Jupyter Notebook" },
  ]

const TestingSkills = [
    { skill: "Jira" },
    { skill: "qTest" },
    { skill: "Postman" },
    { skill: "Selenium" },
    { skill: "Robot" },
  ]  
  

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl text-black">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-white border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-3xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <div className="text-center font-bold mb-6 md:text-left text-lg mt-4 md:text-2xl text-black">
            <Typewriter  options={{
        strings: [
          "Computer Science Student",
          "QA Tester",
          "Part Time Geek",
          "Part Time Crypto trader",

        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 70,
      }}
    />
            </div>
            <p>
            From an early age, I have always been interested in technology and its ability to transform the world. I pursued a degree in Computer Science from "UNAM, Facultad de Ciencias"

            </p>
            <br />
            <p>
            Software Engineer in Testing working at Softtek International QA Team, seeking a Junior position where I can utilize my skills in software development, software testing, as well my knowledge of programming languages to contribute to the success of the team.
            I am eager to learn and grow in a collaborative environment that fosters innovation and encourages continuous learning. With a strong foundation in programming principles and a passion for software testing and development, I am confident in my ability to take on new challenges and make valuable contributions to the team.
            </p>
            <br />

          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
            <Image
              src="/jiralone3.jpg"
              alt=""
              width={1500}
              height={1500}
              className="h-auto max-w-sm rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
            />
              
              
            </div>
            
          </div>
        
        </div>
    <div>
        <h2 className="text-xl font-bold leading-7 mb-4 text-gray-200">
            Web Technologies
         </h2> 
    </div>

        <div className="text-center font-bold text-4xl text-black flex flex-wrap flex-row justify-center z-10 md:justify-start">
            
        {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300"
                  >
                    {item.skill}
                  </p>
                )
              })}
        </div>
        <br/>
        <div>
        <h2 className="text-xl font-bold leading-7 mb-4 text-gray-200">
            Programming languages
         </h2> 
    </div>

        <div className="text-center font-bold text-4xl text-black flex flex-wrap flex-row justify-center z-10 md:justify-start">
            
        {POOskills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300"
                  >
                    {item.skill}
                  </p>
                )
              })}
        </div>

        <br/>
        <div>
        <h2 className="text-xl font-bold leading-7 mb-4 text-gray-200">
            QA Testing 
         </h2> 
    </div>

        <div className="text-center font-bold text-4xl text-black flex flex-wrap flex-row justify-center z-10 md:justify-start">
            
        {TestingSkills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300"
                  >
                    {item.skill}
                  </p>
                )
              })}
        </div>
        
        <br/>

        <br/>

        <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="projects"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce cursor-pointer" />
        </Link>
      </div>

      </div>
     
    </section>
  )
}

export default AboutSection