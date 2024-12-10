import React, { useState, useEffect, useRef } from "react";



const ValueStats = () => {

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-6xl  px-5 bg-primary-gradient text-white py-10 mx-5 md:mx-auto  rounded-3xl">
        <div className="text-center ">


          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
            <span className="inline-block">
              92% of{" "}
              <span className="font-playfair italic font-semibold pr-3">
                Consumers Trust
              </span>
              recommendations
            </span>
            <span className="block mt-2 sm:mt-4 md:mt-6">
              from individuals over brands.
            </span>
          </h1>

        </div>
        <button className="px-6 py-4 mt-10 mx-5 md:mx-auto rounded-full font-medium  bg-white border border-border-gradient flex items-center justify-center space-x-2">
          <span className="text-blue-custom-700 font-semibold ">Learn More</span>
          <span className="inline-block transform group-hover:translate-x-1 transition-transform text-blue-custom-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-right"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </span>
        </button>

      </div>
    </section>
  );
};

export default ValueStats;
