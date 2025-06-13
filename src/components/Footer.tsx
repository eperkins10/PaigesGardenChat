import React from 'react';
import { Instagram, Facebook, Mail, Phone, MapPin, Leaf } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-sage-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Leaf className="w-8 h-8 text-forest-400" />
              <span className="text-2xl font-display font-bold">Paige's Garden Chat</span>
            </div>
            
            <p className="text-sage-200 mb-6 max-w-md leading-relaxed">
              Creating inspiring outdoor spaces that feel like home. Specializing in drought-tolerant 
              landscape design for Encinitas and North County San Diego.
            </p>
            
            {/* Social Icons */}
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-sage-800 p-3 rounded-full hover:bg-forest-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="bg-sage-800 p-3 rounded-full hover:bg-forest-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="mailto:hello@paigesgardenchat.com" 
                className="bg-sage-800 p-3 rounded-full hover:bg-forest-500 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3 text-sage-200">
              <li><a href="#services" className="hover:text-forest-400 transition-colors">Residential Design</a></li>
              <li><a href="#services" className="hover:text-forest-400 transition-colors">Drought-Tolerant Planting</a></li>
              <li><a href="#services" className="hover:text-forest-400 transition-colors">Seasonal Maintenance</a></li>
              <li><a href="#services" className="hover:text-forest-400 transition-colors">Design Consultation</a></li>
              <li><a href="#portfolio" className="hover:text-forest-400 transition-colors">Portfolio</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <div className="space-y-4 text-sage-200">
              <div className="flex items-start">
                <Phone className="w-5 h-5 mr-3 mt-0.5 text-forest-400" />
                <div>
                  <p>(760) 685-2428</p>
                  <p className="text-sm text-sage-300">Mon-Fri 8am-6pm</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="w-5 h-5 mr-3 mt-0.5 text-forest-400" />
                <div>
                  <p>paigesgardenchat@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-0.5 text-forest-400" />
                <div>
                  <p>Encinitas, CA</p>
                  <p className="text-sm text-sage-300">Serving North County San Diego</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-sage-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sage-300">
            <p className="text-center md:text-left mb-4 md:mb-0">
              © {currentYear} Paige's Garden Chat. All rights reserved.
            </p>
            <p className="text-center md:text-right text-sm">
              Proudly serving Encinitas & North County San Diego
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;