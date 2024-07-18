import React from 'react'
import backgroundIMG from "../../../assets/Servicios/Background.png"
import img from "../../../assets/Servicios/otrosServicios.jpg"
import flecha from "../../../assets/link.png"

export default function OtrosServicios() {
    const servicios = [
        { 
            numero: '01', 
            titulo: 'Perfilado de cejas', 
            descripcion: 'Se realiza mediante tres técnicas: cera, pinza, o hilo.'
        },
        { 
            numero: '02', 
            titulo: 'Depilación de rostro', 
            descripcion: 'Manicura tradicional con esmaltado semipermanente o kapping.'
        },
        { 
            numero: '03', 
            titulo: 'Micropigmentación en Cejas', 
            descripcion: 'Maquillaje semipermanente para correguir el color de tus cejas.'
        }
    ];
  return (
    <div className='relative flex md:flex-wrap md:flex-row flex-col md:justify-around'>
        <img className='absolute right-0 md:w-fit w-full h-full' src={backgroundIMG} alt="bg" />
        <div className='md:w-fit w-full text-left md:mt-0 mt-10 md:text-left z-10'>
            <div className='flex md:flex-col space-x-2 justify-center md:space-x-0 flex-row'>
                <h1 className='font-serif text-xl md:text-5xl'>Más</h1>
                <h1 className='font-serif text-xl md:text-5xl'>Servicios</h1>
            </div>
            <p className='md:max-w-96 text-xs md:text-sm md:mx-0 mx-3 text-slate-600 mt-6 '>
                Todo en un solo lugar con dedicación
                completamente personalizada y ajustada a
                tus necesidades. Conoce más de los servicios
                en By Diana Trejo contactándote con el
                siguiente botón:
            </p>
            <a href="https://api.whatsapp.com/send?phone=2996214947" className='flex font-mono md:mx-0 md:text-base text-sm bg-gradient-to-r from-[#EEB4CB] via-[#FDF4F8] to-[#EEB4CB] transition-all ease-in-out w-fit px-5 hover:shadow-md py-3 space-x-3 ml-3  mt-5'>
                <p className='text-[#564757]'>Agendar Turno</p>
                <img className='w-3 h-4 my-auto' src={flecha} alt="flechaLink" />
            </a>
        </div>
        <img className='md:max-w-96 md:w-3/12 md:max-h-fit md:h-5/6 m-10 md:mx-10 z-10 mx-2 rounded-xl' src={img} alt="imagen otros servicios" />
        <div className="md:max-w-fit w-full container z-10 mx-0 md:py-12">
            <div className="space-y-8">
                {servicios.map((servicio, index) => (
                <div key={index} className="flex md:mx-0 mx-3 flex-col space-y-2">
                    <div className="text-red-300 text-xs md:text-sm">{servicio.numero}</div>
                    <h3 className="text-ms md:text-xl font-bold bg-gradient-to-b from-[#DC82A6] via-[#e1b6c7] to-[#dcccde] text-transparent bg-clip-text">{servicio.titulo}</h3>
                    <div className='max-w-96 w-2/3 h-0.5 bg-gradient-to-b from-[#DC82A6] to-[#dcccde]'></div>
                    <p className="text-gray-600 text-xs md:text-sm">{servicio.descripcion}</p>
                </div>
                ))}
            </div>
        </div>
    </div>
  )
}
