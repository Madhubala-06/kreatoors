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
  const { stats } = valueStatsContent;
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
    <section ref={sectionRef} className="w-full bg-blue-custom-400">
      <div className="max-w-6xl mx-auto px-5 py-16 sm:py-20 md:py-28">
        <div className="text-center mb-8 sm:mb-12">


          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
            <span className="inline-block">
              92% of{" "}
              <span className="font-fairDisplay italic font-semibold pr-3">
                Consumers Trust
              </span>
              recommendations
            </span>
            <span className="block mt-2 sm:mt-4 md:mt-6">
              from individuals over brands.
            </span>
          </h1>

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
