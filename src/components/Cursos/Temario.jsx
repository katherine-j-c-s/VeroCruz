import React, { useState } from 'react';
import { AccordionItem } from "../Efectos/AccordionItem/AccordionItem"
import bgLogo from '../../assets/BackgroundLogo.png'; // Asegúrate de tener esta imagen

export const Temario = ({ temas }) => {
  const [openItem, setOpenItem] = useState(null);

  const toggleAccordion = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <div className="relative py-8 md:py-16 px-4 md:px-8">
      {/* Fondo con gradiente semitransparente */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#DED1C8] to-white/50" />
        <img src={bgLogo} className='absolute w-full md:w-10/12 h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ' alt="fondo de logo" />
        <div className="relative z-10 max-w-4xl mx-auto">
            {/* Sección de temas */}
            <h1 className="text-2xl md:text-5xl font-bold mb-4 md:mb-8">Temario</h1>
            <div className="relative bg-white rounded-lg shadow-lg p-6">
                {/* Lista de temas */}
                <div className="relative z-10">
                    {temas.map((tema, index) => (
                    <AccordionItem
                        key={index}
                        tema={tema}
                        isOpen={openItem === index}
                        toggleAccordion={() => toggleAccordion(index)}
                    />
                    ))}
                </div>
            </div>
      </div>
    </div>
  );
};