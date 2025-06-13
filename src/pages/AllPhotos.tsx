import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Filter, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { projects } from '../data/projects';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AllPhotos = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Flatten all gallery images from all projects
  const allImages = projects.flatMap(project => 
    project.gallery.map(image => ({
      ...image,
      projectTitle: project.title,
      projectId: project.id,
      location: project.location
    }))
  );

  const filteredImages = selectedFilter === 'all' 
    ? allImages 
    : allImages.filter(image => image.type === selectedFilter);

  const filters = [
    { key: 'all', label: 'All Photos', count: allImages.length },
    { key: 'before', label: 'Before', count: allImages.filter(img => img.type === 'before').length },
    { key: 'after', label: 'After', count: allImages.filter(img => img.type === 'after').length },
    { key: 'process', label: 'Process', count: allImages.filter(img => img.type === 'process').length },
    { key: 'detail', label: 'Details', count: allImages.filter(img => img.type === 'detail').length }
  ];

  const openLightbox = (imageUrl: string, index: number) => {
    setSelectedImage(imageUrl);
    setCurrentImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % filteredImages.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(filteredImages[nextIndex].url);
  };

  const prevImage = () => {
    const prevIndex = (currentImageIndex - 1 + filteredImages.length) % filteredImages.length;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(filteredImages[prevIndex].url);
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
            to="/" 
            className="inline-flex items-center text-forest-600 hover:text-forest-700 mb-8 font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-sage-900 mb-4">
              Complete Photo Gallery
            </h1>
            <div className="w-16 h-1 bg-forest-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our complete collection of landscape design transformations across North County San Diego.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <Filter className="w-5 h-5 text-gray-600 mr-2" />
              <span className="text-gray-700 font-medium">Filter by type:</span>
            </div>
            <span className="text-sm text-gray-500">
              {filteredImages.length} photos
            </span>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {filters.map(filter => (
              <button
                key={filter.key}
                onClick={() => setSelectedFilter(filter.key)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedFilter === filter.key
                    ? 'bg-forest-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter.label} ({filter.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div 
                key={`${image.projectId}-${image.id}`}
                className="relative group cursor-pointer overflow-hidden rounded-xl bg-gray-100"
                onClick={() => openLightbox(image.url, index)}
              >
                <img
                  src={image.url}
                  alt={image.caption}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute top-4 left-4">
                    <span className={`text-white text-xs px-2 py-1 rounded-full ${getTypeColor(image.type)}`}>
                      {image.type.charAt(0).toUpperCase() + image.type.slice(1)}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h4 className="font-semibold text-sm mb-1">{image.projectTitle}</h4>
                    <p className="text-xs text-gray-200 mb-1">{image.location}</p>
                    <p className="text-xs">{image.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No photos found for the selected filter.</p>
            </div>
          )}
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
              <div className="bg-black/50 rounded-lg px-4 py-2">
                <h4 className="font-semibold text-sm mb-1">{filteredImages[currentImageIndex]?.projectTitle}</h4>
                <p className="text-xs text-gray-200 mb-1">{filteredImages[currentImageIndex]?.location}</p>
                <p className="text-sm">{filteredImages[currentImageIndex]?.caption}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default AllPhotos;