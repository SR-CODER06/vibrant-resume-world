
import React from 'react';
import { Calendar, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Certifications = () => {
  const certifications = [
    {
      title: "THE WEB DEVELOPER BOOTCAMP 2023",
      issuer: "Udemy",
      date: "Issued Jul 2023",
      credentialId: "UC-87beec7b-a96f-4e81-9ff4-72762dd70e06",
      skills: ["CSS", "HTML5", "JavaScript", "Node.js", "Express", "MongoDB", "React", "Bootstrap", "REST API", "Git", "GitHub", "Responsive Design"],
      logo: "https://media.licdn.com/dms/image/C4D0BAQGyOWvr4W0Pow/company-logo_100_100/0/1590003577120?e=2147483647&v=beta&t=j5H3CQB1mHDuN30RU2llJrZ5m8Ge0RQRGlfOQbW0jQI"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section id="certifications" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Licenses & Certifications
        </motion.h2>
        
        <motion.div 
          className="mt-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {certifications.map((cert, index) => (
            <motion.div 
              key={index} 
              className="timeline-item"
              variants={itemVariants}
              whileHover={{ x: 5 }}
            >
              <div className="mb-1">
                <motion.img 
                  src={cert.logo}
                  alt={cert.issuer}
                  className="h-12 w-12 object-contain mb-3"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  viewport={{ once: true }}
                />
                <motion.h3 
                  className="text-xl font-semibold"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  {cert.title}
                </motion.h3>
                <motion.h4 
                  className="text-tech-blue font-medium"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  {cert.issuer}
                </motion.h4>
              </div>
              
              <motion.div 
                className="flex text-sm text-gray-600 mb-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" /> 
                  <span>{cert.date}</span>
                </div>
              </motion.div>
              
              <motion.p 
                className="text-gray-700 mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Credential ID {cert.credentialId}
              </motion.p>
              
              <motion.a 
                href="#" 
                className="inline-flex items-center text-tech-blue hover:underline mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ x: 3 }}
              >
                <span className="mr-1">Show credential</span>
                <ExternalLink className="w-4 h-4" />
              </motion.a>
              
              <motion.div 
                className="flex flex-wrap"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.6 }}
                viewport={{ once: true }}
              >
                {cert.skills.slice(0, 9).map((skill, idx) => (
                  <motion.span 
                    key={idx} 
                    className="skill-badge"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 * idx }}
                    whileHover={{ scale: 1.05, backgroundColor: '#f0f9ff' }}
                  >
                    {skill}
                  </motion.span>
                ))}
                {cert.skills.length > 9 && (
                  <motion.span 
                    className="skill-badge"
                    whileHover={{ scale: 1.05 }}
                  >
                    +{cert.skills.length - 9} skills
                  </motion.span>
                )}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
