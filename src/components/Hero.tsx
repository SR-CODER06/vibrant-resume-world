
import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

const Hero = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    const text = textRef.current;
    const buttons = buttonsRef.current;
    
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    
    tl.from(hero, { 
      duration: 1.2, 
      opacity: 0,
      scale: 1.1,
    })
    .from(text.children, { 
      duration: 0.8, 
      opacity: 0, 
      y: 50, 
      stagger: 0.2,
      delay: -0.8
    })
    .from(buttons.children, {
      duration: 0.6,
      opacity: 0,
      y: 20,
      stagger: 0.2,
      delay: -0.4
    });
    
    // Continuous subtle animation for the background
    gsap.to(hero, {
      backgroundPosition: '100% 100%',
      duration: 20,
      repeat: -1,
      yoyo: true,
      ease: "none"
    });
    
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-[90vh] bg-hero-pattern bg-cover bg-center flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-dark/90 to-dark/70"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-start max-w-3xl">
          <div ref={textRef} className="mb-6">
            <h2 className="text-tech-blue text-xl md:text-2xl font-medium mb-2">
              Hello, I'm
            </h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 gsap-reveal">
              Saswat Ranjan Mohanty
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-white/90">
              Software Development Engineer I
            </h2>
          </div>
          
          <p className="text-white/80 text-lg max-w-2xl mb-8">
            I am a dedicated SDE 1 at HyScaler, where I develop modern applications using React, React Native, and Node.js. Passionate about technology and innovation, I strive to create impactful solutions that deliver exceptional user experiences.
          </p>
          
          <div ref={buttonsRef} className="flex flex-wrap gap-4 mb-12">
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
          </div>
          
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
