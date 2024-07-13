import React, { useEffect } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

const ServiceSection = () => {
  useEffect(() => {
    const swiper = new Swiper('.service-section .swiper-container', {
      slidesPerView: 1,
      loop: true,
      spaceBetween: 30,
      navigation: {
        nextEl: '.service-section_arrows__nextbtn',
        prevEl: '.service-section_arrows__prevbtn',
    },
      breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
      },
    });

    return () => {
      swiper.destroy(true, true);
    };
  }, []);

  return (
    <div className="service-section">
        <div className="container  w-full mx-auto px-4 sm:max-w-[640px] sm:px-4 md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1200px] xl:px-4">
          <div className="service-section_inner relative pb-10 md:pb-16" style={{perspective:'1000px'}}>
            <div className="flex">
              <div className="md:w-1/2 w-4/6">
                <div className="section-title pl-4 md:pl-16 z-99">
                  <h5 className="sub-title mb-[18px] text-sm leading-5 font-medium uppercase md:text-base md:leading-6 text-gray-500">Services we provide</h5>
                  <h2 className="title text-[30px] font-bold leading-[1.2] text-[#1D3557] md:text-[40px] lg:text-[44px] xl:text-[60px]">
                    <span>Best Quality </span><span className="relative">Service <span className="text-shape absolute left-0 z-[-1] flex w-full bg-[#b3d9db] md:h-[18px] md:bottom-2.5 h-[8px] sm:h-[14px] bottom-[2px] sm:bottom-1 lg:bottom-2"></span></span>
                    <span>for your Company.</span></h2>
                </div>
              </div>
            </div>
            <span className="service-section__bg absolute bottom-[-0.5rem] left-0 z-[-10] h-[85.5%] w-full rounded-[2.375rem] bg-[#e1f3f4]"></span>
            <div className="mt-16 mx-5 md:mx-10 2xl:mx-auto">
              <div className="swiper-container swiper 2xl:ml-outcontainer 2xl:mr-outcontainer swiper-container-initialized swiper-container-horizontal">
                <div className="swiper-wrapper" style={{transitionduration: '0ms', transform: 'translate3d(-1130px, 0px, 0px)'}}>
                  <div className=" swiper-slide">
                    <div className="flex flex-col rounded-[10px] bg-white shadow-box py-[35px] px-[30px]">
                      <div><img className="inline-block max-w-full h-auto" src="image/icon-5.png" alt="Testimonial"/></div>
                      <div className="mt-5">
                        <a href="/service/1" className="font-semibold text-2xl text-primary transition-all hover:text-secondary">Market Research</a> <span className="mt-4 block">Obtain pain of because is pain, but because you nally circumstances</span>
                      </div>
                    </div>
                  </div>
                  <div className="md:mt-12 swiper-slide">
                    <div className="flex flex-col rounded-[10px] bg-white shadow-box py-[35px] px-[30px]">
                      <div><img className="inline-block max-w-full h-auto" src="image/icon-6.png" alt="Testimonial"/></div>
                      <div className="mt-5">
                        <a href="/service/2" className="font-semibold text-2xl text-primary transition-all hover:text-secondary">SEO Optimization</a> <span className="mt-4 block">Obtain pain of because is pain, but because you nally circumstances</span>
                      </div>
                    </div>
                  </div>
                  <div className=" swiper-slide">
                    <div className="flex flex-col rounded-[10px] bg-white shadow-box py-[35px] px-[30px]">
                      <div><img className="inline-block max-w-full h-auto" src="image/icon-7.png" alt="Testimonial"/></div>
                      <div className="mt-5">
                        <a href="/service/3" className="font-semibold text-2xl text-primary transition-all hover:text-secondary">Amazing Strategy</a> <span className="mt-4 block">Obtain pain of because is pain, but because you nally circumstances</span>
                      </div>
                    </div>
                  </div>
                  <div className="md:mt-12 swiper-slide">
                    <div className="flex flex-col rounded-[10px] bg-white shadow-box py-[35px] px-[30px]">
                      <div><img className="inline-block max-w-full h-auto" src="image/icon-8.png" alt="Testimonial"/></div>
                      <div className="mt-5">
                        <a href="/service/4" className="font-semibold text-2xl text-primary transition-all hover:text-[#C25251]">Financial Planning</a> <span className="mt-4 block">Obtain pain of because is pain, but because you nally circumstances</span>
                      </div>
                    </div>
                  </div>
                  <div className=" swiper-slide">
                    <div className="flex flex-col rounded-[10px] bg-white shadow-box py-[35px] px-[30px]">
                      <div><img className="inline-block max-w-full h-auto" src="image/icon-9.png" alt="Testimonial"/></div>
                      <div className="mt-5">
                        <a href="/service/5" className="font-semibold text-2xl text-primary transition-all hover:text-secondary">PR & Marketing</a> <span className="mt-4 block">Obtain pain of because is pain, but because you nally circumstances</span>
                      </div>
                    </div>
                  </div>
                  <div className="md:mt-12 swiper-slide">
                    <div className="flex flex-col rounded-[10px] bg-white shadow-box py-[35px] px-[30px]">
                      <div><img className="inline-block max-w-full h-auto" src="image/icon-10.png" alt="Testimonial"/></div>
                      <div className="mt-5">
                        <a href="/service/6" className="font-semibold text-2xl text-primary transition-all hover:text-secondary">Project Analysis</a> <span className="mt-4 block">Obtain pain of because is pain, but because you nally circumstances</span>
                      </div>
                    </div>
                  </div>
                </div>
                <span className="swiper-notification"></span>
              </div>
              <div className="service-section_arrows absolute top-[25%] right-[2.5rem] z-[999] flex w-full justify-end transform transition-all duration-150 ease-[cubic-bezier(.4,0,.2,1)]">
                <div className="service-section_arrows__prevbtn mr-2 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white text-[#1d3557] hover:bg-[#1d3557] hover:text-white" tabIndex="0" role="button" aria-label="Previous slide">❮</div>
                <div className="service-section_arrows__nextbtn ml-2 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white text-[#1d3557] text-center hover:bg-[#1d3557] hover:text-white" tabIndex="0" role="button" aria-label="Next slide">❯</div>
              </div>
            </div>
            <div className="service-section_inner__shape  absolute top-[3.75rem] right-0 z-[-999] opacity-60 xl:right-[-25px] xl:top-[72px]" style={{transitionproperty: 'transform', transitionduration: '1000ms', transformorigin: 'center center', transitiontimingfunction: 'cubic-bezier(0.23, 1, 0.32, 1)'}}>
                <img className="inline-block max-w-full h-auto layer" src="image/shape-1.png" alt="shape"/>
            </div>
          </div>
        </div>
    </div>
  );
};

export default ServiceSection;
