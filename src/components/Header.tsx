import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Leaf } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: isHomePage ? '#about' : '/#about' },
    { name: 'Services', href: isHomePage ? '#services' : '/#services' },
    { name: 'Portfolio', href: isHomePage ? '#portfolio' : '/#portfolio' },
    { name: 'FAQ', href: isHomePage ? '#faq' : '/#faq' },
    { name: 'Contact', href: isHomePage ? '#contact' : '/#contact' },
  ];

  const scrollToContact = () => {
    if (isHomePage) {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#contact';
    }
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled || !isHomePage ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <Leaf className={`w-8 h-8 transition-colors ${
              isScrolled || !isHomePage ? 'text-sage-600' : 'text-white'
            }`} />
            <span className={`text-xl font-display font-bold transition-colors ${
              isScrolled || !isHomePage ? 'text-sage-900' : 'text-white'
            }`}>
              Paige's Garden Chat
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-forest-400 ${
                  isScrolled || !isHomePage ? 'text-gray-700' : 'text-white/90'
                }`}
              >
                {item.name}
              </a>
            ))}
            <button 
              onClick={scrollToContact}
              className="bg-forest-500 text-white px-6 py-2 rounded-full hover:bg-forest-600 transition-colors font-medium"
            >
              Get Quote
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-md transition-colors ${
              isScrolled || !isHomePage ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 hover:text-forest-600 hover:bg-gray-50 rounded-md text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button 
                onClick={() => {
                  scrollToContact();
                  setIsMenuOpen(false);
                }}
                className="w-full mt-4 bg-forest-500 text-white px-6 py-2 rounded-full hover:bg-forest-600 transition-colors font-medium"
              >
                Get Quote
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;