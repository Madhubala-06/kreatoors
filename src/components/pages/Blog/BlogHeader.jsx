import React from 'react';

export const BlogHeader = ({ title, author, authorRole, image , thumbnail }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 pt-8 pb-12">
      <h1 className="text-3xl md:text-4xl  mb-6 font-semibold">
        {title}
      </h1>
      
      <div className="flex items-center space-x-3 mb-8">
        <img 
          src={image} 
          alt={author.name}
          className="w-12 h-12 rounded-full"
        />
        <div>
          <h3 className="font-medium">{author.name}</h3>
          <p className="text-sm text-gray-600">{author.role}</p>
        </div>
      </div>

      <div className="rounded-2xl overflow-hidden mb-8">
        <img
          src={thumbnail}
          alt={title}
          className="w-4/5 mx-auto  rounded-3xl md:h-[420px] object-cover"
        />
      </div>
    </div>
  );
};