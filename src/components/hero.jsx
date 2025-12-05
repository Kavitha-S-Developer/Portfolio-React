import React from 'react'
import Profileimage from "../assets/profileimage2.jpg";
import { AiOutlineLinkedin,AiOutlineFacebook } from "react-icons/ai";

function Hero() {
const config={
  subtitle:"I am a Front-End Developer",
  social:{
    linkedin:'https://www.linkedin.com/in/kavithas2401/',
    facebook:'https://www.facebook.com/kavitha.natarajan.9/'
  }
}

  return (
   
    <section className='flex flex-col md:flex-row px-5 py-32 justify-between bg-primary'>
       <div className='md:w-1/2  flex flex-col px-15 '>
        <h1 className='  justify-center text-white text-4xl  py-5'>Hi,<br/> I'm Kavitha
        <p className='text-2xl'>{config.subtitle}.</p></h1>
       <div className='flex py-10'>
        <a href={config.social.linkedin} className='pr-5 hover:text-white'><AiOutlineLinkedin size={40}/></a>
          <a href={config.social.facebook}  className='pr-5  hover:text-white'><AiOutlineFacebook  size={40}/></a>
    
       </div>
       </div>
    
     <div className='image'><img  src={Profileimage} alt="" /></div>

    </section>
  )
    
}

export default Hero;