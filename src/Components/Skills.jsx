import React from 'react'
import htmlLogo from '../assets/codex_html.svg'
import cssLogo from '../assets/css.svg'
import jsLogo from '../assets/js.svg'
import reactLogo from '../assets/react2.svg'
import tailwindLogo from '../assets/tailwind.svg'
import FramerLogo from '../assets/Framer.svg'
import gsapLogo from '../assets/gsap.svg'
import githubLogo from '../assets/github.svg'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {

  useGSAP(()=>{
    let tl = gsap.timeline()

    tl.from(".skillsHead",{
      y:150,
      opacity:0,
      duration:1,
      scrollTrigger:{
        start:"top 100%",
        end:"top 60%",
        scrub:3,
        scroller:"body",
        trigger:".skillsHead"
      }
    })

    tl.from(".logos div",{
      y:150,
      duration:1,
      opacity:0,  
      scrollTrigger:{
        start:"top 100%",
        end:"top 60%",
        scrub:3,
        scroller:"body",
        trigger:".skillsHead"
      }
    })
    tl.from(".logos2 div",{
      y:150,
      duration:1,
      opacity:0,  
      scrollTrigger:{
        start:"top 100%",
        end:"top 60%",
        scrub:3,
        scroller:"body",
        trigger:".skillsHead"
      }
    })
  })
  
  return (
    <div className='mt-30'>
    <div className='   w-full h-[901px] max-lg:h-[1106px] bg-[#2C2C2C]'>
      <div className='flex justify-center overflow-hidden'>
      <h1 className='mt-10 skillsHead text-[6.23181rem] max-sm:text-[3rem] max-md:text-[4rem] font-bold text-white stroke-2 stroke-white '>SKILLS</h1>
      </div>
        <div className='flex flex-col'>
          <div className='flex'>

          </div>
            <div className="logos overflow-hidden flex-wrap  images justify-evenly max-sm:gap-20 mt-35 max-sm:mt-29 flex">
              <div className='flex flex-col'>
              <img src={reactLogo} className='w-40 max-sm:w-25 ' alt="" />
              <p className='font-medium text-xl max-sm:text-[14px] text-[#f2f2f2] mx-auto'>REACT</p>
              </div>
              <div className='flex flex-col'>
              <img src={tailwindLogo} className='w-40 max-sm:w-25 ' alt="" />
              <p className='font-medium text-xl max-sm:text-[14px] text-[#f2f2f2] mx-auto'>TAILWIND</p>
              </div>
              <div className='flex flex-col '>
              <img src={FramerLogo} className='w-40 max-sm:w-25 ' alt="" />
              <p className='font-medium text-xl max-sm:text-[14px] text-[#f2f2f2] mx-auto'>FRAMER</p>
              </div>
              <div className='flex flex-col'>
              <img src={gsapLogo} className='max-sm:mr-8 max-sm:w-25  w-40 invert-100' alt="" />
              <p className='ml-21 max-sm:ml-10 text-xl text-[#f2f2f2] max-sm:text-[14px] mx-auto mt-2'>GSAP</p>
              </div>
              
             </div>
             <div className='logos2 overflow-hidden  flex flex-wrap justify-evenly max-sm:gap-20 mt-18'>
             <div className='flex flex-col'>
              <img src={githubLogo} className='w-40 max-sm:w-25 ' alt="" />
              <p className='font-medium text-xl max-sm:text-[14px] text-[#f2f2f2] mx-auto'>GITHUB</p>
              </div>
              <div className='flex flex-col'>
              <img src={htmlLogo} className='w-40 max-sm:w-25 ' alt="" />
              <p className='font-medium text-xl text-[#f2f2f2] max-sm:text-[14px] mx-auto'>HTML</p>
              </div>
              <div className='flex flex-col'>
              <img src={cssLogo} className='w-40 max-sm:w-25 ' alt="" />
              <p className='font-medium text-xl max-sm:text-[14px] text-[#f2f2f2] mx-auto'>CSS</p>
              </div>
              <div className='flex flex-col'>
              <img src={jsLogo} className='w-40 max-sm:w-25 ' alt="" />
              <p className=' text-xl text-[#f2f2f2] max-sm:text-[14px] mx-auto'>JAVASCRIPT</p>
              </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Skills