
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Index = () => {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add smooth scroll behavior for anchor links
    const handleAnchorClick = (e: Event) => {
      e.preventDefault();
      const target = e.currentTarget as HTMLAnchorElement;
      const targetId = target.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          gsap.to(window, {
            duration: 1,
            scrollTo: {
              y: targetElement,
              offsetY: 80
            },
            ease: "power3.inOut"
          });
        }
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick);
    });

    // Page load animation
    const tl = gsap.timeline();
    tl.from("nav", { y: -100, opacity: 0, duration: 1, ease: "power3.out" });

    // Initialize GSAP animations
    const sections = gsap.utils.toArray('.section-reveal');
    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: section as Element,
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }
      );
    });

    // Add a cursor follower effect for a modern touch
    const cursor = document.createElement('div');
    cursor.classList.add('cursor-follower');
    document.body.appendChild(cursor);
    
    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "none"
      });
    };
    
    window.addEventListener('mousemove', moveCursor);

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick);
      });
      window.removeEventListener('mousemove', moveCursor);
      document.body.removeChild(cursor);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={mainRef} className="min-h-screen">
      <Navbar />
      <Hero />
      <div className="section-reveal">
        <About />
      </div>
      <div className="section-reveal">
        <Experience />
      </div>
      <div className="section-reveal">
        <Education />
      </div>
      <div className="section-reveal">
        <Skills />
      </div>
      <div className="section-reveal">
        <Projects />
      </div>
      <div className="section-reveal">
        <Certifications />
      </div>
      <div className="section-reveal">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
