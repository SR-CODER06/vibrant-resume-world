
import React, { useEffect, useRef } from 'react';
import { Code, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

const Skills = () => {
  const skillsRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const titleRef = useRef<HTMLHeadingElement>(null);
  
  // Clear on each render
  cardsRef.current = [];

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React.js", "React Native", "HTML5", "CSS3", "JavaScript", "TypeScript", "Tailwind CSS", "Redux", "Next.js", "Material UI"]
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Express.js", "Django REST Framework", "Python", "GraphQL", "MongoDB", "PostgreSQL"]
    },
    {
      title: "Programming Languages",
      skills: ["JavaScript", "TypeScript", "Python", "Java", "C++", "SQL"]
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "GitHub", "VS Code", "Docker", "Firebase", "AWS", "Heroku", "Vercel", "Netlify", "Jira"]
    }
  ];
  
  useEffect(() => {
    if (!skillsRef.current || !titleRef.current) return;
    
    // Add 3D rotation effect on skill cards
    gsap.set(cardsRef.current, {
      transformPerspective: 1000,
      rotationY: -15,
      opacity: 0,
      y: 50
    });
    
    // Create timeline for section title reveal 
    const titleTl = gsap.timeline({
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%"
      }
    });
    
    titleTl.fromTo(titleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6 }
    ).to(titleRef.current.querySelector('::after'), {
      width: "66%",
      duration: 0.8,
      ease: "power4.out"
    });
    
    // Animate skill cards with 3D effect
    cardsRef.current.forEach((card, index) => {
      gsap.to(card, {
        rotationY: 0,
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: index * 0.15,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: card,
          start: "top 85%"
        }
      });
      
      // Create hover effect that simulates 3D card tilt
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const xRotation = ((y - rect.height / 2) / rect.height) * 10;
        const yRotation = ((x - rect.width / 2) / rect.width) * -10;
        
        gsap.to(card, {
          rotationX: xRotation,
          rotationY: yRotation,
          scale: 1.05,
          boxShadow: '0 20px 30px rgba(0,0,0,0.1)',
          ease: 'power1.out',
          duration: 0.5
        });
      });
      
      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          rotationX: 0,
          rotationY: 0,
          scale: 1,
          boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)',
          ease: 'power3.out',
          duration: 0.5
        });
      });
    });
    
    // Add floating animation to the top expertise section
    const expertiseTags = document.querySelectorAll('.expertise-tag');
    expertiseTags.forEach((tag, index) => {
      gsap.to(tag, {
        y: -10,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.2
      });
    });

    // Add fancy animation for skill badges
    const skillBadges = document.querySelectorAll('.skill-badge');
    skillBadges.forEach((badge, index) => {
      gsap.fromTo(badge,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.3,
          delay: 0.05 * (index % 10), // Group delay by batches of 10
          scrollTrigger: {
            trigger: badge,
            start: "top 95%"
          }
        }
      );
      
      badge.addEventListener('mouseenter', () => {
        gsap.to(badge, {
          scale: 1.2,
          backgroundColor: '#2563eb',
          color: 'white',
          boxShadow: '0 5px 15px rgba(37, 99, 235, 0.4)',
          duration: 0.3
        });
      });
      
      badge.addEventListener('mouseleave', () => {
        gsap.to(badge, {
          scale: 1,
          backgroundColor: '#f3f4f6',
          color: '#1f2937',
          boxShadow: 'none',
          duration: 0.3
        });
      });
    });

    return () => {
      skillBadges.forEach(badge => {
        badge.removeEventListener('mouseenter', () => {});
        badge.removeEventListener('mouseleave', () => {});
      });
      
      cardsRef.current.forEach(card => {
        card.removeEventListener('mousemove', () => {});
        card.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);
  
  return (
    <section id="skills" className="py-20 bg-gray-50" ref={skillsRef}>
      <div className="container mx-auto px-4">
        <h2 
          className="section-title"
          ref={titleRef}
        >
          Skills
        </h2>
        
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              ref={addToRefs}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 transform-gpu skill-card"
            >
              <div className="flex items-center mb-4">
                <Code className="text-tech-blue w-5 h-5 mr-2 skill-icon" />
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className="skill-badge hover:bg-tech-blue hover:text-white transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold mb-4">Top Expertise</h3>
          <div className="flex flex-wrap justify-center gap-3">
            <motion.span 
              className="expertise-tag bg-tech-blue text-white px-5 py-2 rounded-full font-medium flex items-center"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(37, 99, 235, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Star className="w-4 h-4 mr-1" /> React.js
            </motion.span>
            <motion.span 
              className="expertise-tag bg-tech-blue text-white px-5 py-2 rounded-full font-medium flex items-center"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(37, 99, 235, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Star className="w-4 h-4 mr-1" /> React Native
            </motion.span>
            <motion.span 
              className="expertise-tag bg-tech-blue text-white px-5 py-2 rounded-full font-medium flex items-center"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(37, 99, 235, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Star className="w-4 h-4 mr-1" /> Node.js
            </motion.span>
            <motion.span 
              className="expertise-tag bg-tech-blue text-white px-5 py-2 rounded-full font-medium flex items-center"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(37, 99, 235, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Star className="w-4 h-4 mr-1" /> TypeScript
            </motion.span>
            <motion.span 
              className="expertise-tag bg-tech-blue text-white px-5 py-2 rounded-full font-medium flex items-center"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(37, 99, 235, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Star className="w-4 h-4 mr-1" /> Django REST
            </motion.span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
