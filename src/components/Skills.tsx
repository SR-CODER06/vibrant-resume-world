
import React from 'react';
import { Code } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React.js", "React Native", "HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Redux"]
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Express.js", "Django REST Framework", "Python"]
    },
    {
      title: "Programming Languages",
      skills: ["JavaScript", "TypeScript", "Python", "Java"]
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "GitHub", "VS Code", "Docker", "Firebase", "AWS"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Skills</h2>
        
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <Code className="text-tech-blue w-5 h-5 mr-2" />
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold mb-4">Top Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="bg-tech-blue/10 text-tech-blue px-4 py-2 rounded-full font-medium">React.js</span>
            <span className="bg-tech-blue/10 text-tech-blue px-4 py-2 rounded-full font-medium">React Native</span>
            <span className="bg-tech-blue/10 text-tech-blue px-4 py-2 rounded-full font-medium">Node.js</span>
            <span className="bg-tech-blue/10 text-tech-blue px-4 py-2 rounded-full font-medium">JavaScript</span>
            <span className="bg-tech-blue/10 text-tech-blue px-4 py-2 rounded-full font-medium">Express.js</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
