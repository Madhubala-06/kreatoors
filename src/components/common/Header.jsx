'use client'
import Button from "./Button";
import logo from '../../assets/images/logo-kreatoors-spin.png'
// import flower from '../../assets/images/flower-spin.png'
import { NavLink } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Logo from "./Logo";
import kr from '../../assets/images/logos/Kr.png'
import eato from '../../assets/images/logos/eato.png'
import flower from '../../assets/images/logos/flower.png'
import rs from '../../assets/images/logos/rs.png'


// const KrLogoWithFlower = () => {
//   const [isRotating, setIsRotating] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsRotating(false);
//     }, 3000);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
// <div className=" h-auto w-auto flex items-end">
//   <img
//     src={kr}
//     alt="Kr Logo"
//     className="h-7  object-contain"
//   />
//   <img
//     src={eato}
//     alt="Eato Logo"
//     className=" h-6 -ml-1 object-contain pt-0.5"
//   />
//   <img
//     src={flower}
//     alt="Flower"
//     style={{
//       backfaceVisibility: 'hidden',
//       transform: isRotating ? 'rotate(0deg)' : 'rotate(360deg)',
//       transition: isRotating
//         ? 'transform 0.2s ease-in-out'
//         : 'transform 5s linear',
//       willChange: 'transform',
//       imageRendering: 'crisp-edges',
//     }}
//     className=" h-5 mx-0.5  p object-contain"
//   />
//   <img
//     src={rs}
//     alt="Rs Logo"
//     className="   h-[17px]  object-contain"
//   />
// </div>


//   );
// };

export default function Header({ isServices }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services/1' },
    { name: 'About us', path: '/aboutus' },
    { name: 'AI platform', path: '/aiplatform' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact us', path: '/contactus' },
  ];

  return (
    <header className={` top-10  absolute left-0 right-0 ${isServices ? 'bg-blue-custom-400' : "bg-white"} z-50 max-w-6xl rounded-full mx-5 md:mx-10 lg:mx-10 xl:m-auto`}>
      <div className="px-5">
        <nav className="flex items-center justify-between py-3.5 md:py-5">
          <div className="flex items-center space-x-12">
            {/* <KrLogoWithFlower /> */}
            <Logo />

            <ul className="hidden lg:flex items-center  space-x-4 xl:space-x-8 font-normal text-lg">
              {menuItems.map((item) => (
               
                <li key={item.path}>
                  <NavLink to={item.path} className={({ isActive }) =>

                  
                    isActive  || item.path === '/services/1' && 
                    window.location.pathname.startsWith('/services')
                      ? 'text-transparent bg-clip-text bg-primary-gradient font-medium'
                      : 'text-sub-gray hover:text-[#6B5B95]'
                  }>
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden lg:block">
            <Button className="bg-[#6B5B95] text-white px-6 py-2 rounded-full hover:bg-[#5A4A84]  transition-all duration-700 ease-out delay-400
                               hover:scale-105">
              Book Free Discovery Call
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={toggleMobileMenu}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>

        {isMobileMenuOpen && (
          <div className="absolute left-0 right-0 mt-5 lg:hidden">
            <div className="bg-white shadow-lg mx-5 rounded-2xl ">
              <ul className="py-2  ">
                {menuItems.map((item) => (
                  <li key={item.path}>
                    <NavLink
                      to={item.path}
                      className="block px-4 py-3 text-custom-blue-700 hover:bg-custom-blue-400 hover:text-white"
                      onClick={toggleMobileMenu}
                    >
                      {item.name}
                    </NavLink>
                  </li>
                ))}
                <li className="px-4 py-3">
                  <Button
                    className="w-full bg-[#6B5B95] text-white px-6 py-2 rounded-full hover:bg-[#5A4A84]  transition-all duration-700 ease-out delay-400
                               hover:scale-105"
                    onClick={toggleMobileMenu}
                  >
                    Book Free Discovery Call
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}