import React, { useState } from 'react';
import fouderImg from '../../../assets/images/founder.jpg'

import CommingSoonSection from '../Home/Commingsoon'

import bulb from '../../../assets/images/aboutus/tabler_bulb-filled.png'
import connection from '../../../assets/images/aboutus/icon-park-solid_circular-connection.png'
import creatorship from '../../../assets/images/aboutus/mingcute_content-ai-fill.png'
import growth from '../../../assets/images/aboutus/uil_arrow-growth.png'
import tick from '../../../assets/images/aboutus/tick.png'


import { db, serverTimestamp, collection, addDoc } from '../../../firebase';


import axios from 'axios';



const uploadResumeToCloudinary = async (file) => {
  if (!file) {
    throw new Error('No file provided');
  }

  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', 'Resume_Kreatoors');

  formData.append('api_key', '945618263357478');
  formData.append('timestamp', Math.round((new Date()).getTime() / 1000));

  try {
    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/dnpgsumvt/raw/upload`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        validateStatus: (status) => {
          return status >= 200 && status < 300;
        }
      }
    );

    if (response.data && response.data.secure_url) {
      console.log('Upload successful:', response.data.secure_url);
      return response.data.secure_url;
    } else {
      throw new Error('Upload successful but no URL received');
    }

  } catch (error) {
    console.error('Cloudinary upload error details:', {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status
    });
    throw new Error(`Upload to Cloudinary failed: ${error.message}`);
  }
};
const JoinOurTeam = () => {

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    countryCode: '+44',
    role: '',
    resume: null,
    text: ''
  });

  const [uploadedFileName, setUploadedFileName] = useState('');
  const [isAgreed, setIsAgreed] = useState(false);
  const countryCodes = [
    { code: '+1', country: 'USA/Canada' },
    { code: '+44', country: 'UK' },
    { code: '+91', country: 'India' },
    { code: '+61', country: 'Australia' },
    { code: '+86', country: 'China' },
    { code: '+49', country: 'Germany' },
    { code: '+33', country: 'France' },
    { code: '+81', country: 'Japan' }
  ];


  const handleFileClick = () => {
    document.getElementById('resumeUpload').click();
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, resume: file });
      setUploadedFileName(file.name);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!formData.resume) {
        throw new Error('Please upload a resume');
      }

      const resumeUrl = await uploadResumeToCloudinary(formData.resume);

      const docRef = await addDoc(collection(db, 'Applications'), {
        fullName: formData.fullName,
        email: formData.email,
        mobile: formData.countryCode + formData.mobile,
        role: formData.role,
        text: formData.text,
        resumeUrl: resumeUrl,
        createdAt: serverTimestamp(),
      });

      console.log('Application submitted successfully with ID:', docRef.id);

      setFormData({
        fullName: '',
        email: '',
        mobile: '',
        countryCode: '+44',
        role: '',
        resume: null,
        text: ''
      });
      setUploadedFileName('');

      alert('Application submitted successfully!');

    } catch (error) {
      console.error('Error submitting application:', error);
      alert('Error submitting application. Please try again.');
    }
  };



  return (
    <div className="w-full max-w-6xl px-5 md:mx-auto py-16 bg-white">
      <div className="flex flex-col items-center justify-center space-y-8">
        <div className="w-full flex flex-col items-center text-center md:pt-8">
          <h1 className="text-4xl mb-4">
            Join Our <span className="font-playfair">Team</span>
          </h1>
          <p className="text-sub-gray text-base max-w-2xl">
            Are you interested in joining our team, becoming a partner, or joining our community? There's a place for you in our story. Let's write a chapter together.
          </p>
        </div>

        <div className="w-full flex flex-col items-center">
          <form onSubmit={handleSubmit} className="space-y-4 p-3 md:px-6 py-6 bg-blue-custom-400 rounded-2xl w-full max-w-4xl">
            {/* Form Inputs */}
            <input
              type="text"
              placeholder="Enter full name"
              className="w-full p-3 rounded-lg bg-white text-sub-gray"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              required
            />
            <input
              type="email"
              placeholder="Enter email address"
              className="w-full p-3 rounded-lg bg-white text-sub-gray"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />

            <div className="flex w-full">
              <div className="relative  ">
                <select
                  className="p-3  rounded-l-lg bg-white text-sub-gray  mr-9 focus:outline-none appearance-none w-full"
                  value={formData.countryCode}
                  onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                >
                  {countryCodes.map((country) => (
                    <option key={country.code} value={country.code}>
                      {country.code}
                    </option>
                  ))}
                </select>
                {/* Chevron Icon */}
                <div className="absolute inset-y-0 right-1 flex items-center pointer-events-none text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="black"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>

                </div>
              </div>




              <input
                type="tel"
                placeholder="Enter mobile no."
                className="w-full p-3 bg-white text-sub-gray rounded-r-lg"
                value={formData.mobile}
                onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                required
              />
            </div>




            <input
                type="text"
                placeholder="Role of Interest"
                className="w-full p-3 bg-white text-sub-gray rounded-lg"
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                required
              />
            


            <textarea
              placeholder="Tell us in few words why you would be a great addition to our team?"
              className="w-full p-3 bg-white text-sub-gray rounded-lg border-0 resize-none text-base min-h-[120px]"
              value={formData.text}
              onChange={(e) => setFormData({ ...formData, text: e.target.value })}
              required
            />

            <div
              onClick={handleFileClick}
              className="border-2 border-blue-custom-600 border-dashed rounded-lg p-8 text-center bg-white cursor-pointer hover:bg-gray-50 transition-colors"
            >
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">
                    {uploadedFileName ? `Selected: ${uploadedFileName}` : 'Upload Your Resume'}
                  </p>
                  <p className="text-sm text-sub-gray">PDF or Word document, max 10MB</p>
                </div>
              </div>
              <input
                id="resumeUpload"
                type="file"
                name="resume"  // Added name attribute
                className="hidden"
                onChange={handleFileUpload}
                accept=".pdf,.doc,.docx"
                required
              />

            </div>

            <div className="flex items-center space-x-2 py-5">
              <input
                type="checkbox"
                id="agree"
                value={isAgreed}
                onClick={()=>{setIsAgreed(true)}}
                required
                className="h-4 w-4 rounded border-gray-200 border-2 checked:bg-primary-gradient checked:border-transparent focus:ring-0 focus:ring-offset-0"
              />
              <label htmlFor="agree" className="text-sm text-sub-gray">
                I agree to the
                <a href='/privacypolicy' target='_blank'>
                <span className="font-bold text-blue-custom-600 px-1">Privacy Policy</span>
                  </a>
                
              </label>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                disabled={!isAgreed}
                className={`px-6 py-3 bg-primary-gradient text-white rounded-full transition-all duration-700 ease-out hover:scale-105  disabled:cursor-not-allowed    disabled:opacity-60`}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};


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


    <div className="bg-white  pt-28">
      {/* Story & Mission Section */}
      <div className='  py-16 px-4'>
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

      {/* 

      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-6">
            Meet Our <span className="text-4xl md:text-4xl font-playfair italic">Team</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="relative rounded-2xl overflow-hidden">
              <div className="aspect-w-4 aspect-h-5">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-3 left-3 right-3 bg-white p-3 rounded-2xl">
                <div className="flex items-center  justify-between">
                 
                  <div>
                    <h3 className="font-medium text-gray-900">{member.name}</h3>
                    <p className="text-sub-gray text-sm">{member.role}</p>
                  </div>
                  <div className="h-7 w-7  overflow-hidden border-2 border-white">
                    <img
                      src={linkedIn}
                      alt="linkedIn"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="bg-primary-gradient  px-6 py-4 rounded-full  mt-14 text-white mx-auto block">
          Book a Call With Our Team
        </button>
      </section> */}





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
                <p className="text-sub-gray leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <JoinOurTeam />


      <CommingSoonSection isAboutUs={true} />


    </div>






  );
};

export default MissionFounderSection;