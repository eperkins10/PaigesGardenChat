import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-background.jpg"
          alt="Paige's Garden Chat landscape design in Encinitas"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/20 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center mb-6">
          <MapPin className="w-5 h-5 text-forest-300 mr-2" />
          <span className="text-forest-100 font-medium">Encinitas, California</span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight drop-shadow-lg">
          Paige's Garden Chat
        </h1>
        
        <p className="text-xl sm:text-2xl md:text-3xl text-forest-100 mb-4 font-light drop-shadow-md">
          Encinitas Landscape Design
        </p>
        
        <div className="w-24 h-1 bg-forest-400 mx-auto mb-8"></div>
        
        <p className="text-lg sm:text-xl text-white/95 mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
          We create inspiring outdoor spaces that feel like home, specializing in drought-tolerant designs 
          that thrive in San Diego's beautiful climate.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={scrollToContact}
            className="group bg-forest-500 text-white px-8 py-4 rounded-full hover:bg-forest-600 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center"
          >
            Start Your Project
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button 
            onClick={scrollToPortfolio}
            className="group border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-sage-800 transition-all duration-300 font-semibold text-lg"
          >
            View Our Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;