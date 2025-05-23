
import React from 'react';

interface HeroProps {
  siteTitle: string;
  description: string;
}

const Hero: React.FC<HeroProps> = ({ siteTitle, description }) => {
  return (
    <section className="relative bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 py-20 lg:py-32">
      <div className="absolute inset-0 bg-white/50"></div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
          {siteTitle}
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
          {description}
        </p>
        <div className="mt-10">
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
            Start Reading
          </button>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-purple-200 rounded-full opacity-50 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-blue-200 rounded-full opacity-50 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-20 w-12 h-12 bg-indigo-200 rounded-full opacity-50 animate-pulse delay-500"></div>
    </section>
  );
};

export default Hero;
