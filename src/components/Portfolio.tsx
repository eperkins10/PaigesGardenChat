import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';

const Portfolio = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-sage-900 mb-4">
            Our Work
          </h2>
          <div className="w-16 h-1 bg-forest-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how we've transformed outdoor spaces across North County San Diego with 
            sustainable, beautiful landscape design.
          </p>
        </div>

        {/* Featured Project Slider */}
        <div className="relative mb-16">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Before/After Images */}
              <div className="relative">
                <div className="grid grid-cols-2 h-full">
                  <div className="relative group">
                    <img
                      src={projects[currentSlide].beforeImage}
                      alt="Before transformation"
                      className="w-full h-64 md:h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-end p-4">
                      <span className="text-white font-semibold bg-red-500 px-3 py-1 rounded-full text-sm">
                        Before
                      </span>
                    </div>
                  </div>
                  <div className="relative group">
                    <img
                      src={projects[currentSlide].afterImage}
                      alt="After transformation"
                      className="w-full h-64 md:h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-end p-4">
                      <span className="text-white font-semibold bg-green-500 px-3 py-1 rounded-full text-sm">
                        After
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="mb-4">
                  <span className="text-forest-600 font-semibold text-sm uppercase tracking-wide">
                    {projects[currentSlide].location}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-sage-900 mb-4">
                  {projects[currentSlide].title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {projects[currentSlide].description}
                </p>
                <Link 
                  to={`/project/${projects[currentSlide].id}`}
                  className="flex items-center text-forest-600 font-semibold hover:text-forest-700 transition-colors"
                >
                  View Full Project
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-sage-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-sage-600" />
          </button>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide ? 'bg-forest-500' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              to={`/project/${project.id}`}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={project.afterImage}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="font-semibold">{project.title}</h4>
                    <p className="text-sm text-gray-200">{project.location}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link 
            to="/gallery"
            className="bg-forest-500 text-white px-8 py-3 rounded-full hover:bg-forest-600 transition-colors font-semibold"
          >
            View All Photos
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;