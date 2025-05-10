import gsap from 'gsap'
import React from 'react'
import { useEffect } from 'react'

export default function CustomCursor(){
    function moveCursor(e){
        gsap.to(".cursor",{
            x:e.x,
            y:e.y,
            duration:0.2,
            ease:"power1.out",
        })
    }
    
    useEffect(()=>{

        window.addEventListener("mousemove",moveCursor)
    },[])

    return(
        <>
        <div onMouseMove={moveCursor} className='hover:hidden pointer-events-none  fixed top-0 left-0 z-[0] cursor w-[40px] h-[40px] bg-[#2C2C2C] rounded-full'>
        </div>
             
        </>
    )


}   