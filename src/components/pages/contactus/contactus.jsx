import React, { useState } from 'react';
import location from '../../../assets/images/location.png'
import linkedIn from '../../../assets/images/linkedIn.png'
import instagram  from '../../../assets/images/skill-icons_instagram.png'


import { collection, addDoc, serverTimestamp  , db} from '../../../firebase'
const ContactForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        companyName: '',
        jobTitle:'',
        message: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const docRef = await addDoc(collection(db, "ContactUs"), {
                fullName: formData.fullName,
                email: formData.email,
                companyName: formData.companyName,
                jobTitle: formData.jobTitle,
                message: formData.message,
                createdAt: serverTimestamp(), 
            });
    
            console.log("New document written with ID: ", docRef.id);
    
            setFormData({
                fullName: "",
                email: "",
                companyName: "",
                jobTitle: "",
                message: "",
            });
    
            alert("Form submitted successfully!");
        } catch (error) {
            console.error("Error adding document: ", error);
            alert("An error occurred while submitting the form. Please try again.");
        }
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
                <div className="text-center mb-12 rounded-b-[50px] py-10">
                    <h1 className="text-4xl mb-4"><span className='font-playfair  '>Get in Touch</span> With Us</h1>
                    <p className=" text-sub-gray ">We're Just a Few Clicks Away—Let's Connect!</p>
                </div>
                <div className='bg-white  py-16 px-5'>

                    <div className="grid md:grid-cols-2 gap-12 max-w-6xl  mx-auto">
                    <div>
                    <div className="bg-blue-custom-400 px-7 py-7 rounded-2xl">
    <form onSubmit={handleSubmit} className="space-y-4">
        <div>
            <input
                name="fullName"
                placeholder="Enter full name"
                className="w-full p-3 rounded-lg focus:border-transparent"
                value={formData.fullName}
                onChange={handleChange}
            />
        </div>
        <div>
            <input
                name="email"
                type="email"
                placeholder="Enter email address"
                className="w-full p-3 rounded-lg focus:border-transparent"
                value={formData.email}
                onChange={handleChange}
            />
        </div>
        <div>
            <input
                name="companyName"
                type="text"
                placeholder="Company Name"
                className="w-full p-3 rounded-lg focus:border-transparent"
                value={formData.companyName}
                onChange={handleChange}
            />
        </div>
        <div>
            <input
                name="jobTitle"
                type="text"
                placeholder="Job Title"
                className="w-full p-3 rounded-lg focus:border-transparent"
                value={formData.jobTitle}
                onChange={handleChange}
            />
        </div>
        <div>
            <textarea
                name="message"
                placeholder="Enter message"
                className="w-full p-3 rounded-lg focus:border-transparent min-h-[150px]"
                value={formData.message}
                onChange={handleChange}
            />
        </div>
        <div className="flex justify-center">
            <button
                type="submit"
                className="w-full md:w-1/4 bg-primary-gradient text-white py-3 rounded-full transition-all duration-700 ease-out delay-400 hover:scale-105"
            >
                Submit
            </button>
        </div>
    </form>
</div>

</div>

                        <div>
                           
                            <div className="space-y-4 ">
                                <div className="flex  items-center space-x-3 py-3">
                                    <div className=" bg-primary-gradient p-2 rounded-full h-10 w-10">

                                        <img src={location} className=' h-6 w-5 mx-auto'></img>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg ">United Kingdom</h3>
                                        
                                    </div>
                                </div>

                                <p className="text-sub-gray">128 City Road London ECIV 2NX </p>
 
                                <div className="flex items-center space-x-3 py-3">
                                <div className=" bg-primary-gradient p-2 rounded-full h-10 w-10">
                                <img src={location} className=' h-6 w-5 mx-auto' ></img>

                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg   ">Germany</h3>
                                       
                                    </div>
                                </div>
                                <p className="text-sub-gray">Tresckowstr. 1, 22525 Hamburg</p>

                                <div className=" py-3  border-t   border-x-stone-500">
                                    <p className="font-semibold mb-3">Follow us:</p>
                                   
                                    <div className="flex space-x-4">

                                    

                                        <a target='_blank' href=" https://www.linkedin.com/company/kreatoors/posts/?feedView=all" className="text-pink-500 hover:text-pink-600">
                                        <img src={linkedIn} className=' h-6 w-6 mx-auto' ></img>
                                        </a>
                                      
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


            </div>

        </div>

    );
};

export default ContactForm;