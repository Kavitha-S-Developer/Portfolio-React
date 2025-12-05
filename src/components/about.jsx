import React from 'react'

import about from '../assets/about.jpg'

function About() {

  const config={
    line1:"A Passionate web developer with a strong foundation in front-end technologies.",
    line2:"Skilled in React.js, JavaScript, HTML, and CSS, complemented by proficiency in Git and GitHub.",
    line3:"Eager to contribute to dynamic teams and learn from experienced professionals in real-world web development environments."
  }
  return (
   <section className='flex flex-col md:flex-row bg-secondary px-5' id="about">
    <div className=' md:w-1/2 '>
        <img src={about} alt="" className='w-1/2 pb-5  pt-10' />
        </div>
    <div className='md:w-1/2 flex justify-center'> 
    <div className='flex flex-col justify-center'> 
        <h1 className='text-4xl text-white border-b-4 mb-5 w-[160px] font-bold'>About Me</h1>
     <p className='text-white text-2xl pb-5'>{config.line1}</p>
     <p  className='text-white text-2xl pb-5'>{config.line2}</p>
      <p  className='text-white text-2xl pb-5'>{config.line3}</p>
     </div>
    </div>
   </section>
  )
}

export default About