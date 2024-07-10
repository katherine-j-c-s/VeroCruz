import React from 'react';
import flecha from "../../../assets/link.png"
import { FloatingElement } from '../../Efectos/FloatingElement/FloatingElement';

const ConsultaGratis = () => {
  return (
    <div className="bg-white md:my-0 my-10 md:min-h-fit py-32 flex items-center justify-center p-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-2xl md:text-5xl font-bold mb-4 bg-gradient-to-b from-[#DC82A6] via-[#CCCCCC] to-[#564757] text-transparent bg-clip-text">
          ¿Tienes alguna duda de qué servicio es mejor para ti?
        </h1>
        <p className="text-gray-600 text-xs md:text-base mb-8">
          Envíame tu consulta y te brindaré asesoramiento sin costo alguno.
        </p>
        <FloatingElement>
          <a href="https://api.whatsapp.com/send?phone=2996214947" className='flex font-mono mx-auto md:text-base text-sm bg-gradient-to-r from-[#EEB4CB] via-[#FDF4F8] to-[#EEB4CB] w-fit px-5 shadow-md py-3 space-x-3 mt-5'>
            <p className='text-[#564757]'>Consultar Gratis</p>
            <img className='w-3 h-4 my-auto' src={flecha} alt="flechaLink" />
          </a>
        </FloatingElement>
      </div>
    </div>
  );
};

export default ConsultaGratis;