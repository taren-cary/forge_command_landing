import React from 'react';
import { Phone, Mail, Shield, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Logo from '../assets/logo2.svg'; // Make sure you have your logo in the assets folder

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-white pt-12 pb-6">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="col-span-1">
            <img 
              src={Logo} 
              alt="ForgeCommand Logo" 
              width="160" 
              height="40" 
              className="fill-primary" 
            />
            <p className="text-slate-300 mb-4">
              24/7 AI voice dispatcher for service contractors. Never miss another call.
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
                <a href="#features" className="text-slate-300 hover:text-secondary transition-colors">Features</a>
              </li>
              <li>
                <a href="#pricing" className="text-slate-300 hover:text-secondary transition-colors">Pricing</a>
              </li>
              <li>
                <a href="#faq" className="text-slate-300 hover:text-secondary transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#demo" className="text-slate-300 hover:text-secondary transition-colors">See Demo</a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="col-span-1">
            <h4 className="text-white font-bold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone size={16} className="text-secondary mr-2" />
                <a href="tel:+18005551234" className="text-slate-300 hover:text-secondary transition-colors">
                  (800) 555-1234
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="text-secondary mr-2" />
                <a href="mailto:info@forgecommand.com" className="text-slate-300 hover:text-secondary transition-colors">
                  info@forgecommand.com
                </a>
              </li>
            </ul>
          </div>
          
          {/* Trust Signals */}
          <div className="col-span-1">
            <h4 className="text-white font-bold mb-4">Trust & Security</h4>
            <div className="flex items-center mb-3">
              <Shield size={16} className="text-secondary mr-2" />
              <span className="text-slate-300">256-bit SSL Encryption</span>
            </div>
            <div className="flex items-center">
              <Shield size={16} className="text-secondary mr-2" />
              <span className="text-slate-300">HIPAA Compliant</span>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm mb-4 md:mb-0">
            © {currentYear} ForgeCommand. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-slate-400 text-sm hover:text-secondary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-400 text-sm hover:text-secondary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-slate-400 text-sm hover:text-secondary transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 