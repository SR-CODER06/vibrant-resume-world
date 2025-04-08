
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

const About = () => {
  const aboutRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const paragraphsRef = useRef([]);
  paragraphsRef.current = [];

  const addToRefs = (el) => {
    if (el && !paragraphsRef.current.includes(el)) {
      paragraphsRef.current.push(el);
    }
  };

  useEffect(() => {
    const aboutSection = aboutRef.current;
    const image = imageRef.current;
    const content = contentRef.current;
    const paragraphs = paragraphsRef.current;

    // Set initial states
    gsap.set(image, { opacity: 0, x: -50 });
    gsap.set(content.querySelector('h3'), { opacity: 0, y: 20 });
    gsap.set(paragraphs, { opacity: 0, y: 30 });
    gsap.set(content.querySelector('.contact-info'), { opacity: 0 });

    // Create timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: aboutSection,
        start: "top 60%",
      }
    });

    // Add animations to timeline
    tl.to(image, { 
        opacity: 1, 
        x: 0, 
        duration: 1, 
        ease: "power2.out" 
      })
      .to(content.querySelector('h3'), { 
        opacity: 1, 
        y: 0, 
        duration: 0.6 
      }, "-=0.4")
      .to(paragraphs, { 
        opacity: 1, 
        y: 0, 
        stagger: 0.2, 
        duration: 0.8 
      }, "-=0.2")
      .to(content.querySelector('.contact-info'), { 
        opacity: 1, 
        duration: 0.6 
      }, "-=0.4");

    // Add hover effect for image
    image.addEventListener('mouseenter', () => {
      gsap.to(image, {
        scale: 1.03,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)",
        duration: 0.3
      });
    });
    
    image.addEventListener('mouseleave', () => {
      gsap.to(image, {
        scale: 1,
        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
        duration: 0.3
      });
    });

    return () => {
      if (tl) tl.kill();
      image.removeEventListener('mouseenter', () => {});
      image.removeEventListener('mouseleave', () => {});
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-white" ref={aboutRef}>
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
          <div className="md:w-1/3" ref={imageRef}>
            <img 
              src="/lovable-uploads/a122a375-3f05-4961-94ce-33c519aa6833.png" 
              alt="Saswat Ranjan Mohanty" 
              className="rounded-lg shadow-lg w-full object-cover aspect-square hover:shadow-2xl transition-all duration-300"
            />
          </div>
          
          <div className="md:w-2/3" ref={contentRef}>
            <h3 className="text-2xl font-semibold mb-4 text-tech-blue">
              Software Development Engineer I (SDE 1) at HyScaler
            </h3>
            
            <p ref={addToRefs} className="text-gray-700 mb-6">
              I am a passionate Software Development Engineer (SDE 1) at HyScaler, where I've been developing cutting-edge applications using React, React Native, and Node.js. With a strong foundation in both frontend and backend technologies, I specialize in creating responsive, user-friendly interfaces and robust server-side solutions.
            </p>
            
            <p ref={addToRefs} className="text-gray-700 mb-6">
              My journey began as an Apprentice Trainee at HyScaler, and I quickly progressed to my current role as an SDE 1. During this time, I've gained hands-on experience with modern JavaScript frameworks, state management libraries, and RESTful API design. I'm currently working with Django REST Framework and React Native to develop cross-platform mobile applications that deliver seamless user experiences.
            </p>
            
            <p ref={addToRefs} className="text-gray-700 mb-6">
              I hold a Master's degree in Computer Applications from Biju Patnaik University of Technology, which has provided me with a strong theoretical background that complements my practical skills. I'm committed to continuous learning and staying up-to-date with the latest industry trends and best practices.
            </p>
            
            <div className="flex flex-wrap gap-4 contact-info">
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
