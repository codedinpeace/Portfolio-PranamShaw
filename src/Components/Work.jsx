import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from "gsap/ScrollTrigger";
import Project1 from '../assets/Project1.png'
import Project2 from '../assets/Project2.png'
import Project3 from '../assets/Project3.png'
import Project4 from '../assets/Project4.png'
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {

    const videoRef = useRef(null);

    const handleMouseEnter = () => {
      videoRef.current?.play();
    };
  
    
    
    const handleMouseLeave = () => {
        videoRef.current?.pause();
        videoRef.current.currentTime = 0; // Optional: resets to start
    };
    


    useGSAP(() => {
       let tl = gsap.timeline()

       tl.from(".work",{
        y:30,
        opacity:0,
        duration:0.5,
        scrollTrigger:{
            scrub:2,
            trigger:".work",
            scroller:"body",
            start:"top 100%",
            end:"top 60%"
        }
       })
      
      });
      
    return (
        <div className='mt-0  max-xl:mt-20' id='WORK'>
            <div className='flex overflow-hidden mt-30 mb-20'>
                <h1 className='work max-xl:text-[9rem] max-lg:text-[8rem] max-md:text-[4rem] mx-auto text-[10rem] font-extralight text-shadow-2xs '>WORK</h1>
            </div>
            <div className='aboutBox z-50 w-auto   border-2 border-black'>
                <div className='videos'>
                    <div className="video1 flex flex-wrap-reverse justify-center gap-50 max-xl:gap-40 px-20">
                        <img src={Project1} className='max-md:w-[300px] max-md:h-[180px] max-lg:w-[500px] max-lg:h-[300px] max-md  mt-10 mb-10 shadow-2xl rounded-3xl w-[700px] h-[400px] min-w-[300px] min-h-[150px] max-md:mt-[-120px]' alt="" />
                        <div className='max-lg:flex max-lg:flex-col'>
                            <h1 className='max-lg:text-4xl max-lg:mx-auto subHeading text-5xl mt-10'>NOVA SAAS</h1>
                            <p className='Para1 max-md:text-[14px] max-md:w-100 max-sm:w-70 text-xl w-150 mt-5 max-lg:text-[14px] max-lg:text-center'>A mordern Video Editing SAAS tool website made using React for structured Components, Tailwind for fast and easy styling and GSAP for subtle animations with fully responsive design and next to perfect SEO scores</p>
                            <a href="https://nova-saas.vercel.app/" className='visitBtn flex'><button className='relative mt-10 border-4 text-[#2C2C2C] border-[#2C2C2C] max-md:w-[200px] max-md:text-[16px] max-lg:mx-auto items-center w-[250px] cursor-pointer hover:shadow-2xl transition-all duration-200 h-[70px] rounded-[20px] text-xl font-medium '>VISIT WEBSITE</button></a>
                        </div>
                    </div>
                    <div className="video1 flex flex-wrap-reverse justify-center max-xl:gap-40 gap-50 px-20">
                    <img src={Project2} className='max-md:w-[300px] max-md:h-[180px] max-lg:w-[500px] max-lg:h-[300px] max-md  mt-10 mb-10 shadow-2xl rounded-3xl w-[700px] h-[400px] min-w-[300px] min-h-[100px] max-md:mt-[-120px]' alt="" />
                        <div className='max-lg:flex max-lg:flex-col'>
                            <h1 className='max-lg:text-4xl max-lg:mx-auto subHeading text-5xl max-md:mt-0 mt-10'>HOOBANK</h1>
                            <p className='Para1 max-md:text-[14px] max-md:w-100 max-sm:w-70  text-xl w-150 mt-5 max-lg:text-[14px] max-lg:text-center'>A mordern credit card and banking company landing page made using React for structured Components, Tailwind for fast and easy styling and GSAP for subtle animations with fully responsive design and next to perfect SEO scores</p>
                            <a href="https://hoobank-project-1.vercel.app/" className='visitBtn flex'><button className='relative mt-10 border-4 text-[#2C2C2C] border-[#2C2C2C] max-md:w-[200px] max-md:text-[16px] max-lg:mx-auto items-center w-[250px] cursor-pointer hover:shadow-2xl transition-all duration-200 h-[70px] rounded-[20px] text-xl font-medium '>VISIT WEBSITE</button></a>
                        </div>
                    </div>
                    <div className="video1 flex flex-wrap-reverse justify-center max-xl:gap-40 gap-50 px-20">
                    <img src={Project3} className='max-md:w-[300px] max-md:h-[180px] max-lg:w-[500px] max-lg:h-[300px] max-md  mt-10 mb-10 shadow-2xl rounded-3xl w-[700px] h-[400px] min-w-[300px] min-h-[150px] max-md:mt-[-120px]' alt="" />
                        <div className='max-lg:flex max-lg:flex-col'>
                            <h1 className='max-lg:text-4xl max-lg:mx-auto subHeading text-5xl mt-10'>ESTATE</h1>
                            <p className='Para1 max-md:text-[14px] max-sm:w-70  max-md:w-100 text-xl w-150 mt-5 max-lg:text-[14px] max-lg:text-center'>A high converting advertising website for real estate buisnesses made using React for structured Components, Tailwind for fast styling and mobile first approach and GSAP for animations integrated with Web3 forms helping users to send messages</p>
                            <a href="https://estate-project-eta.vercel.app/" className='visitBtn flex'><button className='relative mt-10 border-4 text-[#2C2C2C] border-[#2C2C2C] max-md:w-[200px] max-md:text-[16px] max-lg:mx-auto items-center w-[250px] cursor-pointer hover:shadow-2xl transition-all duration-200 h-[70px] rounded-[20px] text-xl font-medium '>VISIT WEBSITE</button></a>
                        </div>
                    </div>
                    <div className="video1 flex flex-wrap-reverse justify-center max-xl:gap-40 gap-50 px-20">
                    <img src={Project4} className='max-md:w-[300px] max-md:h-[180px] max-lg:w-[500px] max-lg:h-[300px] max-md mt-10 mb-10 shadow-2xl rounded-3xl w-[700px] h-[400px] min-w-[300px] min-h-[150px] max-md:mt-[-120px]' alt="" />    
                        <div className='max-lg:flex max-lg:flex-col'>
                            <h1 className='max-lg:text-4xl max-lg:mx-auto subHeading text-5xl max-md:mt-0 mt-10'>EDUSITY</h1>
                            <p className='Para1 max-md:text-[14px] max-sm:w-70  max-md:w-100 text-xl w-150 mt-5 max-lg:text-[14px] max-lg:text-center'>A minimal campus website with campus images, testimonials and a fully functional contact form for users to enroll made using React for structured Components, Tailwind for fast styling and mobile first design approach and GSAP for subtle and smooth animations</p>
                            <a href="https://educity-puce.vercel.app/" className='visitBtn flex'><button className='relative mt-10 border-4 text-[#2C2C2C] border-[#2C2C2C] max-md:w-[200px] max-md:text-[16px] max-lg:mx-auto items-center w-[250px] cursor-pointer hover:shadow-2xl transition-all duration-200 h-[70px] rounded-[20px] text-xl font-medium '>VISIT WEBSITE</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work