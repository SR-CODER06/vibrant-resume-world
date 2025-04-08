
import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div className="md:col-span-2">
            <Link to="/" className="text-2xl font-bold mb-4 block">
              Saswat<span className="text-tech-blue">.dev</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Junior Software Developer specialized in React, React Native, and Node.js development.
              Based in Bhubaneswar, Odisha, India.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="mailto:contact@saswatmohanty.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/#about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/#experience" className="text-gray-400 hover:text-white transition-colors">
                  Experience
                </Link>
              </li>
              <li>
                <Link to="/#education" className="text-gray-400 hover:text-white transition-colors">
                  Education
                </Link>
              </li>
              <li>
                <Link to="/#skills" className="text-gray-400 hover:text-white transition-colors">
                  Skills
                </Link>
              </li>
              <li>
                <Link to="/#projects" className="text-gray-400 hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/#certifications" className="text-gray-400 hover:text-white transition-colors">
                  Certifications
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                Bhubaneswar, Odisha, India
              </li>
              <li>
                <a href="mailto:contact@saswatmohanty.com" className="text-gray-400 hover:text-white transition-colors">
                  contact@saswatmohanty.com
                </a>
              </li>
              <li>
                <a href="tel:+919876543210" className="text-gray-400 hover:text-white transition-colors">
                  +91 98765 43210
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 mt-6 text-center text-gray-500 text-sm">
          <p>© 2025 Saswat Ranjan Mohanty. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
