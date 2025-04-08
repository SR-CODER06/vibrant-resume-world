
import React from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Experience</h2>
        
        <div className="mt-10">
          <div className="timeline-item">
            <div className="mb-1">
              <img 
                src="https://media.licdn.com/dms/image/C560BAQGUVVQj9QjdzQ/company-logo_100_100/0/1622710112751?e=2147483647&v=beta&t=qM7QO8W5FwJj-tfKbN-0tcNLPXrBdKqjA1ENMJklFhI" 
                alt="HyScaler" 
                className="h-12 w-12 object-contain mb-3"
              />
              <h3 className="text-xl font-semibold">Junior Software Developer</h3>
              <h4 className="text-tech-blue font-medium">HyScaler</h4>
            </div>
            
            <div className="flex flex-wrap text-sm text-gray-600 mb-3 gap-4">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" /> 
                <span>Apr 2024 - Present (1 yr 1 mo)</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-1" /> 
                <span>Bhubaneswar, Odisha, India · On-site</span>
              </div>
              <div className="flex items-center">
                <Briefcase className="w-4 h-4 mr-1" /> 
                <span>Full-time</span>
              </div>
            </div>
            
            <p className="mb-3 text-gray-700">
              Working on Django REST Framework, React Native and developing multiple web and mobile applications.
            </p>
            
            <div className="flex flex-wrap">
              <span className="skill-badge">Django REST Framework</span>
              <span className="skill-badge">React Native</span>
              <span className="skill-badge">+5 skills</span>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="mb-1">
              <img 
                src="https://media.licdn.com/dms/image/C560BAQGUVVQj9QjdzQ/company-logo_100_100/0/1622710112751?e=2147483647&v=beta&t=qM7QO8W5FwJj-tfKbN-0tcNLPXrBdKqjA1ENMJklFhI" 
                alt="HyScaler" 
                className="h-12 w-12 object-contain mb-3"
              />
              <h3 className="text-xl font-semibold">Apprentice Trainee</h3>
              <h4 className="text-tech-blue font-medium">HyScaler</h4>
            </div>
            
            <div className="flex flex-wrap text-sm text-gray-600 mb-3 gap-4">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" /> 
                <span>Aug 2023 - Mar 2024 (8 mos)</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-1" /> 
                <span>Bhubaneswar, Odisha, India · On-site</span>
              </div>
              <div className="flex items-center">
                <Briefcase className="w-4 h-4 mr-1" /> 
                <span>Trainee</span>
              </div>
            </div>
            
            <div className="flex flex-wrap">
              <span className="skill-badge">React.js</span>
              <span className="skill-badge">React Native</span>
              <span className="skill-badge">+4 skills</span>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="mb-1">
              <img 
                src="/lovable-uploads/4b891ea1-12c5-47b8-aa0c-7c3f513bc28f.png" 
                alt="Ajatus Software" 
                className="h-12 w-12 object-contain mb-3"
              />
              <h3 className="text-xl font-semibold">Internship Trainee</h3>
              <h4 className="text-tech-blue font-medium">Ajatus Software Pvt. Ltd.</h4>
            </div>
            
            <div className="flex flex-wrap text-sm text-gray-600 mb-3 gap-4">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" /> 
                <span>May 2023 - May 2023 (1 mo)</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-1" /> 
                <span>Bhubaneswar, Odisha, India</span>
              </div>
              <div className="flex items-center">
                <Briefcase className="w-4 h-4 mr-1" /> 
                <span>Trainee</span>
              </div>
            </div>
            
            <div className="flex flex-wrap">
              <span className="skill-badge">Vanilla JavaScript</span>
              <span className="skill-badge">CSS</span>
              <span className="skill-badge">+1 skill</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
