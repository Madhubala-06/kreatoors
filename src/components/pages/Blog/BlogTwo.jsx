import React from 'react';
import { BlogHeader } from './BlogHeader';

import BlogContent from './BlogContent';
const BlogTwo = () => {
    const blog = {
        "title": "From Employee to Brand Ambassador: A Step-by-Step Guide to Building an Advocacy Program",
        "avatar": "https://via.placeholder.com/300",
        "intro": "Having employees share your brand story sounds great in theory, but how do you actually make it happen? Let's break down the journey from reluctant employees to enthusiastic brand ambassadors.",
        "sections": [
          {
            "title": "Why Traditional Advocacy Programs Fail",
            "content": "Most organizations start with good intentions but stumble because they focus on tools before trust, or platforms before people. The key to successful advocacy isn't just giving employees a sharing platform – it's building a culture where sharing feels natural and rewarding."
          },
          {
            "title": "Building the Foundation",
            "content": [
              "Start by understanding what motivates employees to share. Our research shows that employees are more likely to become advocates when they:",
              "- Feel genuinely proud of their work",
              "- Understand how sharing benefits their career",
              "- Have the confidence to create content",
              "- Trust that their voice matters"
            ]
          },
          {
            "title": "Creating Your Advocacy Framework",
            "textcontent" :"Begin with these essential steps: ",
            "content": [
              {
                "title": "1. Listen First",
                "description": "Start by understanding your employees' current relationship with social sharing. What makes them hesitate? What would make them more confident? This insight shapes everything that follows."
              },
              {
                "title": "2. Start Small",
                "description": "Don't try to turn everyone into an influencer overnight. Begin with a pilot group of naturally enthusiastic sharers. Their success will inspire others."
              },
              {
                "title": "3. Make It Easy",
                "description": "Remove friction from the sharing process. Provide templates, guidelines, and easy-to-use tools. The easier it is, the more likely people are to participate."
              }
            ]
          },
          {
            "title": "Building Confidence Through Support",
            "content": [
              "- Offering practical training sessions",
              "- Providing content ideas and prompts",
              "- Sharing success stories",
              "- Celebrating small wins"
            ]
          },
          {
            "title": "Measuring What Matters",
            "content": [
              "- Employee engagement in the program",
              "- Content quality improvement over time",
              "- Reach and engagement growth",
              "- Business impact indicators"
            ]
          },
          {
            "title": "Common Challenges and Solutions",
            "content": [
              "- My employees are too busy: Start with micro-content opportunities that take minutes, not hours.",
              "- They're worried about saying the wrong thing: Provide clear guidelines and examples of great content.",
              "- We can't measure the impact: Begin with simple metrics and build complexity over time."
            ]
          },
          {
            "title": "The Journey to Success",
            "content": "Remember, building a successful advocacy program is a marathon, not a sprint. Focus on building trust gradually, celebrating early adopters, learning from feedback, and adapting as you grow."
          },
          {
            "title": "Next Steps",
            
            "textcontent" :"Ready to start your advocacy journey? Begin by: ",
           
            "content": [
              "1. Identifying potential ambassadors",
              "2. Understanding their needs and concerns",
              "3. Creating a simple sharing framework",
              "4. Building in support and recognition"
            ]
          },
          {
            "title": "",
            "content": "The goal isn't to turn every employee into a content creator – it's to empower those who want to share to do so confidently and effectively."
          },
          {
            "title": "",
            "content": "Want to explore how to build an advocacy program that works for your organization? Let's talk about your specific needs and goals."
          }
        ]
      };
      
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <BlogHeader title={blog.title} author="kkkkkkkkkkkkkk" image={blog.avatar} />
      <p className="text-gray-700 mb-8">{blog.intro}</p>
      <BlogContent content={blog} />
    </div>
  );
};

export default BlogTwo;
