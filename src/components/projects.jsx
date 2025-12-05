import React from 'react'
import portfolioimg from '../assets/portfolioimg1.jpg'
import movie from '../assets/movieimg.jpg'
import calculator from '../assets/calculator.jpg'
import profile from '../assets/profile.jpg'


function Projects() {
const config={
  projects:[
    {
      image:portfolioimg,
      description:"This project is a dynamic personal portfolio website built using React, showcasing my web development skills and projects.",
      link:""
    },
    {
      image:movie,
      description:"This movie database project utilizes React to create a dynamic application that allows users to search, view, and explore movies using a reliable API.",
      link:""
    },
    {
      image:calculator,
      description:"A Responsive Neumorphic Calculator Using HTML, CSS and Javascript .",
      link:"https://kavitha-s-developer.github.io/Projects/"
    },
     {
      image:profile,
      description:"Engaging and modern profile card in React that showcases user information and skills, utilizing dynamic styling and responsive design.",
      link:""
    }
  ]
}

  return (
   <section id="projects" className='flex flex-col py-20 px-5 justify-center bg-primary text-white'>
    <div className='w-full'>
    <div className='flex  flex-col px-10 justify-center'>
     <h1 className='text-4xl text-white border-b-4 mb-5 w-[140px] font-bold'>Projects</h1>
     <p className='text-2xl text-white  mb-5 w-full '>
These are some of my best projects done using React JS, Javascript, HTML, CSS, bootstrap and Tailwind CSS</p>
    </div>
    </div>
    <div className='w-full'>
    <div className='flex flex-col md:flex-row px-10 gap-5'>
      {config.projects.map((project)=>(
        
<div className='relative'>
        <img src={project.image} alt="" className='h-[200px] w-[300px]' />
       {/* <div className='project-desc'>
        <p className='text-center px-5 py-5'></p>
       </div> */}
       <div className='project bg-secondary'>
        <p className='text-center py-5'>{project.description}</p>
        <div className='flex justify-center'>
<a className="btn bg-primary " target='-blank' href={project.link}>View Project</a>
        </div>
        </div>
        </div>
          
      ))}
      
       
</div>
</div>
   
   </section>
  )
}

export default Projects