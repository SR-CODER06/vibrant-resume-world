
import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "YELP-CAMP PROJECT",
      description: "An open camping web app where users create accounts and add campgrounds. Users can see all other campgrounds, read and write reviews, and navigate to campground locations.",
      duration: "Jun 2023 - Jul 2023",
      tech: ["Node.js", "Express", "MongoDB", "JavaScript", "HTML", "CSS"],
      link: "#"
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio website showcasing my skills, experience, and projects. Built with React and Tailwind CSS.",
      duration: "Mar 2024 - Apr 2024",
      tech: ["React", "Tailwind CSS", "JavaScript"],
      link: "#"
    },
    {
      title: "E-Commerce App",
      description: "A full-stack e-commerce application with user authentication, product catalog, shopping cart, and payment processing.",
      duration: "Oct 2023 - Dec 2023",
      tech: ["React", "Node.js", "Express", "MongoDB", "Redux"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Projects</h2>
        
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{project.duration}</p>
                <p className="text-gray-700 mb-4 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap mb-6">
                  {project.tech.slice(0, 4).map((tech, techIndex) => (
                    <span key={techIndex} className="skill-badge">
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="skill-badge">+{project.tech.length - 4} more</span>
                  )}
                </div>
                
                <div className="flex items-center justify-between">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center text-tech-blue hover:underline">
                    <ExternalLink className="w-4 h-4 mr-1" />
                    View Project
                  </a>
                  <a href="#" className="flex items-center text-gray-700 hover:text-gray-900">
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Button className="bg-tech-blue hover:bg-tech-purple text-white">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
