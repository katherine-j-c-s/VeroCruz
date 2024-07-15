import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AccordionItem } from '../Efectos/AccordionItem/AccordionItem';
import { FloatingElement } from '../Efectos/FloatingElement/FloatingElement';
import { useLocation, useParams } from 'react-router-dom';
import Slider from 'react-slick';
import flecha from "../../assets/link.png"
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick.theme.css';

export const Detalle = () => {
  const [isOpen, setIsOpen] = useState({});
  const [tituloServicio, setTituloServicio] = useState('');
  const location = useLocation();
  const { id } = useParams();
  const searchParams = new URLSearchParams(location.search);
  const title = searchParams.get('title');
  const detalleString = searchParams.get('detalle');
  const Detalle = JSON.parse(decodeURIComponent(detalleString));

  useEffect(() => {
    const servicios = {
      1: 'lifting de pestañas',
      2: 'extensiones de pestañas',
      3: 'pestañas tecnológicas'
    };
    setTituloServicio(servicios[id] || '');
  }, [id]);

  const toggleAccordion = (index) => {
    setIsOpen(prevState => ({...prevState, [index]: !prevState[index]}));
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <div className="container mx-auto max-w-4xl">
      <Slider {...sliderSettings}>
        {Detalle.imagenes.map((img, index) => (
          <div key={index}>
            <img src={img} alt={`Slide ${index + 1}`} className="w-full h-64 object-cover"/>
          </div>
        ))}
      </Slider>
      <div className='px-4'>
        <h1 className="text-3xl font-serif my-4">{title}</h1>
        <div className="flex space-x-2 mb-2">
          <Link to="/blog" className="text-black font-sans font-semibold text-xs">Articulo</Link>
          <Link to="/Nosotros" className="text-black font-sans font-semibold text-xs">Vero Cruz</Link>
        </div>
        <p className="mb-6">{Detalle.desc}</p>

        {/* {Detalle.temas.map((tema, index) => (
          <div key={index} className="mb-4">
            <div 
              className="flex justify-between items-center cursor-pointer" 
              onClick={() => toggleAccordion(index)}
            >
              <h2 className="text-xl font-semibold">{tema.title}</h2>
              <span className={`transform transition-transform duration-300 ${isOpen[index] ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </div>
            {!isOpen[index] && <hr className="my-2"/>}
            {isOpen[index] && (
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
            )}
          </div>
        ))} */}

        {Detalle.temas.map((tema, index) => (
          <AccordionItem
            key={index}
            tema={tema}
            isOpen={isOpen[index]}
            toggleAccordion={() => toggleAccordion(index)}
          />
        ))}

        <div className="my-16 md:flex md:justify-between">
          <div className="md:w-1/2">
            <h2 className="text-5xl font-serif font-bold mb-7">Agendá un turno</h2>
            <p className="mb-8">
              Conocé esta nueva tendencia en {tituloServicio} agendando un turno en By Vero Cruz. 
              Estamos ubicados en San Martin 195, 4° piso, dpto n°1 Neuquén capital
            </p>
          </div>
          <div className="md:w-1/2 md:text-right my-auto">
          <FloatingElement>
            <a href="https://api.whatsapp.com/send?phone=2996214947" className='flex font-mono mx-auto md:text-base text-sm bg-gradient-to-r from-[#EEB4CB] via-[#FDF4F8] to-[#EEB4CB] w-fit px-5 shadow-md py-3 space-x-3 mt-5'>
              <p className='text-[#564757]'>Consultar Gratis</p>
              <img className='w-3 h-4 my-auto' src={flecha} alt="flechaLink" />
            </a>
          </FloatingElement>
          </div>
        </div>
      </div>

      
    </div>
  );
};

