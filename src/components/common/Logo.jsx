'use client';

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import kr from '../../assets/images/logos/Kr.png';
import eato from '../../assets/images/logos/eato.png';
import flower from '../../assets/images/logos/flower.png';
import rs from '../../assets/images/logos/rs.png';

const Logo = () => {
  const [isRotating, setIsRotating] = useState(true);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsRotating(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    navigate('/'); // Specify your target path here
  };

  return (
    <div
      className="h-auto w-auto flex items-end cursor-pointer"
      onClick={handleClick} // Handle click to navigate
    >
      <img src={kr} alt="Kr Logo" className="h-7 object-contain" />
      <img src={eato} alt="Eato Logo" className="h-6 -ml-1 object-contain pt-0.5" />
      <img
        src={flower}
        alt="Flower"
        style={{
          transform: isRotating ? 'rotate(0deg)' : 'rotate(360deg)',
          transition: isRotating
            ? 'transform 0.2s ease-in-out'
            : 'transform 5s linear',
        }}
        className="h-5 mx-0.5 object-contain"
      />
      <img src={rs} alt="Rs Logo" className="h-[17px] object-contain" />
    </div>
  );
};

export default Logo;
