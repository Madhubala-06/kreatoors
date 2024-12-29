import Button from '../../common/Button';
import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, PlusIcon, MinusIcon, CheckIcon, ArrowUpRight } from 'lucide-react';

import personal_branding from '../../../assets/images/strategic-solution/personal branding.jpg';
import employee_advocacy from '../../../assets/images/strategic-solution/employee_adocarcy.jpg'

import employer_development from '../../../assets/images/strategic-solution/employer-brand-developmentemployer-brand-development.png'
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
    ctaTitle,
    index

}) => {
    const [openSection, setOpenSection] = useState(coreServices[0]?.id || '');
    const [hasAnimated, setHasAnimated] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'instant',
        });
        navigate('/contactus');
    };

    useEffect(() => {
        setOpenSection(coreServices[0]?.id || '');
    }, [coreServices]);

    useEffect(() => {
        setHasAnimated(false);
        const timer = setTimeout(() => {
            setHasAnimated(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, [coreServices]);


    const HeroSection = () => (



        <section className="py-10 px-4 md:px-6 lg:px-8 ">
            <div className="container mx-auto max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
                    <div className="flex flex-col justify-between space-y-10">
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
                        <div
                            className={`relative mr-10  ${!hasAnimated ? 'animate-slideInFromBottom' : ''}`}
                            style={{
                                animation: !hasAnimated ? "slideInFromBottom 1s ease-out" : "none",
                            }}
                        >
                            <img
                                src={heroImage}
                                alt={description}
                                className={`w-full  object-cover rounded-xl ${(index == 1 || index == 3) ? "   h-72 " : "h-full"}`}
                                style={{
                                    boxShadow: "16px 16px 0px 0px rgba(219, 216, 246, 1)",
                                }}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col  justify-between">
                        <div className="space-y-6 pb-6 ">
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
                                            <img src={minus} className="h-6 w-6" alt="Collapse icon" />
                                        ) : (
                                            <img src={plus} className="h-6 w-6" alt="Expand icon" />
                                        )}
                                    </button>
                                    <div
                                        className={`grid transition-all duration-200 ease-in-out ${openSection === service.id ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                                    >
                                        <div className="overflow-hidden">
                                            <p className="pb-4 text-sub-gray px-10">{service.description}</p>
                                            {service.content && (
                                                <div className="px-10 pb-6 space-y-2">
                                                    {service.content.map((item, index) => (
                                                        <div key={index} className="flex max-w-lg md:max-w-sm">
                                                            <span className="text-sub-gray mr-2">•</span>
                                                            <p className="text-sub-gray">{item}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button
                            onClick={handleClick}
                            className="w-full py-3 px-6 bg-primary-gradient text-white rounded-full transition-all duration-300 hover:scale-105"
                        >
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
                title: "Community Design and Development",
                image: community_design_development,
                link: "/services/4"
            },

            {
                id: 5,
                title: "Internal Communications",
                image: internal_communication,
                link: "/services/5"
            },



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
                    <h2 className="text-4xl mb-12 text-center">
                        Other <span className="font-playfair italic ">Services</span>
                    </h2>

                    <div className="relative overflow-hidden">
                        <div className={`flex gap-6 animate-marquee`}>
                            {[...otherServices, ...otherServices].map((service, index) => (
                                <div
                                    key={index}
                                    className="flex-none w-[460px] group"
                                    onClick={() => {
                                        window.scrollTo({
                                            top: 0,
                                            behavior: 'instant',
                                        });
                                        navigate(service.link);
                                    }}
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
                                                <div className="shadow-lg p-2 cursor-pointer rounded-full w-12 h-12 flex items-center justify-center bg-white 
                                transition-transform duration-300 transform hover:scale-110 hover:bg-blue-custom-100"
                                                >
                                                    <ArrowUpRight className="text-blue-custom-700 h-7 w-7" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <style jsx>{`
    .animate-marquee {
        display: flex;
        animation: marquee 50s linear infinite;
    }

    @keyframes marquee {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(-100%);
        }
    }

    .relative.overflow-hidden > .animate-marquee {
        width: calc(200% + 1px); 
    }
`}</style>

                </div>


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
                className="impact-section py-10 px-4 md:px-8 w-full bg-white overflow-hidden"
            >
                <div className="container mx-auto max-w-6xl">
                    <div className="arrow flex justify-center   h-48">
                        <img src={arrow} className="  py-10" alt="Arrow" />
                    </div>

                    <div className="content">
                        <h2 className="text-3xl md:text-4xl text-center mb-12">
                            <span className="font-playfair ">Impact</span> & ROI
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {impactItems.map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-blue-custom-400 rounded-xl p-5 flex flex-col items-start space-y-4 transition-all duration-300 hover:bg-blue-custom-500 hover:scale-105 hover:shadow-lg"
                                >
                                    <div className="w-8 h-8 bg-primary-gradient rounded-full flex items-center justify-center">
                                        <CheckIcon className="w-5 h-5 text-white" />
                                    </div>
                                    <h4 className="text-gray-700 font-medium max-w-52">
                                        {item}
                                    </h4>
                                </div>

                            ))}
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
                        <a href='https://calendly.com/coachingwitharzo/free-discovery-call' target='_blank'>
                            <button

                                className={`
                                bg-white text-blue-custom-700 px-6 py-3.5 
                                rounded-full font-semibold hover:bg-purple-50 
                                transition-all duration-700 ease-out delay-400
                               hover:scale-105 
                                ${isVisible
                                        ? 'opacity-100 translate-y-0 scale-100'
                                        : 'opacity-0 translate-y-5 scale-95'
                                    }
                            `}
                            >


                                Book a Free Audit
                            </button>
                        </a>
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