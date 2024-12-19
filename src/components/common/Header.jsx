'use client';
import Button from "./Button";
import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import Logo from "./Logo";


import clarity_employee from '../../assets/images/strategic-solution/clarity_employee-solid.png'
import arrow_growth from '../../assets/images/strategic-solution/uil_arrow-growth.png'
import brand_development from '../../assets/images/strategic-solution/material-symbols_energy-program-time-used-outline-rounded.png'


import community_development from '../../assets/images/strategic-solution/ri_user-community-fill.png'
import internal_communications from '../../assets/images/strategic-solution/healthicons_communication.png'
import ai_powered_ecg from '../../assets/images/strategic-solution/ri_quill-pen-ai-fill.png'
const servicesDropdownItems = [
  { name: 'Personal Branding & Corporate Influencing', path: '/services/1', icon: arrow_growth },
  { name: 'Community Design & Management', path: '/services/4', icon: community_development },
  { name: 'Employee Content Creation & Advocacy', path: '/services/2', icon: clarity_employee },
  { name: 'Internal Communications', path: '/services/4', icon: internal_communications },

  { name: 'Employer Brand Development', path: '/services/3', icon: brand_development },
 
 
  { name: 'AI-Powered Platform', path: '/services/4', icon: ai_powered_ecg },

  
];

export default function Header({ isServices }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '#' },
    { name: 'About us', path: '/aboutus' },
    { name: 'AI Platform', path: '/aiplatform' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact us', path: '/contactus' },
  ];

  const handleServiceClick = (e) => {
    if (!isServicesHovered) {
      e.preventDefault();
    }
  };

  return (
    <header className="absolute top-10 left-0 right-0 z-50 max-w-6xl mx-5 md:mx-10 lg:mx-10 xl:mx-auto">
        <nav className="flex items-center justify-between py-3.5 md:py-5 px-5 bg-white rounded-full">
          <div className="flex items-center space-x-12">
            <Logo />

            <ul className="hidden xl:flex items-center space-x-8">
              {menuItems.map((item, index) => (
                item.name === 'Services' ? (
                  <li
                    key={index}
                    className="relative"
                    onMouseEnter={() => setIsServicesHovered(true)}
                    onMouseLeave={() => setIsServicesHovered(false)}
                  >
                    <button
                      onClick={handleServiceClick}
                      className="text-gray-600 hover:text-[#6B5B95] text-lg font-normal flex items-center space-x-1"
                    >
                      <span>{item.name}</span>
                      <svg
                        className={`w-4 h-4 transform transition-transform ${isServicesHovered ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {isServicesHovered && (
                      <div className="absolute top-full  md:-left-40  w-[40rem] bg-white rounded-2xl shadow-xl py-4 grid grid-cols-2 gap-4">
                        {servicesDropdownItems.map((subItem) => (
                          <NavLink
                            key={subItem.path}
                            to={subItem.path}
                            className={({ isActive }) =>
                              `flex items-center space-x-3 px-4 py-3 text-sm transition-colors ${
                                isActive
                                  ? 'text-[#6B5B95] '
                                  : 'text-gray-700  hover:text-[#6B5B95]'
                              }`
                            }
                          >
                            <div className="bg-blue-custom-400  p-3  rounded-full">
                            <img src={subItem.icon} className=" w-6 h-6  "/>
                            </div>
                            
                            <span className="font-normal max-w-40 text-sub-gray">{subItem.name}</span>
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </li>
                ) : (
                  <li key={index}>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `text-lg font-normal ${
                          isActive
                          ? 'text-transparent bg-clip-text bg-primary-gradient font-medium md:text-base lg:text-lg  text-center'
                          : 'text-sub-gray hover:text-[#6B5B95]  md:text-base lg:text-lg text-center '
    
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>
                  </li>
                )
              ))}
            </ul>
          </div>

          <div className="hidden xl:block">
            <a 
              href="https://calendly.com/coachingwitharzo/free-discovery-call" 
              target="_blank" 
              rel="noopener noreferrer"
              className=" bg-primary-gradient text-white px-6 py-3 rounded-full transition-all duration-700 ease-out hover:scale-105  transition-all duration-300 inline-block font-medium"
            >
              Book Free Discovery Call
            </a>
          </div>

          <button className="xl:hidden text-gray-600 p-2" onClick={toggleMobileMenu}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="xl:hidden bg-white rounded-b-2xl">
            <div className="px-5 py-4 space-y-3">
              {menuItems.map((item, index) => (
                item.name === 'Services' ? (
                  <div key={index}>
                    <button
                      onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                      className="flex items-center justify-between w-full text-gray-600 py-2"
                    >
                      <span>{item.name}</span>
                      <svg
                        className={`w-4 h-4 transform transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {isMobileServicesOpen && (
                      <div className="mt-2 space-y-2">
                        {servicesDropdownItems.map((subItem) => (
                          <NavLink
                            key={subItem.path}
                            to={subItem.path}
                            className={({ isActive }) =>
                              `flex items-center space-x-3 px-4 py-2 text-sm rounded-lg ${
                                isActive
                                  ? 'text-[#6B5B95] bg-purple-50'
                                  : 'text-gray-600 hover:bg-purple-50 hover:text-[#6B5B95]'
                              }`
                            }
                          >
                             <div className="bg-blue-custom-400  p-3  rounded-full">
                            <img src={subItem.icon} className=" w-6 h-6  "/>
                            </div>
                            <span>{subItem.name}</span>
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <NavLink
                    key={index}
                    to={item.path}
                    className={({ isActive }) =>
                      `block py-2 ${
                        isActive
                          ? 'text-[#6B5B95]'
                          : 'text-gray-600 hover:text-[#6B5B95]'
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                )
              ))}
              
              <a 
                href="https://calendly.com/coachingwitharzo/free-discovery-call" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full  bg-primary-gradient text-white px-6 py-3 rounded-full text-center hover:bg-[#5A4A84] transition-all duration-300 font-medium mt-4"
              >
                Book Free Discovery Call
              </a>
            </div>
          </div>
        )}
      
    </header>
  );
}