import React from 'react';

import background from '../assets/bar1.png'

function Hero() {


  return (
    <div className="">
        <div className="h-screen bg-cover ms:bg-contain bg-no-repeat bg-center flex flex-col overflow-hidden  " style={{ backgroundImage: `url(${background})`, height: "calc(100vh + 20px)" }}>
        
        <span className="flex flex-col ml-auto items-center pr-5 pt-5">
        <a href="/assets/Sam-Windsor-CV.pdf" target="_blank" download>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="md:w-10 md:h-10 w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg></a> <a href="/assets/Sam-Windsor-CV.pdf" target="_blank" download><p className="text-xs md:text-sm">Download CV</p></a>
          </span>

        <div className="w-full h-full  flex flex-col items-center justify-center">           
            <div className="flex flex-col pl-10 pb-8" >    
                <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold ">Sam Windsor,</h1>
                <p className="text-base md:text-xl pl-1 pr-1 mb-3 font-medium text-right ">Web Developer.</p>
            </div>
            </div>


            <span class="inline-block animate-bounce text-stone-700 text-sm pt-10" style={{animation: "bounce 2s infinite" }} >
                
                <svg class="w-10 h-10 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
                </svg>
            </span>

       
        </div>
    </div>
  )
}

export default Hero;