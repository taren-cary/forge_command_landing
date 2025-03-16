import React from 'react';
import { Phone, Calendar, AlertCircle, Star, Globe } from 'lucide-react';

const Features = () => {
  const featureCards = [
    {
      icon: <Phone className="text-white" size={32} />,
      title: "Answers Like Your Best Guy",
      description: "Speaks like a real tradesman, not some robot. Customers won't even know it's AI."
    },
    {
      icon: <Calendar className="text-white" size={32} />,
      title: "Books Jobs Right Into Your Calendar",
      description: "Syncs with your existing schedule. No double-bookings, no forgotten appointments."
    },
    {
      icon: <AlertCircle className="text-white" size={32} />,
      title: "Knows an Emergency When It Hears One",
      description: "Water main break at 2 AM? ForgeCommand alerts you immediately. Routine service call? Gets scheduled for business hours."
    },
    {
      icon: <Star className="text-white" size={32} />,
      title: "Remembers Your Regulars",
      description: "Recognizes repeat customers, pulls up their history, and makes them feel like VIPs."
    },
    {
      icon: <Globe className="text-white" size={32} />,
      title: "Turns Website Visitors Into Paying Jobs",
      description: "When customers fill out your website form, ForgeCommand calls them back in minutes—before they call your competitor."
    }
  ];

  return (
    <section id="features" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
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
              <div className="bg-gradient-to-r from-primary to-slate p-6 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center">
                  {feature.icon}
                </div>
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
          <a 
            href="#demo" 
            className="btn btn-secondary inline-flex items-center px-6 py-3 rounded-md bg-secondary hover:bg-secondary-dark text-white font-medium transition-colors"
          >
            <Phone className="mr-2" size={20} />
            See It In Action
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features; 