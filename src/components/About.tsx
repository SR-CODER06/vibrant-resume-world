
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        
        <div className="flex flex-col md:flex-row gap-12 mt-10">
          <motion.div 
            className="md:w-1/3"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <img 
              src="/lovable-uploads/a122a375-3f05-4961-94ce-33c519aa6833.png" 
              alt="Saswat Ranjan Mohanty" 
              className="rounded-lg shadow-lg w-full object-cover aspect-square hover:shadow-2xl transition-shadow duration-300"
            />
          </motion.div>
          
          <div className="md:w-2/3">
            <motion.h3 
              className="text-2xl font-semibold mb-4 text-tech-blue"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Software Development Engineer I (SDE 1) at HyScaler
            </motion.h3>
            
            <motion.p 
              className="text-gray-700 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              I am a passionate Software Development Engineer (SDE 1) at HyScaler, where I've been developing cutting-edge applications using React, React Native, and Node.js. With a strong foundation in both frontend and backend technologies, I specialize in creating responsive, user-friendly interfaces and robust server-side solutions.
            </motion.p>
            
            <motion.p 
              className="text-gray-700 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              My journey began as an Apprentice Trainee at HyScaler, and I quickly progressed to my current role as an SDE 1. During this time, I've gained hands-on experience with modern JavaScript frameworks, state management libraries, and RESTful API design. I'm currently working with Django REST Framework and React Native to develop cross-platform mobile applications that deliver seamless user experiences.
            </motion.p>
            
            <motion.p 
              className="text-gray-700 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              I hold a Master's degree in Computer Applications from Biju Patnaik University of Technology, which has provided me with a strong theoretical background that complements my practical skills. I'm committed to continuous learning and staying up-to-date with the latest industry trends and best practices.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
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
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
