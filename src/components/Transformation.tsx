import React from 'react';
import { TrendingUp, CheckCircle, Quote } from 'lucide-react';
import mikePlumbingImage from '../assets/mmplumbing.png';
import demoVideo from '../assets/demo1.mp4'; // Import the video file

const Transformation = () => {
  return (
    <section id="transformation" className="section py-10 bg-gradient-to-b from-primary to-slate relative">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Happens When Every Call Gets Answered?
          </h2>
          <p className="text-xl text-white/90">
            Your business grows. Your stress doesn't.
          </p>
        </div>

        {/* Video Demonstration */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white p-4 rounded-lg shadow-xl">
            <div className="relative pb-[56.25%] h-0 overflow-hidden rounded">
              {/* Actual video player */}
              <video 
                className="absolute top-0 left-0 w-full h-full object-cover"
                controls
              >
                <source src={demoVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        {/* How It Works Steps */}
        <div className="max-w-4xl mx-auto mb-16 bg-white/10 backdrop-blur-sm rounded-lg p-8">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">How ForgeCommand Works</h3>
          
          <div className="space-y-12">
            {[
              {
                step: "1",
                title: "Customer Calls or Submits a Form",
                description: "ForgeCommand answers immediately, day or night, weekends and holidays."
              },
              {
                step: "2",
                title: "AI Understands Their Needs",
                description: "Using natural language processing, ForgeCommand determines the service needed and urgency level."
              },
              {
                step: "3",
                title: "Schedules or Escalates Appropriately",
                description: "Routine calls get scheduled in your calendar. Emergencies get immediate attention."
              },
              {
                step: "4",
                title: "You Get More Jobs, Less Hassle",
                description: "No more missed opportunities. No more interrupted family time for routine calls."
              }
            ].map((item, index) => (
              <div key={index} className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mr-6 flex-shrink-0">
                  <span className="text-white font-bold text-xl">{item.step}</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-white/80">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Case Study */}
        <div className="bg-white rounded-lg shadow-xl p-8 mb-16 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3">
              <img 
                src={mikePlumbingImage} 
                alt="Morgan Maxwell's Plumbing" 
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold text-primary mb-4">Morgan Maxwell Plumbing Success Story</h3>
              <p className="text-steel mb-4">
                After struggling with missed calls and lost opportunities, Morgan Maxxwell Plumbing implemented ForgeCommand and saw immediate results.
              </p>
              <div className="flex items-center gap-2 text-secondary font-bold text-xl">
                <TrendingUp />
                <span>37% more after-hours jobs in the first month</span>
              </div>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { 
              metric: "43%", 
              description: "Average increase in booked jobs", 
              icon: <TrendingUp className="text-secondary" size={32} /> 
            },
            { 
              metric: "92%", 
              description: "Reduction in missed calls", 
              icon: <CheckCircle className="text-secondary" size={32} /> 
            },
            { 
              metric: "28hrs", 
              description: "Weekly time saved on phone management", 
              icon: <CheckCircle className="text-secondary" size={32} /> 
            }
          ].map((item, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="flex justify-center mb-4">{item.icon}</div>
              <div className="text-4xl font-bold text-white mb-2">{item.metric}</div>
              <p className="text-white/80">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <Quote className="text-secondary" size={48} />
          </div>
          <blockquote className="text-xl text-center text-steel-dark italic mb-6">
            "I was missing at least 5 calls a week during jobs. That's over $10,000 in missed work every month. ForgeCommand fixed that in the first week."
          </blockquote>
          <div className="flex items-center justify-center">
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=100" 
              alt="Contractor" 
              className="w-12 h-12 rounded-full mr-4 object-cover"
            />
            <div>
              <p className="font-bold text-primary">James Wilson</p>
              <p className="text-sm text-steel">Wilson Electrical Services</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transformation; 