import React from 'react';
import logoFooter from "../../assets/logoFooter.png"

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-4 md:px-8">
      <div className="container mx-auto flex flex-col md:flex-row md:text-left text-center md:justify-between">
        <div className="mb-8 md:mb-0">
          <img src={logoFooter} className='mb-3 md:mx-0 mx-auto' alt="logo footer" />
          <p className="max-w-xs md:mx-0 mx-auto text-white text-sm">
            By Diana Trejo hace énfasis en crear arte a partir de la
            belleza individual. Encontrar el brillo natural distintivo
            de cada persona.
          </p>
        </div>
        
        <div className="mb-8 md:mb-0">
          <h3 className="text-lg font-semibold font-serif mb-4">Servicios</h3>
          <ul className="text-sm space-y-2">
            <li>Extensiones de Pestañas</li>
            <li>Depilacion de Rostro</li>
            <li>Lifting de Pestañas</li>
            <li>Perfilado de Cejas</li>
            <li>Brows Lamination</li>
            <li>Limpieza Facial</li>
            <li>Micropigmentación en cejas y labios</li>
            <li>Curso Diseño y Perfilado de Cejas</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold font-serif mb-4">Contacto</h3>
          <ul className="text-sm space-y-2">
            <li>San Martin 195, Piso 4, Dpto nº1</li>
            <li>Argentina, Neuquén Capital</li>
            <li>+54 299 6214947</li>
            <li>bydianatrejos@gmail.com</li>
            <li>
                <a href="https://www.instagram.com/veronica0cruz?igsh=MWtqdzk2OXhydTJkMQ==">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto mt-12 flex flex-col md:flex-row justify-between items-center text-sm">
        <p>Pagina Creada © 2024 Por Katherine Contreras</p>
        <a href="https://github.com/katherine-j-c-s" target="_blank" rel="noopener noreferrer" className="mt-4 text-[#7A7A7A] md:mt-0">
          Portafolio
        </a>
      </div>
    </footer>
  );
};
