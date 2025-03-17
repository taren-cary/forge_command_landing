import React, { useState, useEffect } from 'react';
import { PhoneCall, Calendar, AlertCircle } from 'lucide-react';
import { cn } from '../utils/cn';
import { Link } from 'react-scroll';

// Import your PNG files
import Slide1 from '../assets/slide1.png';
import Slide2 from '../assets/slide2.png';
import Slide3 from '../assets/slide3.png';
import Slide4 from '../assets/slide4.png';
import Slide5 from '../assets/slide5.png';
import heroImage from '../assets/hero-image.png';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: Slide1,
      alt: "Service contractor at work"
    },
    {
      image: Slide2,
      alt: "Plumber fixing sink"
    },
    {
      image: Slide3,
      alt: "HVAC technician working"
    },
    {
      image: Slide4,
      alt: "Electrician working on panel"
    },
    {
      image: Slide5,
      alt: "Plumber fixing sink"
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds
    
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section id="hero" className="min-h-screen pt-20 relative overflow-hidden bg-gradient-to-b from-white to-slate-50">
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-80px)]">
          <div className="space-y-8">
             {/* Industry Tag */}
             <div className="mt-4 mb-0">
              <div className="inline-block px-3 py-1 bg-slate-50 border border-slate-200 rounded-full text-xs font-semibold tracking-wider text-steel uppercase">
                For HVAC, Plumbing, Electrical & Service Contractors
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
              Never Miss Another Service Call.
              <span className="text-secondary">Ever.</span>
            </h1>
            <p className="text-xl text-steel-dark">
              ForgeCommand answers your phones 24/7 like your best dispatcher—without the paycheck.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="transformation" 
                spy={true} 
                smooth={true} 
                offset={-80} 
                duration={500}
                className="btn btn-primary cursor-pointer"
              >
                See How It Works
              </Link>
              <Link 
                to="pricing" 
                spy={true} 
                smooth={true} 
                offset={-80} 
                duration={500}
                className="btn btn-secondary cursor-pointer"
              >
                View Pricing
              </Link>
            </div>
            <div className="grid sm:grid-cols-3 gap-6 pt-8">
              {[
                {
                  icon: PhoneCall,
                  title: '24/7 Coverage',
                  description: 'Never miss a call, day or night'
                },
                {
                  icon: Calendar,
                  title: 'Smart Scheduling',
                  description: 'Automatically book jobs in your calendar'
                },
                {
                  icon: AlertCircle,
                  title: 'Emergency Ready',
                  description: 'Instant alerts for urgent situations'
                }
              ].map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <feature.icon className="w-6 h-6 text-secondary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-primary">{feature.title}</h3>
                    <p className="text-sm text-steel">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Image Carousel */}
          <div className="aspect-square rounded-2xl bg-gray-100 overflow-hidden relative shadow-xl">
            {/* PNG Images */}
            {slides.map((slide, index) => (
              <div 
                key={index}
                className={cn(
                  "absolute inset-0 transition-opacity duration-1000",
                  currentSlide === index ? "opacity-100" : "opacity-0"
                )}
              >
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
            
            {/* Indicators */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all",
                    currentSlide === index 
                      ? "bg-white w-6" 
                      : "bg-white/50 hover:bg-white/80"
                  )}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute right-0 top-1/4 w-1/3 h-1/3 bg-gradient-to-br from-secondary/10 to-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute left-0 bottom-1/4 w-1/4 h-1/4 bg-gradient-to-tr from-primary/10 to-slate/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;