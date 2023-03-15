import React from 'react'

function PortfolioItem({title, imgURL, slug, stack, demoURL, gitURL}) {
  return (
    <div className="border-2 border-stone-900 rounded-md overflow-hidden" >
    <img 
        src={imgURL}
        alt=""
        className="w-full h-36 md:h-48 object-cover curser-pointer"
    />

    <div className="w-full p-4">
        <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold" > {title}</h3>
        <h3 className="text-lg md:text-sm mb-2 md:mb-3" > {slug}</h3>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm" >{stack.map(item => (
            <span className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 rounded-md" >
                {item}
            </span>
        ))} </p>
        <div className="flex flex-wrap gap-2 pt-2 flex-row items-center justify-start text-xs md:text-sm">
            <a className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 rounded-md bg-gradient-to-r from-orange-600 to-pink-600 drop-shadow-md hover:stroke-white" href={demoURL} >Demo</a>
            <a className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 rounded-md bg-gradient-to-r from-orange-600 to-pink-600 drop-shadow-md hover:stroke-white" href={gitURL}>GitHub</a>
            </div>
    </div>
    </div>
  )
}

export default PortfolioItem