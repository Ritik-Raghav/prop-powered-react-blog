
import React from 'react';

interface SocialLinks {
  twitter?: string;
  github?: string;
}

interface FooterProps {
  authorName: string;
  email: string;
  socialLinks: SocialLinks;
}

const Footer: React.FC<FooterProps> = ({ authorName, email, socialLinks }) => {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Author Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About the Author</h3>
            <p className="text-gray-300 mb-2">{authorName}</p>
            <a 
              href={`mailto:${email}`}
              className="text-purple-400 hover:text-purple-300 transition-colors duration-200"
            >
              {email}
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="space-y-2">
              {socialLinks.twitter && (
                <a 
                  href={socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Twitter
                </a>
              )}
              {socialLinks.github && (
                <a 
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-300 hover:text-white transition-colors duration-200"
                >
                  GitHub
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} {authorName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
