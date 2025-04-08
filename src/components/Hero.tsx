
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] bg-hero-pattern bg-cover bg-center flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-dark/90 to-dark/70"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-start max-w-3xl">
          <motion.div 
            className="mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2 
              className="text-tech-blue text-xl md:text-2xl font-medium mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Hello, I'm
            </motion.h2>
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Saswat Ranjan Mohanty
            </motion.h1>
            <motion.h2 
              className="text-2xl md:text-3xl font-semibold text-white/90"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Software Development Engineer I
            </motion.h2>
          </motion.div>
          
          <motion.p 
            className="text-white/80 text-lg max-w-2xl mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            I am a dedicated SDE 1 at HyScaler, where I develop modern applications using React, React Native, and Node.js. Passionate about technology and innovation, I strive to create impactful solutions that deliver exceptional user experiences.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-tech-blue hover:bg-tech-purple text-white">
                View My Work
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                Download CV
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.a 
            href="#about" 
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/80 hover:text-white transition-colors"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            whileHover={{ scale: 1.1 }}
          >
            <span className="mb-2 text-sm">Scroll Down</span>
            <ArrowDown className="animate-bounce" />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
