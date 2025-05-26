import React from 'react'
import { FaArrowLeft } from "react-icons/fa6";
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


const Contact = () => {

  const [result, setResult] = React.useState(""); 

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);
  
    formData.append("access_key", "2db91cf1-1eaf-4a7d-889b-14d96b66d709");
  
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });
  
    const data = await response.json();
  
    if (data.success) {
      toast.success("Form Submitted Successfully");
      event.target.reset();
      setResult("")
    } else {
      console.log("Error", data);
      toast.error(data.message);
    }
  }

  
  useGSAP(()=>{
    const tl = gsap.timeline()

    tl.from(".Match",{
      y:30,
      duration:1,
      opacity:0,
      scrollTrigger:{
        scrub:2,
        trigger:".Match",
        scroller:"Body",
        start:"top 100%",
        end:"top 60%"
      }
    })
  },[])
  return (
    <div>
      <div id='Contact' className=' h-[1050px] w-full bg-[#2c2c2c]'>
        <div className='flex flex-col'>
          <h1 className='Match overflow-hidden mt-40 mx-auto text-6xl max-lg:text-5xl max-md:text-4xl max-sm:ml-15'>ARE WE A MATCH?</h1>
          <a href=""><div className="mx-auto mt-30 largeBtn w-[400px] flex h-[400px] max-md:w-[300px] max-md:h-[300px] bg-white rounded-full">
            <div className="mx-auto flex my-auto rounded-full realLargeBtn w-[300px] max-md:w-[200px] max-md:h-[200px] h-[300px] bg-[#2c2c2c]">
              <h1 className='Match my-auto ml-11 text-6xl max-md:text-4xl max-lg:text-5xl '>LET'S ROCK</h1>
            </div>
          </div></a>
          <span className='flex'>
          <h1 className='Match mt-40 mx-auto text-6xl max-lg:text-5xl max-md:text-4xl max-sm:text-3xl max-sm:ml-5'>OR, SEND ME A MESSAGE</h1>
          </span>
        </div>
      </div>
      <div className='ContactPage text-white flex justify-evenly flex-wrap gap-10'>
        <div className='mt-10'>
          <div className='max-lg:mx-auto ml-20 aboutBox z-50 w-[350px] max-lg:w-[400px] max-xl:w-[400px] max-md:w-[300px]  h-[650px] rounded-[5rem] border-2 border-black'>
            <div className='flex  justify-center max-md:gap-0 gap-2'>
              <FaArrowLeft className='items-center max-md:mt-12  mt-13 w-5 h-5 mr-5' />
              <h1 className='text-4xl font-extralight max-md:text-3xl mt-10 mr-7'>CONNECT</h1>
            </div>
            <div className='OrSection relative flex justify-center gap-5 mx-auto flex-col max-md:text-2xl text-3xl mt-10'>
              <a className='mx-auto relative' href="https://wa.me/916289771022" target="_blank" rel="noopener noreferrer">WHATSAPP</a>
              <a className='mx-auto relative' href="https://www.instagram.com/__i.am.alive__/">INSTAGRAM</a>
              <a className='mx-auto relative' href="https://x.com/_PranamShaw_">TWITTER</a>
            </div>
            <div className='flex mt-10 '>
              <h1 className='Match2 mx-auto text-6xl'>OR</h1>
            </div>
            <div className='flex  justify-center gap-2'>
              <FaArrowLeft className='items-center  mt-13 w-5 h-5 mr-5 max-md:mt-12' />
              <h1 className='text-4xl font-extralight mt-10 max-md:text-4xl mr-7'>CONNECT</h1>
            </div>
            <div className='flex HIRE relative justify-center gap-5 mx-auto flex-col text-3xl max-md:text-2xl mt-10'>
              <a className='mx-auto relative' href="https://linkedin.com/pranamshaw" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
              <a className='mx-auto relative' href="https://linkedin.com/pranamshaw" target="_blank" rel="noopener noreferrer">TWINE</a>
              
            </div>
          </div>
          <div className='max-lg:mx-auto mt-10 ml-20  aboutBox z-50 w-[350px]] max-lg:w-[400px] max-xl:w-[400px]  max-sm:h-[250px] max-md:w-[400px] max-sm:w-[300px] h-[200px] max-md:h-[250px] rounded-[5rem] border-2 border-black '>
            <div className='flex justify-center'>
              <h1 className='text-2xl font-extralight ml-4 mt-10 mr-7 max-md:text-xl'>All rights Reserved</h1>
            </div>
            <div className='flex justify-center'>
          <h1 className=' text-xl font-extralight max-md:text-[16px] ml-4 mt-10 mr-7'>PRANAM SHAW &copy;, {new Date().getFullYear()}</h1>
          </div>
          </div>
        </div>
          <form action="" onSubmit={onSubmit}>
        <div id='aboutBox2' className='text-white max-lg:mx-auto mt-10 ml-20 max-sm:w-[300px] aboutBox max-md:w-[500px] max-md:rounded-[1rem] z-50 w-[650px]  max-xl:w-[700px] h-[880px]  rounded-[5rem] border-2 border-black'>
            <div className='flex justify-center flex-col'>
              <label htmlFor=""></label>
            <input  type="text" placeholder='NAME' className='input max-md:w-[350px] w-[400px] max-sm:w-[250px] h-[50px] mt-20 mx-auto pb-0 text-xl' required />
            <br />
            <input type="Email" placeholder='EMAIL' className='input w-[400px] max-md:w-[350px] max-sm:w-[250px] h-[50px] mt-10 mx-auto pb-0 text-xl' required />
            <br />
            <input type="Tel" placeholder='PHONE' className='input w-[400px] max-md:w-[350px] max-sm:w-[250px] h-[50px] mt-10 mx-auto pb-0 text-xl' required />
            <br />
            <textarea name="" placeholder='YOUR MESSAGE' className='input2 mt-10  max-md:w-[370px] max-sm:w-[270px] mx-auto w-[420px] h-[320px] border-2 border-black rounded-2xl p-5' id="" required></textarea>
              <br />
              <span className='visitBtn mx-auto'><button className='mt-3 mx-auto relative max-md:mt-2 border-2 text-[#f7f7f7]  border-[#f7f7f7] max-md:w-[200px] max-md:text-[16px] max-md:bg-[#2c2c2c] max-md:text-[#f7f7f7] w-[250px] cursor-pointer hover:shadow-2xl transition-all duration-200 h-[70px] rounded-[20px] text-xl font-medium ' type='Submit'>{`${result ? result : "Send Message"}`}</button></span> 
            </div>
          </div>
          </form>
        </div>
      </div>
  
  )
}

export default Contact