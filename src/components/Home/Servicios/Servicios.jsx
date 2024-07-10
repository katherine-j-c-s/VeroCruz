import React from 'react'
import { FadeInSection } from '../../Efectos/FadeInSection/FadeInSection'
import CardServicio from './CardServicio'
import { DataServicios } from './DataServicios'

export default function Servicios() {
  return (
    <div className='md:p-0 px-5'>
        <div className='w-fil m-auto text-center mt-10'>
            <p className='font-serif text-xs md:text-md text-black'>conoce mis</p>
            <h1 className='font-serif text-3xl md:text-5xl'>Servicios</h1>
            <p className='max-w-96 mx-auto mt-6 text-xs md:text-base'>
                Son la fusión entre lo natural y el arte para realzar la belleza auténtica y
                expresiva, diseñados para satisfacer todas tus necesidades estéticas con
                elegancia y precisión.
            </p>
        </div>
        <div className="container mx-auto">
        {DataServicios.map((servicio, index) => (
            <FadeInSection>
                <CardServicio
                    key={index}
                    title={servicio.title}
                    desc={servicio.desc}
                    tiempo={servicio.tiempo}
                    imagenes={servicio.imagenes}
                    position={servicio.position}
                />
            </FadeInSection>
            ))}
        </div>
    </div>
  )
}
