import React from 'react'
import flecha from "../../assets/link.png"
import { FloatingElement } from '../Efectos/FloatingElement/FloatingElement'

export default function MasInfo() {
  return (
    <div className='w-full text-center my-10 md:my-44 md:px-0 px-5'>
        <p className='md:text-base text-xs font-serif font-bold text-black'>Estudio Privado en San Martín 195, 4° piso, dpto n°1, Neuquén capital</p>
        <h1 className='md:text-5xl text-[#564757] text-2xl font-serif font-bold my-10'>Para más información, precio, fechas...</h1>
        <FloatingElement>
            <a href="https://api.whatsapp.com/send?phone=2996214947" className='flex font-mono mx-auto md:text-base text-sm bg-gradient-to-r from-[#EEB4CB] via-[#FDF4F8] to-[#EEB4CB] w-fit px-5 shadow-md py-3 space-x-3 mt-5'>
                <p className='text-[#564757] md:text-base text-xs'>Atención Personalizada</p>
                <img className='w-3 h-4 my-auto' src={flecha} alt="flechaLink" />
            </a>
        </FloatingElement>
    </div>
  )
}
