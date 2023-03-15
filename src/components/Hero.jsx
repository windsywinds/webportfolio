import React from 'react'
import background from '../assets/bar1.jpg'

function Hero() {
  return (
    <div>
        <img src={background} className="w-full h-36 md:h-48 object-cover curser-pointer"></img>
        </div>
  )
}

export default Hero