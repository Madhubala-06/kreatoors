import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
const useCounter = (end, duration = 10000, shouldStart) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const frameRef = useRef(0);
  const startTimeRef = useRef(0);



  useEffect(() => {

    if (!shouldStart) return;

    const animate = (timestamp) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      const progress = timestamp - startTimeRef.current;
      const percentage = Math.min(progress / duration, 1);
      
      const easeOutQuad = (t) => t * (2 - t);
      const easedProgress = easeOutQuad(percentage);
      
      countRef.current = Math.min(Math.floor(easedProgress * end), end);
      setCount(countRef.current);

      if (progress < duration) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [end, duration, shouldStart]);

  return count;
};

const useInView = () => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.1 
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return [ref, isInView];
};

const ValueStats = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'instant',
    });
    navigate('/contactus');
  };  
  const [ref, isInView] = useInView();
  const animatedValue = useCounter(92, 3000, isInView);

  return (
    <section className="w-full bg-white py-16" ref={ref}>
      <div className="max-w-6xl px-5 bg-primary-gradient text-white py-10 mx-5 md:mx-auto rounded-3xl">
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
            <span className="inline-block">
              <span className="inline-block min-w-[4ch]">{animatedValue}{"%"}</span> 
              of{" "}
              <span className="font-playfair italic font-normal pr-3">
                Consumers Trust
              </span>
              recommendations
            </span>
            <span className="block mt-2 sm:mt-4 md:mt-6">
              from individuals over brands.
            </span>
          </h1>
        </div>
        <div className="flex justify-center">
          <button onClick={handleClick} className="px-6 py-4 mt-10 rounded-full font-medium bg-white border border-border-gradient flex items-center justify-center space-x-2  transition-all duration-700 ease-out delay-400
                               hover:scale-105  ">
            <span className="text-blue-custom-700 font-semibold">Book Free Consultation </span>
            <span className="inline-block transform group-hover:translate-x-1 transition-transform text-blue-custom-700">
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
                className="lucide lucide-arrow-right"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ValueStats;