import React, { useState, useEffect, useRef } from "react";

const valueStatsContent = {
  stats: [
    {
      value: 80,
      description: "More Engagement Than Branded Content",
    },
    {
      value: 30,
      description: "More Credible Than CEO Communications",
    },
    {
      value: 20,
      description: "High Conversion Rates",
    },
  ],
};

const AnimatedValue = ({ value, isVisible }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isVisible) return; 

    let start = 0;
    const duration = 2000; 
    const stepTime = duration / value;

    const timer = setInterval(() => {
      start += 1;
      if (start >= value) {
        clearInterval(timer);
        start = value;
      }
      setDisplayValue(start);
    }, stepTime);

    return () => clearInterval(timer);
  }, [value, isVisible]); 

  return <>{displayValue}%</>;
};

const ValueStats = () => {
  const { title, subtitle, stats } = valueStatsContent;
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 } 
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
    <section ref={sectionRef} className="w-full bg-[#FFFFFF]">
      <div className="max-w-6xl mx-auto px-5 py-16 sm:py-20 md:py-28">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4 leading-tight">
          92% of <span className=" font-fairDisplay  font-semibold">Consumers Trust </span>recommendations from individuals over brands.
          </h2>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-normal leading-tight">
            {subtitle}
          </h2>
        </div>

        <div className="bg-primary-gradient rounded-2xl sm:rounded-3xl p-6 sm:p-8 mt-6 sm:mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 lg:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col">
                <div className="text-4xl sm:text-5xl lg:text-6xl text-white mb-3 sm:mb-4">
                  <AnimatedValue value={stat.value} isVisible={isVisible} />
                </div>
                <p className="text-base sm:text-lg lg:text-lg text-white">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueStats;
