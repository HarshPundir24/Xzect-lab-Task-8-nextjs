import React, { useEffect } from 'react';

export default function CounterUp() {
  useEffect(() => {
    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    function formatNumberWithCommas(number) {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    function countUp(el) {
      const countTo = parseInt(el.getAttribute('data-count').replace(/,/g, ''), 10);
      const duration = 1000;
      const frameRate = 1000 / 60;
      const totalFrames = Math.round(duration / frameRate);
      let frame = 0;
      const count = () => {
        frame++;
        const progress = frame / totalFrames;
        const currentCount = Math.round(countTo * progress);
        el.textContent = formatNumberWithCommas(currentCount);
        if (frame < totalFrames) {
          requestAnimationFrame(count);
        } else {
          el.textContent = formatNumberWithCommas(countTo) + "+";
        }
      };
      count();
    }

    function handleScroll() {
      const counters = document.querySelectorAll('.counterup__number');
      counters.forEach(counter => {
        if (isElementInViewport(counter) && !counter.classList.contains('counted')) {
          countUp(counter);
          counter.classList.add('counted');
        }
      });
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="counterup section-pb pb-16 md:pb-20 lg:pb-[130px]">
      <div className="container mx-auto px-4 sm:px-4 md:px-4 lg:px-4 xl:px-4 xl:max-w-[1200px] lg:max-w-[1024px] md:max-w-[768px] sm:max-w-[640px] overflow-hidden" style={{ perspective: 1000 }}>
        <div className="counterup_title mx-auto mb-16 max-w-[32rem]">
          <div className="section-title text-center">
            <h2 className="title font-metropolis text-[30px] font-bold leading-[1.2] text-[#1d3557] sm:text-[40px] md:text-[44px] lg:text-[60px]">
              <span>Some of our </span> 
              <span className="relative">Interesting
                <span className="text-shape absolute bottom-1 left-0 z-[-1] flex h-2 w-full bg-[#b3d9db] sm:bottom-2 sm:h-4 lg:bottom-2"></span>
              </span> <span> facts </span>
            </h2>
          </div>
        </div> 
        <div className="relative">
          <div className="grid lg:grid-cols-4 grid-cols-2 gap-9">
            <div className="counterup__box rounded-lg bg-white p-7 text-center shadow-lg sm:px-8 sm:py-10">
              <span className="counterup__number font-metropolis text-[22px] font-extrabold text-[#c25251] sm:text-[40px]" data-count="2500">2,500+</span> 
              <p className="counterup__text text-base leading-6 text-[#457b9d] sm:text-lg sm:leading-7">Customers</p>
            </div>
            <div className="counterup__box rounded-lg bg-white p-7 text-center shadow-lg sm:px-8 sm:py-10">
              <span className="counterup__number font-metropolis text-[22px] font-extrabold text-[#c25251] sm:text-[40px]" data-count="3570">3,570+</span> 
              <p className="counterup__text text-base leading-6 text-[#457b9d] sm:text-lg sm:leading-7">Projects done</p>
            </div>
            <div className="counterup__box rounded-lg bg-white p-7 text-center shadow-lg sm:px-8 sm:py-10">
              <span className="counterup__number font-metropolis text-[22px] font-extrabold text-[#c25251] sm:text-[40px]" data-count="999">999+</span> 
              <p className="counterup__text text-base leading-6 text-[#457b9d] sm:text-lg sm:leading-7">Cup of Tea</p>
            </div>
            <div className="counterup__box rounded-lg bg-white p-7 text-center shadow-lg sm:px-8 sm:py-10">
              <span className="counterup__number font-metropolis text-[22px] font-extrabold text-[#c25251] sm:text-[40px]" data-count="230">230+</span>
              <p className="counterup__text text-base leading-6 text-[#457b9d] sm:text-lg sm:leading-7">Employees</p>
            </div>
          </div> 
          <div className="counterup__shape absolute bottom-[-45px] left-0 z-[-10] opacity-60 lg:left-[-45px]" style={{ transitionProperty: 'transform', transitionDuration: '1000ms', transformOrigin: 'center center', transitionTimingFunction: 'cubic-bezier(0.23, 1, 0.32, 1)' }}>
            <img className="inline-block max-w-full h-auto" src="/image/shape-2.png" alt="Shape" />
          </div>
        </div>
      </div>
    </div>
  );
}
