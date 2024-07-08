import React from 'react'
import flecha from "../../../assets/link.png"
import ImgPersonaPC from "../../../assets/PersonImgPC.png"

export default function Inicio() {
  return (
    <div className='bg-gradient-to-r overflow-hidden w-full h-screen from-[#EEB4CB] via-[#F6E2EA] via-[#FDF4F8] via-[#F6E2EA] to-[#EEB4CB]'>
      <div className='flex flex-col md:flex-row justify-center md:px-0 px-4 md:pt-20'>
        <div className='md:w-3/12 md:min-w-96 w-full text-center mt-20'>
          <h1 className=' font-serif font-bold text-xl md:text-4xl mb-1 md:mb-4'>Belleza, Cosmetica</h1>
          <h1 className=' font-serif font-bold text-xl md:text-4xl mb-5 md:mb-7'>y cuidado personal</h1>
          <p className='md:text-base text-xs'>
            Estamos para <strong>mimarte, escucharte y trabajar con excelencia</strong> , dando lo mejor de nuestra parte. Porque trabajar es una bendición y al elegirnos nos bendecís...
            Lo hacemos felices porque nuestro trabajo nos apasiona.
          </p>
          <div className='flex md:justify-normal justify-center md:space-x-3 space-x-1 md:text-base text-xs text-slate-700 my-4'>
            <p>🕒 Tiempo de respuesta promedio:</p>
            <p>muy rápido</p>
          </div>
          <a href="https://api.whatsapp.com/send?phone=2996214947" className='flex font-thin md:mx-0 mx-auto mt-10 md:text-base text-sm bg-white w-fit md:hover:font-normal space-x-3 py-2 px-4 transition-all ease-in-out shadow-md md:hover:shadow-md'>
            <p className='text-indigo-950'>Agendar Turno</p>
            <img className='w-3 h-4 my-auto' src={flecha} alt="flechaLink" />
          </a>
        </div>
        <div className='md:w-3/12 flex justify-end'>
          <img src={ImgPersonaPC} alt="persona" />
        </div>
      </div>
    </div>
  )
}
