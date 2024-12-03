import React from 'react';
import groupImage from '../../../assets/images/Group 2.svg'
import subtract from '../../../assets/images/Subtract.svg'
import union from '../../../assets/images/Union.svg'

const EGCSection = () => {
    const features = [
        {
            title: "The Power of Employee Voices",
            description: "Transform your employees' experiences into your most powerful brand stories.",
            icon: groupImage
        },
        {
            title: "Trust Through Authenticity",
            description: "92% of people trust employee content over traditional brand messages.",
            icon: subtract
        },
        {
            title: "Impact at Scale",
            description: "8x more engagement than corporate content.",
            icon: union
        }
    ];
    return (
        <div className="bg-[#F5F4FE]">


        
        <div className="max-w-6xl mx-auto px-4 py-16 ">
            <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-6">
                    What is <em className="font-fairDisplay font-semibold">EGC</em>?
                </h2>
                <p className="text-gray-600 text-lg">
                    Delving Into Employee-Generated Content (EGC): What It Is and <br/>
                    <span>Why It Matters</span>
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="bg-white p-4  pb-5 rounded-lg rounded-tr-[40px]   shadow-sm  transition-shadow"
                    >
                        <div className="w-12 h-12 bg-primary-gradient rounded-full flex items-center justify-center text-white mb-6">
                            <img src={feature.icon} className=' w-6 h-6' ></img>
                        </div>
                        <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
};

export default EGCSection;