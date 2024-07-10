import React from 'react'
import comillas from "../../../assets/comillas.png"
import imgClienta from "../../../assets/imgclienta.png"
export default function Comentario() {
  return (
    <div className='bg-gradient-to-r overflow-hidden w-full h-fit py-20 from-[#EEB4CB] via-[#F6E2EA] via-[#FDF4F8] via-[#F6E2EA] to-[#EEB4CB]'>
      <div className='max-w-screen-sm mx-auto'>
        <img src={comillas} className='w-5 h-5 mx-auto mb-4' alt="comillas" />
        <p className='text-black font-bold text-xs md:text-sm md:mx-0 mx-2 text-center'>
            Diana es la única a quien confío para cuidar de mi belleza. Ella me hace de
            todo! Manos, cejas, y pestañas. Hace un par de meses me hizo un
            microblading en las cejas que cambió por completo mi mirada. Fue todo muy
            sencillo y el resultado es increíble! Su estudio es hermoso y muy confortable.
        </p>
        <div className='text-center text-xs md:text-sm mt-4'>
            <img src={imgClienta} className='mx-auto my-2' alt="imagen clienta" />
            <p className='font-bold font-mono bg-gradient-to-b from-[#DC82A6] to-[#564757] text-transparent bg-clip-text'>MARIA MORATO</p>
            <p>Buenos Aires</p>
        </div>
      </div>
    </div>
  )
}
