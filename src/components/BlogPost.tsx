
import React from 'react';

interface BlogPostProps {
  title: string;
  excerpt: string;
  coverImage: string;
  publishedDate: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ title, excerpt, coverImage, publishedDate }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <article className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <div className="relative overflow-hidden">
        <img 
          src={coverImage}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=400&fit=crop';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-6">
        <div className="text-sm text-purple-600 font-medium mb-2">
          {formatDate(publishedDate)}
        </div>
        
        <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-200">
          {title}
        </h2>
        
        <p className="text-gray-600 leading-relaxed mb-4">
          {excerpt}
        </p>
        
        <button className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium transition-colors duration-200">
          Read More
          <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </article>
  );
};

export default BlogPost;
