'use client'
import Button from "./Button";
import logo from '../../assets/images/logo-kreatoors-spin.png'
import flower from '../../assets/images/flower-spin.png'
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

const KrLogoWithFlower = () => {
  const [isRotating, setIsRotating] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsRotating(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-14 h-14">
      <img
        src={logo}
        alt="Kr Logo"
        className="w-full h-full"
      />
      <img
        src={flower}
        alt="Flower"
        style={{
          backfaceVisibility: 'hidden',
          transform: isRotating ? 'rotate(360deg)' : 'rotate(0deg)',
          transition: 'transform 10s linear',
          willChange: 'transform',
          imageRendering: 'crisp-edges'
        }}
        className={`
          absolute 
          right-2.5
          bottom-3.5
          w-3
          h-3
          select-none
        `}
      />
    </div>
  );
};

export default function Header({isServices}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services/1' },
    { name: 'About us', path: '/aboutus' },
    { name: 'AI platforms', path: '/aiplatforms' },
    { name: 'Contact us', path: '/contactus' },
  ];

  return (
    <header className={`top-0 left-0 right-0 ${isServices ? 'bg-blue-custom-400' : "bg-white"} z-50 max-w-6xl rounded-full mx-5 md:mx-5 lg:m-auto`}>
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between py-2 md:py-5">
          <div className="flex items-center space-x-12">
            <KrLogoWithFlower />

            <ul className="hidden lg:flex items-center space-x-8 font-normal text-lg">
              {menuItems.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-sub-gray hover:text-[#6B5B95]">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden lg:block">
            <Button className="bg-[#6B5B95] text-white px-6 py-2 rounded-full hover:bg-[#5A4A84]">
              Book a Discovery Call
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
                    <Link 
                      to={item.path} 
                      className="block px-4 py-3 text-custom-blue-700 hover:bg-custom-blue-400 hover:text-white"
                      onClick={toggleMobileMenu}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
                <li className="px-4 py-3">
                  <Button 
                    className="w-full bg-[#6B5B95] text-white px-6 py-2 rounded-full hover:bg-[#5A4A84]"
                    onClick={toggleMobileMenu}
                  >
                    Book a Discovery Call
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