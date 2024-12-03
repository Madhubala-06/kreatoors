import React from 'react';
import employee_adocarcy from '../../../assets/images/strategic-solution/employee_adocarcy.png'
import { PlusIcon, MinusIcon } from 'lucide-react';
import Button from '../../common/Button'
const EmployeeSection = () => {
  return (
    <section className="py-10 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-4 lg:pr-8">

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
              <span className="font-fairDisplay italic font-semibold inline-block pr-3">
                Employee
              </span>
              <span className="inline-block">
                Content &
              </span>
              <span className="block mt-2 sm:mt-4 md:mt-6">
                Advocacy
              </span>
            </h1>
            <p className="text-gray-600 text-base md:text-lg max-w-xl mt-4">
              Your employees are your brand's most powerful storytellers. Their
              authentic voices build trust, drive engagement, and create impact
              in ways traditional marketing cannot achieve. Empower your team
              to craft authentic, impactful content with tailored strategies,
              AI-driven tools, and engaging training sessions.
            </p>
          </div>

          {/* Image Section */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative max-w-full">
              <img
                src={employee_adocarcy}
                alt="Employee Content"
                className="w-full max-w-[500px] h-auto aspect-[500/480] object-cover rounded-xl"
                style={{
                  boxShadow: "16px 16px 0px 0px rgba(219, 216, 246, 1)"
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


const CoreServicesSection = () => {
  const [openSection, setOpenSection] = React.useState('strategic');

  const services = [
    {
      id: 'strategic',
      title: 'Strategic Foundation',
      content: [
        'Program strategy and goals alignment',
        'Content themes and guidelines',
        'AI-optimized templates for calendar creation',
        'Strategic content calendars and themes',
        'KPI and measurement frameworks'
      ]
    },
    {
      id: 'governance',
      title: 'Governance & Guidelines',
      content: ['Policy framework', 'Best practices', 'Compliance guidelines']
    },
    {
      id: 'content',
      title: 'Content Excellence',
      content: ['Content strategy', 'Creation tools', 'Quality assurance']
    },
    {
      id: 'engagement',
      title: 'Engagement & Activation',
      content: ['Employee programs', 'Incentives', 'Recognition systems']
    },
    {
      id: 'impact',
      title: 'Impact Measurement',
      content: ['Analytics', 'Reporting', 'ROI tracking']
    }
  ];

  return (
    <div className="w-full  bg-blue-custom-400  mt-20">

      <div className='w-full max-w-6xl mx-auto  py-16'>
        <h2 className="text-3xl md:text-4xl lg:text-5xl  font-fairDisplay font-semibold italic mb-8 text-center">Core Services</h2>
        <div className=" space-y-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="border-b  bg-white mx-4 px-10 rounded-lg border-gray-100 last:border-b-0"
            >
              <button
                onClick={() => setOpenSection(openSection === service.id ? '' : service.id)}
                className="w-full py-4 flex justify-between items-center text-left  transition-colors"
              >
                <span className="text-lg font-medium text-gray-900">{service.title}</span>
                {openSection === service.id ? (
                  <MinusIcon className="w-6 h-6 p-1 text-blue-custom-800 border-2 rounded-full" />
                ) : (
                  <PlusIcon className="w-6 h-6 p-1 text-blue-custom-800 border-2 rounded-full" />
                )}


              </button>
              <div
                className={`grid transition-all duration-200 ease-in-out ${openSection === service.id ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
              >
                <div className="overflow-hidden">
                  <div className="p-4 pt-0 pb-6 space-y-2">
                    {service.content.map((item, index) => (
                      <p key={index} className=" text-sub-gray pl-4">
                        • {item}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
const BusinessOutcomesSection = () => {
  const outcomes = [
    { id: '01', text: 'Amplified brand reach through authentic voices' },
    { id: '02', text: 'Increased employee engagement' },
    { id: '03', text: 'Enhanced employer brand' },
    { id: '04', text: 'Measurable business growth' }
  ];

  return (
    <div className="w-full  mx-auto  space-y-8">
      <div className='w-full max-w-6xl mx-auto  py-16 bg-white'>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 space-y-10">




            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
              <span className="font-fairDisplay italic font-semibold inline-block pr-3">
                Bussiness
              </span>
              <span className="inline-block">
                Outcomes &
              </span>
              <span className="block mt-2 sm:mt-4 md:mt-6">
                Impact
              </span>
            </h1>
            <p className="text-gray-600 max-w-md">
              Transform your brand reach through authentic employee voices while building measurable business outcomes.
            </p>



            <Button className="bg-[#6B5B95] text-white px-6 py-2 rounded-full hover:bg-[#5A4A84]">
              Launch Your Advocacy Program
            </Button>
          </div>
          <div className="flex-1">
            <div className="grid gap-4">
              {outcomes.map((outcome) => (
                <div key={outcome.id} className=" bg-blue-custom-400 p-4 rounded-lg flex items-center gap-4">
                  <span className=" text-white flex item  items-center justify-center h-10 w-10  rounded-full bg-primary-gradient">{outcome.id}</span>
                  <span>{outcome.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>


      </div>

      <div className="w-full bg-cta-gradient py-16 px-4 md:px-8 rounded-t-[50px]">
        <div className="max-w-6xl mx-auto">
          <div className=" gap-y-3 flex-col bg-primary-gradient rounded-3xl p-8 md:p-12 mb-16 flex  items-center text-center">
            <h1 className="text-2xl md:text-4xl font-medium text-white mb-4 max-w-2xl mx-auto text-center">
              Ready to Transform Your
              <span className="italic font-fairDisplay ml-2  font-semibold">Internal Communications?</span>
            </h1>

            <p className="text-white/90 text-sm md:text-base mb-8 max-w-xl mx-auto text-center">
              Connect with our experts to find the right solution for your business.
            </p>

            <button className='bg-white text-blue-custom-700 px-6 py-3.5 rounded-full font-semibold hover:bg-purple-50 transition-colors'>

              Schedule a Consultation Today
            </button>
          </div>
        </div>
      </div>


    </div>
  );
};

const EmployeeAdvorcacy = () => (
  <div className="min-h-screen bg-white pt-16 pb-10">
    <EmployeeSection />
    <CoreServicesSection />
    <BusinessOutcomesSection />
  </div>
);

export default EmployeeAdvorcacy;