
import React, { useEffect, useRef } from 'react';
import { Code, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

const Skills = () => {
  const skillsRef = useRef(null);
  const cardsRef = useRef([]);
  cardsRef.current = [];

  const addToRefs = (el) => {
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
    gsap.from(cardsRef.current, {
      duration: 0.8,
      opacity: 0,
      y: 50,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: skillsRef.current,
        start: "top 70%",
      }
    });

    // Add hover effect for skill badges
    const skillBadges = document.querySelectorAll('.skill-badge');
    skillBadges.forEach(badge => {
      badge.addEventListener('mouseenter', () => {
        gsap.to(badge, {
          scale: 1.1,
          backgroundColor: '#2563eb',
          color: 'white',
          duration: 0.3
        });
      });
      
      badge.addEventListener('mouseleave', () => {
        gsap.to(badge, {
          scale: 1,
          backgroundColor: '#f3f4f6',
          color: '#1f2937',
          duration: 0.3
        });
      });
    });

    return () => {
      skillBadges.forEach(badge => {
        badge.removeEventListener('mouseenter', () => {});
        badge.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);
  
  return (
    <section id="skills" className="py-20 bg-gray-50" ref={skillsRef}>
      <div className="container mx-auto px-4">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Skills
        </motion.h2>
        
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              ref={addToRefs}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 transform-gpu"
            >
              <div className="flex items-center mb-4">
                <Code className="text-tech-blue w-5 h-5 mr-2" />
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
              className="bg-tech-blue text-white px-5 py-2 rounded-full font-medium flex items-center"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(37, 99, 235, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Star className="w-4 h-4 mr-1" /> React.js
            </motion.span>
            <motion.span 
              className="bg-tech-blue text-white px-5 py-2 rounded-full font-medium flex items-center"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(37, 99, 235, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Star className="w-4 h-4 mr-1" /> React Native
            </motion.span>
            <motion.span 
              className="bg-tech-blue text-white px-5 py-2 rounded-full font-medium flex items-center"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(37, 99, 235, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Star className="w-4 h-4 mr-1" /> Node.js
            </motion.span>
            <motion.span 
              className="bg-tech-blue text-white px-5 py-2 rounded-full font-medium flex items-center"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(37, 99, 235, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Star className="w-4 h-4 mr-1" /> TypeScript
            </motion.span>
            <motion.span 
              className="bg-tech-blue text-white px-5 py-2 rounded-full font-medium flex items-center"
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
