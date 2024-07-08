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
    <div className='relative flex justify-around'>
        <img className='absolute right-0' src={backgroundIMG} alt="bg" />
        <div className='w-fit'>
            <div className='flex md:flex-col flex-row'>
                <h1 className='font-serif text-3xl md:text-5xl'>Más</h1>
                <h1 className='font-serif text-3xl md:text-5xl'>Servicios</h1>
            </div>
            <p className='max-w-96 text-xs md:text-base mt-6 '>
                Todo en un solo lugar con dedicación
                completamente personalizada y ajustada a
                tus necesidades. Conoce más de los servicios
                en By Diana Trejo contactándote con el
                siguiente botón:
            </p>
            <a href="https://api.whatsapp.com/send?phone=2996214947" className='flex font-mono md:mx-0 md:text-base text-sm bg-gradient-to-r from-[#EEB4CB] via-[#FDF4F8] to-[#EEB4CB] transition-all ease-in-out w-fit px-5 hover:shadow-md py-3 space-x-3 mt-5'>
                <p className='text-indigo-950'>Agendar Turno</p>
                <img className='w-3 h-4 my-auto' src={flecha} alt="flechaLink" />
            </a>
        </div>
        <img className='w-3/12  z-10 rounded-xl' src={img} alt="imagen otros servicios" />
        <div className="w-fit container z-10 mx-0 py-12">
            <div className="space-y-8">
                {servicios.map((servicio, index) => (
                <div key={index} className="flex flex-col space-y-2">
                    <div className="text-red-300 text-sm">{servicio.numero}</div>
                    <h3 className="text-xl font-bold text-indigo-950">{servicio.titulo}</h3>
                    <div className='w-96 h-0.5 bg-red-300'></div>
                    <p className="text-gray-600">{servicio.descripcion}</p>
                </div>
                ))}
            </div>
        </div>
    </div>
  )
}
