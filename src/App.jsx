import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'



import Intro from './components/Intro'
import Portfolio from './components/Portfolio'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import Footer from './components/Footer'



function App() {
  

  return (
    <div className="App">
        <Intro />
        <Portfolio />
        <Timeline />
        <Contact />
        <Footer />
      
    </div>
  )
}

export default App
