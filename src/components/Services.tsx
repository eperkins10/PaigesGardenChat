import React from 'react';
import { Home, Droplets, RefreshCw, Palette, Wrench, Lightbulb } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Home className="w-8 h-8" />,
      title: "Residential Design",
      description: "Complete landscape design services for homes, from concept to completion. We create outdoor spaces that enhance your lifestyle and property value.",
      features: ["Custom Design Plans", "3D Visualization", "Plant Selection", "Hardscape Design"]
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Drought-Tolerant Planting",
      description: "Sustainable landscaping solutions featuring native and adapted plants that thrive in San Diego's Mediterranean climate.",
      features: ["Native Plant Gardens", "Water-Wise Design", "Soil Improvement", "Irrigation Planning"]
    },
    {
      icon: <RefreshCw className="w-8 h-8" />,
      title: "Seasonal Refresh & Maintenance",
      description: "Keep your landscape looking its best year-round with our comprehensive maintenance and seasonal update services.",
      features: ["Seasonal Planting", "Pruning & Care", "Garden Refresh", "Ongoing Support"]
    }
  ];

  const additionalServices = [
    { icon: <Palette className="w-6 h-6" />, name: "Color Consulting" },
    { icon: <Wrench className="w-6 h-6" />, name: "Hardscape Installation" },
    { icon: <Lightbulb className="w-6 h-6" />, name: "Outdoor Lighting" }
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-sage-900 mb-4">
            Our Services
          </h2>
          <div className="w-16 h-1 bg-forest-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From initial design concepts to ongoing maintenance, we provide comprehensive 
            landscape services tailored to Encinitas and North County San Diego.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-sage-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="bg-forest-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 text-forest-600 group-hover:bg-forest-500 group-hover:text-white transition-colors">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-sage-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-forest-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Start Your Project Section - Dark Background */}
        <div className="bg-gradient-to-r from-forest-800 to-forest-900 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-forest-100 max-w-2xl mx-auto text-lg">
              Let's transform your outdoor space into the garden of your dreams. Get in touch for a free consultation.
            </p>
          </div>
          
          <div className="text-center">
            <button 
              onClick={scrollToContact}
              className="bg-forest-500 text-white px-8 py-4 rounded-full hover:bg-forest-400 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Your Free Consultation
            </button>
          </div>
        </div>

        {/* Additional Services */}
        <div className="mt-16 bg-sage-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-sage-900 mb-4">
              Additional Specialties
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a full range of complementary services to make your outdoor space complete.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="flex items-center justify-center bg-white rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="text-forest-600 mr-4">
                  {service.icon}
                </div>
                <span className="text-sage-900 font-medium">{service.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;