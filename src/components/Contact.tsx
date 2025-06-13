import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface FormData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });

  const [status, setStatus] = useState<FormStatus>({
    type: 'idle',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({
        type: 'error',
        message: 'Please fill in all required fields (Name, Email, and Message).'
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({
        type: 'error',
        message: 'Please enter a valid email address.'
      });
      return;
    }

    setStatus({
      type: 'loading',
      message: 'Sending your message...'
    });

    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim() || undefined,
          projectType: formData.projectType || undefined,
          message: formData.message.trim()
        }
      });

      if (error) {
        throw error;
      }

      setStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.'
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        message: ''
      });

    } catch (error) {
      console.error('Error sending email:', error);
      setStatus({
        type: 'error',
        message: 'Sorry, there was an error sending your message. Please try again or contact us directly at hello@paigesgardenchat.com.'
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-sage-900 mb-4">
            Let's Create Your Dream Garden
          </h2>
          <div className="w-16 h-1 bg-forest-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your outdoor space? Get in touch for a free consultation 
            and let's discuss your landscape design vision.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-display font-bold text-sage-900 mb-8">
              Get In Touch
            </h3>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-start">
                <div className="bg-forest-100 p-3 rounded-full mr-4 flex-shrink-0">
                  <Phone className="w-6 h-6 text-forest-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-sage-900 mb-1">Phone</h4>
                  <p className="text-gray-600">(760) 685-2428</p>
                  <p className="text-sm text-gray-500">Mon-Fri 8am-6pm</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-forest-100 p-3 rounded-full mr-4 flex-shrink-0">
                  <Mail className="w-6 h-6 text-forest-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-sage-900 mb-1">Email</h4>
                  <p className="text-gray-600">hello@paigesgardenchat.com</p>
                  <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-forest-100 p-3 rounded-full mr-4 flex-shrink-0">
                  <MapPin className="w-6 h-6 text-forest-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-sage-900 mb-1">Service Area</h4>
                  <p className="text-gray-600">Encinitas & North County San Diego</p>
                  <p className="text-sm text-gray-500">Including Cardiff, Leucadia, Solana Beach</p>
                </div>
              </div>
            </div>

            {/* Service Hours */}
            <div className="bg-sage-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <Clock className="w-6 h-6 text-sage-600 mr-3" />
                <h4 className="font-semibold text-sage-900">Business Hours</h4>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="text-sage-900 font-medium">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday</span>
                  <span className="text-sage-900 font-medium">By Appointment</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday</span>
                  <span className="text-sage-900 font-medium">By Appointment</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-sage-50 rounded-2xl p-8">
            <h3 className="text-2xl font-display font-bold text-sage-900 mb-6">
              Start Your Project
            </h3>
            
            {/* Status Message */}
            {status.type !== 'idle' && (
              <div className={`mb-6 p-4 rounded-lg flex items-start ${
                status.type === 'success' 
                  ? 'bg-green-50 border border-green-200' 
                  : status.type === 'error'
                  ? 'bg-red-50 border border-red-200'
                  : 'bg-blue-50 border border-blue-200'
              }`}>
                {status.type === 'success' && <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />}
                {status.type === 'error' && <AlertCircle className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />}
                {status.type === 'loading' && <div className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mr-3 mt-0.5 flex-shrink-0"></div>}
                <p className={`text-sm ${
                  status.type === 'success' 
                    ? 'text-green-800' 
                    : status.type === 'error'
                    ? 'text-red-800'
                    : 'text-blue-800'
                }`}>
                  {status.message}
                </p>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    disabled={status.type === 'loading'}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-forest-500 focus:border-transparent transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    disabled={status.type === 'loading'}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-forest-500 focus:border-transparent transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={status.type === 'loading'}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-forest-500 focus:border-transparent transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
                    placeholder="(760) 555-0123"
                  />
                </div>
                
                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    disabled={status.type === 'loading'}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-forest-500 focus:border-transparent transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
                  >
                    <option value="">Select a service</option>
                    <option value="residential-design">Residential Design</option>
                    <option value="drought-tolerant">Drought-Tolerant Planting</option>
                    <option value="maintenance">Seasonal Maintenance</option>
                    <option value="consultation">Design Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Tell us about your project *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  disabled={status.type === 'loading'}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-forest-500 focus:border-transparent transition-colors resize-none disabled:bg-gray-100 disabled:cursor-not-allowed"
                  placeholder="Describe your vision, budget range, timeline, or any specific questions you have..."
                />
              </div>
              
              <button
                type="submit"
                disabled={status.type === 'loading'}
                className="w-full bg-forest-500 text-white py-4 px-6 rounded-lg hover:bg-forest-600 transition-colors font-semibold text-lg flex items-center justify-center disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {status.type === 'loading' ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5 ml-2" />
                  </>
                )}
              </button>
            </form>
            
            <p className="text-sm text-gray-600 mt-4 text-center">
              We'll get back to you within 24 hours with a personalized response.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;