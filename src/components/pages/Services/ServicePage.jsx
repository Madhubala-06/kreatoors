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
        description: ' We craft your unique positioning with: ',
        content: [
          " Executive brand development and leadership narratives. ",

          "Strategic differentiation and industry authority mapping. "
        ]
      },





      {
        id: 'digital-presence',
        title: 'Digital Leadership Presence ',
        description: 'We transform your online presence by: ',
        content: [
          'Optimizing executive profiles and leadership stories. ',

          'Creating visual identities and building media presence. '
        ]
      },
      {
        id: 'content-strategy',
        title: 'Content Strategy & Creation',
        description: 'We convert your expertise into thought leadership with: ',
        content: [
          "          Tailored content strategies and industry insights. ",
          "          Leadership content calendars and performance analytics. "]
      },
      {
        id: 'thought-leadership',
        title: 'Thought Leadership Development',
        description: 'We establish you as an industry voice through:',
        content: [


          "Speaking opportunities, event positioning, and media outreach.",

          "Building expert networks to expand your influence. "]
      }
    ],
    impactItems: [
      "Increased visibility and opportunities", "Premium client/ partnership attraction", "Industry authority establishment", "Measurable brand growth"
    ]
    ,
    buttontxt: "Build your Influence",
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
        description: 'We craft impactful programs with:',
        content: [
          "Clear goals, content themes, and tailored strategies.",
          "AI-driven tools for streamlined content creation.",
          "Performance frameworks to measure success."
        ]
      },

      {
        id: 'governance',
        title: 'Governance & Guidelines',
        description: "We ensure brand integrity with:",
        content: [
          "Policies, workflows, and compliance tools.",
          "Scalable systems to align employee voices."
        ]
      },
      {
        id: 'drive-content-excellence ',
        title: 'Drive Content Excellence ',
        description: 'We empower teams with:',
        content: [
          'Storytelling workshops and content training.',

          'AI-powered tools and best practice resources.',

          "Alignment with personal and professional brands. "
        ]
      },
      {

        id: 'engagement-activation',
        title: 'Engage & Activate ',
        description: 'We sustain success through: ',
        content: [
          'Employee onboarding, training, and incentives.',
          'Recognition systems to amplify participation. '

        ]
      },
      {
        id: 'impact',
        title: 'Measure & Optimize ',
        description: 'We track impact with: ',
        content: [
          "Analytics, ROI insights, and continuous improvements."


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
        description: 'We lay the foundation of your talent brand through: ',
        content: [
          "Core EVP development and culture narratives. ",
          "Talent market and competitive analysis. ",
          "Brand voice frameworks for authentic messaging. "
        ]
      }
      ,





      {
        id: 'culture-storytelling',
        title: 'Culture Storytelling',
        description: 'We bring your culture to life by: ',
        content: [
          'Showcasing employee success stories and culture videos. ',
          "Designing targeted campaigns and career site content.",
          "Highlighting authentic testimonials. "
        ]
      },
      {
        id: 'candidate-experience',
        title: 'Candidate Experience',
        description: 'We optimize touchpoints with: ',
        content: [
          "Journey mapping, strategic content, and onboarding narratives. ",

          "Alumni advocacy and employee experience programs.  "
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
        description: 'We design purposeful communities by: ',
        content: [
          " Developing strategies, roadmaps, and engagement frameworks.",

          "Mapping member journeys and selecting the right platforms. ",

          "Crafting compelling value propositions to drive participation. "
        ]
      },
      {
        id: 'knowledge-learning',
        title: 'Knowledge & Learning',
        description: 'We deliver growth experiences through: ',
        content: [
          "  Expert-led masterclasses, peer mentorships, and resource hubs.",

          "Knowledge-sharing systems and best practice libraries. "
        ]
      },
      {
        id: 'events-networking',
        title: 'Events & Networking',
        description: 'We create meaningful connections via: ',
        content: [
          "Roundtables, expert panels, workshops, and virtual meetups. ",

          "Networking programs that foster collaboration and trust. "
        ]
      },
      {
        id: 'community-management',
        title: 'Community Management',
        description: 'We ensure sustainable growth by: ',
        content: [
          'Driving engagement initiatives and curating impactful content. ',

          'Managing member success programs and optimizing growth with analytics. '




        ]
      }
    ],

    impactItems: [
      "Network effects activated", "Knowledge multiplication", "Stronger industry presence", "Enhanced professional development"
    ],
    buttontxt: "Build Your Community Today",
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
        id: 'strategic-foundation',
        title: 'Strategy Development ',
        description: 'We create impactful communication frameworks by: ',
        content: [
          "Designing organization-wide strategies and optimizing channels. ",
          "Developing content guidelines and leadership communication plans. ",
          "Building message cascading systems for seamless alignment. "
        ]
      },
      {
        id: 'content-change-management ',
        title: 'Content & Change Management ',
        description: 'We drive engagement and clarity through: ',
        content: [
          "Strategic campaigns and change management communications. ",

          "Culture initiatives and crisis response protocols."
        ]
      },
      {
        id: 'channel-optimization',
        title: 'Channel Optimization',
        description: 'We enhance communication impact by: ',
        content: [
          'Auditing channel effectiveness and integrating platforms. ',

          "Optimizing message delivery and tracking with analytics. "
        ]
      },

      {
        id: 'resource-development',
        title: 'Resource Development',
        description: 'We equip teams with tools for success, including: ',
        content: [
          'Communication toolkits, guides, templates, and training materials.',
          'Leadership resources to strengthen alignment and engagement. '
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