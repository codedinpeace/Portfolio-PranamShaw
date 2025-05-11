import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Hero = () => {

  useGSAP(() => {
    const heroTl = gsap.timeline()

    heroTl.from(".Headline span", {
      y: 30,
      opacity: 0,
      duration: 1,
      stagger: {
        each: 0.1,
        from: "end"
      },
    })
    heroTl.from(".stLine", {
      y: 30,
      opacity: 0,
      duration: 0.5,
    })
    heroTl.from(".ndLine", {
      y: -30,
      opacity: 0,
      duration: 0.5,
    })
    heroTl.from(".socials a", {
      y: -30,
      opacity: 0,
      duration: 1.5,
      stagger: {
        each: 0.2,
        from: "end"
      }
    });

    heroTl.from(".rope div",{
      height:0,
      opacity:0,
      duration:2.5,
      ease: "power2.out",
      
    })
  })

  return (
    <div className='mt-20 w-[100%] h-[100vh]'>
      {/* <div className='rope absolute gap-170 ml-150  top-0 flex justify-evenly'>
        <div className='w-[0.0625rem] mx-auto h-[60.875rem] bg-black'>

        </div>
        <div className='w-[0.0625rem] mx-auto h-[60.875rem] bg-black'>

        </div>
      </div> */}
      <div className="rope absolute top-0 left-1/2 -translate-x-1/2 flex gap-172 max-xl:gap-150 max-lg:gap-110 max-md:gap-80 max-sm:gap-50 z-[0]">
  {/* Left Rope */}
  <div className="w-px h-[60.875rem] max-md:h-[40.875rem] bg-black"></div>
  
  {/* Right Rope */}
  <div className="w-px h-[60.875rem] max-md:h-[40.875rem]  bg-black"></div>
</div>
      <div className='flex justify-center overflow-hidden'>
        <h1 className='Headline text-[9rem] mx-auto overflow-hidden max-xl:text-[7rem] max-lg:text-[5rem] max-sm:text-[2rem] max-md:text-[3rem] max-md:tracking-[20px] tracking-[20px] '>
          <span className='inline-block'>P</span>
          <span className='inline-block'>R</span>
          <span className='inline-block'>A</span>
          <span className='inline-block'>N</span>
          <span className='inline-block'>A</span>
          <span className='inline-block'>M</span>
        </h1>
      </div>
      <div className='tagline text-[1.2rem] max-lg:text-[1rem] max-md:text-[0.6em] max-sm:text-[8px] grid text-shadow-2xs text-shadow-'>
        <p className='stLine mb-2 mx-auto'>SEEMS LIKE YOU MADE IT. WELCOME TO YOUR LAST STOP FOR SLEEK</p>
        <p className='ndLine mx-auto'>WEBSITES</p>
      </div>
      <div className=" socials max-md:mt-7 flex justify-center gap-50 max-lg:gap-20 max-md:gap-15 max-xl:gap-40 mt-15">
        <a href="https://www.instagram.com/webgrock/"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 90 90" fill="none" className='hover:opacity-70 transition-all duration-150 max-xl:w-10 max-xl:h-10 max-lg:w-8 max-md:w-5'>
          <path d="M29.1985 7.48682H60.6431C72.622 7.48682 82.3548 17.2197 82.3548 29.1986V60.6431C82.3548 66.4014 80.0674 71.9239 75.9956 75.9957C71.9239 80.0674 66.4014 82.3549 60.6431 82.3549H29.1985C17.2196 82.3549 7.48679 72.622 7.48679 60.6431V29.1986C7.48679 23.4402 9.77427 17.9178 13.846 13.846C17.9177 9.7743 23.4402 7.48682 29.1985 7.48682ZM28.4498 14.9736C24.8757 14.9736 21.448 16.3934 18.9207 18.9207C16.3934 21.448 14.9736 24.8757 14.9736 28.4499V61.3918C14.9736 68.8412 21.0005 74.8681 28.4498 74.8681H61.3918C64.9659 74.8681 68.3936 73.4482 70.9209 70.921C73.4482 68.3937 74.868 64.9659 74.868 61.3918V28.4499C74.868 21.0005 68.8412 14.9736 61.3918 14.9736H28.4498ZM64.5737 20.5887C65.8147 20.5887 67.0049 21.0817 67.8824 21.9592C68.7599 22.8368 69.2529 24.027 69.2529 25.268C69.2529 26.509 68.7599 27.6992 67.8824 28.5767C67.0049 29.4542 65.8147 29.9472 64.5737 29.9472C63.3327 29.9472 62.1425 29.4542 61.2649 28.5767C60.3874 27.6992 59.8944 26.509 59.8944 25.268C59.8944 24.027 60.3874 22.8368 61.2649 21.9592C62.1425 21.0817 63.3327 20.5887 64.5737 20.5887ZM44.9208 26.2038C49.8849 26.2038 54.6456 28.1758 58.1557 31.6859C61.6659 35.196 63.6378 39.9568 63.6378 44.9208C63.6378 49.8849 61.6659 54.6456 58.1557 58.1558C54.6456 61.6659 49.8849 63.6379 44.9208 63.6379C39.9568 63.6379 35.196 61.6659 31.6859 58.1558C28.1758 54.6456 26.2038 49.8849 26.2038 44.9208C26.2038 39.9568 28.1758 35.196 31.6859 31.6859C35.196 28.1758 39.9568 26.2038 44.9208 26.2038ZM44.9208 33.6906C41.9424 33.6906 39.0859 34.8738 36.9799 36.9799C34.8738 39.086 33.6906 41.9424 33.6906 44.9208C33.6906 47.8993 34.8738 50.7557 36.9799 52.8618C39.0859 54.9679 41.9424 56.1511 44.9208 56.1511C47.8993 56.1511 50.7557 54.9679 52.8618 52.8618C54.9678 50.7557 56.151 47.8993 56.151 44.9208C56.151 41.9424 54.9678 39.086 52.8618 36.9799C50.7557 34.8738 47.8993 33.6906 44.9208 33.6906Z" fill="black" />
        </svg></a>

        <a href="https://x.com/_PranamShaw_"><svg xmlns="http://www.w3.org/2000/svg" width="51" height="50" viewBox="0 0 91 90" fill="none" className='hover:opacity-70 transition-all duration-150 max-xl:w-10 max-xl:h-10 max-lg:w-8 max-md:w-5'>
          <path d="M67.0719 11.4661L48.3699 32.8446L32.1984 11.4661H8.76843L36.7579 48.0616L10.2321 78.3794H21.5896L42.0623 54.9831L59.9557 78.3794H82.798L53.6219 39.8074L78.4219 11.4661H67.0719ZM63.0889 71.5851L22.0276 17.901H28.7769L69.3779 71.5814L63.0889 71.5851Z" fill="black" />
        </svg></a>
        <a href="https://github.com/codedinpeace"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 90 90" fill="none" className='hover:opacity-70 transition-all duration-150 max-xl:w-10 max-xl:h-10 max-lg:w-8 max-md:w-5'>
          <path d="M70.3471 68.3171V30.8831H32.9131V28.5435C32.9131 24.6728 36.0613 21.5246 39.932 21.5246H46.9509V7.48682H39.932C34.3489 7.49177 28.996 9.71182 25.0482 13.6596C21.1004 17.6074 18.8803 22.9604 18.8754 28.5435V30.8831H9.51685V44.9208H18.8754V68.3171H9.51685V82.3549H42.2716V68.3171H32.9131V44.9208H56.4404V68.3171H46.9509V82.3549H79.7056V68.3171H70.3471Z" fill="black" />
          <path d="M63.3282 21.5246C67.2046 21.5246 70.3471 18.3821 70.3471 14.5057C70.3471 10.6293 67.2046 7.48682 63.3282 7.48682C59.4518 7.48682 56.3093 10.6293 56.3093 14.5057C56.3093 18.3821 59.4518 21.5246 63.3282 21.5246Z" fill="black" />
        </svg></a>
        <a href="https://github.com/codedinpeace"><svg xmlns="http://www.w3.org/2000/svg" width="51" height="50" viewBox="0 0 91 90" fill="none" className='hover:opacity-70 transition-all duration-150 max-xl:w-10 max-xl:h-12 max-md:w-5 max-md:h-10'>
          <path d="M45.6456 7.48682C40.7297 7.48682 35.8619 8.45508 31.3202 10.3363C26.7785 12.2175 22.6518 14.9749 19.1757 18.451C12.1555 25.4712 8.21155 34.9927 8.21155 44.9208C8.21155 61.4667 18.9551 75.5044 33.8164 80.4832C35.6881 80.7826 36.2871 79.6222 36.2871 78.6115V72.2851C25.9178 74.5312 23.7092 67.269 23.7092 67.269C21.9873 62.9266 19.5541 61.7662 19.5541 61.7662C16.1476 59.4452 19.8161 59.5201 19.8161 59.5201C23.5595 59.7822 25.5435 63.3758 25.5435 63.3758C28.8003 69.0658 34.3031 67.3813 36.4368 66.4828C36.7737 64.0496 37.747 62.4025 38.7951 61.4667C30.4848 60.5308 21.7627 57.3115 21.7627 43.0491C21.7627 38.894 23.1852 35.5623 25.6184 32.9045C25.244 31.9687 23.9338 28.0755 25.9927 23.0219C25.9927 23.0219 29.1372 22.0112 36.2871 26.8402C39.2444 26.0167 42.4637 25.6049 45.6456 25.6049C48.8275 25.6049 52.0468 26.0167 55.0041 26.8402C62.154 22.0112 65.2984 23.0219 65.2984 23.0219C67.3573 28.0755 66.0471 31.9687 65.6728 32.9045C68.106 35.5623 69.5285 38.894 69.5285 43.0491C69.5285 57.3489 60.7689 60.4934 52.4211 61.4292C53.7688 62.5897 55.0041 64.8732 55.0041 68.3545V78.6115C55.0041 79.6222 55.603 80.8201 57.5122 80.4832C72.3735 75.467 83.0796 61.4667 83.0796 44.9208C83.0796 40.0049 82.1113 35.1372 80.2301 30.5955C78.3489 26.0538 75.5915 21.9271 72.1154 18.451C68.6393 14.9749 64.5127 12.2175 59.9709 10.3363C55.4292 8.45508 50.5615 7.48682 45.6456 7.48682Z" fill="black" />
        </svg></a>
      </div>
    </div>
  )
}

export default Hero