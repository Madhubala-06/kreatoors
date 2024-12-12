import React, { useState } from 'react';
import { MapPin, Instagram, Linkedin } from 'lucide-react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleSubmit = (e) => {


        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (


        <div className='bg-blue-custom-400   pt-44'>

            <div className="mx-auto ">
                <div className="text-center mb-12 rounded-b-[50px]">
                    <h1 className="text-4xl mb-4"><span className='font-playfair  '>Get in Touch</span> With Us</h1>
                    <p className=" text-sub-gray ">We're Here to Answer Your Questions and Support Your Needs</p>
                </div>
                <div className='bg-white '>

                    <div className="grid md:grid-cols-2 gap-12 max-w-6xl  mx-auto">
                        <div>
                            <h2 className="text-4xl  italic mb-6">Contact Us</h2>
                            <p className="text-gray-600 mb-8">We're Just a Few Clicks Away—Let's Connect!</p>

                            <div className="space-y-6">
                                <div className="flex items-start space-x-3">
                                    <div className="bg-purple-200 p-2 rounded-full">
                                        <MapPin className="h-5 w-5 text-purple-700" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">United Kingdom</h3>
                                        <p className="text-gray-600">AI LOVES HR Ltd 128 City Road London EC1V 2NX</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <div className="bg-purple-200 p-2 rounded-full">
                                        <MapPin className="h-5 w-5 text-purple-700" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">Germany</h3>
                                        <p className="text-gray-600">AI LOVES HR Jacobsenweg 3 22525 Hamburg</p>
                                    </div>
                                </div>

                                <div className="mt-8">
                                    <p className="font-semibold mb-3">Follow us:</p>
                                    <div className="flex space-x-4">
                                        <a href="#" className="text-pink-500 hover:text-pink-600">
                                            <Instagram className="h-6 w-6" />
                                        </a>
                                        <a href="#" className="text-blue-600 hover:text-blue-700">
                                            <Linkedin className="h-6 w-6" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="bg-white ">
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <input
                                            name="fullName"
                                            placeholder="Enter full name"
                                            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div>
                                        <input
                                            name="email"
                                            type="email"
                                            placeholder="Enter email address"
                                            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="flex">
                                        <select className="p-3 rounded-l-lg border border-r-0 border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                                            <option>+44</option>
                                        </select>
                                        <input
                                            name="phone"
                                            type="tel"
                                            placeholder="Enter mobile no."
                                            className="w-full p-3 rounded-r-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                            value={formData.phone}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div>
                                        <textarea
                                            name="message"
                                            placeholder="Enter message"
                                            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent min-h-[150px]"
                                            value={formData.message}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg transition duration-200"
                                    >
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </div>

    );
};

export default ContactForm;