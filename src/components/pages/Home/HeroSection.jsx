import React from "react";
import Button from "../../common/Button";
import { useNavigate } from 'react-router-dom';

import StyleWrapper from "./ImageAnimation";
export default function Hero({ onCTAClick }) {

  const navigate = useNavigate();

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'instant',
    });
    navigate('/contactus');
  };
  return (
    <>
      <section className="py-16  pt-44 px-4 bg-blue-to-white-gradient ">
        <div className="container mx-auto text-center  py-10 ">
          <h2 className="text-4xl md:text-5xl max-w-2xl mb-6 mx-auto">
            Turn Employee Stories<br />
            <span className="mt-4 block">Into <span className="font-playfair  italic">Brand Power</span></span>
          </h2>

          <p className="text-lg md:text-xl text-sub-gray mb-8 max-w-4xl mt-7 mx-auto leading-8">
          Kreatoors helps you amplify your brand and culture with employee-driven content, 
          personal branding, corporate influencing and AI-powered solutions.          </p>

          <div className="flex flex-col md:flex-row gap-4 pt-5 justify-center">
            <Button onClick={handleClick} className="  transition-all duration-700 ease-out delay-400
                               hover:scale-105 ">Book a Free Audit </Button>
            <button  onClick={onCTAClick} className="group p-4 flex items-center border-2 text-blue-custom-700 border-blue-custom-800 justify-center px-6 py-4 rounded-full font-medium transition-all duration-300">
              <span className="mr-2">Explore Our Services</span>
              <p className="inline-block transform group-hover:translate-x-1 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </p>
            </button>

          </div>
        </div>
      </section>

      <StyleWrapper />
    </>
  );
}