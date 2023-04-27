import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsArrowUpRightSquare } from "react-icons/bs"


const projects = [
  {
    name: "Software Developer Engineer in Testing",
    company:"Softtek",
    description:
      "As part of the International Localization team at Softtek, we ensure that software developed meets global market standards,create and execute automated test cases covering functional, performance, and localization aspects.",
    image: "/LogoSofttek.png",
    link: "https://www.softtek.com/",
  },
  {
    name: "Teacher assistant",
    description: "Teacher's Assistant at UNAM Facultad de Ciencias, Grading assignments, preparing class materials, and providing feedback to students in the subjects of Artificial Intelligence and Pattern Recognition and Automated Learning.",
    image: "/Escudo-facultad-ciencias-unam-escalable.svg-PhotoRoom.png-PhotoRoom.png",
    link: "https://www.fciencias.unam.mx/directorio/90482",
  },
  {
    name: "Roller coin HaCk?",
    description: "Python code to automatically play mini-games at Roller coin, a cryptocurrency play to earn platform, method is now banned and they implemented new game rules",
    image: "/rollercoinblack.png",
    link: "https://github.com/ReNeoAndy/RCbot",
  }, 
  {
    name: "Crypto Cereal, Doge Cereal",
    description: "A 3D Animated NFT that I made for fun",
    image: "/dogepng.png",
    link: "https://mintable.app/collectibles/item/Crypto-Cereal-Series-001-Doge-Cereal-MINT/0x8c5acf6dbd24c66e6fd44d4a4c3d7a2d955aaad2:109159392359800009012234051526227865788986292829632015294758204878765179278976",
  }
]

const ProjectsSection = () => {
    return (
      <section id="projects">
        <h1 className="my-10 text-center font-bold text-4xl text-black">
          Life
          <br/>
          <hr className="w-6 h-1 mx-auto my-4 bg-white border-0 rounded"></hr>
          <br/>
        </h1>
  
        <div className="flex flex-col space-y-28">
          {projects.map((project, idx) => {
            return (
              <div key={idx}>
                <SlideUp offset="-300px 0px -300px 0px">
                  
                  
                  <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                    
                    <div className=" md:w-1/2">
                      <Link href={project.link} target="_blank">
                        <Image
                          src={project.image}
                          alt=""
                          width={350}
                          height={350}
                          className="rounded-xl shadow-xl hover:opacity-70 object-scale-down h-48 w-96"
                        />
                      </Link>
                    </div>

                    <div className="mt-8 md:w-1/2">
                      <Link href={project.link} target="_blank">
                        <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                      </Link>

                      <div className="text-xl leading-7 mb-4 text-gray-200	">
                        {project.description}
                      </div>
                      <br/>
                      <br/>
                      <div className="flex flex-row align-bottom space-x-4">
                      <br/>
                      <br/>

                      </div>
                    </div>
                  
                  
                  </div>
                </SlideUp>
              </div>
            )
          })}
          
        </div>
      </section>
    )
  }
  
  export default ProjectsSection