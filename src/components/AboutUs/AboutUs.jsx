import React from 'react'
import fondo from "../../assets/BackgroundLogo.png"
import { Info } from './Info'
import { Local } from './Local'

export const AboutUs = () => {
  return (
    <div className='relative md:pt-32 pt-16'>
      <img 
        className='absolute top-0 w-full h-full'
        src={fondo} 
        alt="fondo" 
      />
      <Info></Info>
      <Local></Local>
    </div>
  )
}
