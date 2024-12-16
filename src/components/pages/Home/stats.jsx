import React from 'react';

const Stats = () => {
  const stats = [
    {
      multiplier: "8x",
      description: "More Engagement Than Branded Content"
    },
    {
      multiplier: "3x",
      description: "More Credible Than CEO Communications"
    },
    {
      multiplier: "2x",
      description: "Higher Conversion Rates"
    }
  ];

  return (

    <div className='bg-white'>

<div className="max-w-6xl mx-auto py-16 px-4 ">
      {/* Header Section */}
      <div className="flex flex-col  md:flex-row gap-10 items-center justify-between ">
       
          <h2 className="text-4xl md:text-4xl   mb-2    w-2/5">
            Unleash the
            <br />
            Power of <span className="font-playfair italic">Authentic</span>
            <br />
            <span className="font-playfair italic">Engagement</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="text-start">
            <div className="text-transparent bg-clip-text bg-primary-gradient text-5xl  font-semibold  mb-4">
              {stat.multiplier}
            </div>
            <p className=" text-sub-gray text-lg max-w-xs  text-start">
              {stat.description}
            </p>
          </div>
        ))}
  
        </div>

      </div>

   
   


    </div>
    </div>
    
  );
};

export default Stats;