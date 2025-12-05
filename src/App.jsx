import { useState } from 'react'
import Header from './components/header'
import './App.css'
import Hero from './components/hero'
import About from './components/about'
import Projects from './components/projects'
import Resume from './components/resume'
import Contact from './components/contacts'
import Footer from './components/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Header />
   <Hero/>
   <About/>
   <Projects/>
   <Resume/>
   <Contact/>
   <Footer/>

      </>
  )
}

export default App
