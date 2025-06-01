import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Container from '../components/ui/Container';
import { faqs } from '../data/faqs';

const FAQs: React.FC = () => {
  useEffect(() => {
    // Update document title
    document.title = 'FAQs | Trips 2 Agadir';
  }, []);
  
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [openFAQs, setOpenFAQs] = useState<string[]>([]);
  
  const toggleFAQ = (id: string) => {
    if (openFAQs.includes(id)) {
      setOpenFAQs(openFAQs.filter(faqId => faqId !== id));
    } else {
      setOpenFAQs([...openFAQs, id]);
    }
  };
  
  const filteredFAQs = activeCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);
  
  const categories = [
    { id: 'all', name: 'All Questions' },
    { id: 'booking', name: 'Booking & Cancellation' },
    { id: 'safety', name: 'Safety & Requirements' },
    { id: 'equipment', name: 'Equipment & Preparation' },
    { id: 'experience', name: 'Experience & Expectations' }
  ];
  
  return (
    <main className="pt-20 pb-16">
      {/* Hero Banner */}
      <div className="relative h-80 bg-gray-900 mb-12">
        <div className="absolute inset-0 z-0">
          <img 
            src="Public/fa3-03.jpg" 
            alt="Frequently Asked Questions" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-tealbrand-900/60"></div>
        </div>
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <div>
           
          </div>
        </div>
      </div>
      
      <Container>
        {/* Category Filters */}
        <div className="mb-10 overflow-x-auto">
          <div className="flex space-x-2 md:space-x-4 min-w-max">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-md transition-colors ${
                  activeCategory === category.id
                    ? 'bg-amber-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto">
          {filteredFAQs.length > 0 ? (
            <div className="space-y-4">
              {filteredFAQs.map((faq, index) => (
                <motion.div 
                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full flex justify-between items-center p-5 bg-white text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-medium text-lg text-gray-800">{faq.question}</span>
                    {openFAQs.includes(faq.id) ? (
                      <ChevronUp className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    )}
                  </button>
                  
                  {openFAQs.includes(faq.id) && (
                    <div className="p-5 bg-gray-50 border-t border-gray-200">
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-800 mb-2">No FAQs found in this category</h3>
              <p className="text-gray-600">Please try selecting a different category.</p>
            </div>
          )}
          
          {/* Still Have Questions */}
          <div className="mt-12 bg-yellow-100 rounded-lg p-8 text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Still Have Questions?</h3>
            <p className="text-gray-700 mb-6">
              Can't find the answer you're looking for? Please contact our friendly team.
            </p>
            <div className="flex justify-center space-x-4">
              <a 
                href="tel:+212664884242" 
                className="px-5 py-2 bg-amber-600 text-white rounded-md hover:bg-yellow-700 transition-colors"
              >
                Call Us
              </a>
              <a 
                href="/contact" 
                className="px-5 py-2 bg-amber-600 text-white rounded-md hover:bg-green-700 transition-colors"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default FAQs;