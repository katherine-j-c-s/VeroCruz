import React, { useEffect, useState } from 'react';
import persona from "../../assets/PersonImgPC.png"
import instaImg from "../../assets/instaIconWhite.png"
import firma from "../../assets/firma.png"

export const Info = () => {
    const [mapSize, setMapSize] = useState({ width: '400px', height: '400px' });

    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth <= 768) { // Consideramos móvil si es menor o igual a 768px
          setMapSize({ width: '100%', height: '300px' });
        } else {
          setMapSize({ width: '400px', height: '400px' });
        }
      };
  
      // Llamar a handleResize inmediatamente para establecer el tamaño inicial
      handleResize();
  
      // Agregar el event listener
      window.addEventListener('resize', handleResize);
  
      // Limpiar el event listener
      return () => window.removeEventListener('resize', handleResize);
    }, []);

  return (
    <div className='z-10 mb-10 md:mb-20 mx-auto px-3 justify-around md:py-10 md:pl-32 md:pr-10 flex flex-col md:flex-row relative bg-white w-11/12 md:max-w-4xl'>
        <div className='md:absolute bottom-0 -left-32'>
            <img 
            src={persona} 
            className='md:max-w-72 w-44 md:mx-0 mx-auto'
            alt="Diana Trejo" 
            />
        </div>
        <div className='md:max-w-96 md:my-auto my-3 md:text-center text-left'>
            <h2 className='md:text-base text-sm text-[#564757] font-serif'>Acerca de la Trainer</h2>
            <h1 className='mb-2 text-2xl font-bold text-[#564757] font-serif'>Diana Trejo</h1>
            <p className='text-sm '>
            cejas, micropigmentación, y pestañas. En esta nueva 
            etapa, me encuentro formando a futuras artistas 
            mediante la academia By Diana Trejo, brindándoles 
            todas mis técnicas y conocimientos.
            </p>
            <div className='flex justify-around md:mx-auto mt-5 max-w-32'>
            <img src={firma} alt="Firma" />
            <a 
                href="https://www.instagram.com/veronica0cruz?igsh=MWtqdzk2OXhydTJkMQ==" 
                target="_blank" 
                rel="noopener noreferrer"
                className='h-fit my-auto'
                >
                <div className='bg-[#564757] h-fit w-fit p-2 rounded-full'>
                <img 
                    src={instaImg} 
                    alt="Instagram" 
                    className="w-fit h-fit" 
                />
                </div>
            </a>
            </div>
        </div>
        <div className='md:ml-20'>
            <div >
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3102.650898658021!2d-68.06433222320675!3d-38.95480300011005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x960a33cddae4dbf9%3A0xb8d85fc7b36c8e5c!2zU2FuIE1hcnTDrW4gMTk1IDTCsCBwaXNvLCBkcHRvIG4sIE5ldXF1w6lu!5e0!3m2!1ses!2sar!4v1720635873441!5m2!1ses!2sar" 
            width={mapSize.width}
            height={mapSize.height}
            style={{ border: "0" }} 
            allowfullscreen="" 
            className='md:mx-0 mx-auto'
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
            </iframe>
            </div>
            <div className='text-sm md:ml-0 my-10'>
                <p>San Martín 195, 4° piso, dpto n°1</p>
                <p>Neuquén capital</p>
            </div>
        </div>
    </div>
  );
};

