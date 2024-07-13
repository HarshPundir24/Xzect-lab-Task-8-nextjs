// components/NavigationMenu.js

import { useEffect, useState } from 'react';

const NavigationMenu = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [submenu, setSubmenu] = useState('');

  const handleMenuToggle = () => setIsMenuVisible(!isMenuVisible);

  const handleCloseMenu = () => setIsMenuVisible(false);

  const handleSubmenuToggle = (submenuName) => {
    if (submenu === submenuName) {
      setSubmenu('');
    } else {
      setSubmenu(submenuName);
    }
  };

  useEffect(() => {
    const checkScroll = () => {
      const navbar = document.querySelector('.fixed');
      if (window.scrollY > 100) {
        navbar.classList.add('bg-white');
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        navbar.style.paddingTop = '12px';
        navbar.style.paddingBottom = '12px';
      } else {
        navbar.classList.remove('bg-white');
        navbar.style.boxShadow = 'none';
        navbar.style.paddingTop = '32px';
        navbar.style.paddingBottom = '32px';
      }
    };

    window.addEventListener('scroll', checkScroll);
    checkScroll();

    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);

  return (
    <>
      <div className="fixed left-0 right-0 z-[99] py-8 sm:py-16 transition-all">
        <div className="container mx-auto px-4 sm:px-4 md:px-4 lg:px-4 xl:px-4 xl:max-w-[1200px] lg:max-w-[1024px] md:max-w-[768px] sm:max-w-[640px]">
          <div className="flex flex-row items-center">
            <div className="flex-grow-0 w-1/2 md:w-1/3">
              <a href="/" aria-current="page">
                <img className="inline-block" src="/image/logo.png" alt="Header Logo" />
              </a>
            </div>
            <div className="flex-grow-0 w-1/2 md:w-2/3">
              <div className="menu-area flex justify-end">
                <div className="hidden lg:block">
                  <nav>
                    <ul className="mainmenu flex justify-end">
                      <li className="mainmenu_list relative z-10 ml-8 pt-7 pb-7 lg:ml-16">
                        <a href="/" aria-current="page" className="mainmenu_link relative text-[#1D3557] text-opacity-100 text-base font-medium transition-all duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] hover:text-[#C25251] lg:text-xl lg:leading-7">Home</a>
                      </li>
                      <li className="mainmenu_list relative z-10 ml-8 pt-7 pb-7 lg:ml-16 group">
                        <a href="/#" className="mainmenu_link relative text-[#1D3557] text-opacity-100 text-base font-medium transition-all duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] hover:text-[#C25251] lg:text-xl lg:leading-7 flex items-center" onClick={handleSubmenuToggle}>
                          Services <img className="ml-[0.5rem]" src="/image/arrow.png" alt="Arrow Icon" />
                        </a>
                        <ul className="submenu absolute right-0 top-[85%] z-[10] flex flex-col w-[13rem] border-t-2 border-[#C25251] bg-white pt-2.5 pb-2.5 opacity-0 invisible shadow-md transition-all duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] transform translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 lg:left-0 lg:right-auto">
                          <li>
                            <a href="/services" className="submenu_link block py-2.5 px-5 text-[#1D3557] text-opacity-100 text-base font-medium leading-5 transition-all duration-150 ease-custom-ease hover:text-[#C25251]">Services</a>
                          </li>
                          <li>
                            <a href="/service/1" className="submenu_link block py-2.5 px-5 text-[#1D3557] text-opacity-100 text-base font-medium leading-5 transition-all duration-150 ease-custom-ease hover:text-[#C25251]">Single Services</a>
                          </li>
                        </ul>
                      </li>
                      <li className="mainmenu_list relative z-10 ml-8 pt-7 pb-7 lg:ml-16 group">
                        <a href="/#" className="mainmenu_link relative text-[#1D3557] text-opacity-100 text-base font-medium transition-all duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] hover:text-[#C25251] lg:text-xl lg:leading-7 flex items-center" onClick={handleSubmenuToggle}>
                          Portfolio <img className="ml-[0.5rem]" src="image/arrow.png" alt="Arrow Icon"/>
                        </a>
                        <ul className="submenu absolute right-0 top-[85%] z-[99] flex flex-col w-[13rem] border-t-2 border-[#C25251] bg-white pt-2.5 pb-2.5 opacity-0 invisible shadow-md transition-all duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] transform translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 lg:left-0 lg:right-auto">
                          <li>
                            <a href="/portfolios" className="submenu_link block py-2.5 px-5 text-[#1D3557] text-opacity-100 text-base font-medium leading-5 transition-all duration-150 ease-custom-ease hover:text-[#C25251]">Portfolio</a>
                          </li>
                          <li>
                            <a href="/portfolio/1" className="submenu_link block py-2.5 px-5 text-[#1D3557] text-opacity-100 text-base font-medium leading-5 transition-all duration-150 ease-custom-ease hover:text-[#C25251]">Portfolio Details</a>
                          </li>
                        </ul>
                      </li>
                      <li className="mainmenu_list relative z-10 ml-8 pt-7 pb-7 lg:ml-16 group">
                        <a href="/#" className="mainmenu_link relative text-[#1D3557] text-opacity-100 text-base font-medium transition-all duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] hover:text-[#C25251] lg:text-xl lg:leading-7 flex items-center" onClick={handleSubmenuToggle}>
                          Blog <img className="ml-[0.5rem]" src="image/arrow.png" alt="Arrow Icon"/>
                        </a>
                        <ul className="submenu absolute right-0 top-[85%] z-[99] flex flex-col w-[13rem] border-t-2 border-[#C25251] bg-white pt-2.5 pb-2.5 opacity-0 invisible shadow-md transition-all duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] transform translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 lg:left-0 lg:right-auto">
                          <li>
                            <a href="/blog-grid" className="submenu_link block py-2.5 px-5 text-[#1D3557] text-opacity-100 text-base font-medium leading-5 transition-all duration-150 ease-custom-ease hover:text-[#C25251]">Blog Grid</a>
                          </li>
                          <li>
                            <a href="/blog-right-sidebar" className="submenu_link block py-2.5 px-5 text-[#1D3557] text-opacity-100 text-base font-medium leading-5 transition-all duration-150 ease-custom-ease hover:text-[#C25251]">Blog Right Sidebar</a>
                          </li>
                          <li>
                            <a href="/blog-left-sidebar" className="submenu_link block py-2.5 px-5 text-[#1D3557] text-opacity-100 text-base font-medium leading-5 transition-all duration-150 ease-custom-ease hover:text-[#C25251]">Blog Left Sidebar</a>
                          </li>
                          <li>
                            <a href="/blog/1" className="submenu_link block py-2.5 px-5 text-[#1D3557] text-opacity-100 text-base font-medium leading-5 transition-all duration-150 ease-custom-ease hover:text-[#C25251]">Blog Details</a>
                          </li>
                        </ul>
                      </li>
                      <li className="mainmenu_list relative z-10 ml-8 pt-7 pb-7 lg:ml-16 group">
                        <a href="/#" className="mainmenu_link relative text-[#1D3557] text-opacity-100 text-base font-medium transition-all duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] hover:text-[#C25251] lg:text-xl lg:leading-7 flex items-center" onClick={handleSubmenuToggle}>
                          Others <img className="ml-[0.5rem]" src="image/arrow.png" alt="Arrow Icon"/>
                        </a>
                        <ul className="submenu absolute right-0 top-[85%] z-[99] flex flex-col w-[13rem] border-t-2 border-[#C25251] bg-white pt-2.5 pb-2.5 opacity-0 invisible shadow-md transition-all duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] transform translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 lg:left-0 lg:right-auto">
                          <li>
                            <a href="/about" className="submenu_link block py-2.5 px-5 text-[#1D3557] text-opacity-100 text-base font-medium leading-5 transition-all duration-150 ease-custom-ease hover:text-[#C25251]">About</a>
                          </li>
                          <li>
                            <a href="/faq" className="submenu_link block py-2.5 px-5 text-[#1D3557] text-opacity-100 text-base font-medium leading-5 transition-all duration-150 ease-custom-ease hover:text-[#C25251]">FAQ</a>
                          </li>
                          <li>
                            <a href="/privacy-policy" className="submenu_link block py-2.5 px-5 text-[#1D3557] text-opacity-100 text-base font-medium leading-5 transition-all duration-150 ease-custom-ease hover:text-[#C25251]">Privacy Policy</a>
                          </li>
                          <li>
                            <a href="/terms-condition" className="submenu_link block py-2.5 px-5 text-[#1D3557] text-opacity-100 text-base font-medium leading-5 transition-all duration-150 ease-custom-ease hover:text-[#C25251]">Terms & Condition</a>
                          </li>
                        </ul>
                      </li>
                      <li className="mainmenu_list relative z-10 ml-8 pt-7 pb-7 lg:ml-16">
                        <a href="/contact" className="mainmenu_link relative text-[#1D3557] text-opacity-100 text-base font-medium transition-all duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] hover:text-[#C25251] lg:text-xl lg:leading-7">Contact</a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="lg:hidden block">
                  <button id="mobile-menu-toggle" className="text-[#1D3557]" onClick={handleMenuToggle}>
                    <img className="menu-button hover:text-[#C25251]" src="/image/menu-icon.png" alt="Menu Icon" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="offcanvas-menu" className={`popup-mobile-menu ${isMenuVisible ? 'popup-mobile-visiable' : ''}`}>
        <div className="mobile-menu-overlay"></div>
        <div className="bg-white w-[350px] h-full left-0 top-0 absolute text-left transition-all py-8 overflow-y-scroll mobilemenu">
            <div className="flex justify-between pb-16 px-5">
            <a href="/" aria-current="page"><img src="/image/logo.png" alt="Header Logo" /></a>
            <button id="close" className="font-bold text-3xl text-black hover:text-primary transition-all hover:rotate-90" onClick={handleCloseMenu}>
                <img src="/image/close.png" alt="Close Icon" />
            </button>
            </div>
            <div className="menu-content">
            <section className="mobilemenu">
                <div className="mobilemenu__title">
                <div className="p-[10px] hover:bg-[#C25251] hover:text-white transition-all duration-500">
                    <a href="/" aria-current="page" className="flex justify-between text-lg font-semibold">Home</a>
                </div>
                <div className="transition-all duration-500 hidden"></div>
                </div>
                <div className="mobilemenu__title">
                <div className="p-[10px] hover:bg-[#C25251] hover:text-white transition-all duration-500">
                    <a href="/" className="flex justify-between text-lg font-semibold">About</a>
                </div>
                <div className="transition-all duration-500 hidden"></div>
                </div>
                <div className="mobilemenu__title">
                <div
                    className="p-[10px] hover:bg-[#C25251] hover:text-white transition-all duration-500 flex items-center"
                    data-toggle="submenu"
                    onClick={() => handleSubmenuToggle('services')}
                >
                    <a href="/#/" className="service-link flex justify-between text-lg font-semibold w-full">Services
                    <span
                        className={`icon transition-transform duration-300 ${submenu === 'services' ? 'rotate-90' : ''}`}
                    >
                        ❯
                    </span>
                    </a>
                </div>
                <div className={`submenu transition-all duration-500 ${submenu === 'services' ? 'block' : 'hidden'}`}>
                    <div className="mobilemenu__subtitle pl-5 text-base">
                    <h2><a href="/services" className="block py-[10px] font-medium">Services</a></h2>
                    </div>
                    <div className="mobilemenu__subtitle pl-5 text-base">
                    <h2><a href="/service/1" className="block py-[10px] font-medium">Single Service</a></h2>
                    </div>
                </div>
                </div>
                <div className="mobilemenu__title">
                <div
                    className="p-[10px] hover:bg-[#C25251] hover:text-white transition-all duration-500 flex items-center"
                    data-toggle="submenu"
                    onClick={() => handleSubmenuToggle('portfolio')}
                >
                    <a href="/#/" className="service-link flex justify-between text-lg font-semibold w-full">Portfolio
                    <span
                        className={`icon transition-transform duration-300 ${submenu === 'portfolio' ? 'rotate-90' : ''}`}
                    >
                        ❯
                    </span>
                    </a>
                </div>
                <div className={`submenu transition-all duration-500 ${submenu === 'portfolio' ? 'block' : 'hidden'}`}>
                    <div className="mobilemenu__subtitle pl-5 text-base">
                    <h2><a href="/portfolios" className="block py-[10px] font-medium">Portfolio</a></h2>
                    </div>
                    <div className="mobilemenu__subtitle pl-5 text-base">
                    <h2><a href="/portfolio/1" className="block py-[10px] font-medium">Single Portfolio</a></h2>                            
                    </div>
                </div>
                </div>
                <div className="mobilemenu__title">
                <div
                    className="p-[10px] hover:bg-[#C25251] hover:text-white transition-all duration-500 flex items-center"
                    data-toggle="submenu"
                    onClick={() => handleSubmenuToggle('blog')}
                >
                    <a href="/#/" className="service-link flex justify-between text-lg font-semibold w-full">Blog
                    <span
                        className={`icon transition-transform duration-300 ${submenu === 'blog' ? 'rotate-90' : ''}`}
                    >
                        ❯
                    </span>
                    </a>
                </div>
                <div className={`submenu transition-all duration-500 ${submenu === 'blog' ? 'block' : 'hidden'}`}>
                    <div className="mobilemenu__subtitle pl-5 text-base">
                    <h2><a href="/" className="block py-[10px] font-medium">Blog Grid</a></h2>
                    </div>
                    <div className="mobilemenu__subtitle pl-5 text-base">
                    <h2><a href="/" className="block py-[10px] font-medium">Blog Right Sidebar</a></h2>
                    </div>
                    <div className="mobilemenu__subtitle pl-5 text-base">
                    <h2><a href="/" className="block py-[10px] font-medium">Blog Left Sidebar</a></h2>
                    </div>
                    <div className="mobilemenu__subtitle pl-5 text-base">
                    <h2><a href="/" className="block py-[10px] font-medium">Blog Details</a></h2>
                    </div>
                </div>
                </div>
                <div className="mobilemenu__title">
                <div className="p-[10px] hover:bg-[#C25251] hover:text-white transition-all duration-500">
                    <a href="/" aria-current="page" className="flex justify-between text-lg font-semibold">Contact</a>
                </div>
                <div className="transition-all duration-500 hidden"></div>
                </div>
            </section>
            </div>
        </div>
      </div>

    </>
  );
};

export default NavigationMenu;
