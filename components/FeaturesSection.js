import React from 'react';

export default function FeaturesSection() {
  return (
    <div className="section section-p pt-16 pb-16 md:pt-20 md:pb-20 lg:pt-32.5 lg:pb-32.5">
      <div className="container w-full mx-auto px-4 sm:max-w-[640px] sm:px-4 md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1200px] xl:px-4">
        <div className="features mb-[-2.5rem] flex flex-row flex-wrap justify-between lg:mb-0">
          <div className="features_col mb-10 w-1/2 md:w-1/4 lg:mb-0">
            <div className="features_box flex flex-col items-center justify-center">
              <div className="features_icon relative">
                <span className="features_icon__shape absolute top-0 left-[-1.25rem] h-20 w-20 rounded-full bg-[#e1f3f4]"></span>
                <img
                  className="inline-block max-w-full h-auto relative z-10"
                  src="/image/icon-1.png"
                  alt="Expert Team"
                />
              </div>
              <div className="features_box__content mt-9 text-center">
                <h4 className="features_box__title mb-2 font-metropolis text-lg leading-7 font-medium text-[rgba(29,53,87,1)] lg:text-xl lg:leading-8">
                  Expert Team
                </h4>
                <p>Talented People</p>
              </div>
            </div>
          </div>
          <div className="features_col mb-10 w-1/2 md:w-1/4 lg:mb-0">
            <div className="features_box flex flex-col items-center justify-center">
              <div className="features_icon relative">
                <span className="features_icon__shape absolute top-0 left-[-1.25rem] h-20 w-20 rounded-full bg-[#e1f3f4]"></span>
                <img
                  className="inline-block max-w-full h-auto relative z-10"
                  src="/image/icon-2.png"
                  alt="Business Plan"
                />
              </div>
              <div className="features_box__content mt-9 text-center">
                <h4 className="features_box__title mb-2 font-metropolis text-lg leading-7 font-medium text-[rgba(29,53,87,1)] lg:text-xl lg:leading-8">
                  Business Plan
                </h4>
                <p>Business Strategy</p>
              </div>
            </div>
          </div>
          <div className="features_col mb-10 w-1/2 md:w-1/4 lg:mb-0">
            <div className="features_box flex flex-col items-center justify-center">
              <div className="features_icon relative">
                <span className="features_icon__shape absolute top-0 left-[-1.25rem] h-20 w-20 rounded-full bg-[#e1f3f4]"></span>
                <img
                  className="inline-block max-w-full h-auto relative z-10"
                  src="/image/icon-3.png"
                  alt="Intime Service"
                />
              </div>
              <div className="features_box__content mt-9 text-center">
                <h4 className="features_box__title mb-2 font-metropolis text-lg leading-7 font-medium text-[rgba(29,53,87,1)] lg:text-xl lg:leading-8">
                  Intime Service
                </h4>
                <p>Talented People</p>
              </div>
            </div>
          </div>
          <div className="features_col mb-10 w-1/2 md:w-1/4 lg:mb-0">
            <div className="features_box flex flex-col items-center justify-center">
              <div className="features_icon relative">
                <span className="features_icon__shape absolute top-0 left-[-1.25rem] h-20 w-20 rounded-full bg-[#e1f3f4]"></span>
                <img
                  className="inline-block max-w-full h-auto relative z-10"
                  src="/image/icon-4.png"
                  alt="Quick Support"
                />
              </div>
              <div className="features_box__content mt-9 text-center">
                <h4 className="features_box__title mb-2 font-metropolis text-lg leading-7 font-medium text-[rgba(29,53,87,1)] lg:text-xl lg:leading-8">
                  Quick Support
                </h4>
                <p>Responsible People</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
