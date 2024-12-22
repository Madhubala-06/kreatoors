import React from 'react';
import clarity_employee from '../../../assets/images/strategic-solution/clarity_employee-solid.png'
import arrow_growth from '../../../assets/images/strategic-solution/uil_arrow-growth.png'
import brand_development from '../../../assets/images/strategic-solution/material-symbols_energy-program-time-used-outline-rounded.png'
import { useNavigate } from 'react-router-dom';

import community_development from '../../../assets/images/strategic-solution/ri_user-community-fill.png'
import internal_communications from '../../../assets/images/strategic-solution/healthicons_communication.png'
import ai_powered_ecg from '../../../assets/images/strategic-solution/ri_quill-pen-ai-fill.png'
import arrow from '../../../assets/images/lucide_arrow-up.svg'
  ;

const BrandSolutionsLanding = () => {
  const navigate = useNavigate();

  const solutions = [
    {
      id: 1,
      title: "Personal Branding & Corporate Influencing",
      buttonText: "Start Your Brand Journey",
      icon: arrow_growth
    },
    {
      id: 2,
      title: "Employee Content Creation & Advocacy",
      buttonText: "Build Your EGC Strategy",
      icon: clarity_employee
    },
    {
      id: 3,
      title: "Employer Brand Development",
      buttonText: "Build Your Employer Brand",
      icon: brand_development
    },
    {
      id: 4,
      title: "Community Design & Development ",
      buttonText: "Build Your Community",
      icon: community_development
    },
    {
      id: 5,
      title: "Internal Communications",
      buttonText: "Break Your Silos",
      icon: internal_communications
    },
    {
      id: 6,
      title: `COMING SOON: AI-Powered Platform`,
      buttonText: "Join the Waitlist",
      icon: ai_powered_ecg
    }
  ];

  const handleServiceClick = (id) => {
    if (id === 6) {
      window.location.href = "https://kreatoors.com/";
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'instant',
      });
      navigate(`/services/${id}`);
    }
  };

  return (
    <div className=" bg-blue-custom-400 py-20 px-5 md:px-0" id="strategic-solutions">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6 mx-auto text-center">
            Services & Solutions To
            <span className="block mt-3">
              <span className="font-playfair italic">Amplify</span> Your
              <span className="font-playfair italic"> Brand</span> and Culture
            </span>
          </h2>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:mx-5 gap-6">
          {solutions.map((solution) => {

            const formattedTitle = solution.id === 6
              ? solution.title.split(':').map((part, index) => (
                <React.Fragment key={index}>
                  {index === 0 ? <>{part}:<br /></> : part}
                </React.Fragment>
              ))
              : solution.title;
            return (
              <div
                key={solution.id}
                onClick={() => handleServiceClick(solution.id)}
                className="relative cursor-pointer overflow-hidden rounded-xl transition-all duration-500 ease-in-out group"
              >
                <div className="absolute inset-0 bg-white transition-opacity duration-500 ease-in-out" />
                <div className="absolute inset-0 bg-primary-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out" />

                {/* Content */}
                <div className="relative p-7 h-full flex flex-col justify-between z-10">
                  <div className="h-2/3">
                    <div
                      className="bg-blue-custom-400 p-2 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 transform transition-transform duration-300 ease-in-out group-hover:scale-105"
                    >
                      <img
                        src={solution.icon}
                        alt={solution.icon}
                        className="w-6 h-6 transition-transform duration-300 ease-in-out"
                      />
                    </div>
                    <h3 className="text-xl my-6 max-w-60 font-medium text-black transition-colors duration-500 ease-in-out group-hover:text-white">
                      {formattedTitle}
                    </h3>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="font-semibold text-[16px] text-blue-custom-700 transition-colors duration-500 ease-in-out group-hover:text-white flex items-center gap-2">
                      {solution.buttonText}
                    </p>
                    <div
                      className="bg-blue-custom-800 p-2 cursor-pointer rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 transform translate-x-4 transition-all duration-500 ease-in-out group-hover:translate-x-0"
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
            );
          })}
        </div>

      </div>
    </div>
  );
};


export default BrandSolutionsLanding;