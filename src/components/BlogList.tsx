
import React from 'react';
import BlogPost from './BlogPost';

interface BlogPostData {
  title: string;
  excerpt: string;
  coverImage: string;
  publishedDate: string;
}

interface BlogListProps {
  posts: BlogPostData[];
}

const BlogList: React.FC<BlogListProps> = ({ posts }) => {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest Articles
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover insights, tutorials, and thoughts on modern web development
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <BlogPost
              key={index}
              title={post.title}
              excerpt={post.excerpt}
              coverImage={post.coverImage}
              publishedDate={post.publishedDate}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogList;
