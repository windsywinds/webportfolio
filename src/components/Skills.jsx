import React from 'react'
import Title from './Title';
import photoshop from '../assets/photoshop.svg';
import lightroom from '../assets/lightroom.svg';
import vscode from '../assets/vscode.svg'
import davinci from '../assets/davinci.png'

export default function Skills() {
  return (
    <div className="pt-9">
            <Title>Skills & Tools</Title>
        <div className="flex flex-col md:flex-row items-center justify-center">
            
            <div className="flex grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-9">
            <div className='flex flex-col items-center'>
                    <img src={vscode} width='100px'></img>
                    <p>VSCode</p>
                </div> 
                <div className='flex flex-col items-center'>
                    <img src={photoshop} width='100px'></img>
                    <p>Photoshop</p>
                </div>
                <div className='flex flex-col items-center'>
                    <img src={lightroom} width='100px'></img>
                    <p classname="">Lightroom</p>
                </div>
                <div className='flex flex-col items-center'>
                    <img src={davinci} width='100px'></img>
                    <p>Davinci Resolve</p>
                </div>
                
            </div>
        </div>
        </div>
  )
}
