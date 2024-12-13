import React from 'react';
import { useParams } from 'react-router-dom';
import personal_branding from '../../../assets/images/strategic-solution/personal branding.jpg'
import employee_advocacy from '../../../assets/images/strategic-solution/employee_adocarcy.jpg'
import ServiceSection from './ServiceSection';

import employer_development from '../../../assets/images/strategic-solution/employer-brand-developmentemployer-brand-development.png'
import internal_communication from '../../../assets/images/strategic-solution/internal-communications.png'
import community_design_development from '../../../assets/images/strategic-solution/community-design-development.png'


const servicesData = {
  1: {
    h1: <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] leading-tight">
      <span className="font-playfair italic ">
        Personal Branding &
      </span>
      <span className=" block mt-5">
        Corporate Influencing
      </span>
    </h1>,
    description: "Your personal brand is your most powerful asset in today's professional landscape. Elevate your Influence with a positioning as a trusted voice in your industry.",
    heroImage: personal_branding,
    coreServices: [
      {
        id: 'brand-strategy',
        title: 'Brand Strategy & Positioning',
        description: '    We craft your unique positioning as an industry voice through .',
        content: [
          'Executive brand positioning',
          'Leadership narrative development',
          'Strategic differentiation',
          'Industry authority mapping'
        ]
      },
      {
        id: 'digital-presence',
        title: 'Digital Leadership Presence',
        description: 'Transform your online presence into a magnet for opportunities:',
        content: [
          'Executive profile optimization',
          'Leadership story development',
          'Visual identity creation ',
          'Media presence building'
        ]
      },
      {
        id: 'content-strategy',
        title: 'Content Strategy & Creation',
        description: 'Convert your expertise into influential thought leadership through.',
        content: [
          'Content strategy development',
          'Industry insights creation',
          'Leadership content calendar',
          'Performance analytics'
        ]
      },
      {
        id: 'thought-leadership',
        title: 'Thought Leadership Development',
        description: 'We help establish you as a recognized industry voice & Thought Leader through:',
        content: [
          'Speaking opportunity sourcing',
          'Industry event positioning',
          'Media relationship building',
          'Expert network development'
        ]
      }
    ],
    impactItems: [
      "Increased visibility and opportunities", "Premium client/ partnership attraction", "Industry authority establishment", "Measurable brand growth"
    ]
    ,
    buttontxt: "Build your Influences",
    ctaTitle: <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px]  leading-tight  text-white">
      Ready to Turn Your Expertise into
      <span className=" block mt-5">
        Influence that  <span className="font-playfair italic ">
          Opens Doors?
        </span>
      </span>
    </h1>,
  },

  2: {
    h1: <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
      <span className="inline-block font-playfair italic  mr-2">
        Employee
      </span>
      <span> Content </span>
      <span className="mt-4 block">
        and Advocacy
      </span>
    </h1>,
    description: "Your employees are your brand's most powerful storytellers. Their authentic voices build trust, drive engagement, and create impact in ways traditional marketing cannot achieve.",
    heroImage: employee_advocacy,
    coreServices: [
      {
        id: 'strategic-foundation',
        title: 'Build Strategic Foundation',
        description: 'We create comprehensive programs that drive real impact through:',
        content: [
         
          "Program strategy and goals alignment",
          "AI-optimized templates", 
          "Strategic content calendars and themes"
        ]
      },

      {
        id: 'governance',
        title: 'Governance & Guidelines',
        description: 'We help you maintain brand integrity through:',
        content: [
          'Design of guidelines and policies',
          'Compliance frameworks',
          'Approval Workflows'
        ]
      },
      {
        id: 'content-excellence',
        title: 'Content Excellence',
        description: 'We equip your teams with skills and tools for impactful content creation:',
        content: [
          'Interactive storytelling workshops',
          'Content creation training & toolkits',
          'AI-powered content tools',
          'Best practice frameworks',
          'Platform mastery training',
          'Personal brand alignment'
        ]
      },
      {

        id: 'engagement-activation',
        title: 'Engagement & Activation',
        description: 'We ensure sustainable program success through:',
        content: [
          'Employee onboarding and training',
          'Incentive Program Design',
          'Content curation and sharing',
          'Recognition programs',
          'Performance optimization'
        ]
      },
      {
        id: 'impact',
        title: 'Measuring Impact',
        description: 'We track and optimize program performance via:',
        content: [
          'Engagement analytics',
          'Reach and influence metrics',
          'ROI measurement',
          'Program optimization',
          'Success reporting'
        ]



      }
    ],
    impactItems: [
      "Amplified brand reach through authentic voices", "Increased employee engagement", "Enhanced employer brand", "Measurable business growth"
    ],
    buttontxt: "Drive Impact Now",
    ctaTitle: <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] leading-tight text-white">


      Ready to Amplify Your <span className='font-playfair italic '>Brand?</span>
    </h1>,
  },

  3: {
    h1: <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
      <span className="inline-block font-playfair italic  mr-2">
        Employer
      </span>


      <span className="mt-4 block">
        Brand Development
      </span>
    </h1>,
    description: "Top talents want more than just a job. They want purpose, growth, and an authentic workplace. Build a brand that resonates with both candidates and employees.",
    heroImage: employer_development,
    coreServices: [
      {
        id: 'evp-culture',
        title: 'EVP & Culture Strategy',
        description: 'We build the foundation of your talent brand through:',
        content: [
          'Core EVP development & positioning',
          'Culture narrative crafting',
          'Talent market analysis',
          'Competitive analysis',
          'Brand voice framework'
        ]
      },
      {
        id: 'culture-storytelling',
        title: 'Culture Storytelling',
        description: 'We transform your culture into compelling stories via:',
        content: [
          'Employee success stories',
          'Culture video series',
          'Targeted talent campaigns',
          'Career site optimization',
          'Authentic testimonials'
        ]
      },
      {
        id: 'candidate-experience',
        title: 'Candidate Experience',
        description: 'We optimize every touchpoint via:',
        content: [
          'Candidate Journey mapping and optimization',
          'Strategic content planning',
          'Alumni advocacy building',
          'Onboarding narratives',
          'Employee experience content'
        ]
      }

    ],
    impactItems: [
      "Enhanced talent attraction", "Improved candidate quality", "Stronger culture alignment", "Reduced recruitment costs"
    ],
    buttontxt: "Build Your Employer Brand",
    ctaTitle: <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] leading-tight  text-white">

