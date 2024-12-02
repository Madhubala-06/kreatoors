import React from 'react';
import RightArrow from '../../../assets/images/Arrow 1.svg'

const ComingSoonSection = () => {
  return (
    <div className="w-full bg-cta-gradient py-16 px-4 md:px-8 rounded-t-[50px]">
      <div className="max-w-6xl mx-auto">
        <div className="relative bg-primary-gradient rounded-3xl p-8 md:p-12 mb-16 flex md:gap-1">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-4xl font-medium text-white mb-4 max-w-2xl">
              Coming Soon: The Future of
              <span className="italic font-fairDisplay ml-2">Personal Branding</span>
            </h2>

            <p className="text-white/90 text-sm md:text-base mb-8 max-w-xl">
              Revolutionize how you build and manage your personal brand with our
              AI-Powered Personal Branding Platform
            </p>

            <div className="flex flex-col sm:flex-row items-center">
              <div className="flex justify-between md:w-3/4 items-center gap-4 mb-4 sm:mb-0 bg-[#9794D8] px-2 pl-4 py-2 rounded-full">
                <input
                  type="email"
                  placeholder="Join the waitlist now"
                  className="bg-transparent w-4/5 text-white placeholder-white outline-none border-none focus:ring-0 focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-white text-blue-custom-700 px-6 py-2 rounded-full font-semibold hover:bg-purple-50 transition-colors">
                  Join
                </button>
              </div>

            </div>
          </div>

          <div className="md:w-72 hidden md:flex flex-col gap-6 pt-6">
            {/* Animated Arrow */}
            <img
              src={RightArrow}
              alt="Decorative arrow"
              className="w-48 opacity-60 animate-bounce"
            />
            <div className="flex items-center gap-2 w-auto ml-20 font-semibold text-blue-custom-700 bg-white px-4 py-3 rounded-full">
              <span className="">Check</span>
              <a
                href="https://kreatoors.ai"
                className="underline transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Kreatoors.ai
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonSection;
