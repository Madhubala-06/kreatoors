import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/Logo.svg";
import tickmark from "../../assets/images/footer-tick-icon.png";
import Linkedin from "../../assets/images/akar-icons_linkedin-fill.png";
import Logo from "./Logo";

import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";

const Footer = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "#strategic-solutions" },
    { name: "About us", href: "/aboutus" },
    { name: "AI Platform", href: "/aiplatform" },
    { name: "Blog", href: "/blog" },
    { name: "Contact us", href: "/contactus" },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/company/kreatoors/posts/?feedView=all",
    },
  ];

  const handleScroll = (e, href) => {
    e.preventDefault();

    if (href.startsWith("#")) {
      navigate("/"); 
      setTimeout(() => {
        const targetElement = document.querySelector(href);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 400); 
    } else {
      navigate(href); 
    }
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (email) {
      try {
        await addDoc(collection(db, "NewsletterSubscription"), {
          email,
          timestamp: serverTimestamp(),
        });
        setEmail("");
        alert("Subscribed successfully!");
      } catch (error) {
        console.error("Error subscribing:", error);
        alert("There was an error. Please try again later.");
      }
    }
  };

  return (
    <div className="w-full bg-white border-t border-[rgba(220, 220, 220, 1)]">
      {/* Hero Section with Newsletter */}
      <div className="max-w-6xl mx-5 lg:mx-auto py-10 md:py-16">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-4xl mb-6">
              Unleash Your Team's
              <span className="font-playfair block mt-5">
                Storytelling Potential
              </span>
            </h2>
            <div className="space-y-3 pt-5">
              <div className="flex items-center gap-2">
                <img src={tickmark} alt="checkmark" className="w-5 h-5" />
                <p className="text-sub-gray">
                  Amplify Your People's Voices & Influence
                </p>
              </div>
              <div className="flex items-center gap-2">
                <img src={tickmark} alt="checkmark" className="w-5 h-5" />
                <p className="text-sub-gray">Build Employer Brand Equity</p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-auto">
            <div className="bg-white/90 md:p-6 rounded-lg">
              <h2 className="text-xl font-medium mb-4">
                Subscribe to our Newsletter!
              </h2>
              <form onSubmit={handleSubscribe} className="space-y-4 pt-5">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2.5 rounded-lg focus:outline-none border"
                  required
                />
                <button
                  type="submit"
                  className="bg-primary-gradient text-white px-6 py-3 rounded-full transition-all duration-700 ease-out delay-400 hover:scale-105"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="w-full py-8 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-6">
            <div className="flex items-center">
              <Logo />
            </div>
            <nav className="flex flex-wrap gap-6">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sub-gray hover:text-gray-900 transition-colors"
                  onClick={(e) => handleScroll(e, item.href)}
                >
                  {item.name}
                </a>
              ))}
            </nav>
            <div className="flex gap-4">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-gray-900 transition-colors p-4 bg-blue-custom-400 rounded-full"
                  aria-label={item.name}
                >
                  <img src={item.icon} className="w-5 h-5" alt={item.name} />
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-600 mb-4 md:mb-0">
              © 2024 AI Loves HR Ltd. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="/privacypolicy"
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
