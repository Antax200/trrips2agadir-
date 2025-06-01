import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Container from '../components/ui/Container';
import { team } from '../data/team';

const About: React.FC = () => {
  useEffect(() => {
    // Update document title
    document.title = 'About Us | Trips 2 Agadir';
  }, []);

  return (
    <main className="pt-20 pb-16">
      {/* Hero Banner */}
      <div className="relative h-80 bg-gray-900 mb-12">
        <div className="absolute inset-0 z-0">
          <img 
            src="Public/VV TRIPS-02.jpg" 
            alt="About Trips 2 Agadir" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-tealbrand-900/60"></div>
        </div>
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-amber-600 mb-4">About Trips 2 Agadir</h1>
            <p className="text-xl text-amber-600/90 max-w-2xl">Your gateway to unforgettable Moroccan adventures</p>
          </div>
        </div>
      </div>
      
      <Container>
        {/* Our Story */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row gap-8 items-center ">
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Founded in 2020, Trips 2 Agadir began with a simple mission: to share the breathtaking landscapes and rich cultural heritage of Agadir with adventure-seeking travelers from around the world.
              </p>
              <p className="text-gray-700 mb-4">
                What started as a small operation with just two quad bikes and a passionate guide has grown into one of the region's premier adventure tour companies, known for exceptional experiences, safety standards, and cultural authenticity.
              </p>
              <p className="text-gray-700">
                Today, we proudly serve thousands of visitors annually, helping them create lifelong memories while promoting sustainable tourism practices that respect our environment and support local communities.
              </p>
            </motion.div>
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src="Public/abstrcat-04.png" 
                alt="Our story" 
                className="rounded-lg shadow-md w-full h-auto"
              />
            </motion.div>
          </div>
        </section>
        
        {/* Our Mission */}
        <section className="mb-16 bg-amber-50 rounded-lg p-8">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-6">
              At Discover Agadir Adventures, our mission is to provide exceptional travel experiences that connect visitors with the beauty, culture, and spirit of Agadir. We are committed to delivering safe, memorable, and personalized adventures that exceed expectations and create lasting memories.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-yellow p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-amber-600 mb-3">Adventure</h3>
                <p className="text-gray-700">
                  Create thrilling, unforgettable experiences that push boundaries while ensuring the highest safety standards.
                </p>
              </div>
              <div className="bg-amber p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-amber-600 mb-3">Culture</h3>
                <p className="text-gray-700">
                  Foster meaningful cultural exchange between visitors and local communities, promoting understanding and respect.
                </p>
              </div>
              <div className="bg-yellow p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-amber-600 mb-3">Sustainability</h3>
                <p className="text-gray-700">
                  Operate with environmental responsibility, minimizing our ecological footprint and preserving natural landscapes.
                </p>
              </div>
            </div>
          </motion.div>
        </section>
        
        {/* Meet the Team */}
        <section className="mb-16">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Our passionate experts are dedicated to ensuring your quad biking adventure exceeds expectations in every way.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div 
                key={member.id}
                className="bg-white rounded-lg overflow-hidden shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-amber-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-700 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
        
        {/* Why Choose Us */}
        <section>
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-amber-800 mb-4">Why Choose Us</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Discover what sets Trips 2 Agadir apart from other adventure tour operators in Morocco.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4">Unmatched Local Expertise</h3>
              <p className="text-gray-700 mb-4">
                Our guides are born and raised in Agadir, with intimate knowledge of the region's geography, culture, and hidden gems that only locals know about.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">✓</span>
                  <span className="text-gray-700">Guides with 10+ years of experience</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">✓</span>
                  <span className="text-gray-700">Fluent in multiple languages (Arabic, Berber, English, French, Spanish)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">✓</span>
                  <span className="text-gray-700">Deep connections with local communities</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4">Safety First Approach</h3>
              <p className="text-gray-700 mb-4">
                Safety is our top priority, with comprehensive protocols that exceed industry standards while still ensuring you have an exhilarating adventure.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">✓</span>
                  <span className="text-gray-700">Regularly maintained, top-quality equipment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">✓</span>
                  <span className="text-gray-700">Comprehensive safety briefings before each tour</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">✓</span>
                  <span className="text-gray-700">Guides certified in first aid and emergency response</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4">Authentic Cultural Experiences</h3>
              <p className="text-gray-700 mb-4">
                We go beyond typical tourist experiences to offer genuine cultural immersion that respects and celebrates local traditions.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">✓</span>
                  <span className="text-gray-700">Visits to authentic Berber villages, not tourist setups</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">✓</span>
                  <span className="text-gray-700">Meaningful interactions with local communities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">✓</span>
                  <span className="text-gray-700">Traditional food and tea ceremonies included in many tours</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4">Exceptional Value</h3>
              <p className="text-gray-700 mb-4">
                Our tours offer the perfect balance of quality, experience, and price, ensuring you get the most value for your adventure budget.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">✓</span>
                  <span className="text-gray-700">All-inclusive pricing with no hidden fees</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">✓</span>
                  <span className="text-gray-700">Small group sizes for personalized attention</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">✓</span>
                  <span className="text-gray-700">Complimentary hotel pickup and drop-off</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </section>
      </Container>
    </main>
  );
};

export default About;