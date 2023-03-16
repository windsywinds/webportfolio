import { useState } from 'react'
import reactLogo from './assets/react.svg'


import Title from './components/Title'
import Hero from './components/Hero'
import Hero1 from './components/Hero1'
import Intro from './components/Intro'
import Portfolio from './components/Portfolio'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import Footer from './components/Footer'





function App() {


  return (
    <div> 
      


    <div className="bg-stone-900 text-stone-200 min-h-screen font-inter ">
    
        <Hero />
        <div className="max-w-5xl w-11/12 mx-auto">
        <Intro />
        <Portfolio />
        <Timeline />
        <Contact />
        <Footer />
        </div>
      
    </div>
    </div>
  )
}

export default App
