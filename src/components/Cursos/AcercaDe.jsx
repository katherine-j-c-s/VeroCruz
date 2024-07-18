import React from 'react'
import PersonaImg from "../../assets/PersonaCursos.png"
import instaImg from "../../assets/instaIconWhite.png"
import Firma from "../../assets/firma.png" 
export default function AcercaDe() {
  return (
    <div className='flex md:flex-row flex-col max-w-7xl justify-center md:justify-around mx-auto my-8 md:my-32'>
        <div className='w-fit md:mx-0 mx-auto'>
                <img src={PersonaImg} className='md:w-96 w-44 md:mx-0' alt="foto de la trainer" />
        </div>
        <div className='max-w-xl md:text-left md:mt-0 mt-5 text-center'>
            <h3 className='md:text-xl text-xs font-serif font-bold'>Acerca de la Trainer</h3>
            <h1 className='md:text-5xl text-2xl font-serif font-bold my-4 md:my-8'>Vero Cruz</h1>
            <p className='md:w-fit w-10/12 md:mx-0 mx-auto md:text-base text-xs'>
                Hace más de 9 años que me dedico al maravilloso mundo de la belleza, especializándome en todos los
                servicios relacionados a la belleza facial de las personas. Particularmente, cejas, micropigmentación, y
                pestañas. En esta nueva etapa, me encuentro formando a futuras artistas mediante la academia By Diana
                Trejo, brindándoles todas mis técnicas y conocimientos.
            </p>
            <img src={Firma} className='my-8 md:mx-0 mx-auto' alt="firma digital" />
            <a 
                href="https://www.instagram.com/veronica0cruz?igsh=MWtqdzk2OXhydTJkMQ==" 
                target="_blank" 
                rel="noopener noreferrer"
                className='h-fit my-auto'
                >
                <div className='bg-[#564757] md:mx-0 mx-auto h-fit w-fit p-2 rounded-full'>
                <img 
                    src={instaImg} 
                    alt="Instagram" 
                    className="w-fit h-fit" 
                />
                </div>
            </a>
        </div>
    </div>
  )
}
