import React from 'react';
import { DollarSign, PhoneOff, PhoneCall, Calendar } from 'lucide-react';
import newBackgroundTexture from '../assets/new-texture.png';

const EarlyCatalyst = () => {
  return (
    <section id="catalyst" className="section bg-white relative">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-8">
            What Happens When You Miss a Call?
          </h2>
          
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-steel-dark text-center">
              Every time that phone rings and you can't pick up, that's not just a missed call—it's money walking out the door. 
              Your competitor is just one Google search away, and customers who can't reach you will find someone who answers.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Before ForgeCommand */}
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mr-4">
                  <PhoneOff className="text-red-500" size={24} />
                </div>
                <h3 className="text-xl font-bold text-steel-dark">Before ForgeCommand</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✖</span>
                  <span>Missed calls during jobs and after hours</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✖</span>
                  <span>Scheduling conflicts and double-bookings</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✖</span>
                  <span>Emergency calls missed until morning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✖</span>
                  <span>Customers calling competitors when you don't answer</span>
                </li>
              </ul>
            </div>
            
            {/* After ForgeCommand */}
            <div className="bg-primary-light/10 p-6 rounded-lg border border-primary/20 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
                  <PhoneCall className="text-green-500" size={24} />
                </div>
                <h3 className="text-xl font-bold text-steel-dark">After ForgeCommand</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Every call answered 24/7, even during jobs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Jobs automatically scheduled without conflicts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Emergencies immediately flagged and routed</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Customers booked before they call competitors</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Stats about cost of missed calls */}
          <div 
            className="rounded-xl p-8 text-white"
            style={{ 
              backgroundImage: `url(${newBackgroundTexture})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <h3 className="text-2xl font-bold mb-6 text-center">The Real Cost of Missed Calls</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <DollarSign size={32} className="text-secondary" />
                </div>
                <div className="text-3xl font-bold mb-1">$275</div>
                <p className="text-sm">Average value of a missed service call</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <DollarSign size={32} className="text-secondary" />
                </div>
                <div className="text-3xl font-bold mb-1">62%</div>
                <p className="text-sm">Of callers will hire your competitor if you don't answer</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <DollarSign size={32} className="text-secondary" />
                </div>
                <div className="text-3xl font-bold mb-1">$8,250+</div>
                <p className="text-sm">Monthly revenue lost from just 1 missed call per day</p>
              </div>
            </div>
          </div>
          
          {/* Animation showing calls converting to cash */}
          <div className="flex justify-center mt-8 md:mt-12">
            <div className="relative w-full">
              {/* Mobile Animation - Only visible on small screens */}
              <div className="flex md:hidden items-center justify-center w-full">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary flex items-center justify-center">
                  <PhoneCall className="text-white" size={20} />
                </div>
                <div className="w-16 sm:w-24 h-2 bg-secondary"></div>
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-secondary flex items-center justify-center">
                  <Calendar className="text-white" size={20} />
                </div>
                <div className="w-16 sm:w-24 h-2 bg-secondary"></div>
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-green-500 flex items-center justify-center">
                  <DollarSign className="text-white" size={20} />
                </div>
              </div>
              
              {/* Desktop Animation - Only visible on medium+ screens */}
              <div className="hidden md:flex items-center justify-center w-full">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                  <PhoneCall className="text-white" size={24} />
                </div>
                <div className="w-32 h-2 bg-secondary"></div>
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center">
                  <Calendar className="text-white" size={24} />
                </div>
                <div className="w-32 h-2 bg-secondary"></div>
                <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center">
                  <DollarSign className="text-white" size={24} />
                </div>
              </div>
              
              <p className="text-center mx-auto max-w-md mt-4 text-sm sm:text-base md:text-steel font-medium">
                Every answered call becomes a booked job and money in your pocket.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarlyCatalyst; 