import Title from './components/Title'
import Hero from './components/Hero'
import Intro from './components/Intro'
import Portfolio from './components/Portfolio'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Skills from './components/Skills'

import background from './assets/bar1.png'
import CV from './assets/Sam-Windsor-CV.pdf'
import vorstthumb from './assets/vorstthumb.jpg'
import csharpthumb from './assets/csharpthumb.jpg'
import webportthumb from './assets/webportthumb.png'



function App() {
  


  

  return (
    <div> 
     

    <div className="bg-[#1d1a18] text-stone-200 min-h-screen font-inter ">
    
        <Hero />
        <div className="max-w-5xl w-11/12 mx-auto ">
       
        <Intro />
       
        <Portfolio />

        <Skills />
       
        <Contact />
       
        <Footer />
        </div>
      
    </div>
    </div>
  )
}

export default App
