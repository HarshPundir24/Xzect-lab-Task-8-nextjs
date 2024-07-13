import React, { useEffect, useRef } from 'react';

export default function Footer() {
  const backToTopRef = useRef(null);

  useEffect(() => {
    const backToTopButton = backToTopRef.current;

    const handleScroll = () => {
      if (window.scrollY > 200) {
        backToTopButton.style.opacity = 1;
        backToTopButton.style.transform = 'scale(1)';
      } else {
        backToTopButton.style.opacity = 0;
        backToTopButton.style.transform = 'scale(0.8)';
      }
    };

    const handleBackToTop = (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };

    document.addEventListener('scroll', handleScroll);
    backToTopButton.addEventListener('click', handleBackToTop);

    return () => {
      document.removeEventListener('scroll', handleScroll);
      backToTopButton.removeEventListener('click', handleBackToTop);
    };
  }, []);

  return (
    <footer>
      <div className="bg-[#f3f4f6] relative bg-opacity-100 pt-16 pb-16 md:pt-20 md:pb-20 lg:pt-[130px] lg:pb-[130px]">
        <div className="container sm:px-4 md:px-4 lg:px-4 xl:px-4 xl:max-w-[1200px] lg:max-w-[1024px] md:max-w-[768px] sm:max-w-[640px] mx-auto px-4">
          <div className="sm:flex sm:flex-wrap -mx-4 -mb-10">
            <div className="px-4 w-full sm:w-2/3 lg:w-1/3 mb-10">
              <a href="/">
                <img src="/image/logo.png" alt="Header Logo" />
              </a>
              <p className="mt-8 text-gray-600">
                Best is the most porro quisqudolor em are quis quam est, qui doquia dolor sit amcons
              </p>
              <p className="footer_text text-[#457B9D] mt-6 text-lg leading-7 font-semibold text-opacity-100">
                Subscribe to our newsletter and get the latest updates about our offers and promotions.
              </p>
              <form action="#" className="footer_form relative mt-8 w-full">
                <input
                  placeholder="Enter your email"
                  className="h-[45px] w-full rounded-[5px] border-0 bg-white bg-opacity-100 pl-5 pr-[140px] text-base leading-6 font-medium text-gray-600 text-opacity-100 outline outline-2 outline-transparent outline-offset-2"
                />
                <button className="absolute top-0 right-0 h-full rounded-[5px] bg-[#457B9D] bg-opacity-100 pl-[25px] pr-[25px] text-base font-semibold leading-[43px] text-white text-opacity-100 transition-all duration-150 ease-in-out hover:bg-[#C25251]">
                  Subscribe
                </button>
              </form>
              <div className="footer_social mt-[2.25rem] flex">
                <a href="#/" className="mr-[30px] text-lg leading-7 text-[#457B9D] transition-all duration-150 ease-in-out">
                  <img src="/image/facebook.png" alt="Facebook" />
                </a>
                <a href="#/" className="mr-[30px] text-lg leading-7 text-[#457B9D] transition-all duration-150 ease-in-out">
                  <img src="/image/twitter.png" alt="Twitter" />
                </a>
                <a href="#/" className="mr-[30px] text-lg leading-7 text-[#457B9D] transition-all duration-150 ease-in-out">
                  <img src="/image/instagram.png" alt="Instagram" />
                </a>
                <a href="#/" className="mr-[30px] text-lg leading-7 text-[#457B9D] transition-all duration-150 ease-in-out">
                  <img src="/image/google.png" alt="Google" />
                </a>
              </div>
            </div>
            <div className="px-4 w-full sm:w-8/12 lg:w-5/12 mb-10">
              <div className="footer_widget flex justify-around">
                <div className="footer_widget__singlewidget w-1/2 md:w-auto">
                  <h4 className="footer_widget__title mb-5 pb-0 font-metropolis text-2xl leading-8 font-semibold text-[#1D3557]">
                    Service
                  </h4>
                  <ul className="footer_widget__link list-none m-0 p-0">
                    <li className="last:mb-0 mb-[10px]">
                      <a href="/services" className="text-gray-600 hover:text-[#C25251] transition-all">
                        Market Research
                      </a>
                    </li>
                    <li className="last:mb-0 mb-[10px]">
                      <a href="/services" className="text-gray-600 hover:text-[#C25251] transition-all">
                        SEO Optimization
                      </a>
                    </li>
                    <li className="last:mb-0 mb-[10px]">
                      <a href="/services" className="text-gray-600 hover:text-[#C25251] transition-all">
                        Amazing Strategy
                      </a>
                    </li>
                    <li className="last:mb-0 mb-[10px]">
                      <a href="/services" className="text-gray-600 hover:text-[#C25251] transition-all">
                        Financial Planning
                      </a>
                    </li>
                    <li className="last:mb-0 mb-[10px]">
                      <a href="/services" className="text-gray-600 hover:text-[#C25251] transition-all">
                        Project Analysis
                      </a>
                    </li>
                    <li className="last:mb-0 mb-[10px]">
                      <a href="/services" className="text-gray-600 hover:text-[#C25251] transition-all">
                        PR & Marketing
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="footer_widget__singlewidget w-1/2 md:w-auto">
                  <h4 className="footer_widget__title mb-5 pb-0 font-metropolis text-2xl leading-8 font-semibold text-[#1D3557]">
                    Information
                  </h4>
                  <ul className="footer_widget__link list-none m-0 p-0">
                    <li className="last:mb-0 mb-[10px]">
                      <a href="/about" className="text-gray-600 hover:text-[#C25251] transition-all">
                        About us
                      </a>
                    </li>
                    <li className="last:mb-0 mb-[10px]">
                      <a href="/portfolios" className="text-gray-600 hover:text-[#C25251] transition-all">
                        Portfolio
                      </a>
                    </li>
                    <li className="last:mb-0 mb-[10px]">
                      <a href="/contact" className="text-gray-600 hover:text-[#C25251] transition-all">
                        Login/Register
                      </a>
                    </li>
                    <li className="last:mb-0 mb-[10px]">
                      <a href="/contact" className="text-gray-600 hover:text-[#C25251] transition-all">
                        Terms & Conditions
                      </a>
                    </li>
                    <li className="last:mb-0 mb-[10px]">
                      <a href="/blog-grid" className="text-gray-600 hover:text-[#C25251] transition-all">
                        Our Blog
                      </a>
                    </li>
                    <li className="last:mb-0 mb-[10px]">
                      <a href="/about" className="text-gray-600 hover:text-[#C25251] transition-all">
                        Promotions
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="px-4 w-full sm:w-4/12 lg:w-3/12 mb-10">
              <div className="footer_widget">
                <h4 className="footer_widget__title mb-5 pb-0 font-metropolis text-2xl leading-8 font-semibold text-[#1D3557]">
                  Address
                </h4>
                <div className="footer_widget__info text-gray-600 mb-5">
                  <p>256 Central Park, East Town South Valley, New York</p>
                </div>
                <div className="footer_widget__info text-gray-600 mb-5">
                  <p>
                    <a href="tel:0123456789" className="hover:text-[#C25251]">
                      +12345 687 856
                    </a>
                  </p>
                  <p>
                    <a href="tel:0123456789" className="hover:text-[#C25251]">
                      +98745 612 325
                    </a>
                  </p>
                </div>
                <div className="footer_widget__info text-gray-600 mb-5">
                  <p>
                    <a href="mailto:info@example.com" className="hover:text-[#C25251]">
                      info@example.com
                    </a>
                  </p>
                  <p>
                    <a href="#" className="hover:text-[#C25251]">
                      www.example.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright py-4 bg-white">
        <div className="container sm:px-4 md:px-4 lg:px-4 xl:px-4 xl:max-w-[1200px] lg:max-w-[1024px] md:max-w-[768px] sm:max-w-[640px] mx-auto px-4">
          <div className="copyright_text pt-5 pb-5 text-center text-gray-600">
            <p>
              @2024
              <span className="text-[#1D3557] font-semibold"> BUSINO </span>
              Made by <a>Harsh Pundir</a>
            </p>
          </div>
          <div
            ref={backToTopRef}
            id="back-to-top"
            className="back-to-top fixed cursor-pointer z-50 mr-5"
            style={{ bottom: '40px', right: '0', opacity: 0, transform: 'scale(0.8)' }}
           >
            <span className="h-10 w-10 bg-[#1D3557] hover:bg-gray-500 rounded-full flex justify-center items-center">
                <img src="image/uparrow.png"/>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
