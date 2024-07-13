import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ActionSection = () => {
  return (
    <div className='actionsection'>
        <div
        className="container mx-auto px-4 sm:px-4 md:px-4 lg:px-4 xl:px-4 xl:max-w-[1200px] lg:max-w-[1024px] md:max-w-[768px] sm:max-w-[640px] overflow-hidden section-pb pb-16 md:pb-20 lg:pb-[130px]"
        style={{ perspective: '1000px' }}>
            <div className="actionsection_wrapper mx-auto rounded-[20px] bg-[rgba(235,247,248,1)] p-7 md:pt-[3.75rem] md:pb-[3.75rem] md:px-20">
                <div className="lg:grid-cols-2 grid-cols-1 gap-5 xl:gap-6 sm:grid h-full place-items-center">
                <div className="actionsection_content relative z-10">
                    <div className="section-title">
                    <h5 className="sub-title mb-[18px] text-sm leading-5 font-medium uppercase md:text-base md:leading-6 text-gray-500">
                        FOR BEST SOLUTIONS
                    </h5>
                    <h2 className="title font-metropolis text-[30px] font-bold leading-[1.2] text-[#1D3557] md:text-[40px] lg:text-[44px] xl:text-[60px]">
                        <span>Fully </span>
                        <span className="relative">
                        Dedicated
                        <span className="text-shape absolute left-0 z-[-1] flex w-full bg-[#b3d9db] md:h-[18px] md:bottom-2.5 h-[8px] sm:h-[14px] bottom-[2px] sm:bottom-1 lg:bottom-2"></span>
                        </span>
                        <span> to find the Best Solutions </span>
                    </h2>
                    </div>
                    <p className="actionsection_text mt-3 mb-7 text-lg font-semibold text-[rgba(69,123,157,1)]">
                    Do you need Business support &amp; Solutions? Send us your details for better solutions.
                    </p>
                    <Link href="/" className="primary-btn inline-block rounded bg-[rgba(194,82,81,1)] px-6 py-3 font-metropolis text-lg leading-7 font-semibold text-[rgba(255,255,255,1)] transition-all duration-150 ease-in-out mt-2 hover:bg-[#1D3557]">
                        Let's Start
                    </Link>
                </div>
                <div className="actionsection_images relative z-10 flex items-center pl-0 pr-0 pb-3 pt-16 sm:px-3 md:p-10">
                    <div
                    className="actionsection__shape-1 absolute top-0 left-0 z-[-1]"
                    style={{
                        transitionProperty: 'transform',
                        transitionDuration: '1000ms',
                        transformOrigin: 'center center',
                        transitionTimingFunction: 'cubic-bezier(0.23, 1, 0.32, 1)',
                    }}
                    >
                    <Image
                        src="/image/shape-3.png"
                        alt="About"
                        className="opacity-[.18] inline-block max-w-full h-auto"
                        width={300}
                        height={500}
                    />
                    </div>
                    <Image
                    src="/image/call-to-action.jpg"
                    alt="About"
                    className="rounded-[10px] min-w-full"
                    width={500}
                    height={500}
                    />
                    <div className="actionsection__shape-2 absolute bottom-0 right-0 z-[-1] h-full w-full rounded-[10px] bg-[rgba(249,251,245,1)] sm:h-[335px] sm:w-[310px]"></div>
                </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default ActionSection;
