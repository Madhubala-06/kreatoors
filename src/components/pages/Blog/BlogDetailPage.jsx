import React from 'react';
import { useParams } from 'react-router-dom';
import { BlogHeader } from './BlogHeader';
import BlogOne from './Blogone';
import BlogThree from './BlogThree';
import BlogTwo from './BlogTwo';
export const BlogDetailPage = () => {
  const { slug } = useParams();

  let BlogContentComponent;

  switch (slug) {
    case 'egc-strategic-asset':
      BlogContentComponent = BlogOne;
      break;
    case 'employee-to-brand-mmbassador':
      BlogContentComponent = BlogTwo;
      break;
      case 'roi':
        BlogContentComponent = BlogThree;
        break;
      
    default:
      BlogContentComponent = () => <div>Blog post not found</div>;
      break;
  }

  
  return (
    <article className="bg-white min-h-screen py-8 pt-40">
      <BlogContentComponent />
    </article>
  );
};
