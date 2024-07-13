import React from 'react';

export default function AboutSection() {
  return (
    <div className="section about-section">
      <div className="container mx-auto px-4 sm:px-4 md:px-4 lg:px-4 xl:px-4 xl:max-w-[1200px] lg:max-w-[1024px] md:max-w-[768px] sm:max-w-[640px] overflow-hidden section-pb pb-16 md:pb-20 lg:pb-[130px]">
        <div className="lg:grid-cols-2 grid-cols-1 gap-5 xl:gap-8 sm:grid">
          <div className="about-section_images relative z-10">
            <img
              className="inline-block max-w-full h-auto rounded-full"
              src="/image/gamerteam.jpg"
              alt="About"
            />
            <div
              className="about-section_images__shape absolute top-2 left-[58%] -z-10 hidden sm:block sm:w-[340px] sm:h-[540px] rounded-full bg-[rgba(235,247,248,1)] transition-all duration-150 ease-in-out transform rotate-[30deg] -translate-x-1/2"
            ></div>
          </div>
          <div className="about-section_content relative z-10 mt-12 lg:mt-0">
            <div className="section-title">
              <h5 className="sub-title mb-[18px] text-sm leading-5 font-medium uppercase md:text-base md:leading-6 text-gray-500">
                Meet Gamer Team
              </h5>
              <h2 className="title font-metropolis text-[30px] font-bold leading-[1.2] text-[#1D3557] md:text-[40px] lg:text-[44px] xl:text-[60px]">
                <span>Best &amp; Creative</span>{' '}
                <span className="relative">
                  Agency
                  <span className="text-shape absolute left-0 z-[-1] flex w-full bg-[#b3d9db] md:h-[18px] md:bottom-2.5 h-[8px] sm:h-[14px] bottom-[2px] sm:bottom-1 lg:bottom-2"></span>
                </span>{' '}
                <span>for your Company.</span>
              </h2>
            </div>
            <p className="about-section_about-text mt-6 mb-4 text-lg font-semibold text-[rgba(69,123,157,1)]">
              Most of the most porro quisquam est, qui dolorem are one. ipsum quia dolor sit amet consectetur adipisci velit sed quia.
            </p>
            <p>
              Best is the most porro quisquam est, qui dolorem are one. porro quis quam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore
            </p>
            <a
              href="/contact"
              className="primary-btn inline-block rounded bg-[rgba(194,82,81,1)] px-6 py-3 font-metropolis text-lg leading-7 font-semibold text-[rgba(255,255,255,1)] transition-all duration-150 ease-in-out hover:bg-[#1D3557] mt-8 md:mt-11"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
