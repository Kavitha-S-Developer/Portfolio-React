import React from 'react'


function Contact() {
  const config={
    email:'kavitha2401@gmail.com',
    phone:'+91 7829425209'
  }
  return (
   <section id="contact"  className='flex flex-col text-white  bg-primary px-5 py-25 '>
   
    <div className='   flex flex-col items-center'> 
    
        <h1 className='text-4xl border-b-4 mb-5 w-[125px] font-bold'>Contact</h1>
     <p className='text-2xl pb-5'> If you want to discuss more in detail, please contact me </p>
     <p className='py-2'><span className='font-bold'>Email :</span> {config.email}</p>
     <p className='py-2'><span className='font-bold'>Phone :</span>{config.phone}</p>
     </div>
 
   </section>
  )
}

export default Contact;