import React from "react";
import { Link } from 'react-router-dom';

import one from '../../../assets/images/blog/one.png'
import two from '../../../assets/images/blog/two.jpg'
import three from '../../../assets/images/blog/three.jpg'
import four from '../../../assets/images/blog/four.jpg'
import five from '../../../assets/images/blog/five.png'
import six from '../../../assets/images/blog/six.jpg'
import seven from '../../../assets/images/blog/seven.png'
import eight from '../../../assets/images/blog/eight.jpg'
import nine from '../../../assets/images/blog/1748a214f1afbad3cefb9cd6a5edc0e5.jpg'
import ten from '../../../assets/images/blog/11.jpg'
import eleven from '../../../assets/images/blog/12.jpg'









const blogs = [
    {
        id: "egc-strategic-asset",
        title: "Employee-Generated Content (EGC): HR's Strategic Asset in Modern Brand Building",
        date: "November 19, 2024",
        image: one,
    },
    {
        id: "employee-to-brand-mmbassador",
        title: "Content Creation – A Superpower in the HR Ecosystem",
        date: "November 19, 2024",
        image: two,
    },
    {
        title: "The Hidden Cost of Hybrid: Covid changed Internal Communication",
        date: "August 8, 2024",
        image:  three,
    },
    {
        title: "AI vs. Authenticity: Why Human Stories Matter More Than Ever in Brand Building",
        date: "November 19, 2024",
        image: four,
    },
    {
        id:"roi",
        title: "The ROI of Employee Stories: Real Numbers Behind Successful Advocacy Programs",
        date: "November 19, 2024",
        image: five,
    },
    {
        title: "5 Companies Winning at Employee-Generated Content (And What We Can Learn)",
        date: "November 19, 2024",
        image: six,
    },


    {
        title: "Personal Brand or Corporate Voice? How to Strike the Perfect Balance ",
        date: "November 19, 2024",
        image: seven,
    },


    {
        title: "Content Creation Made Simple: A Guide for Busy Professionals ",
        date: "November 19, 2024",
        image: eight,
    },
    {
        title: "Beyond LinkedIn: Where and How Your Employees Should Share Their Stories ",
        date: "November 19, 2024",
        image: nine,
    },


    {
        title: "    The Future of Corporate Influence: Why Employee Voices Are Your Secret Weapon ",
        date: "November 19, 2024",
        image: ten,
    },


    {
        title: "Creating a Culture of Sharing: How to Encourage Employee Content Creation ",
        date: "November 19, 2024",
        image:eleven,
    },




    
];

const BlogPage = () => {
    return (
        <div className='bg-blue-custom-400   pt-44'>

            <div className="mx-auto ">
                <div className="text-center mb-12 rounded-b-[50px] py-10">
                    <h1 className="text-4xl mb-4 font-playfair  ">Blog</h1>
                    <p className=" text-sub-gray ">Insights to Elevate Your Expertise</p>
                </div>
                <div className='bg-white  py-16 px-5'>



                    <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 max-w-6xl mx-auto">
                        {blogs.map((blog, index) => (
                            <Link
                                to={`/blog/${blog.id}`}>
                                <div
                                    key={index}
                                    className="bg-white rounded-lg overflow-hidden hover:scale-105 transition-transform"
                                >
                                    <img
                                        src={blog.image}
                                        alt={blog.title}
                                        className="w-full h-52 object-cover rounded-lg"
                                    />
                                    <div className="p-4">
                                        <p className="text-sm  text-sub-gray">{blog.date}</p>
                                        <h2 className="text-lg  font-medium  mt-2">{blog.title}</h2>
                                    </div>
                                </div>
                            </Link>


                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
