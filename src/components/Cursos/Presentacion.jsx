import React from 'react'
import flecha from "../../assets/link.png"
import background from "../../assets/BackgroundLogo.png"
import { FloatingElement } from '../Efectos/FloatingElement/FloatingElement'

export default function Presentacion({title}) {
  return (
    <div className='relative w-full flex h-screen'>
        <img className='absolute w-full h-screen' src={background} alt="background logo" />
        <div className='mx-auto my-auto text-center'>
            <p className='md:text-xl text-xs font-serif text-black md:font-bold'>Curso Personalizado Intensivo</p>
            <h1 className='md:text-7xl text-4xl font-serif md:max-w-4xl md:mx-0 mx-10 text-black my-10'>{title}</h1>
            <FloatingElement>
                <a href="https://api.whatsapp.com/send?phone=2996214947" className='flex font-mono mx-auto md:text-base text-sm bg-gradient-to-r from-[#EEB4CB] via-[#FDF4F8] to-[#EEB4CB] w-fit px-5 shadow-md py-3 space-x-3 mt-5'>
                    <p className='text-[#564757] md:text-base text-xs'>Más info, precios y fechas</p>
                    <img className='w-3 h-4 my-auto' src={flecha} alt="flechaLink" />
                </a>
            </FloatingElement>
        </div>
        
    </div>
  )
}
