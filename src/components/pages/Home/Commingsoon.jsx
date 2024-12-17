import React from 'react';
import RightArrow from '../../../assets/images/Arrow 1.svg'

const ComingSoonSection = ({ isAboutUs }) => {
  return (
    <div
      className={`w-full ${
        isAboutUs ? 'bg-cta-gradient' : 'bg-white'
      } py-20 px-4 md:px-8 rounded-t-[50px]`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="relative bg-primary-gradient rounded-3xl p-8 md:p-12 flex md:gap-10">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-4xl font-medium text-white  max-w-2xl">
              Coming Soon: AI-Powered Employee Advocacy <span className='inline-block  mt-3'>Meets  <span className="italic font-playfair ml-2 ">Personal Branding.</span></span>
            </h2>

            {/* <h2 className="text-4xl md:text-5xl max-w-2xl mb-6 mx-auto">
            Coming Soon: The Future of<br />
            <span className="font-playfair  italic blo">Personal Branding</span>
          </h2> */}


            <p className=" text-white/90 text-base md:text-lg my-8 max-w-xl">
              Revolutionize how you build and manage your personal brand with our AI-Powered Personal Branding Platform
            </p>

            <div className="flex flex-col sm:flex-row items-center">
              <form
                action="mailto:hello@kreatoors.com"
                method="post"
                enctype="text/plain"
                className="flex justify-between md:w-3/4 items-center gap-4 mb-4 sm:mb-0 bg-[#9794D8] px-2 pl-4 py-2 rounded-full"
              >
                <input
                  type="text"
                  name="text"
                  placeholder="Join the waitlist now"
                  className="bg-transparent w-4/5 text-white placeholder-white outline-none border-none focus:ring-0 focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  className="bg-white text-blue-custom-700 px-6 py-2 rounded-full font-semibold hover:bg-purple-50 transition-colors"
                >
                  Join
                </button>
              </form>


            </div>
          </div>

          <div className="md:w-72 hidden md:flex flex-col gap-6 pt-10 ">
            {/* <img
              src={RightArrow}
              alt="Decorative arrow"
              className=" w-40 opacity-60 animate-bounce"
            /> */}

<img
  src={RightArrow}
  alt="RightArrow"
  className="w-40 opacity-60"
  style={{
    animation: 'floatCurved 4s ease-in-out infinite, drawAttention 2s ease-in-out infinite',
    transformOrigin: 'center'
  }}
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
