import React from 'react'
import Title from './Title';
import photoshop from '../assets/logos/photoshop.svg';
import lightroom from '../assets/logos/lightroom.svg';
import vscode from '../assets/logos/vscode.svg'
import davinci from '../assets/logos/davinci.png'

export default function Skills() {
  return (
    <div className="pt-9">
            <Title>Tools</Title>
        <div className="flex flex-col md:flex-row items-center justify-center">
            
            <div className="flex grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-9">
            <div className='flex flex-col items-center pl-3 pr-3'>
                    <img src={vscode} width='50px'></img>
                    <p>VSCode</p>
                </div> 
                <div className='flex flex-col items-center pl-3 pr-3'>
                    <img src={photoshop} width='50px'></img>
                    <p>Photoshop</p>
                </div>
                <div className='flex flex-col items-center pl-3 pr-3'>
                    <img src={lightroom} width='50px'></img>
                    <p classname="">Lightroom</p>
                </div>
                <div className='flex flex-col items-center pl-3 pr-3'>
                    <img src={davinci} width='50px'></img>
                    <p>Davinci Resolve</p>
                </div>
                
            </div>
        </div>
        </div>
  )
}
