import React, { use } from 'react'
import { CiMenuFries } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useState } from 'react';

const Navbar = () => {

  const[visible, setVisible] = useState(false)


  useGSAP(()=>{
    const tl = gsap.timeline()

    const compTl = gsap.timeline()

    compTl.from(".logo",{
      y:-30,
      duration:0.5,
      opacity:0,
      delay:0.4,
    })

    compTl.from(".Navlinks",{
      y:30,
      opacity:0,
      duration:0.5, 
    })
    
        compTl.from(".Navlinks a",{
          x:-50,
          opacity:0,
          duration:1,
          stagger:0.3,
        })


        compTl.from(".menu",{
          y:-30,
          opacity:0,
          durationn:0.5,
        })

        
      if(visible){
      tl.to(".Navlinks2",{
        right:0,
        duration:1,
        
      })
      tl.from(".Navlinks2 a",{
        y:-30,
        opacity:0,
        duration:1,
        stagger:0.2,
      })
      tl.from(".button",{
        y:-30,
        opacity:0,
        duration:0.3
      })
      tl.from(".cross",{
        y:-30,
        opacity:0,
        duration:0.3,
      })
    }

    else{
      tl.to(".Navlinks2",{
        right:"-100%",
        duration:1,

      })  
    }
   
  },[visible])

  
  return (
    <div>
        <div className='ml-10 flex justify-evenly mt-5 max-lg:hidden'>
            <p className='logo text-[#312E2E]  tracking-wide text-3xl '>PS</p>
            <div className='Navlinks relative flex justify-evenly text-[#312E2E] z-999 align-middle rounded-full bg-[#e9e7e7] w-[450px] h-[50px] '>
                <a className='my-auto relative  tracking-wide overflow-hidden'  href="#Home">HOME</a>
                <a className='my-auto relative  tracking-wide '  href="#About">ABOUT</a>
                <a  className='my-auto relative  tracking-wide ' href="#WORK">WORK</a>
                <a  className='my-auto  relative tracking-wide ' href="#CONTACT">CONTACT</a>
            </div>
            <div className='menu flex gap-2 font-extralight mt-3'>
                EN
            </div>
        </div>

        {/* Mobile Navbar */}
        <div>
          <div className='flex justify-between px-10 py-6'>
          <p className='logo2 text-[#312E2E] tracking-wide lg:hidden text-2xl '>PS</p>
          <CiMenuFries className='menubtn lg:hidden w-7 h-7 cursor-pointer' onClick={()=>{
            setVisible(true)
          }} /> 
          </div>
          <div className='lg:hidden Navlinks2 flex text-[#312E2E] z-999 align-middle gap-7 py-6 px-3 flex-col  bg-[#f2f2f257] w-[70%] h-screen ml-auto top-0 right-[-100%] fixed'>
                <a onClick={()=>{
                  setVisible(false)
                }} className=' tracking-wide'  href="#Home">HOME</a>
                <a onClick={()=>{
                  setVisible(false)
                }} className=' tracking-wide'  href="#ABOUT">ABOUT</a>
                <a onClick={()=>{
                  setVisible(false)
                }}  className=' tracking-wide' href="#WORK">WORK</a>
                <a onClick={()=>{
                  setVisible(false)
                }}  className=' tracking-wide' href="#Contact">CONTACT</a>
                <RxCross1 className='cross absolute top-0 right-0 w-13 h-13 p-3 cursor-pointer' onClick={()=>{
                  setVisible(false)
                }} />
            </div>
        </div>
    </div>
  )
}

export default Navbar