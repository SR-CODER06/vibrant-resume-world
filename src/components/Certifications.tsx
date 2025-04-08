
import React from 'react';
import { Calendar, ExternalLink } from 'lucide-react';

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Licenses & Certifications</h2>
        
        <div className="mt-10">
          <div className="timeline-item">
            <div className="mb-1">
              <img 
                src="https://media.licdn.com/dms/image/C4D0BAQGyOWvr4W0Pow/company-logo_100_100/0/1590003577120?e=2147483647&v=beta&t=j5H3CQB1mHDuN30RU2llJrZ5m8Ge0RQRGlfOQbW0jQI" 
                alt="Udemy" 
                className="h-12 w-12 object-contain mb-3"
              />
              <h3 className="text-xl font-semibold">THE WEB DEVELOPER BOOTCAMP 2023</h3>
              <h4 className="text-tech-blue font-medium">Udemy</h4>
            </div>
            
            <div className="flex text-sm text-gray-600 mb-3">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" /> 
                <span>Issued Jul 2023</span>
              </div>
            </div>
            
            <p className="text-gray-700 mb-2">
              Credential ID UC-87beec7b-a96f-4e81-9ff4-72762dd70e06
            </p>
            
            <a 
              href="#" 
              className="inline-flex items-center text-tech-blue hover:underline mb-4"
            >
              <span className="mr-1">Show credential</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            
            <div className="flex flex-wrap">
              <span className="skill-badge">CSS</span>
              <span className="skill-badge">HTML5</span>
              <span className="skill-badge">+11 skills</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
