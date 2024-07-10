import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import flecha from "../../../assets/link.png"

const CardServicio = ({ title, desc, tiempo, imagenes, position }) => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };  

  const ContentSection = () => (
    <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
      <h2 className="text-1xl md:text-3xl font-bold mb-4">{title}</h2>
      <p className="text-xs md:text-base mb-4">{desc}</p>
      <p className="font-semibold text-xs md:text-base bg-gradient-to-b from-[#DC82A6] via-[#e1b6c7] to-[#dcccde] text-transparent bg-clip-text">{tiempo}</p>
      <a href="https://api.whatsapp.com/send?phone=2996214947" className='flex font-mono md:mx-0 md:text-base text-sm hover:bg-gradient-to-r hover:from-[#EEB4CB] hover:via-[#FDF4F8] hover:to-[#EEB4CB] transition-all ease-in-out w-fit hover:px-5 hover:shadow-md hover:py-3 space-x-3 mt-5'>
        <p className='text-[#564757]'>Agendar Turno</p>
        <img className='w-3 h-4 my-auto' src={flecha} alt="flechaLink" />
      </a>
    </div>
  );

  const ImageSection = () => (
    <div className="w-full md:w-1/2">
      <Slider {...sliderSettings}>
        {imagenes.map((imagen, index) => (
          <div key={index}>
            <img src={imagen} alt={`${title} - ${index + 1}`} className="w-full md:h-96 h-64 object-cover" />
          </div>
        ))}
      </Slider>
    </div>
  );

  return (
    <section className="overflow-hidden md:my-32 my-10">
      <div className={`flex flex-col md:flex-row ${position === 'left' ? 'md:flex-row-reverse' : ''}`}>
        <ImageSection />
        <ContentSection />
      </div>
    </section>
  );
};

export default CardServicio;