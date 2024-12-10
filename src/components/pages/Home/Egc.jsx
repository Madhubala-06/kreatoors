import React from 'react';
import fluent_arrow from '../../../assets/images/fluent_arrow-growth-24-filled.png'
import fluent_people from '../../../assets/images/fluent_person-voice-24-filled.png'
import hand_shake from '../../../assets/images/streamline_business-handshake-solid.png'

const EGCSection = () => {
    const features = [
        {
            title: "Brand Stories, Told by Its Heroes",
            description: "Employee-created content that brings your company's authentic experiences and culture to life through personal storytelling.",
            icon: fluent_people
        },
        {
            title: "Trust Through Authenticity",
            description: "Transform customer perception by replacing polished corporate messaging with real employee insights and experiences.",
            icon: hand_shake
        },
        {
            title: "Your Brand Amplifier",
            description: "A strategic approach that transforms employees into brand ambassadors, extending reach and engagement beyond traditional marketing channels.",
            icon: fluent_arrow
        }
    ];
    return (
        <div className=" bg-blue-custom-400 ">


        
        <div className="max-w-6xl mx-auto px-4  py-20 ">
            <div className="text-center mb-12">
                


                <h2 className="text-4xl md:text-5xl max-w-5xl  mx-auto">
            What's 
            <span className="font-playfair font-semibold italic ml-2">Employee Generated Content (EGC)?</span>
          </h2>

            
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  py-5">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className=" bg-white p-5  rounded-lg rounded-tr-[40px]   shadow-sm  transition-shadow"
                    >
                        <div className="w-12 h-12 bg-primary-gradient rounded-full flex items-center justify-center text-white mb-6">
                            <img src={feature.icon} className=' w-6 h-6' ></img>
                        </div>
                        <h3 className="text-[21px] font-semibold mb-3  max-w-72">{feature.title}</h3>
                        <p className=" text-sub-gray  max-w-72 text-[17px]">{feature.description}</p>
                    </div>
                ))}
            </div>

            <button className="flex mx-auto items-center justify-center mt-10 px-6 py-4 rounded-full font-medium transition-all duration-300 bg-primary-gradient text-white">
  <span className="mr-2">Explore EGC Now</span>
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
    className="stroke-white"
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
</button>

        </div>
        </div>
    );
};

export default EGCSection;