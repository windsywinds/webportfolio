import React from 'react'

function PortfolioItem({title, imgURL, stack, demoURL, gitURL}) {
  return (
    <div>
    <img 
        src={imgURL}
        alt=""
        className="w-full h-36 md:h-48 object-cover curser-pointer"
    />
    <div className="w-full p-4">
        <h3> {title}</h3>
        <p>{stack.map(item => (
            <span>
                {item}
            </span>
        ))} </p>
    </div>
    </div>
  )
}

export default PortfolioItem