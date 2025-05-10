import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
// import CustomCursor from './Components/CustomCursor'
import Lenis from 'lenis'
import Skills from './Components/Skills'
import Work from './Components/Work'
import Contact from './Components/Contact'
import { Slide, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const lenis = new Lenis({
  autoRaf: true,
});

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
  console.log(e);
});



const App = () => {
  return (
    <div>
      <ToastContainer position='top-right' autoClose={3000} transition={Slide} theme='dark  '/>
      {/* <CustomCursor /> */}
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Work/>
      <Contact/>
    </div>
  )
}

export default App