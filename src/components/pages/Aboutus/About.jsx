import React from 'react';
import fouderImg from '../../../assets/images/founder.jpg'
const MissionFounderSection = () => {
    return (


        <div className="bg-blue-custom-400  pt-28">
            {/* Story & Mission Section */}
            <div className=' bg-blue-custom-400 py-16 px-4'>
            <div className="max-w-6xl mx-auto px-8 py-16">
      <h1 className="text-center mb-16">
        <span className="text-4xl ">Our </span>
        <span className="text-4xl font-playfair italic  font-semibold">Story & Mission</span>
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
                        <span className="text-4xl md:text-4xl font-playfair italic font-semibold">Founder</span>
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
        </div>
    );
};

export default MissionFounderSection;