import React from 'react'
import profile from '../assets/profileimage@.jpg'
import myresume from '../assets/MyResume.pdf'
import resume from '../assets/resume.png'

function Resume() {
  const config={
    link:myresume
  }
  return (
   <section id="resume" className='flex flex-col md:flex-row bg-secondary px-5 '>
    <div className=' md:w-1/2  flex justify-center'>
        <img src={resume} alt="" className='w-1/2 pb-5  pt-10' />
        </div>
    <div className='md:w-1/2 flex justify-center'> 
    <div className='flex flex-col justify-center'> 
        <h1 className='text-4xl text-white border-b-4 mb-5 w-[125px] font-bold'>Resume</h1>
     <p className='text-white text-2xl pb-5'> You can view my resume <a href={config.link} className='font-bold bg-primary btn border-secondary'>Download</a></p>
     </div>
    </div>
   </section>
  )
}

export default Resume