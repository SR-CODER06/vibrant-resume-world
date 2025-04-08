
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { gsap } from 'gsap';

const Projects = () => {
  const projectsRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const titleRef = useRef<HTMLHeadingElement>(null);
  
  // Clear on each render
  cardsRef.current = [];

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

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

  useEffect(() => {
    if (!projectsRef.current) return;
    
    // Title reveal animation with split text effect
    if (titleRef.current) {
      const titleText = titleRef.current.textContent || "";
      titleRef.current.innerHTML = "";
      
      [...titleText].forEach((char) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.display = "inline-block";
        titleRef.current?.appendChild(span);
      });
      
      gsap.from(titleRef.current.children, {
        opacity: 0,
        y: 20,
        rotateX: -90,
        stagger: 0.03,
        duration: 0.8,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%"
        }
      });
    }
    
    // Create staggered animation for project cards with 3D effect
    gsap.set(cardsRef.current, { 
      y: 100, 
      opacity: 0,
      rotationY: 15,
      transformPerspective: 800
    });
    
    gsap.to(cardsRef.current, {
      y: 0,
      opacity: 1,
      rotationY: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "back.out(1.5)",
      scrollTrigger: {
        trigger: projectsRef.current,
        start: "top 70%",
      }
    });

    // Add hover animations for project cards with 3D effect
    cardsRef.current.forEach((card, index) => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          y: -15,
          scale: 1.02,
          rotationY: 5,
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.15)",
          duration: 0.3
        });
        
        // Animate tech badges inside the card
        const badges = card.querySelectorAll('.skill-badge');
        gsap.to(badges, {
          scale: 1.1,
          stagger: 0.05,
          duration: 0.2,
          backgroundColor: '#2563eb',
          color: 'white'
        });
      });
      
      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          y: 0,
          scale: 1,
          rotationY: 0,
          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)",
          duration: 0.3
        });
        
        // Reset tech badges
        const badges = card.querySelectorAll('.skill-badge');
        gsap.to(badges, {
          scale: 1,
          stagger: 0.03,
          duration: 0.2,
          backgroundColor: '#f3f4f6',
          color: '#1f2937'
        });
      });
    });

    // Button animation
    const button = document.querySelector('.projects-btn');
    if (button) {
      gsap.fromTo(button, 
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1,
          duration: 0.6,
          scrollTrigger: {
            trigger: button,
            start: "top 90%"
          }
        }
      );
    }

    return () => {
      cardsRef.current.forEach((card) => {
        card.removeEventListener('mouseenter', () => {});
        card.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);

  return (
    <section id="projects" className="py-20 bg-white" ref={projectsRef}>
      <div className="container mx-auto px-4">
        <h2 className="section-title" ref={titleRef}>Projects</h2>
        
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              ref={addToRefs}
              className="project-card border border-gray-200 rounded-lg overflow-hidden shadow-sm transition-all duration-300"
            >
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
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="link-animated flex items-center text-tech-blue hover:underline group"
                  >
                    <ExternalLink className="w-4 h-4 mr-1 group-hover:translate-x-1 transition-transform" />
                    <span className="group-hover:translate-x-1 transition-transform">View Project</span>
                  </a>
                  <a 
                    href="#" 
                    className="flex items-center text-gray-700 hover:text-gray-900 group"
                  >
                    <Github className="w-4 h-4 mr-1 group-hover:scale-110 transition-transform" />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Button className="projects-btn bg-tech-blue hover:bg-tech-purple text-white transform transition-transform hover:scale-105 active:scale-95 btn-glow">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
