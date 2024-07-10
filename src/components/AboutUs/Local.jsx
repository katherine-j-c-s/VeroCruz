import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import image1 from "../../assets/Local/image1.png"
import image2 from "../../assets/Local/image2.png"
import image3 from "../../assets/Local/image3.png"

export const Local = () => {
  const images = [image1,image2,image3,image1,image2,image3];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#DED1C880] to-[#FFFFFF80] py-5 md:py-20">
      <h1 className="text-xl md:text-5xl font-bold font-serif text-[#564757] text-center mb-2 md:mb-5">
        Nuestro Local
      </h1>
      <div className="w-24 md:h-1 h-0.5 bg-[#DC82A6] mx-auto mb-10 md:mb-20"></div>

      <div className="max-w-6xl mx-auto">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="mySwiper"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img src={img} alt={`Local ${index + 1}`} className="w-full h-xl object-cover" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