Ready to Build a Stand-Out 
<span className='font-playfair italic  block mt-3'>Employer Brand?</span>
    </h1>,
  },


    
  4: {
    h1: <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
      <span className="font-playfair italic   pr-3 mt-4 ">
        Community
      </span>
      Design
      <span className=' block mt-4'> and Development</span>

    </h1>,
    description: "Strong communities are the cornerstone of trust, collaboration, and long-term engagement. We build exclusive spaces where people connect, learn, and grow together.",
    heroImage: community_design_development,

    coreServices: [
      {
        id: 'strategic-foundation',
        title: 'Strategic Foundation & Custom Community Design',
        description: 'We design purposeful communities through:',
        content: [
          'Community strategy and a roadmap',
          'Member journey mapping',
          'Platform selection and setup',
          'Value proposition development',
          'Engagement frameworks'
        ]
      },
      {
        id: 'knowledge-learning',
        title: 'Knowledge & Learning',
        description: 'We deliver high-impact growth experiences via:',
        content: [
          'Expert-led masterclasses',
          'Peer mentorship programs',
          'Best practice libraries',
          'Resource sharing hubs',
          'Knowledge-sharing systems'
        ]
      },
      {
        id: 'events-networking',
        title: 'Events & Networking',
        description: 'We create meaningful connections through:',
        content: [
          'Industry roundtables',
          'Expert panels',
          'Interactive workshops',
          'Virtual meetups',
          'Networking programs'
        ]
      },
      {
        id: 'community-management',
        title: 'Community Management',
        description: 'We ensure sustainable growth via:',
        content: [
          'Engagement initiatives',
          'Content curation',
          'Member success programs',
          'Performance analytics',
          'Growth optimization'
        ]
      }
    ],

    impactItems: [
      "Network effects activated", "Knowledge multiplication", "Stronger industry presence", "Enhanced professional development"
    ],
    buttontxt: "Break Your Community Today",
    ctaDescription: "Let's create a personal brand strategy that sets you apart.",
    ctaTitle: <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] leading-tight text-white">


Ready to Maximise <span className='font-playfair italic '>Community <span className=' block mt-3 font-playfair italic '>Network Effects?</span></span> 

    </h1>,
  },

  5: {
    h1: <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
      Internal
      <span className="font-playfair italic   pr-3 mt-4 block">
        Communications
      </span>

    </h1>,
    description: "Struggling to stay aligned in today's hybrid world? Strong internal comms is essential. We help build communication frameworks that turn silos into engaged, aligned workforces. ",
    heroImage: internal_communication,

    coreServices: [
      {
        id: 'strategy-development',
        title: 'Strategy Development',
        description: 'We build communication frameworks through:',
        content: [
          'Designing organization-wide communication strategies',
          'Optimizing channel effectiveness',
          'Developing content guidelines',
          'Building leadership communication plans',
          'Creating message cascading systems'
        ]
      },
      {
        id: 'content-change',
        title: 'Content & Change Management',
        description: 'We drive engagement and clarity via:',
        content: [
          'Strategic campaign creation',
          'Change management communications',
          'Culture initiative programs',
          'Crisis response protocols'
        ]
      },
      {
        id: 'channel-optimization',
        title: 'Channel Optimization',
        description: 'We maximize communication impact through:',
        content: [
          'Channel effectiveness audit',
          'Platform integration',
          'Message delivery optimization',
          'Analytics and measurement'
        ]
      },
      {
        id: 'resource-development',
        title: 'Resource Development',
        description: 'We equip your teams for success with:',
        content: [
          'Communication toolkits',
          'Best practice guides',
          'Template libraries',
          'Training materials',
          'Leadership resources'
        ]
      }
    ],
    impactItems: [
      "Enhanced team alignment", "Increased engagement", "Improved information flow", "Higher Talent Retention"
    ],
    buttontxt: "Break Your Silos Today",
    ctaDescription: "Let's create a personal brand strategy that sets you apart.",
    ctaTitle: <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] leading-tight text-white">

Ready to Transform Your <span className='font-playfair italic  '>Internal <span className='block mt-3 font-playfair italic '>Communications?</span> </span>
    </h1>,
  }
  ,




};

const ServicesPage = () => {
  const { index } = useParams();

  const renderContent = (index) => {
    const serviceData = servicesData[index];

    if (serviceData) {
      return <ServiceSection {...serviceData} />;
    }

    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-semibold text-gray-800">
          Welcome to our services. Please select a specific service.
        </h1>
      </div>
    );
  };

  return (
    <div className="service-page  pt-32 ">
      {renderContent(index)}
    </div>
  );
};

export default ServicesPage;