import React from 'react';
import { useParams } from 'react-router-dom';
import { BlogHeader } from './BlogHeader';
import BlogContent from './BlogContent';
import { blogData } from './BlogData';

export const BlogDetailPage = () => {
  const { slug } = useParams();
  const blog = blogData[slug];

  if (!blog) {
    return (
      <article className="bg-white min-h-screen py-8 pt-40">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-2xl font-bold">Blog post not found</h1>
        </div>
      </article>
    );
  }

  return (
    <article className="bg-white min-h-screen py-8 pt-40">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <BlogHeader 
          title={blog.title} 
          author={blog.author} 
          thumbnail={blog.thumbnail}
          image={blog.avatar} 
        />
        <p className="text-gray-700 mb-8">{blog.intro}</p>
        <BlogContent content={blog} />
      </div>
    </article>
  );
};