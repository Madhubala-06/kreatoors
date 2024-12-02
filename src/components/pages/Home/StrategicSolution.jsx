import React from 'react';
import clarity_employee from '../../../assets/images/strategic-solution/clarity_employee-solid.png'
import arrow_growth from '../../../assets/images/strategic-solution/uil_arrow-growth.png'
import brand_development from '../../../assets/images/strategic-solution/material-symbols_energy-program-time-used-outline-rounded.png'
import { useNavigate } from 'react-router-dom';

import community_development from '../../../assets/images/strategic-solution/ri_user-community-fill.png'
import internal_communications from '../../../assets/images/strategic-solution/healthicons_communication.png'
import ai_powered_ecg from '../../../assets/images/strategic-solution/ri_quill-pen-ai-fill.png'
import arrow from '../../../assets/images/lucide_arrow-up.svg'

const BrandSolutionsLanding = () => {
  const navigate = useNavigate();

  const solutions = [
    {
      id:1,
      title: "Employee Content & Advocacy",
      description: "Turn employee expertise into compelling content through proven frameworks, training, and AI-powered tools.",
      buttonText: "Build Your EGC Strategy",
      icon: clarity_employee
    },
    {
      id:2,
      title: "Personal & Leadership Branding",
      description: "Develop influential personal brands that drive business growth and industry authority.",
      buttonText: "Start Your Brand Journey",
      icon: arrow_growth
    },
    {
      id : 3,
      title: "Employer Brand Development",
      description: "Transform teams into authentic brand ambassadors with strategic advocacy programs aligned to business goals.",
      buttonText: "Launch Your Advocacy Program",
      icon: brand_development
    },
    {
      id : 4 , 
      title: "Community Design & Development ",
      description: "Create thriving professional networks through curated events, peer learning, and engagement programs.",
      buttonText: "Build Your Community",
      icon: community_development
    },
    {
      id : 5,
      title: "Internal Communications",
      description: "Align teams and build culture through strategic communication frameworks and engaging content programs",
      buttonText: "Transform Internal Comms",
      icon: internal_communications
    },
    {
      id :6 ,
      title: "AI-Powered EGC & Personal Branding Platform",
      description: "Streamline brand advocacy with intuitive platforms combining content management, analytics, and AI-powered tools.",
      buttonText: "Join the Waitlist",
      icon: ai_powered_ecg
    }
  ];


  const handleServiceClick = (id) => {
    navigate(`/services/${id}`);  
  };

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl max-w-xl mx-auto mb-4">
            Strategic Solutions for
          </h1>
          <span className="font-fairDisplay italic font-semibold ml-2 text-3xl sm:text-4xl md:text-5xl">
            Brand Amplification
          </span>
          <p className="text-sub-gray max-w-2xl mx-auto mt-5">
            Transform your organization's voice through employee-powered content,
            leadership branding, and authentic storytelling.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl transition-all duration-500 ease-in-out group"
            >
              {/* Background with gradient transition */}
              <div className="absolute inset-0 bg-blue-custom-500 transition-opacity duration-500 ease-in-out" />
              <div className="absolute inset-0 bg-primary-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out" />

              {/* Content */}
              <div className="relative p-6 h-full flex flex-col justify-between z-10">
                <div className="h-2/3">
                  <div className="flex items-center gap-3">
                    <div className="bg-white p-2 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 transform transition-transform duration-300 ease-in-out group-hover:scale-105">
                      <img
                        src={solution.icon}
                        alt=""
                        className="w-6 h-6 transition-transform duration-300 ease-in-out"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 transition-colors duration-500 ease-in-out group-hover:text-white">
                      {solution.title}
                    </h3>
                  </div>
                  <p className="my-6 text-sub-gray transition-colors duration-500 ease-in-out group-hover:text-[#FFFFFFCC]">
                    {solution.description}
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="font-semibold text-xl text-blue-custom-700 transition-colors duration-500 ease-in-out group-hover:text-white flex items-center gap-2">
                    {solution.buttonText}
                  </p>
                  <div className="bg-blue-custom-800 p-2 cursor-pointer rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 transform opacity-0 translate-x-4 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-x-0"
                   key={solution.id}
                   onClick={() => handleServiceClick(solution.id)}
                  >
                    <img
                      src={arrow}
                      alt=""
                      className="w-8 h-8"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandSolutionsLanding;