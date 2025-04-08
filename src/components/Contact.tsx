
import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-dark text-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-white">Get In Touch</h2>
        
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <p className="text-gray-300 mb-8 max-w-md">
              Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-tech-blue/20 p-3 rounded-lg mr-4">
                  <Mail className="text-tech-blue w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Email</h3>
                  <a href="mailto:contact@saswatmohanty.com" className="text-gray-300 hover:text-tech-blue transition-colors">
                    contact@saswatmohanty.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-tech-blue/20 p-3 rounded-lg mr-4">
                  <Phone className="text-tech-blue w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Phone</h3>
                  <a href="tel:+919876543210" className="text-gray-300 hover:text-tech-blue transition-colors">
                    +91 98765 43210
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-tech-blue/20 p-3 rounded-lg mr-4">
                  <MapPin className="text-tech-blue w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Location</h3>
                  <p className="text-gray-300">
                    Bhubaneswar, Odisha, India
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 bg-dark-blue border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-tech-blue text-white"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 bg-dark-blue border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-tech-blue text-white"
                    placeholder="Your Email"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 bg-dark-blue border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-tech-blue text-white"
                  placeholder="Subject"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 bg-dark-blue border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-tech-blue text-white"
                  placeholder="Your Message"
                ></textarea>
              </div>
              
              <Button className="bg-tech-blue hover:bg-tech-purple text-white w-full">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
