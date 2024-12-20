import React from 'react';
import Egc1 from '../../../assets/images/egc.png';
import Egc2 from '../../../assets/images/egc2.png';

const Section = ({ title, description, impacts, image, reverse, bgColor }) => {
  return (
    <div className={`flex flex-col lg:flex-row  justify-evenly  items-center  md:py-10 ${bgColor} rounded-2xl`}>
      {reverse && (
        <div className="lg:w-2/5 order-2 lg:order-1">
          <img src={image} alt={title} className="rounded-lg w-full object-cover p-10 lg:p-0" />
        </div>
      )}

      <div className={` ${reverse ? 'lg:w-1/2 order-1 lg:order-2 p-10 lg:p-0' : 'lg:max-w-[560px] p-10 lg:p-0'} `}>
        <p className="text-gray-700 mb-6">{description}</p>
        <div className="space-y-2">
          <h3 className="text-blue-custom-600 font-medium mb-3">Impact:</h3>
          <ul className="space-y-3 text-gray-700">
            {impacts.map((impact, index) => (

              <li key={index} className="flex  ">
              <span className="text-sub-gray mr-2">•</span>
              <p className="text-sub-gray">
              {impact}
              </p>
          </li>
            ))}




          </ul>
        </div>
      </div>

      {!reverse && (
        <div className="lg:w-2/5">
          <img src={image} alt={title} className="rounded-lg w-full object-cover p-10 lg:p-0" />
        </div>
      )}
    </div>
  );
};

const EGCSection = () => {
  return (
    <>
      {/* EGC Section */}
      <div className="w-full bg-blue-custom-400 py-20">
        <section className="max-w-6xl rounded-2xl px-8 lg:px-8 mx-auto">
          <h2 className="text-3xl lg:text-4xl mb-12">
            What's <span className="font-playfair">Employee Generated Content (EGC)?</span>
          </h2>
          <Section
            title="Employee Generated Content"
            description="EGC is authentic content created by your team, including posts, product demos, and success stories, reflecting genuine employee experiences."
            impacts={[
              'Creates trust through authentic employee voices',
              'Shows real workplace culture, not just corporate messaging',
              'Builds genuine connections with potential customers & talent',
              'Scales content creation naturally through your employees',
            ]}
            image={Egc1}
            bgColor="bg-white"
            reverse={false}
          />
        </section>
      </div>

      {/* Corporate Influencing Section */}
      <div className="bg-white py-20">
        <section className="rounded-2xl px-8 lg:px-8 max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl mb-12">
            What is <span className="font-playfair">Corporate Influencing?</span>
          </h2>
          <Section
            title="Corporate Influencing"
            description="Selected employees act as brand ambassadors, sharing insights and building trust, strengthening your brand's market position."
            impacts={[
              'Leverages expertise of leaders & key employees to build thought leadership',
              'Builds genuine brand authority in your industry',
              'Reaches decision-makers through peer-to-peer influence',
              'Drives quality leads through expert positioning',
            ]}
            image={Egc2}
            bgColor="bg-blue-custom-400"
            reverse={true}
          />
        </section>
      </div>
    </>
  );
};

export default EGCSection;
