import Title from './components/Title'
import Hero from './components/Hero'
import Intro from './components/Intro'
import Portfolio from './components/Portfolio'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Skills from './components/Skills'

import background from './assets/hero.png'

import React from 'react'
import { useRef } from 'react'

function App() {
  
const contactRef = useRef()
const heroRef = useRef()

const scrollToContact = () => {
  contactRef.current.scrollIntoView({ behavior: 'smooth'})
  
}
const scrollToHero = () => {
  heroRef.current.scrollIntoView({ behavior: 'smooth'})
  
}

  return (
    <div> 
     

    <div className="bg-[#1d1a18] text-stone-200 min-h-screen font-inter ">
    
        <Hero scrollToContact={scrollToContact} refHero={heroRef} />
        <div className="max-w-5xl w-11/12 mx-auto ">
       
        <Intro />
       
        <Portfolio />
       
        <Contact  refContact={contactRef}/>
       
        <Footer scrollToHero={scrollToHero}/>
        </div>
      
    </div>
    </div>
  )
}

export default App
