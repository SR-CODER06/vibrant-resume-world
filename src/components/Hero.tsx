
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] bg-hero-pattern bg-cover bg-center flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-dark/90 to-dark/70"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-start max-w-3xl">
          <div className="mb-6 animate-fade-in">
            <h2 className="text-tech-blue text-xl md:text-2xl font-medium mb-2">Hello, I'm</h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Saswat Ranjan Mohanty
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-white/90">
              Junior Software Developer
            </h2>
          </div>
          
          <p className="text-white/80 text-lg max-w-2xl mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            I am a dedicated software developer at HyScaler, where I have honed my skills in React, React Native, and Node.js. Passionate about technology and innovation, I strive to create impactful solutions.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button className="bg-tech-blue hover:bg-tech-purple text-white">
              View My Work
            </Button>
            <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
              Download CV
            </Button>
          </div>
          
          <a 
            href="#about" 
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/80 hover:text-white transition-colors animate-fade-in" 
            style={{ animationDelay: "0.6s" }}
          >
            <span className="mb-2 text-sm">Scroll Down</span>
            <ArrowDown className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
