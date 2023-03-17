import React from 'react'

function PortfolioItem({title, imgURL, imgALT, slug, stack, demoURL, gitURL}) {
  return (
    <div className="border-2 border-slate-500 rounded-md overflow-hidden" >
    <img 
        src={imgURL}
        alt={imgALT}
        className="w-full h-36 md:h-48 object-cover curser-pointer"
    />

    <div className="w-full p-4">
        <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold" > {title}</h3>
        <h3 className="text-lg md:text-sm mb-2 md:mb-3" > {slug}</h3>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm" >{stack?.map(item => (
            <span className="inline-block px-2 py-1 font-semibold border-2 border-slate-500 rounded-md" >
                {item}
            </span>
        ))} </p>
        <div className="flex flex-wrap gap-2 pt-2 flex-row items-center justify-start text-xs md:text-sm">
            <a className="inline-block px-2 py-1 font-semibold border-2 border-slate-800 rounded-md bg-gradient-to-r from-indigo-400 to-pink-500 drop-shadow-md hover:stroke-white" target="blank" href={demoURL}>Demo</a>
            <a className="inline-block px-2 py-1 font-semibold border-2 border-slate-800 rounded-md bg-gradient-to-r from-pink-500 to-indigo-400 drop-shadow-md hover:stroke-white" target="blank" href={gitURL}>GitHub</a>
            </div>
    </div>
    </div>
  )
}

export default PortfolioItem