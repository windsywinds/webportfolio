


import React from 'react'
import background from '../assets/bar1.png'

function Hero1() {
  return (
    <div className="w-screen h-screen rounded-4 border-white border-solid border-2">
        <div className="bg-cover bg-no-repeat h-full bg-center  flex flex-col items-center justify-center" style={{ backgroundImage: `url(${background})` }}>
        <div className="text-base md:text-xl font-medium text-right ">This word</div>
          
            
            <div className="flex flex-col pl-10 pb-8" >    
                <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold"> Sam Windsor</h1>
                <p className="text-base md:text-xl pl-1 mb-3 font-medium text-right "> Web Developer</p>   
                     
            </div>
            
            <span class="inline-block animate-bounce text-stone-700 text-sm pt-10 rounded-4 border-white border-solid border-2">
                <svg class="w-10 h-10 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
                </svg>
            </span>    


        </div>
  

    </div>
  )
}

export default Hero1