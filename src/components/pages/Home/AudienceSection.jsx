import React, { useState } from 'react';

const AudienceSection = () => {
  const [activeTab, setActiveTab] = useState('Growth & Marketing Leaders');
  const [isContentVisible, setIsContentVisible] = useState(true);

  const handleTabChange = (tab) => {
    setIsContentVisible(false);
    setTimeout(() => {
      setActiveTab(tab);
      setIsContentVisible(true);
    }, 200);
  };


 
  const tabContent = {
    
    'Growth & Marketing Leaders': {
      title: 'Growth & Marketing Leaders',
      description: 'Drive organizational impact by transforming your employees into authentic brand voices. Unite internal and external communications to create measurable brand equity and business growth through strategic employee advocacy.',
      features: [
        'Strategic Content Programs: Implement company-wide content frameworks',
        'Advocacy Measurement: Track engagement, reach, and business impact',
        'Communications Integration: Align internal and external messaging',
        'Platform Optimization: Leverage technology for scalable engagement'
      ],
      ctaText: 'Amplify Your Brand Impact'
    },
    'People & Culture Teams': {
      title: 'People & Culture Teams',
      description: 'Build a thriving workplace culture where employee voices strengthen your employer brand. Transform internal communications into a powerful tool for engagement and retention. Leverage Employee-Generated Content to amplify your organization’s voice.',
      features: [
        'Culture Amplification: Showcase authentic workplace stories',
        'Employee Experience: Create engaging internal content programs',
        'Talent Attraction: Build compelling employer brand narratives',
        'Team Brand: Build your personal brand as a trusted leader and the professional brand of your team.'
      ],
      ctaText: 'Build Authentic Engagement'
    },


    'Corporate Leaders': {
      title: 'Corporate Leaders',
      description: 'Transform your leadership voice into organizational influence. Build a distinctive personal brand that drives business growth while empowering your teams to become powerful brand ambassadors.',
      features: [
        'Thought Leadership: Position yourself as a trusted industry voice',
        'Strategic Alignment: Unite personal and organizational branding',
        'Team Amplification: Lead and inspire employee advocacy',
        'Executive Presence: Build visibility through speaking and content',
        'Impact Measurement: Track how leadership visibility drives growth'
      ],
      ctaText: 'Lead With Influence.'
    },

    'Entrepreneurs & Coaches': {
      title: 'Entrepreneurs & Coaches',
      description: 'Turn your expertise into a scalable brand that attracts premium clients. Build authority through strategic content while focusing on what you do best - delivering value.',
      features: [
        'Strategic Content: Create content that converts expertise into leads',
        'Save Time Through Automation: Build systems for consistent growth without the time drain ',
        'Authority Building: Position your unique methodology through thought leadership',
        'Client Attraction: Develop a brand that draws premium opportunities',
        'Community Growth: Build engaged networks that drive referrals'
      ],
      ctaText: 'Scale Your Expert Brand'
    },

    'Employees': {
      title: 'Employees',
      description: "Amplify your professional growth while contributing to your organization's success. Build your personal brand and expertise through authentic content creation and strategic networking.",
      features: [
        'Personal Growth: Develop your professional voice and industry presence',
        'Content Creation: Learn to share compelling workplace stories and insights',
        'Communications Integration: Align internal and external messagingCareer Development: Position yourself as a subject matter expert',
        'Network Building: Connect with peers and industry leaders authentically',
         'Impact Measurement: Track how your content drives engagement and growth'
   
      ],
      ctaText: 'Build Your Career Brand'
    },
  };

  return (
    <div className="w-full bg-[#F9F7FD] py-20 ">
      <div className="max-w-6xl mx-auto px-4  ">
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-center mb-8">
          Who Do We <span className="font-fairDisplay font-semibold">Empower?</span>
        </h1>
        <p className="text-center mx-auto text-gray-600 mb-8 max-w-xl">
          Whether you're leading teams, building a consultancy, or driving organizational growth, 
          we help authentic voices create lasting impact.
        </p>

        <div className="flex flex-wrap justify-evenly mb-8 bg-white p-6 rounded-full">
          {Object.keys(tabContent).map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 ${
                activeTab === tab
                  ? 'bg-primary-gradient text-white shadow-lg'
                  : 'text-black hover:bg-gray-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="relative">
          <div
            className={`bg-white p-10 rounded-lg shadow-sm border border-gray-100 transition-all duration-300 ease-in-out transform ${
              isContentVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }`}
          >
            <h2 className="text-3xl font-medium mb-4">{tabContent[activeTab].title}</h2>
            <p className="text-gray-600 mb-6">{tabContent[activeTab].description}</p>

            <div className="mb-8">
              <h3 className="text-[#6C69B1] font-medium mb-4">What This Looks Like:</h3>
              <ul className="space-y-3">
                {tabContent[activeTab].features.map((feature, index) => (
                  <li
                    key={index}
                    className={`text-gray-600 transform transition-all duration-300 ease-in-out delay-${
                      index * 100
                    }`}
                  >
                    • {feature}
                  </li>
                ))}
              </ul>
            </div>

            <button className="bg-primary-gradient text-sm md:text-lg text-white px-6 py-3 rounded-full transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105">
              {tabContent[activeTab].ctaText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudienceSection;