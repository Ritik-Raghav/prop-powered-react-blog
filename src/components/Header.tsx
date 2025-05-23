
import React from 'react';
import { Menu, Search } from 'lucide-react';

interface HeaderProps {
  siteTitle: string;
  logoUrl: string;
}

const Header: React.FC<HeaderProps> = ({ siteTitle, logoUrl }) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Site Title */}
          <div className="flex items-center space-x-4">
            <img 
              src={logoUrl} 
              alt={`${siteTitle} Logo`}
              className="h-10 w-10 rounded-lg object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              {siteTitle}
            </h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium">
              About
            </a>
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium">
              Contact
            </a>
            <button className="p-2 text-gray-700 hover:text-purple-600 transition-colors duration-200">
              <Search size={20} />
            </button>
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden p-2 text-gray-700 hover:text-purple-600 transition-colors duration-200">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
