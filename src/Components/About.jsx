import React from 'react'

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const About = () => {


    return (
        <div className='mt-[-189px] z-50 max-md:mt-[-450px] ' id='ABOUT'>
            <div className='flex justify-center z-50'>
                <div className=' aboutBox z-50 w-[800px] max-lg:w-[600px] max-xl:w-[700px]  max-sm:h-[450px] max-md:w-[400px] max-sm:w-[300px] h-[650px] max-md:h-[550px] rounded-[5rem] border-2 border-black'>
                    <div className='flex justify-center'>
                        <h1 className='z-50 mt-10 text-8xl font-light max-lg:text-7xl max-md:text-3xl'>ABOUT</h1>
                    </div>
                    <div className='flex justify-center max-md:mt-5 mt-10 text-center leading-9'>
                        <p className='max-md:hidden AboutPara text-[21px] max-w-[700px] max-sm:text-[10px] max-sm:w-[250px] max-xl:max-w-[600px] max-md:text-[12px] max-md:w-[300px] max-md:leading-7 max-xl:text-[18px] max-lg:w-[500px] max-lg:text-[16px] rounded-full '>Hey! I'm Pranam Shaw — a 15-year-old Front-End Developer and UI/UX Designer from India.
                        With over 10+ projects under my belt, I've spent the past few years turning ideas into clean, responsive, and visually stunning web experiences. Whether you're looking to bring your startup vision to life, improve your website’s design, or craft a seamless user experience, I'm here to help you make it real — pixel by pixel. I'm passionate about creating modern, user-friendly websites and always excited to collaborate with people who have bold ideas and big dreams.</p>
                        <p className='md:hidden AboutPara'>HEY I AM PRANAM SHAW, A 16 Y/O FRONT END DEVELOPER AND DESIGNER WHO HAS WORK ON OVER 20+ PROJECTS FROM INDIA WHO IS WILLING TO CONVERT YOUR IDEAS INTO REALITY</p>
                    </div>  
                    <div className='flex justify-center max-md:mt-9 '>
                    <a href="https://nova-saas.vercel.app/" className='visitBtn'><button className='relative mt-10 max-md:mt-2 border-4 text-[#2C2C2C]  border-[#2C2C2C] max-md:w-[200px] max-md:text-[16px] max-md:bg-[#2c2c2c] max-md:text-[#f7f7f7] w-[250px] cursor-pointer hover:shadow-2xl transition-all duration-200 h-[70px] rounded-[20px] text-xl font-medium '>LEARN MORE</button></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About