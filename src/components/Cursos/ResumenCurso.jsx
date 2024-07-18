import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const ResumenCurso = ({ curso }) => {
    const { subTitle, imagenes, resumen, objetivos, metodo, instrumentos } = curso;

    const highlightText = (text, boldPhrases) => {
        let highlightedText = text;
        boldPhrases.forEach(phrase => {
        highlightedText = highlightedText.replace(
            phrase,
            `<strong>${phrase}</strong>`
        );
        });
        return <span dangerouslySetInnerHTML={{ __html: highlightedText }} />;
    };

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false
    };  

    const ImageSection = () => (
        <div className="w-full h-fit md:max-w-xs">
            <Slider {...sliderSettings}>
            {imagenes.map((imagen, index) => (
                <div className='my-10 h-full' key={index}>
                    <img src={imagen} alt={`${subTitle} - ${index + 1}`} className="w-full md:h-96 h-64 object-cover" />
                </div>
            ))}
            </Slider>
        </div>
    );

    return (
        <div className="flex flex-wrap py-8 w-full px-4 bg-white">
            <div className='flex w-full md:flex-row flex-col md:justify-around md:flex-wrap'>
                <div className="md:max-w-xs h-fit md:pr-8 ">
                    <h2 className="text-[#EEB4CB] uppercase text-xs md:text-sm font-serif font-bold mb-2">{subTitle}</h2>
                    <h1 className="md:text-4xl text-xl font-bold mb-6">Resumen del curso</h1>
                    <p className="mb-6 md:text-base text-xs">{resumen}</p>
                    <h3 className="md:text-2xl text-xl font-bold mb-4">Objetivos del curso</h3>
                    {objetivos.map((objetivo, index) => (
                        <p key={index} className="mb-2 md:text-base text-xs">
                            • {objetivo}
                        </p>
                    ))}
                </div>
                <ImageSection />
                <div className="md:max-w-xs z-10 md:mt-0 mt-10">
                    <h3 className="md:text-2xl text-xl font-bold mb-4">Método</h3>
                    {metodo.texto.map((parrafo, index) => (
                        <p key={index} className="mb-4 md:text-base text-xs">
                            {highlightText(parrafo, metodo.bold)}
                        </p>
                    ))}
                </div>
            </div>
            <div className="flex justify-around w-full mt-8">
                {instrumentos.map((instrumento, index) => (
                    <div key={index} className="text-center">
                    <img
                        src={instrumento.icon}
                        alt={instrumento.text}
                        className="md:w-16 md:h-16 w-10 h-10 mx-auto mb-2"
                    />
                    <p className='md:text-base text-xs'>{instrumento.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

