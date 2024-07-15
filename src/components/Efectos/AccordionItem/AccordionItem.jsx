import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const AccordionItem = ({ tema, isOpen, toggleAccordion }) => {
  return (
    <div className="mb-4">
      <div 
        className="flex justify-between items-center cursor-pointer" 
        onClick={toggleAccordion}
      >
        <h2 className="text-xl font-semibold">{tema.title}</h2>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          ▼
        </motion.span>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mt-2 transition-all duration-300 ease-in-out">
              {tema.desc && tema.desc.map((parrafo, i) => (
                <p key={i} className="mb-2">{parrafo}</p>
              ))}
              {tema.listado && (
                <ul className="list-disc text-[#7A7A7A] pl-5 mb-2">
                  {tema.listado.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
              {tema.pasos && (
                <>
                  <h3 className="font-semibold text-[#7A7A7A] mt-2 mb-1">Pasos:</h3>
                  <ol className="list-decimal text-[#7A7A7A] pl-5 mb-2">
                    {tema.pasos.map((paso, i) => (
                      <li key={i}>{paso}</li>
                    ))}
                  </ol>
                </>
              )}
              {tema.imagenes && (
                <>
                  <div className='flex w-full mt-4 justify-around flex-wrap'>
                  {tema.imagenes.map((imagen, i) => (
                    <div key={i} className="mb-2">
                      <img src={imagen.url} alt={imagen.title} className='max-w-44 max-h-44'/>
                      {imagen.title && <p className="font-semibold">{imagen.title}</p>}
                      {imagen.desc && <p className='max-w-44 text-xs'>{imagen.desc}</p>}
                    </div>
                  ))}
                  </div>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {!isOpen && <hr className="my-2"/>}
    </div>
  );
};
