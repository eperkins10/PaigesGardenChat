import React from 'react';
import { Users, Award, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-sage-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-sage-900 mb-6">
              Meet Paige & Our Team
            </h2>
            
            <div className="w-16 h-1 bg-forest-400 mb-8"></div>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Founded and ran by Paige Perkins, a passionate landscape designer with 20+ years of experience 
              in Southern California's unique climate, Paige's Garden Chat brings together creativity, 
              sustainability, and local expertise.
            </p>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Our team understands the challenges and opportunities of designing beautiful outdoor spaces 
              in Encinitas and North County San Diego. We specialize in drought-tolerant landscapes that 
              don't compromise on beauty or functionality.
            </p>

            {/* Team Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="bg-forest-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-8 h-8 text-forest-600" />
                </div>
                <div className="text-2xl font-bold text-sage-900">3</div>
                <div className="text-sm text-gray-600">Team Members</div>
              </div>
              
              <div className="text-center">
                <div className="bg-forest-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-8 h-8 text-forest-600" />
                </div>
                <div className="text-2xl font-bold text-sage-900">20+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              
              <div className="text-center">
                <div className="bg-forest-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart className="w-8 h-8 text-forest-600" />
                </div>
                <div className="text-2xl font-bold text-sage-900">200+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
            </div>

            <blockquote className="border-l-4 border-forest-400 pl-6 italic text-gray-700 text-lg">
              "Every garden tells a story. Our job is to help you tell yours beautifully, 
              sustainably, and in harmony with San Diego's natural landscape."
              <cite className="block mt-2 text-sm font-semibold text-sage-800">— Paige Perkins, Founder</cite>
            </blockquote>
          </div>

          {/* Team Photo */}
          <div className="relative">
            <div className="bg-gradient-to-br from-forest-200 to-sage-200 rounded-2xl p-8 shadow-2xl">
              <img
                src="https://images.pexels.com/photos/7728849/pexels-photo-7728849.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
                alt="Paige's Garden Chat team working on landscape design"
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
              
              {/* Floating card */}
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg max-w-xs">
                <h4 className="font-semibold text-sage-900 mb-2">Our Promise</h4>
                <p className="text-sm text-gray-600">
                  Personalized design solutions that reflect your style while respecting our environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;