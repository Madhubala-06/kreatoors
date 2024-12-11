import React from 'react';
import fouderImg from '../../../assets/images/founder.jpg'

import CommingSoonSection from '../../pages/Home/Commingsoon'

import bulb from '../../../assets/images/aboutus/tabler_bulb-filled.png'
import connection from '../../../assets/images/aboutus/icon-park-solid_circular-connection.png'
import creatorship from '../../../assets/images/aboutus/mingcute_content-ai-fill.png'
import growth from '../../../assets/images/aboutus/uil_arrow-growth.png'
import tick from '../../../assets/images/aboutus/tick.png'

const MissionFounderSection = () => {


  const values = [
    {
      id: 1,
      icon: bulb,
      title: "Innovation",
      description: "We embrace cutting-edge ideas and practices, constantly pushing the boundaries of what's possible in HR and personal branding."
    },
    {
      id: 2,
      icon: creatorship,
      title: "Creatorship",
      description: "We foster an environment where compelling content and unique personal brands flourish, empowering each member to express their authentic voice."
    },
    {
      id: 3,
      icon: connection,
      title: "Connection",
      description: "We believe in the power of community, facilitating meaningful networks and collaborations among visionary professionals."
    },
    {
      id: 4,
      icon: growth,
      title: "Growth",
      description: "We are committed to continuous learning and development, providing resources and mentorship to accelerate personal and professional advancement."
    },
    {
      id: 5,
      icon: tick,
      title: "Authenticity",
      description: "We champion the freedom to explore, express, and evolve, enabling our members to chart their own paths in their careers and personal brands."
    }
  ];

  const teamMembers = [
    {
      id: 1,
      name: "Robin Williams",
      role: "HR Director",
      image: fouderImg,
    },
    {
      id: 2,
      name: "Robin Williams",
      role: "HR Director", 
      image: fouderImg,
    },
    {
      id: 3,
      name: "Robin Williams",
      role: "HR Director",
      image: fouderImg,
    },
    {
      id: 4,
      name: "Robin Williams",
      role: "HR Director",
      image: fouderImg,
    }
  ];

    return (


        <div className="bg-blue-custom-400  pt-28">
            {/* Story & Mission Section */}
            <div className=' bg-blue-custom-400 py-16 px-4'>
            <div className="max-w-6xl mx-auto px-8 py-16">
      <h1 className="text-center mb-16">
        <span className="text-4xl ">Our </span>
        <span className="text-4xl font-playfair italic  ">Story & Mission</span>
      </h1>

      <div className="space-y-12">
        <div className="grid md:grid-cols-[200px,1fr] gap-8">
          <h2 className="text-xl font-semibold">The AI Paradox</h2>
          <div className="space-y-4">
            <p className=" text-sub-gray leading-relaxed">
              We live in a world flooded with AI-generated content. Yet, in this digital noise, authentic human voices matter more than ever. Organizations struggle to maintain trust, and professionals seek ways to stand out with genuine impact.
            </p>
            <p className=" text-sub-gray leading-relaxed">
              The antidote to AI-driven content is the power of authentic human experience. Real employee stories and genuine thought leadership resonate deeply because they are uniquely human, cutting through the artificial and building trust!
            </p>
          </div>
        </div>

        <div className="grid  md:grid-cols-[200px,1fr] gap-8">
          <h2 className="text-xl font-semibold">Our Mission</h2>
          <p className=" text-sub-gray leading-relaxed">
            We help organizations harness authenticity at scale, empowering professionals to build distinctive voices that AI cannot replicate. The future of brand building is less about competing with AI and more about amplifying what makes us uniquely human. This realization sparked Kreators.
          </p>
        </div>
      </div>
    </div>
            </div>

            {/* Founder Story Section */}
            <div className=' bg-white '>
                <div className='max-w-6xl mx-auto px-4 py-16 '>
                    <h1 className="text-center mb-16  ">
                        <span className="text-4xl md:text-4xl font-playfair italic ">Founder</span>
                        <span className="text-4xl md:text-4xl"> Story</span>
                    </h1>

                    <div className="grid md:grid-cols-[2fr_1fr] gap-12 items-center">
                        <div>
                            <h2 className="text-2xl font-semibold font-playfair italic mb-4">Arzo Nadi</h2>
                            <div className="space-y-4 text-sub-gray">
                                <p className=" leading-relaxed">
                                    Arzo Nadi is a visionary entrepreneur with a strong background in technology, entrepreneurship, and leadership. Known for delivering impactful solutions, she bridges the gap between creativity and strategy.
                                </p>
                                <p className=" leading-relaxed">
                                    Before founding Kreatoors, Arzo held key roles in tech-driven organizations, honing her expertise in product development, business strategy, and team leadership. Her experience spans startups to large enterprises, driving digital transformations and growth.
                                </p>
                                <p className=" leading-relaxed">
                                    Arzo is dedicated to fostering collaboration, creativity, and continuous learning within her organization, making Kreatoors a trusted partner for businesses looking to scale and adapt.
                                </p>
                            </div>
                        </div>
                       <img src={fouderImg} className=' h-96  w-96  rounded-xl'></img>
                    </div>
                </div>
            </div>

            <section className="py-16 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl  mb-6">
          Meet Our <span className="text-4xl md:text-4xl font-playfair italic ">Team</span>
        </h2>
        <p className=" text-sub-gray max-w-2xl mx-auto">
          Are you interested in joining our team, becoming a partner, or joining our
          community, there's a place for you in our story. Let's write a chapter together
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member) => (
          <div 
            key={member.id} 
            className="relative rounded-2xl overflow-hidden"
          >
            <div className="aspect-w-4 aspect-h-5">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-3 left-3 right-3  bg-white p-4 rounded-2xl">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-white">
                  <img
                    src={member.image}
                    alt={`${member.name} avatar`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">{member.name}</h3>
                  <p className="text-gray-600 text-sm">{member.role}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>





    <section className="py-16 px-4  bg-primary-gradient">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl  text-white text-center mb-12">
          Our <span className="md:text-4xl font-playfair italic ">Values</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {values.slice(0, 3).map((value) => (
            <div
              key={value.id}
              className=" bg-blue-custom-400 p-6 shadow-lg rounded-lg rounded-tr-[40px]  transform transition-all duration-300 ease-in-out
                     hover:scale-105 hover:shadow-xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12  bg-primary-gradient  rounded-full flex items-center justify-center">
                  {/* <span className="text-xl">{value.icon}</span> */}

                  <img src={value.icon} className=' h-6 w-6 '></img>

                </div>
                <h3 className="text-xl font-medium">{value.title}</h3>
              </div>
              <p className=" text-sub-gray leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.slice(3).map((value) => (
            <div
              key={value.id}
              className=" bg-blue-custom-400 rounded-lg rounded-tr-[40px] p-6 shadow-lg  transform transition-all duration-300 ease-in-out
                     hover:scale-105 hover:shadow-xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary-gradient rounded-full flex items-center justify-center">
                  {/* <span className="text-xl">{value.icon}</span> */}
                  <img src={value.icon} className=' h-6 w-6 '></img>

                </div>
                <h3 className="text-xl font-medium">{value.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

<CommingSoonSection/>

        </div>






    );
};

export default MissionFounderSection;