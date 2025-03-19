import React from 'react';
import { Link } from 'react-scroll';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Logo from '../assets/logo2.svg';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="col-span-1">
            <img src={Logo} alt="ForgeCommand Logo" className="h-12 mb-4" />
            <p className="text-slate-300 mb-4">
              The AI voice dispatcher that never sleeps, never complains, and never misses a call.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-300 hover:text-secondary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-slate-300 hover:text-secondary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-slate-300 hover:text-secondary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-slate-300 hover:text-secondary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="features" 
                  spy={true} 
                  smooth={true} 
                  offset={-80} 
                  duration={500}
                  className="text-slate-300 hover:text-secondary transition-colors cursor-pointer"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link 
                  to="pricing" 
                  spy={true} 
                  smooth={true} 
                  offset={-80} 
                  duration={500}
                  className="text-slate-300 hover:text-secondary transition-colors cursor-pointer"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link 
                  to="faq" 
                  spy={true} 
                  smooth={true} 
                  offset={-80} 
                  duration={500}
                  className="text-slate-300 hover:text-secondary transition-colors cursor-pointer"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link 
                  to="transformation" 
                  spy={true} 
                  smooth={true} 
                  offset={-80} 
                  duration={500}
                  className="text-slate-300 hover:text-secondary transition-colors cursor-pointer"
                >
                  See Demo
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h4 className="text-white font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone size={20} className="text-secondary mr-3 flex-shrink-0 mt-1" />
                <span className="text-slate-300">(903) 964-3512</span>
              </li>
              <li className="flex items-start">
                <Mail size={20} className="text-secondary mr-3 flex-shrink-0 mt-1" />
                <span className="text-slate-300">info@forgecommand.com</span>
              </li>
              <li className="flex items-start">
                <MapPin size={20} className="text-secondary mr-3 flex-shrink-0 mt-1" />
                <span className="text-slate-300">1101 Pennsylvania Ave<br />Washington, DC 20001</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-1">
            <h4 className="text-white font-bold mb-4">Stay Updated</h4>
            <p className="text-slate-300 mb-4">
              Subscribe to our newsletter for tips, news, and special offers.
            </p>
            <form className="space-y-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full px-4 py-2 rounded-md bg-slate-700 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <button 
                type="submit" 
                className="w-full px-4 py-2 bg-secondary hover:bg-secondary-dark text-white font-medium rounded-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-slate-700 text-center text-slate-400">
          <p>&copy; {new Date().getFullYear()} ForgeCommand. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 