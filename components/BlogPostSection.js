import React, { useEffect } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

const BlogPostSection = () => {
  useEffect(() => {
    const swiper = new Swiper('.postsection .swiper-container', {
      slidesPerView: 1,
      loop: true,
      spaceBetween: 30,
      navigation: {
        nextEl: '.postsection_arrows__nextbtn',
        prevEl: '.postsection_arrows__prevbtn',
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
      },
    });

    return () => {
      swiper.destroy(true, true);
    };
  }, []);

  return (
    <div className="postsection section-pb pb-16 md:pb-20 lg:pb-[130px]">
      <div className="container mx-auto px-4 sm:px-4 md:px-4 lg:px-4 xl:px-4 xl:max-w-[1200px] lg:max-w-[1024px] md:max-w-[768px] sm:max-w-[640px]">
        <div className="flex flex-nowrap flex-col lg:flex-row relative" style={{ perspective: '1000px' }}>
          <div className="section-title lg:w-4/12 w-full md:pr-5">
            <h5 className="sub-title mb-[18px] text-sm leading-5 font-medium uppercase md:text-base md:leading-6 text-gray-500">Our Blog Post</h5>
            <h2 className="title font-metropolis text-[30px] font-bold leading-[1.2] text-[#1D3557] md:text-[40px] lg:text-[44px] xl:text-[60px]">
              <span>Latest Post</span> <span className="relative">from Blog
                <span className="text-shape absolute left-0 z-[-1] flex w-full bg-[#b3d9db] md:h-[18px] md:bottom-2.5 h-[8px] sm:h-[14px] bottom-[2px] sm:bottom-1 lg:bottom-2"></span>
              </span>
            </h2>
            <p className="mt-3 sm:mt-5 lg:mt-7 text-gray-500">Best is the most porro quisquam est, dolor em are porro quis quam est, qui doloripsum quia dolor sit amet, consectetur</p>
          </div>
          <div className="post-wrapper lg:static relative lg:w-8/12 w-full pt-16 lg:pt-0 mt-10 lg:mt-0">
            <div className="swiper-container swiper mx-auto relative overflow-hidden list-none p-0 z-10">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div>
                    <div>
                      <a href="/blog/1"><img src="/image/blog-1.jpg" alt="blog" className="w-full" /></a>
                    </div>
                    <div>
                      <h2 className="font-semibold text-2xl text-primary transition-all hover:text-secondary mt-4 mb-1 block">
                        <a href="/blog/1">Creative Business Training</a>
                      </h2>
                      <p>Obtain pain of because is pain, but because you nally circumstances more than some work</p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div>
                    <div>
                      <a href="/blog/2"><img src="/image/blog-2.jpg" alt="blog" className="w-full" /></a>
                    </div>
                    <div>
                      <h2 className="font-semibold text-2xl text-primary transition-all hover:text-[#C25251] mt-4 mb-1 block">
                        <a href="/blog/2">Winning Business Deals</a>
                      </h2>
                      <p>Obtain pain of because is pain, but because you nally circumstances more than some work</p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div>
                    <div>
                      <a href="/blog/3"><img src="/image/blog-3.jpg" alt="blog" className="w-full" /></a>
                    </div>
                    <div>
                      <h2 className="font-semibold text-2xl text-primary transition-all hover:text-[#C25251] mt-4 mb-1 block">
                        <a href="/blog/3">Business Plan Implementation</a>
                      </h2>
                      <p>Obtain pain of because is pain, but because you nally circumstances more than some work</p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div>
                    <div>
                      <a href="/blog/4"><img src="/image/blog-4.jpg" alt="blog" className="w-full" /></a>
                    </div>
                    <div>
                      <h2 className="font-semibold text-2xl text-primary transition-all hover:text-[#c15251] mt-4 mb-1 block">
                        <a href="/blog/4">Consulting Fees Study 2021</a>
                      </h2>
                      <p>Obtain pain of because is pain, but because you nally circumstances more than some work</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="postsection_arrows absolute top-0 left-0 z-[999] flex w-full transition-all duration-150 ease-[cubic-bezier(.4,0,.2,1)] lg:bottom-0 lg:top-auto">
              <div className="postsection_arrows__prevbtn swipper-arrow mr-2.5 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-[#ebf7f8] text-[#1d3557] hover:bg-[#1d3557] hover:text-white" tabIndex="0" role="button" aria-label="Previous slide">❮</div>
              <div className="postsection_arrows__nextbtn swipper-arrow ml-2.5 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-[#ebf7f8] text-[#1d3557] hover:bg-[#1d3557] hover:text-white" tabIndex="0" role="button" aria-label="Next slide">❯</div>
            </div>
            <div className="postsection_inner__shape absolute top-0 right-0 z-[-999] opacity-60 md:top-[-45px] lg:right-[-35px]" style={{ transitionProperty: 'transform', transitionDuration: '1000ms', transformOrigin: 'center center', transitionTimingFunction: 'cubic-bezier(0.23, 1, 0.32, 1)' }}>
              <img src="/image/shape-1.png" alt="Shape" className="layer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostSection;
