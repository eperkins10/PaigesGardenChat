import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin, Ruler, Clock, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { projects } from '../data/projects';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ProjectGallery = () => {
  const { projectId } = useParams();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-sage-900 mb-4">Project Not Found</h1>
          <Link to="/" className="text-forest-600 hover:text-forest-700">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const openLightbox = (imageUrl: string, index: number) => {
    setSelectedImage(imageUrl);
    setCurrentImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % project.gallery.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(project.gallery[nextIndex].url);
  };

  const prevImage = () => {
    const prevIndex = (currentImageIndex - 1 + project.gallery.length) % project.gallery.length;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(project.gallery[prevIndex].url);
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'before': return 'bg-red-500';
      case 'after': return 'bg-green-500';
      case 'process': return 'bg-blue-500';
      case 'detail': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/#portfolio" 
            className="inline-flex items-center text-forest-600 hover:text-forest-700 mb-8 font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <span className="bg-forest-100 text-forest-800 px-3 py-1 rounded-full text-sm font-medium">
                  {project.category}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-display font-bold text-sage-900 mb-4">
                {project.title}
              </h1>
              
              <div className="flex items-center text-gray-600 mb-6">
                <MapPin className="w-5 h-5 mr-2" />
                <span>{project.location}</span>
                <Calendar className="w-5 h-5 ml-6 mr-2" />
                <span>{project.completionDate}</span>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {project.description}
              </p>
              
              {/* Project Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center">
                  <Ruler className="w-5 h-5 text-forest-600 mr-3" />
                  <div>
                    <div className="text-sm text-gray-600">Size</div>
                    <div className="font-semibold text-sage-900">{project.details.size}</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-forest-600 mr-3" />
                  <div>
                    <div className="text-sm text-gray-600">Duration</div>
                    <div className="font-semibold text-sage-900">{project.details.duration}</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Before/After Comparison */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative group cursor-pointer" onClick={() => openLightbox(project.beforeImage, 0)}>
                <img
                  src={project.beforeImage}
                  alt="Before transformation"
                  className="w-full h-64 object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-black/40 flex items-end p-4 rounded-xl">
                  <span className="text-white font-semibold bg-red-500 px-3 py-1 rounded-full text-sm">
                    Before
                  </span>
                </div>
              </div>
              <div className="relative group cursor-pointer" onClick={() => openLightbox(project.afterImage, 1)}>
                <img
                  src={project.afterImage}
                  alt="After transformation"
                  className="w-full h-64 object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-black/40 flex items-end p-4 rounded-xl">
                  <span className="text-white font-semibold bg-green-500 px-3 py-1 rounded-full text-sm">
                    After
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold text-sage-900 mb-8">Project Gallery</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.gallery.map((image, index) => (
              <div 
                key={image.id}
                className="relative group cursor-pointer overflow-hidden rounded-xl"
                onClick={() => openLightbox(image.url, index)}
              >
                <img
                  src={image.url}
                  alt={image.caption}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute top-4 left-4">
                    <span className={`text-white text-xs px-2 py-1 rounded-full ${getTypeColor(image.type)}`}>
                      {image.type.charAt(0).toUpperCase() + image.type.slice(1)}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-sm">{image.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Challenges & Solutions */}
            <div>
              <h3 className="text-2xl font-display font-bold text-sage-900 mb-6">Challenges & Solutions</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-sage-800 mb-3">Challenges</h4>
                  <ul className="space-y-2">
                    {project.details.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-sage-800 mb-3">Solutions</h4>
                  <ul className="space-y-2">
                    {project.details.solutions.map((solution, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Plant List */}
            <div>
              <h3 className="text-2xl font-display font-bold text-sage-900 mb-6">Featured Plants</h3>
              <div className="bg-white rounded-xl p-6">
                <ul className="space-y-3">
                  {project.details.plants.map((plant, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-3 h-3 bg-forest-400 rounded-full mr-3"></div>
                      <span className="text-gray-700 italic">{plant}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <X className="w-8 h-8" />
            </button>
            
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-10"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-10"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
            
            <img
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            
            <div className="absolute bottom-4 left-4 right-4 text-white text-center">
              <p className="text-sm bg-black/50 rounded-lg px-4 py-2">
                {project.gallery[currentImageIndex]?.caption}
              </p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default ProjectGallery;