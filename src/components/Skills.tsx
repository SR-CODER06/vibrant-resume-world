
import React from 'react';
import { Code, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Skills = () => {
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
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
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
        
        <motion.div 
          className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              <div className="flex items-center mb-4">
                <Code className="text-tech-blue w-5 h-5 mr-2" />
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span 
                    key={skillIndex} 
                    className="skill-badge hover:bg-tech-blue hover:text-white transition-colors duration-300"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
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
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Star className="w-4 h-4 mr-1" /> React.js
            </motion.span>
            <motion.span 
              className="bg-tech-blue text-white px-5 py-2 rounded-full font-medium flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Star className="w-4 h-4 mr-1" /> React Native
            </motion.span>
            <motion.span 
              className="bg-tech-blue text-white px-5 py-2 rounded-full font-medium flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Star className="w-4 h-4 mr-1" /> Node.js
            </motion.span>
            <motion.span 
              className="bg-tech-blue text-white px-5 py-2 rounded-full font-medium flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Star className="w-4 h-4 mr-1" /> TypeScript
            </motion.span>
            <motion.span 
              className="bg-tech-blue text-white px-5 py-2 rounded-full font-medium flex items-center"
              whileHover={{ scale: 1.05 }}
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
