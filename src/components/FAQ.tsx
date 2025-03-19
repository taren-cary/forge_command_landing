import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Phone } from 'lucide-react';
import { cn } from '../utils/cn';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  // Replace this with your actual Typeform URL
  const typeformUrl = "https://ff06eppvu4h.typeform.com/to/QBLjlyFN#package=xxxxx&source=xxxxx";

  const faqs = [
    {
      question: "Will my customers know they're talking to an AI?",
      answer: "No. ForgeCommand uses advanced voice technology that sounds like a real tradesman. It speaks naturally, understands context, and can even use industry terminology correctly. Your customers will think they're talking to your best employee."
    },
    {
      question: "How does it handle emergency calls?",
      answer: "ForgeCommand is trained to recognize emergency situations based on keywords, tone, and context. When it detects an emergency, it can immediately alert you via text or call, while reassuring the customer that help is on the way."
    },
    {
      question: "Can it work with my existing scheduling software?",
      answer: "Yes. ForgeCommand integrates with most popular scheduling software including ServiceTitan, Housecall Pro, and Google Calendar. If you use a different system, our team will help you set up the integration during onboarding."
    },
    {
      question: "What happens if all my techs are booked up?",
      answer: "ForgeCommand will check your availability before scheduling. If you're fully booked, it can offer the next available time slot, add the customer to a waitlist, or even suggest emergency scheduling options for urgent situations."
    },
    {
      question: "How much tech knowledge do I need to set this up?",
      answer: "Very little. If you can use a smartphone, you can use ForgeCommand. Our team handles the entire setup process, including integration with your existing systems. Most contractors are up and running in less than a day."
    },
    {
      question: "Can I customize what ForgeCommand says to my customers?",
      answer: "Absolutely. During setup, we'll work with you to customize greetings, company information, service offerings, and even the personality of your virtual dispatcher. You can make changes anytime through your dashboard."
    },
    {
      question: "What if I want to take some calls myself?",
      answer: "No problem. You can set ForgeCommand to only answer calls during specific hours, when you're on another call, or when you don't answer within a certain number of rings. You're always in control."
    },
    {
      question: "How long does it take to get up and running?",
      answer: "Most contractors are fully set up within 24 hours. Our onboarding team will guide you through the process, help integrate with your existing systems, and make sure everything is working perfectly before you go live."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section py-10 bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Questions From Contractors Like You
          </h2>
          <p className="text-xl text-steel">
            Get answers to the most common questions about ForgeCommand.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-16">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={cn(
                "border-b border-slate-200 overflow-hidden transition-all",
                index === 0 && "border-t"
              )}
            >
              <button
                className="w-full py-5 px-4 flex justify-between items-center text-left focus:outline-none"
                onClick={() => toggleFaq(index)}
                aria-expanded={openIndex === index}
              >
                <span className="text-lg font-bold text-primary">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-secondary flex-shrink-0" />
                ) : (
                  <ChevronDown className="text-steel flex-shrink-0" />
                )}
              </button>
              <div 
                className={cn(
                  "transition-all duration-300 overflow-hidden",
                  openIndex === index ? "max-h-96 opacity-100 pb-5 px-4" : "max-h-0 opacity-0"
                )}
              >
                <p className="text-steel">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center max-w-2xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">
            Ready to Stop Missing Calls and Start Growing Your Business?
          </h3>
          
          {/* Mobile version (hidden on md screens and up) */}
          <a 
            href="tel:+19039643512" 
            className="md:hidden btn btn-secondary inline-flex items-center px-8 py-4 text-lg rounded-md bg-secondary hover:bg-secondary-dark text-white font-bold transition-colors"
          >
            <Phone className="mr-2" size={20} />
            Stop Losing Jobs Today
          </a>
          
          {/* Desktop version (hidden on small screens) */}
          <a 
            href={typeformUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex btn btn-secondary items-center px-8 py-4 text-lg rounded-md bg-secondary hover:bg-secondary-dark text-white font-bold transition-colors"
          >
            Stop Losing Jobs Today
          </a>
          
          <p className="mt-4 text-steel">
            14-day risk-free trial. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 