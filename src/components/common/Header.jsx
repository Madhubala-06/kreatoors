

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

  console.log(isServices , "mmmmmmm");
  
  return (
    <header className={`top-0 left-0 right-0 ${isServices ?'bg-blue-custom-400' :"bg-white" } z-50  max-w-6xl rounded-full  mx-5 md:m-auto   `}>
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between py-2 md:py-5">
          <div className="flex items-center space-x-12">
            {/* <img src={KreatoorsLogo} alt="Kreatoors Logo" className=" w-14 h-14" /> */}



            <KrLogoWithFlower />

            <ul className="hidden md:flex items-center space-x-8  font-normal  text-lg ">
              <li><a href="/" className="text-sub-gray hover:text-[#6B5B95]">Home</a></li>
              <li><Link to="/services" className="text-sub-gray hover:text-[#6B5B95]">Services</Link>
              </li>
              <li><Link to="/aboutus" className="text-sub-gray hover:text-[#6B5B95]">About us</Link></li>
              <li><Link to="/aiplatforms" className="text-sub-gray hover:text-[#6B5B95]">AI platforms</Link></li>
              <li><Link to="/contactus" className="text-sub-gray hover:text-[#6B5B95]">Contact us</Link></li>
            </ul>
          </div>
          <div className="hidden md:block">
            <Button className="bg-[#6B5B95] text-white px-6 py-2 rounded-full hover:bg-[#5A4A84]">
              Book a Discovery Call
            </Button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
}

