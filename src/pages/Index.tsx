
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import BlogList from '../components/BlogList';
import Footer from '../components/Footer';

const Index = () => {
  // Site props
  const siteProps = {
    siteTitle: "Tech Chronicles",
    logoUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=100&h=100&fit=crop&crop=center",
    description: "Exploring the cutting edge of web development, design patterns, and modern technologies through insightful articles and tutorials.",
    authorName: "Jane Doe",
    email: "jane@techchronicles.dev",
    socialLinks: {
      twitter: "https://twitter.com/janedoe",
      github: "https://github.com/janedoe"
    }
  };

  // Blog posts data
  const blogPosts = [
    {
      title: "Why React is Still King",
      excerpt: "Exploring React's dominance in frontend development and why it continues to be the go-to choice for modern web applications.",
      coverImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
      publishedDate: "2024-11-01"
    },
    {
      title: "Understanding TypeScript",
      excerpt: "A comprehensive beginner's guide to static typing in JavaScript and how TypeScript can improve your development workflow.",
      coverImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=400&fit=crop",
      publishedDate: "2024-10-15"
    },
    {
      title: "Modern CSS Techniques",
      excerpt: "Discover the latest CSS features and techniques that are transforming how we build responsive and beautiful web interfaces.",
      coverImage: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=400&fit=crop",
      publishedDate: "2024-10-08"
    },
    {
      title: "The Future of Web Development",
      excerpt: "Exploring emerging trends and technologies that will shape the future of web development in the coming years.",
      coverImage: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=400&fit=crop",
      publishedDate: "2024-09-22"
    },
    {
      title: "Building Scalable Applications",
      excerpt: "Best practices and architectural patterns for building web applications that can grow with your business needs.",
      coverImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop",
      publishedDate: "2024-09-10"
    },
    {
      title: "Performance Optimization Tips",
      excerpt: "Essential techniques and strategies to optimize your web application's performance and provide the best user experience.",
      coverImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
      publishedDate: "2024-08-28"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        siteTitle={siteProps.siteTitle}
        logoUrl={siteProps.logoUrl}
      />
      
      <main>
        <Hero 
          siteTitle={siteProps.siteTitle}
          description={siteProps.description}
        />
        
        <BlogList posts={blogPosts} />
      </main>
      
      <Footer 
        authorName={siteProps.authorName}
        email={siteProps.email}
        socialLinks={siteProps.socialLinks}
      />
    </div>
  );
};

export default Index;
