import React from "react";
import Button from "../../common/Button";
import StyleWrapper from "./ImageAnimation";
export default function Hero() {
  return (
    <>
      <section className="pt-24 pb-10 px-4 bg-[#F8F0FD]">
        <div className="container mx-auto text-center max-w-5xl py-10">
          <h1 className="text-4xl md:text-6xl mb-6">
            Unleash Your Team's
            <span className="font-fairDisplay font-semibold block mt-5">
              Storytelling Potential
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mt-7 mx-auto leading-8">
            Empower employees to become authentic brand ambassadors through
            Employee-Generated Content, advocacy programs, and AI-powered tools.
          </p>

          <div className="flex flex-col md:flex-row gap-4 pt-5 justify-center">
            <Button>Start Your EGC Journey</Button>
            <Button variant="secondary" className="group p-4 flex items-center justify-center">
              <span className="mr-2">Explore More</span>
              <p className="inline-block transform group-hover:translate-x-1 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </p>
            </Button>

          </div>
        </div>
      </section>

      <StyleWrapper />
    </>
  );
}