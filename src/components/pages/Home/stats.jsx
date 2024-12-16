import React from 'react';

const Stats = () => {
  const stats = [
    {
      multiplier: "8x",
      description: "Content shared by employees receives 8x more engagement than content shared by brand channels"
    },
    {
      multiplier: "10x",
      description: "Employee social profiles have 10 times more followers than brand accounts"
    },
    {
      multiplier: "79%",
      description: "of Companies encouraging employee advocacy programs have seen enhanced online visibility and improved brand recognition."
    }
  ];

  return (

    <div className='bg-white'>

<div className="max-w-6xl mx-auto py-16 px-4 ">
      {/* Header Section */}
      <div className="flex flex-col gap-10 items-center justify-between ">
       
          <h2 className="text-4xl md:text-4xl   mb-2 text-center   ">
            Unleash the
            Power of <span className="font-playfair italic">Authentic Engagement</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="text-start bg-blue-custom-400 p-4  rounded-r-3xl">
            <div className="text-transparent bg-clip-text bg-primary-gradient text-4xl  font-semibold  mb-4">
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