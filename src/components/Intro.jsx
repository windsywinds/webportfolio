import React from "react";
import Hero from "./Hero";


import background from '../assets/bar1.jpg'




function Intro() {
    return (
        <div className="intro-bg">


            <div className="bg-contain bg-no-repeat bg-center h-screen flex items-center justify-center" style={{ backgroundImage: `url(${background})` }}>
            
            <div className="flex flex-col pl-10 pt-20 pb-8" >    
            <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold"> Sam Windsor</h1>
            <p className="text-base md:text-xl mb-3 font-medium"> Web Developer</p>
            </div>
            </div>

            <div className="flex items-center justify-center flex-col text-center pt-20 pb-6" >
           
            <p className="text-sm mb-6 font-bold"> I've recently completed a Diploma in Web Development and Design and I'm eager to get started in the industry putting what I've learned to use, and continuing to grow as a developer. I built this site using react.js, however I also have experience with other languages such as Python, C#, and MySQL, which I got the chance to experience during my studies. </p>
            </div>
        </div>
    )
}

export default Intro;

