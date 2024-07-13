import { useEffect } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

const HeroSlider = () => {
  useEffect(() => {
    const swiper = new Swiper('.swiper-container', {
      loop: true,
      navigation: {
        nextEl: '.hero-slider_arrows__nextbtn',
        prevEl: '.hero-slider_arrows__prevbtn',
      },
      effect: 'slide',
      slidesPerView: 1,
      spaceBetween: 30,
    });

    return () => {
    };
  }, []);

  return (
    <section className="hero-slider group relative pt-[3.75rem] sm:pt-[7rem] md:pt-[8rem] bg-gradient-to-b from-[#f0fff4] to-[#fff]">
      <div className="container overflow-hidden w-full mx-auto px-4 sm:max-w-[640px] sm:px-4 md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1200px] xl:px-4">
        <div className="swiper-container lg:h-[51.563rem]">
          <div className="swiper-wrapper flex">
            <div className="flex swiper-slide">
              <div className="hero-slider_content flex flex-col bg-cover pt-12 md:pt-14 lg:flex-row lg:items-center">
                <div className="slider-content flex-shrink-0 lg:w-[58.333333%] lg:mb-0">
                  <h1 className="title font-bold text-[2.25rem] leading-[1.2] text-[#1D3557] sm:text-[4.5rem] xl:text-[94px]">
                    Together we Explore your <span className="relative">Business <span className="text-shape absolute bottom-1 left-0 z-[-1] flex h-[0.5rem] w-full bg-[#b3d9db] sm:h-[18px] sm:bottom-2"></span> </span>
                  </h1>
                  <a href="/contact" className="primary-btn mt-8 md:mt-11 hover:bg-[#1d3557] inline-block rounded bg-[#c25251] py-3 px-6 text-white text-[1.125rem] leading-[1.75rem] font-semibold transition-all duration-150 ease-[cubic-bezier(.4,0,.2,1)]">Get Started</a>
                </div>
                <div className="slider-images opacity-100 relative bottom-0 right-0 lg:absolute" style={{ perspective: '1000px' }}>
                  <img src="image/slider-hero-2.png" alt="Testimonial" className="image-lg inline-block max-w-full h-auto align-middle" />
                  <span className="hero-slider_shape-1 absolute bottom-0 right-0 top-auto h-full w-full rounded-bl-[100px] rounded-tr-[100px] bg-[#f3fafe] z-[-1] sm:w-[467px] sm:h-[623px]"></span>
                  <div className="layer hero-slider_shape-2 absolute top-0 right-[-1.75rem] z-[-1] opacity-40 md:top-32">
                    <img className="inline-block max-w-full h-auto" src="image/shape-1.png" alt="Shape" />
                  </div>
                  <div className="layer hero-slider_shape-3 absolute bottom-[-0.75rem] right-[75%] z-[-1] md:right-[60%]">
                    <img className="inline-block max-w-full h-auto" src="image/shape-2.png" alt="Shape" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex swiper-slide swiper-slide-active">
              <div className="hero-slider_content flex flex-col bg-cover pt-12 md:pt-14 lg:flex-row lg:items-center">
                <div className="slider-content mb-10 w-full flex-shrink-0 lg:w-[58.333333%] lg:mb-0">
                  <h1 className="title font-bold text-[2.25rem] leading-[1.2] text-[#1D3557] sm:text-[4.5rem] xl:text-[94px]">
                    Together we Explore your <span className="relative">Business <span className="text-shape absolute bottom-1 left-0 z-[-1] flex h-[0.5rem] w-full bg-[#b3d9db] sm:h-[18px] sm:bottom-2"></span> </span>
                  </h1>
                  <a href="/contact" className="primary-btn mt-8 md:mt-11 hover:bg-[#1d3557] inline-block rounded bg-[#c25251] py-3 px-6 text-white text-[1.125rem] leading-[1.75rem] font-semibold transition-all duration-150 ease-[cubic-bezier(.4,0,.2,1)]">Get Started</a>
                </div>
                <div className="slider-images opacity-100 relative bottom-0 right-0 lg:absolute" style={{ perspective: '1000px' }}>
                  <img src="image/slider-hero.png" alt="Testimonial" className="image-lg inline-block max-w-full h-auto align-middle" />
                  <span className="hero-slider_shape-1 absolute bottom-0 right-0 top-auto h-full w-full rounded-bl-[100px] rounded-tr-[100px] bg-[#f3fafe] z-[-1] sm:w-[467px] sm:h-[623px]"></span>
                  <div className="layer hero-slider_shape-2 absolute top-0 right-[-1.75rem] z-[-1] opacity-40 md:top-32">
                    <img className="inline-block max-w-full h-auto" src="image/shape-1.png" alt="Shape" />
                  </div>
                  <div className="layer hero-slider_shape-3 absolute bottom-[-0.75rem] right-[75%] z-[-1] md:right-[60%]">
                    <img className="inline-block max-w-full h-auto" src="image/shape-2.png" alt="Shape" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-slider_arrows absolute top-1/2 z-50 w-full transform -translate-y-1/2 transition-all duration-150 ease-[cubic-bezier(.4,0,.2,1)] opacity-0 group-hover:opacity-100">
        <div className="hero-slider_arrows__prevbtn absolute left-0 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#ebf7f8] text-center text-[#1d3557] transition-all duration-150 ease-[cubic-bezier(.4,0,.2,1)] hover:bg-[#1d3557] hover:text-white" tabIndex="0" role="button" aria-label="Previous slide">❮</div>
        <div className="hero-slider_arrows__nextbtn absolute right-0 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#ebf7f8] text-center text-[#1d3557] transition-all duration-150 ease-[cubic-bezier(.4,0,.2,1)] hover:bg-[#1d3557] hover:text-white" tabIndex="0" role="button" aria-label="Next slide">❯</div>
      </div>
    </section>
  );
};

export default HeroSlider;
