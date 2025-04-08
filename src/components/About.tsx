
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">About Me</h2>
        
        <div className="flex flex-col md:flex-row gap-12 mt-10">
          <div className="md:w-1/3">
            <img 
              src="/lovable-uploads/a122a375-3f05-4961-94ce-33c519aa6833.png" 
              alt="Saswat Ranjan Mohanty" 
              className="rounded-lg shadow-lg w-full object-cover aspect-square"
            />
          </div>
          
          <div className="md:w-2/3">
            <h3 className="text-2xl font-semibold mb-4">Junior Software Developer at HyScaler</h3>
            
            <p className="text-gray-700 mb-6">
              I am a dedicated software developer at HyScaler, where I have honed my skills in React, 
              React Native, and Node.js over the past year. With a strong foundation in web development
              and a Master's degree in Computer Applications from Biju Patnaik University of Technology,
              I bring both academic knowledge and practical expertise to my work.
            </p>
            
            <p className="text-gray-700 mb-6">
              My journey began as an Apprentice Trainee at HyScaler where I focused on React.js and React Native
              development. This experience provided me with a solid foundation in modern frontend development
              practices. Prior to that, I completed an internship at Ajatus Software Pvt. Ltd., where I worked
              with vanilla JavaScript and CSS.
            </p>
            
            <p className="text-gray-700 mb-6">
              Currently, I'm working with Django REST Framework and React Native, developing robust full-stack 
              applications. I'm passionate about creating clean, efficient code and continuously expanding my 
              skill set in the ever-evolving tech landscape.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center">
                <span className="font-semibold mr-2">Location:</span>
                <span className="text-gray-700">Bhubaneswar, Odisha, India</span>
              </div>
              
              <div className="flex items-center">
                <span className="font-semibold mr-2">Email:</span>
                <a href="mailto:contact@saswatmohanty.com" className="text-tech-blue hover:underline">
                  contact@saswatmohanty.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
