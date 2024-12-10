import Button from '../../common/Button';
import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, PlusIcon, MinusIcon, CheckIcon, ArrowUpRight } from 'lucide-react';

import personal_branding from '../../../assets/images/strategic-solution/personal branding.png';
import employee_advocacy from '../../../assets/images/strategic-solution/employee_adocarcy.jpg'

import employer_development from '../../../assets/images/strategic-solution/employer-brand-development.jpg'
import internal_communication from '../../../assets/images/strategic-solution/internal-communications.png'
import community_design_development from '../../../assets/images/strategic-solution/community-design-development.png'

import arrow from '../../../assets/images/Arrow 2.png'
import plus from '../../../assets/images/plus.png'
import minus from '../../../assets/images/minus.png'

const ServiceSection = ({
    h1,
    description,
    heroImage,
    coreServices,
    buttontxt,
    impactItems,
    ctaTitle

}) => {
    const [openSection, setOpenSection] = useState(coreServices[0]?.id || '');
    const [hasAnimated, setHasAnimated] = useState(false);
    // const [openSection, setOpenSection] = useState('');

    useEffect(() => {
        // Set hasAnimated to true after initial render
        const timer = setTimeout(() => {
            setHasAnimated(true);
        }, 1000); // Match the animation duration

        return () => clearTimeout(timer);
    }, []); // Empty dependency array ensures this runs only once on mount

    // Hero Section
    const HeroSection = () => (
        <section className="py-10 px-4 md:px-6 lg:px-8 ">
            <div className="container mx-auto max-w-6xl ">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Left Column */}
                    <div className="space-y-10">
                        {/* Text Div */}
                        <div
                            className={`space-y-10 lg:pr-8 ${!hasAnimated ? 'animate-slideInFromTop' : ''}`}
                            style={{
                                animation: !hasAnimated ? "slideInFromTop 1s ease-out" : "none",
                            }}
                        >
                            {h1}
                            <p className="text-sub-gray text-base md:text-lg max-w-xl">
                                {description}
                            </p>
                        </div>

                        {/* Image Div */}
                        <div
                            className={`relative mr-10 ${!hasAnimated ? 'animate-slideInFromBottom' : ''}`}
                            style={{
                                animation: !hasAnimated ? "slideInFromBottom 1s ease-out" : "none",
                            }}
                        >
                            <img
                                src={heroImage}
                                alt={description}
                                className="w-full h-auto object-cover rounded-xl"
                                style={{
                                    boxShadow: "16px 16px 0px 0px rgba(219, 216, 246, 1)",
                                }}
                            />
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className='flex flex-col justify-between'>
                        <div className="space-y-6 pb-6">
                            {coreServices.map((service) => (
                                <div
                                    key={service.id}
                                    className="bg-blue-custom-400 rounded-2xl"
                                >
                                    <button
                                        onClick={() => setOpenSection(openSection === service.id ? '' : service.id)}
                                        className="w-full py-4 px-10 flex justify-between items-center text-left transition-colors"
                                    >
                                        <span className="text-lg font-medium text-gray-900">{service.title}</span>
                                        {openSection === service.id ? (
                                    
                                            <img src={minus} className=' h-6 w-6'></img>
                                        ) : (
                                           
                                            <img src={plus} className=' h-6 w-6'></img>
                                        )}
                                    </button>

                                    <div
                                        className={`grid transition-all duration-200 ease-in-out ${openSection === service.id ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                                    >
                                        <div className="overflow-hidden">
                                            <p className='pb-4 text-sub-gray px-10'>{service.description}</p>

                                            {service.content && (
                                                <div className="px-10 pb-6 space-y-2">
                                                    {service.content.map((item, index) => (
                                                        <p key={index} className="text-sub-gray pl-4">
                                                            • {item}
                                                        </p>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="w-full py-3 px-6 bg-primary-gradient text-white rounded-full transition-all duration-300">
                            {buttontxt}
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );


    
    const OtherServices = () => {
        const { index } = useParams();
        const currentIndex = parseInt(index);
        const scrollContainerRef = useRef(null);
        const [isScrolling, setIsScrolling] = useState(false);
    
        const services = [
            {
                id: 1,
                title: "Personal Branding & Corporate Influencing",
                image: personal_branding,
                link: "/services/1"
            },
            {
                id: 2,
                title: "Employee Content and Advocacy",
                image: employee_advocacy,
                link: "/services/2"
            },
            {
                id: 3,
                title: "Employer Brand Development",
                image: employer_development,
                link: "/services/3"
            },
            {
                id: 4,
                title: "Internal Communications",
                image: internal_communication,
                link: "/services/4"
            },
            {
                id: 5,
                title: "Community Design and Development",
                image: community_design_development,
                link: "/services/5"
            }
        ];
    
        const otherServices = services.filter(service => service.id !== currentIndex);
    
        useEffect(() => {
            const container = scrollContainerRef.current;
            
            const checkScroll = () => {
                if (container) {
                    setIsScrolling(container.scrollLeft > 0);
                }
            };
    
            container?.addEventListener('scroll', checkScroll);
            return () => container?.removeEventListener('scroll', checkScroll);
        }, []);
    
        return (
            <div className="w-full py-16 bg-blue-custom-400">
                <div className={`mx-auto px-4  `}>
                    <h2 className="text-4xl mb-12 md:ml-48">
                        Other <span className="font-playfair italic font-semibold">Services</span>
                    </h2>
    
                    {/* Services Container */}
                    <div className="relative">
                        <div 
                            ref={scrollContainerRef}
                            className={`flex gap-6 overflow-x-auto hide-scrollbar transition-all duration-300 ${isScrolling ? 'md:ml-0' : 'md:ml-48  '}`}
                        >
                            {otherServices.map((service) => (
                                <Link
                                    key={service.id}
                                    to={service.link}
                                    className="flex-none w-[460px] group"
                                >
                                    <div className="overflow-hidden">
                                        <div className="relative h-[300px] overflow-hidden">
                                            <img
                                                src={service.image}
                                                alt={service.title}
                                                className="w-full h-full object-cover rounded-2xl"
                                            />
                                        </div>
                                        <div className="py-7">
                                            <div className="flex justify-between">
                                                <h3 className="text-xl font-normal">{service.title}</h3>
                                                <div className="shadow-lg p-2 cursor-pointer rounded-full w-12 h-12 flex items-center justify-center">
                                                    <ArrowUpRight className="text-blue-custom-700 h-7 w-7" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
    
                <style jsx>{`
                    .hide-scrollbar {
                        -ms-overflow-style: none;
                        scrollbar-width: none;
                    }
                    .hide-scrollbar::-webkit-scrollbar {
                        display: none;
                    }
                `}</style>
            </div>
        );
    };
    



    const ImpactItems = () => {
        const sectionRef = useRef(null);


        useEffect(() => {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('animate-in');
                        }
                    });
                },
                { threshold: 0.2 }
            );

            if (sectionRef.current) {
                observer.observe(sectionRef.current);
            }

            return () => {
                if (sectionRef.current) {
                    observer.unobserve(sectionRef.current);
                }
            };
        }, []);

        return (
            <section
                ref={sectionRef}
                className="impact-section py-16 px-4 md:px-8 w-full bg-white overflow-hidden"
            >
                <div className="container mx-auto max-w-6xl">
                    <div className="arrow flex justify-center mb-8">
                        <img src={arrow} className="h-72 py-10" alt="Arrow" />
                    </div>

                    <div className="content">
                        <h2 className="text-3xl md:text-4xl text-center mb-12">
                            <span className="font-playfair font-semibold">Impact</span> & ROI
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {impactItems.map((item, index) => (
                                <div
                                    key={index}
                                    className="  bg-blue-custom-400 rounded-xl p-5 flex flex-col items-start space-y-4"
                                >
                                    <div className="w-8 h-8 bg-primary-gradient rounded-full flex items-center justify-center">
                                        <CheckIcon className="w-5 h-5 text-white" />
                                    </div>
                                    <h4 className="text-gray-700 font-medium   max-w-52">
                                        {item}
                                    </h4>
                                </div>
                            ))}
                        </div>

                        <div className=" mt-10 text-center">
                            <button className="px-8 py-3 bg-primary-gradient text-white rounded-full transition-all duration-300">
                                Build Your Influence
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        );
    };




    const CTASection = () => {
        const [isVisible, setIsVisible] = useState(false);
        const sectionRef = useRef(null);

        useEffect(() => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                },
                {
                    threshold: 0.5
                }
            );

            if (sectionRef.current) {
                observer.observe(sectionRef.current);
            }

            return () => {
                if (sectionRef.current) {
                    observer.unobserve(sectionRef.current);
                }
            };
        }, []);

        return (
            <div ref={sectionRef} className="w-full py-16 px-4 md:px-8 rounded-t-[50px]">
                <div className="max-w-6xl mx-auto">
                    <div
                        className={`
                            gap-y-3 flex-col bg-primary-gradient rounded-3xl 
                            p-8 md:p-12 flex items-center text-center
                            transition-all duration-700 ease-out
                            ${isVisible
                                ? 'opacity-100 translate-y-0 scale-100'
                                : 'opacity-0 translate-y-10 scale-95'
                            }
                        `}
                    >
                        {ctaTitle}

                        <p
                            className={`
                                text-white/90 text-sm md:text-base mb-8 
                                max-w-xl mx-auto text-center mt-5
                                transition-all duration-700 ease-out delay-200
                                ${isVisible
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-5'
                                }
                            `}
                        >
                            Connect with our experts to find the right solution for your business.
                        </p>

                        <button
                            className={`
                                bg-white text-blue-custom-700 px-6 py-3.5 
                                rounded-full font-semibold hover:bg-purple-50 
                                transition-all duration-700 ease-out delay-400
                                ${isVisible
                                    ? 'opacity-100 translate-y-0 scale-100'
                                    : 'opacity-0 translate-y-5 scale-95'
                                }
                            `}
                        >
                            Schedule a Consultation Today
                        </button>
                    </div>
                </div>
            </div>
        );
    };


    return (
        <div className="min-h-screen bg-white pt-16 ">
            <HeroSection />
            <ImpactItems />
            <CTASection />
            <OtherServices />
        </div>
    );
};

export default ServiceSection;