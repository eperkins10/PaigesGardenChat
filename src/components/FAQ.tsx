import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([0]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "How long does a typical landscape design project take?",
      answer: "Most residential projects take 4-8 weeks from initial consultation to completion, depending on scope and complexity. We'll provide a detailed timeline during your consultation, including design phase, permitting (if needed), and installation."
    },
    {
      question: "Do you work with HOA requirements and city permits?",
      answer: "Absolutely! We're familiar with local HOA guidelines and city requirements in Encinitas and surrounding areas. We handle permit applications when necessary and ensure all designs comply with local regulations."
    },
    {
      question: "What's included in your maintenance services?",
      answer: "Our maintenance services include seasonal planting updates, pruning, fertilizing, irrigation system checks, and ongoing plant care. We create custom maintenance plans based on your garden's specific needs and your budget."
    },
    {
      question: "Can you work with existing landscaping?",
      answer: "Yes! We often work with existing elements that are healthy and fit your vision. We can refresh, redesign, or expand your current landscape while incorporating plants and features you want to keep."
    },
    {
      question: "What's your service area?",
      answer: "We primarily serve Encinitas and North County San Diego, including Cardiff, Leucadia, Solana Beach, Del Mar, and surrounding coastal communities. Contact us to confirm service in your specific area."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-sage-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-sage-900 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-1 bg-forest-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">
            Get answers to common questions about our landscape design services.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-sage-900 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openItems.includes(index) ? (
                    <Minus className="w-5 h-5 text-forest-500" />
                  ) : (
                    <Plus className="w-5 h-5 text-forest-500" />
                  )}
                </div>
              </button>
              
              {openItems.includes(index) && (
                <div className="px-6 pb-5">
                  <div className="w-full h-px bg-gray-200 mb-4"></div>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;