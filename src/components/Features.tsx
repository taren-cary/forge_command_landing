import React from 'react';
import { Phone } from 'lucide-react';

// Import your images
import phoneImage from '../assets/feature-phone.png';
import calendarImage from '../assets/feature-calendar.png';
import emergencyImage from '../assets/feature-emergency.png';
import customerImage from '../assets/feature-customer.png';
import websiteImage from '../assets/feature-website.png';
import followUpImage from '../assets/feature-followup.png';

const Features = () => {
  // Replace this with your actual Typeform URL
  const typeformUrl = "https://ff06eppvu4h.typeform.com/to/QBLjlyFN#package=xxxxx&source=xxxxx";

  const featureCards = [
    {
      image: phoneImage,
      title: "Answers Like Your Best Guy",
      description: "Speaks like a real tradesman, not some robot. Customers won't even know it's AI."
    },
    {
      image: calendarImage,
      title: "Books Jobs Right Into Your Calendar",
      description: "Syncs with your existing schedule. No double-bookings, no forgotten appointments."
    },
    {
      image: emergencyImage,
      title: "Knows an Emergency When It Hears One",
      description: "Water main break at 2 AM? ForgeCommand alerts you immediately. Routine service call? Gets scheduled for business hours."
    },
    {
      image: customerImage,
      title: "Remembers Your Regulars",
      description: "Recognizes repeat customers, pulls up their history, and makes them feel like VIPs."
    },
    {
      image: websiteImage,
      title: "Turns Website Visitors Into Paying Jobs",
      description: "When customers fill out your website form, ForgeCommand calls them back in minutes—before they call your competitor."
    },
    {
      image: followUpImage,
      title: "Automatically Follows Up After Service",
      description: "Sends thank-you messages, requests reviews, and checks customer satisfaction without you lifting a finger. Turn one-time customers into lifetime clients."
    }
  ];

  return (
    <section id="features" className="py-12 md:py-16 lg:py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Your New Dispatch Team Works While You Sleep
          </h2>
          <p className="text-xl text-steel">
            No coffee breaks. No sick days. No complaints.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureCards.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105"
            >
              <div className="w-full h-48 overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-steel">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          {/* Mobile version (hidden on md screens and up) */}
          <a 
            href="tel:+19039643512" 
            className="md:hidden btn btn-secondary inline-flex items-center px-6 py-3 rounded-md bg-secondary hover:bg-secondary-dark text-white font-medium transition-colors"
          >
            <Phone className="mr-2" size={20} />
            See It In Action
          </a>
          
          {/* Desktop version (hidden on small screens) */}
          <a 
            href={typeformUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex btn btn-secondary items-center px-6 py-3 rounded-md bg-secondary hover:bg-secondary-dark text-white font-medium transition-colors"
          >
            See It In Action
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features; 