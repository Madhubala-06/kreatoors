import React, { useState } from 'react';
import RightArrow from '../../../assets/images/Arrow 1.svg';
import { collection, addDoc, serverTimestamp, db } from '../../../firebase';
import axios from 'axios';

const ComingSoonSection = ({ isAboutUs }) => {
  const [email, setEmail] = useState('');
  const MAILCHIMP_URL = 'https://mandrillapp.com/api/1.0/messages/send-template.json';

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email) {
      try {
        await addDoc(collection(db, 'JoinWaitlist'), {
          email: email,
          timestamp: serverTimestamp(),
        });

        const data = {
          key: process.env.REACT_APP_MAILCHIMP_API_KEY,
          template_name: 'Kreatoors Template',
          template_content: [],
          message: {
            to: [{ email: email, type: 'to' }],
            from_email: 'hello@kreatoors.com',
            from_name: 'Kreatoors',
            subject: 'Welcome to the Waitlist!',
            text: 'Thank you for joining our waitlist!',
          },
        };

        await axios.post(MAILCHIMP_URL, data, {
          headers: {
            'Content-Type': 'application/json',
          },
        });


        setEmail('');
        alert('Added successfully! Check your email for confirmation.');
      } catch (error) {
        console.error('Error subscribing:', error);
        alert('There was an error, please try again later.');
      }
    }
  };

  return (
    <div
      className={`w-full ${isAboutUs ? 'bg-cta-gradient' : 'bg-white'
        } py-20 px-4 md:px-8 rounded-t-[50px]`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="relative bg-primary-gradient rounded-3xl p-8 md:p-12 flex md:gap-10">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-4xl font-medium text-white max-w-2xl">
              Coming Soon: AI-Powered Employee Advocacy{' '}
              <span className="inline-block mt-3">
                Meets{' '}
                <span className="italic font-playfair ml-2">Personal Branding.</span>
              </span>
            </h2>

            <p className="text-white/90 text-base md:text-lg my-8 max-w-xl">
              Revolutionize how you build and manage your personal brand with our AI-Powered Personal Branding Platform
            </p>

            <div className="flex flex-col sm:flex-row items-center">
              <form
                onSubmit={handleSubmit}
                className="flex justify-between md:w-3/4 items-center gap-4 mb-4 sm:mb-0 bg-[#9794D8] px-2 pl-4 py-2 rounded-full"
              >
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Join the Waitlist Now"
                  className="bg-transparent w-4/5 text-white placeholder-white outline-none border-none focus:ring-0 focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  className="bg-white text-blue-custom-700 px-6 py-2 rounded-full font-semibold hover:bg-purple-50 transition-colors"
                >
                  Join
                </button>
              </form>
            </div>
          </div>

          <div className="md:w-72 hidden md:flex flex-col gap-6 pt-10">
            <img
              src={RightArrow}
              alt="Decorative arrow"
              className="w-40 opacity-60 animate-float-curved animate-draw-attention"
              style={{
                transformOrigin: 'center',
              }}
            />
            <div className="flex  transition-all duration-700 ease-out hover:scale-105  items-center gap-2 w-auto ml-20 font-semibold text-blue-custom-700 bg-white px-4 py-3 rounded-full">
              <span className="">Check</span>
              <a
                href="https://kreatoors.ai"
                className="underline transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Kreatoors.ai
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonSection;
