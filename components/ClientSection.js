import React, { useEffect } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

const ClientSection = () => {
  useEffect(() => {
    const swiper = new Swiper('.clientsection .swiper-container', {
      loop: true,
      navigation: {
        nextEl: '.clientsection_arrows__nextbtn',
        prevEl: '.clientsection_arrows__prevbtn',
      },
      spaceBetween: 50,
      slidesPerView: 1,
    });

    return () => {
      swiper.destroy(true, true);
    };
  }, []);

  return (
    <div className="clientsection section-p pt-16 pb-16 md:pt-20 md:pb-20 lg:pt-32.5 lg:pb-32.5">
      <div className="container w-full mx-auto px-4 sm:max-w-[640px] sm:px-4 md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1200px] xl:px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" style={{ perspective: '1000px' }}>
          <div className="clientsection_content pr-[70px]">
            <div className="section-title z-99">
              <h5 className="sub-title mb-[18px] text-sm leading-5 font-medium uppercase md:text-base md:leading-6 text-gray-500"> Clients Review </h5>
              <h2 className="title font-metropolis text-[30px] font-bold leading-[1.2] text-[#1D3557] md:text-[40px] lg:text-[44px] xl:text-[60px]">
                <span>Our Happy </span>
                <span className="relative">Clients
                  <span className="text-shape absolute left-0 z-[-1] flex w-full bg-[#b3d9db] md:h-[18px] md:bottom-2.5 h-[8px] sm:h-[14px] bottom-[2px] sm:bottom-1 lg:bottom-2"></span>
                </span>
                <span> says about us. </span>
              </h2>
              <p className="mt-3 sm:mt-5 lg:mt-7 text-gray-500">Best is the most porro quisquam est, qui dolorem are porro quis quam est, qui dolorem ipsum quia dolor sit amet, consectetur</p>
            </div>
            <div className="swiper-container swiper mx-auto relative overflow-hidden list-none p-0 z-10 mt-8 swiper-container-initialized swiper-container-horizontal">
              <div className="swiper-wrapper transform-gpu relative w-full h-full z-10 flex transition-transform box-content">
                <div className="swiper-slide swiper-slide-active flex-shrink-0 w-full h-full relative transition-transform">
                  <div className="flex flex-col">
                    <p className="clientsection_content__blockquote mb-3 text-lg leading-7 font-medium text-[#457B9D]">
                      <img src="image/quote.png" alt="Quote" className="mr-2 mb-2 align-bottom max-w-full h-auto" />
                      Most of the most porro quisquam  est, qui dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia some more than quick support with expert team
                    </p>
                    <div className="flex items-center">
                      <span className="mr-2 text-lg leading-7 font-semibold text-[#C25251]">David Layed |</span>
                      <span className="clientsection_content__designation">CEO &amp; Founder</span>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide swiper-slide-next flex-shrink-0 w-full h-full relative transition-transform">
                  <div className="flex flex-col">
                    <p className="clientsection_content__blockquote mb-3 text-lg leading-7 font-medium text-[#457B9D]">
                      <img src="image/quote.png" alt="Quote" className="mr-2 mb-2 align-bottom max-w-full h-auto" />
                      Most of the most porro quisquam est, qui dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia some more than quick support with expert team
                    </p>
                    <div className="flex items-center">
                      <span className="mr-2 text-lg leading-7 font-semibold text-[#C25251]">Jane Hamm |</span>
                      <span className="clientsection_content__designation">Managing Director, Xenmax</span>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide flex-shrink-0 w-full h-full relative transition-transform">
                  <div className="flex flex-col">
                    <p className="clientsection_content__blockquote mb-3 text-lg leading-7 font-medium text-[#457B9D]">
                      <img src="image/quote.png" alt="Quote" className="mr-2 mb-2 align-bottom max-w-full h-auto" />
                      Most of the most porro quisquam est, qui dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia some more than quick support with expert team
                    </p>
                    <div className="flex items-center">
                      <span className="mr-2 text-lg leading-7 font-semibold text-[#C25251]">Catherin Bette |</span>
                      <span className="clientsection_content__designation">Plannig Engineer</span>
                    </div>
                  </div>
                </div>
              </div>
              <span className="swiper-notification  absolute left-0 top-0 pointer-events-none opacity-0 z-[-1000]" aria-live="assertive" aria-atomic="true"></span>
            </div>
            <div className="clientsection_arrows z-[999] mt-4 flex w-full transform transition-all duration-150 ease-custom-ease justify-start">
              <div className="clientsection_arrows__prevbtn swipper-arrow swiper-button-disabled font-medium" tabIndex="-1" role="button" aria-label="Previous slide" aria-disabled="true">
                <span className="cursor-pointer font-semibold text-gray-600">Prev /</span>
              </div>
              <div className="clientsection_arrows__nextbtn swipper-arrow" tabIndex="0" role="button" aria-label="Next slide" aria-disabled="false">
                <span className="cursor-pointer font-semibold text-gray-600">/ Next</span>
              </div>
            </div>
          </div>
          <div className="clientsection_images relative w-full h-[400px] sm:h-[500px] sm:mt-[50px] lg:mt-0">
            <div className="clientsection__images-1 absolute top-0 left-2.5 z-20 inline-block w-[180px] rounded-full bg-gray-100 md:w-[288px]">
              <img className="inline-block max-w-full h-auto rounded-full" src="image/client-1.png" alt="Client's" />
              <span className="absolute top-2 left-[-10px] z-[-30] w-full h-full rounded-full border border-[#b3d9db]"></span>
            </div>
            <div className="clientsection__images-2 absolute top-[30%] right-0 left-auto w-[160px] sm:w-[240px]">
              <img className="inline-block max-w-full h-auto rounded-full" src="image/client-2.png" alt="Client's" />
            </div>
            <div className="clientsection__images-3 absolute bottom-0 left-[19%] w-[130px] rounded-full sm:w-[188px]">
              <img className="inline-block max-w-full h-auto rounded-full" src="image/client-3.png" alt="Client's" />
            </div>
            <div className="layer clientsection__shape-1 absolute top-[50px] right-[30%] left-auto h-[22px] w-[22px] rounded-full bg-blue-900 sm:top-[150px] sm:right-[37%]" style={{ transitionProperty: 'transform', transitionDuration: '1000ms', transformOrigin: 'center center', transitionTimingFunction: 'cubic-bezier(0.23, 1, 0.32, 1)' }}></div>
            <div className="layer clientsection__shape-2 absolute bottom-[42%] left-[25px] top-auto h-[22px] w-[22px] rounded-full bg-[#B3D9DB] sm:bottom-[22%]" style={{ transitionProperty: 'transform', transitionDuration: '1000ms', transformOrigin: 'center center', transitionTimingFunction: 'cubic-bezier(0.23, 1, 0.32, 1)' }}></div>
            <div className="layer clientsection__shape-3 absolute bottom-0 right-[22%] top-auto left-auto h-[60px] w-[60px] rounded-full bg-blue-900" style={{ transitionProperty: 'transform', transitionDuration: '1000ms', transformOrigin: 'center center', transitionTimingFunction: 'cubic-bezier(0.23, 1, 0.32, 1)' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientSection;
