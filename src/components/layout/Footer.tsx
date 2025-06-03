import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';
import Container from '../ui/Container';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <footer className={`${isHomePage ? 'bg-tealbrand-500 text-black' : 'bg-amber-900 text-white'} pt-12 pb-6`}>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <div className="flex items-center mb-4">
              <MapPin size={24} className="text-amber-500" />
              <h3 className="text-xl font-bold ml-2">Trips 2 Agadir</h3>
            </div>
            <p className={`${isHomePage ? 'text-tealbrand-700' : 'text-gray-300'} mb-4`}>
              is a local company specializing in unique tours and outdoor experiences in Agadir, Morocco. We offer a wide range of activities designed to showcase the natural beauty, culture, and adventure that the region has to offer.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-500 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links - Hidden on Mobile */}
          <div className="hidden md:block">
            <h3 className="text-lg font-bold mb-4 border-b border-tealbrand-700 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              {['/', '/tours', '/about', '/contact', '/faqs'].map((path, i) => {
                const labels = ['Home', 'All Tours', 'About Us', 'Contact', 'FAQs'];
                return (
                  <li key={path}>
                    <Link to={path} className="hover:text-amber-500 transition-colors">
                      {labels[i]}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Popular Tours - Hidden on Mobile */}
          <div className="hidden md:block">
            <h3 className="text-lg font-bold mb-4 border-b border-tealbrand-700 pb-2">Popular Tours</h3>
            <ul className="space-y-2">
              {[
                { to: "/tours/Paradise%20Valley%20And%20Immouzzer", label: "Paradise Valley And Immouzzer From Agadir" },
                { to: "/tours/mountain-valley-explorer", label: "Sandboarding Agadir Trip" },
                { to: "/tours/sahara-desert-adventure", label: "Agadir Boat Trip" },
                { to: "/tours/family-fun-adventure", label: "Berber Night Show in Agadir" },
              ].map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="hover:text-amber-500 transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-tealbrand-700 pb-2">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="text-amber-500 mr-2 mt-1" />
                <span> Agadir, Morocco</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-amber-500 mr-2" />
                <a href="tel:+212664884242" className="hover:text-amber-500 transition-colors">+212664884242</a>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-amber-500 mr-2" />
                <a href="tel:+212643306702" className="hover:text-amber-500 transition-colors">+212643306702</a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-amber-500 mr-2" />
                <a href="mailto:contact@trips2agadir.com" className="hover:text-amber-500 transition-colors">contact@trips2agadir.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-6 border-t border-tealbrand-800 text-center text-sm">
          <p>© {currentYear} Trips 2 Agadir. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link to="/faqs" className="hover:text-amber-500 transition-colors">Privacy Policy</Link>
            <Link to="/faqs" className="hover:text-amber-500 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
