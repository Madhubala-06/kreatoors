'use client';

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import kr from '../../assets/images/logo/kr.png';
import eato from '../../assets/images/logo/eato.png';
import flower from '../../assets/images/logo/flower.png';
import rs from '../../assets/images/logo/rs.png';

const Logo = () => {
  const [isRotating, setIsRotating] = useState(true);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsRotating(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    navigate('/'); 
  };

  return (
    <div
      className="h-auto w-auto flex items-end cursor-pointer"
      onClick={handleClick} 
    >
      <img src={kr} alt="Kr Logo" className="h-7 object-contain" />
      <img src={eato} alt="Eato Logo" className="h-7  object-contain  -ml-0.5" />
      <img
        src={flower}
        alt="Flower"
        style={{
          transform: isRotating ? 'rotate(0deg)' : 'rotate(360deg)',
          transition: isRotating
            ? 'transform 0.10s ease-in-out'
            : 'transform 5s linear',
        }}
        className=" h-4  mb-1 mx-[0.5px]  object-contain"
      />
      <img src={rs} alt="Rs Logo" className="h-7 object-contain" />
    </div>
  );
};

export default Logo;
