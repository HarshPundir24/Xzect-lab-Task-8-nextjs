import React, { useEffect } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

const BrandSection = () => {
  useEffect(() => {
    new Swiper('.brandsection .swiper-container', {
      slidesPerView: 5,
      spaceBetween: 30,
      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        767: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
      },
    });
  }, []);

  return (
    <div className="brandsection section-pb pb-16 md:pb-20 lg:pb-[130px]">
      <div className="container mx-auto px-4 sm:px-4 md:px-4 lg:px-4 xl:px-4 xl:max-w-[1200px] lg:max-w-[1024px] md:max-w-[768px] sm:max-w-[640px]">
        <div className="swiper-container swiper-container mx-auto relative overflow-hidden list-none p-0 z-10">
          <div className="swiper-wrapper relative w-full h-full z-10 flex transform transition-transform box-content">
            <div className="swiper-slide">
              <div className="bg-white overflow-hidden relative rounded-2xl p-2">
                <img className="cursor-pointer" src="/image/brand-1.png" alt="brand" />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="bg-white overflow-hidden relative rounded-2xl p-2">
                <img className="cursor-pointer" src="/image/brand-2.png" alt="brand" />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="bg-white overflow-hidden relative rounded-2xl p-2">
                <img className="cursor-pointer" src="/image/brand-3.png" alt="brand" />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="bg-white overflow-hidden relative rounded-2xl p-2">
                <img className="cursor-pointer" src="/image/brand-4.png" alt="brand" />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="bg-white overflow-hidden relative rounded-2xl p-2">
                <img className="cursor-pointer" src="/image/brand-5.png" alt="brand" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandSection;
