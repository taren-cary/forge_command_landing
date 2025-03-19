import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Phone } from 'lucide-react';
import { cn } from '../utils/cn';
import Logo from '../assets/logo.svg'; // Adjust the path as needed

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Features', to: 'features' },
    { name: 'How It Works', to: 'transformation' },
    { name: 'Pricing', to: 'pricing' },
    { name: 'FAQ', to: 'faq' }
  ];

  // Replace this with your actual Typeform URL
  const typeformUrl = "https://ff06eppvu4h.typeform.com/to/QBLjlyFN#package=xxxxx&source=xxxxx";

  return (
    <header className={cn(
      'fixed w-full z-50 transition-all duration-300',
      isScrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'
    )}>
      <div className="container">
        <nav className="flex items-center justify-between">
          <div className="flex items-center">
            {/* Logo that scrolls to top when clicked */}
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="cursor-pointer"
            >
              <img 
                src={Logo} 
                alt="ForgeCommand Logo" 
                width="160" 
                height="90" 
                className="fill-primary"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="text-steel hover:text-primary cursor-pointer font-medium transition-colors"
                activeClass="text-primary font-semibold"
              >
                {item.name}
              </Link>
            ))}
            
            {/* Desktop Get Started Button - Without phone icon */}
            <a
              href={typeformUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-steel"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div className={cn(
          "md:hidden absolute left-0 right-0 bg-white shadow-lg transition-all duration-300 overflow-hidden",
          isMenuOpen ? "max-h-96 py-4" : "max-h-0"
        )}>
          <div className="container space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="block py-2 text-steel hover:text-primary cursor-pointer font-medium"
                activeClass="text-primary font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="tel:+19039643512"
              className="btn btn-primary block text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <Phone size={20} className="mr-2 inline-block" />
              Get Started
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;