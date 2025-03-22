import React, { useState, useEffect } from 'react';
import { Check, AlertCircle, Calculator } from 'lucide-react';
import { cn } from '../utils/cn';


const Pricing = () => {
  // Replace this with your actual Calendly booking URL
  const calendlyUrl = "https://calendly.com/forgecommand/15min";
  
  const plans = [
    {
      name: "Basic Dispatch",
      price: "$379",
      period: "per month",
      description: "Perfect for independent contractors",
      features: [
        "24/7 Phone Answering",
        "Starts With 500 Minutes",
        "Unlimited Users",
        "Basic Scheduling",
        "Custom AI Knowledge Base",
        "Emergency Detection",
        "Email Notifications"       
      ],
      cta: "Start Capturing Calls",
      highlighted: false
    },
    {
      name: "Pro Dispatch",
      price: "$479",
      period: "per month",
      description: "Ideal for growing businesses",
      features: [
        "Everything in Basic",
        "Starts With 1000 Minutes",
        "3 Locations Included",
        "Pro Scheduling(ServiceTitan, Jobber)",
        "Customer History Access",
        "Voice Cloning",
        "Priority Support"
      ],
      cta: "Grow Your Business",
      highlighted: true
    },
    {
      name: "Master Dispatch",
      price: "$679",
      period: "per month",
      description: "For established businesses",
      features: [
        "Everything in Pro",
        "Multilingual Voice Cloning",
        "Unlimited Locations",
        "Advanced Analytics",
        "Hands-On Training",
        "Dedicated Account Manager",
        "Custom Integrations"
      ],
      cta: "Dominate Your Market",
      highlighted: false
    }
  ];

  // State for ROI calculator inputs
  const [jobValue, setJobValue] = useState(500);
  const [missedCalls, setMissedCalls] = useState(5);
  const [conversionRate, setConversionRate] = useState(40);
  
  // State for calculated results
  const [monthlyRevenue, setMonthlyRevenue] = useState(0);
  const [annualRevenue, setAnnualRevenue] = useState(0);
  const [annualCost, setAnnualCost] = useState(3564); // ForgeCommand annual cost
  const [roi, setRoi] = useState(0);

  // Calculate ROI whenever inputs change
  useEffect(() => {
    calculateROI();
  }, [jobValue, missedCalls, conversionRate]);

  // ROI calculation function
  const calculateROI = () => {
    // Calculate monthly missed revenue
    const weeklyJobs = missedCalls * (conversionRate / 100);
    const weeklyRevenue = weeklyJobs * jobValue;
    const calculatedMonthlyRevenue = weeklyRevenue * 4.33; // Average weeks per month
    
    // Calculate annual missed revenue
    const calculatedAnnualRevenue = calculatedMonthlyRevenue * 12;
    
    // Calculate ROI percentage
    const calculatedRoi = ((calculatedAnnualRevenue - annualCost) / annualCost) * 100;
    
    // Update state with calculated values
    setMonthlyRevenue(calculatedMonthlyRevenue);
    setAnnualRevenue(calculatedAnnualRevenue);
    setRoi(calculatedRoi);
  };

  // Format currency
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(value);
  };

  // Handle input changes
  const handleInputChange = (e, setter) => {
    const value = parseInt(e.target.value) || 0;
    setter(value);
  };

  return (
    <section id="pricing" className="section py-10 bg-slate-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Less Than the Cost of a Missed Job
          </h2>
          <p className="text-xl text-steel">
            One additional job per month more than pays for ForgeCommand. Most of our contractors report 5-10 additional jobs in the first 30 days.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={cn(
                "rounded-lg overflow-hidden transition-all duration-300 hover:transform hover:scale-105",
                plan.highlighted 
                  ? "bg-white shadow-xl border-t-4 border-secondary relative z-10 my-0 md:-my-4" 
                  : "bg-white shadow-lg"
              )}
            >
              {plan.highlighted && (
                <div className="bg-secondary text-white text-center py-2 font-bold">
                  Most Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-2">{plan.name}</h3>
                <p className="text-steel mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-primary">{plan.price}</span>
                  <span className="text-steel ml-1">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="text-secondary mr-2 flex-shrink-0 mt-1" size={18} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Mobile version (hidden on md screens and up) */}
                <a 
                  href={calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "md:hidden w-full py-3 px-6 rounded-lg font-bold transition-colors block text-center",
                    plan.highlighted 
                      ? "bg-secondary hover:bg-secondary-dark text-white" 
                      : "bg-primary hover:bg-primary-light text-white"
                  )}
                >
                  {plan.cta}
                </a>
                
                {/* Desktop version (hidden on small screens) */}
                <a 
                  href={calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "hidden md:block w-full py-3 px-6 rounded-lg font-bold transition-colors text-center",
                    plan.highlighted 
                      ? "bg-secondary hover:bg-secondary-dark text-white" 
                      : "bg-primary hover:bg-primary-light text-white"
                  )}
                >
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* ROI Calculator */}
        <div className="mt-16 max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-primary mb-4">Calculate Your ROI</h3>
              <p className="text-steel mb-6">
                See how quickly ForgeCommand pays for itself by capturing calls you're currently missing.
              </p>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-steel font-medium mb-2">Average job value ($)</label>
                  <input 
                    type="number" 
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                    placeholder="500"
                    value={jobValue}
                    onChange={(e) => handleInputChange(e, setJobValue)}
                    min="1"
                  />
                </div>
                
                <div>
                  <label className="block text-steel font-medium mb-2">Estimated missed calls per week</label>
                  <input 
                    type="number" 
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                    placeholder="5"
                    value={missedCalls}
                    onChange={(e) => handleInputChange(e, setMissedCalls)}
                    min="0"
                  />
                </div>
                
                <div>
                  <label className="block text-steel font-medium mb-2">Call-to-job conversion rate (%)</label>
                  <input 
                    type="number" 
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                    placeholder="40"
                    value={conversionRate}
                    onChange={(e) => handleInputChange(e, setConversionRate)}
                    min="1"
                    max="100"
                  />
                </div>
                
                <button 
                  className="btn btn-secondary w-full flex items-center justify-center"
                  onClick={calculateROI}
                >
                  <Calculator size={20} className="mr-2" />
                  Calculate My ROI
                </button>
              </div>
            </div>
            
            <div className="md:w-1/2 bg-slate-50 p-6 rounded-lg">
              <h4 className="text-xl font-bold text-primary mb-4">Your Potential Results</h4>
              
              <div className="space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <p className="text-steel">Monthly missed revenue</p>
                  <p className="text-3xl font-bold text-secondary">{formatCurrency(monthlyRevenue)}</p>
                </div>
                
                <div className="border-b border-slate-200 pb-3">
                  <p className="text-steel">Annual missed revenue</p>
                  <p className="text-3xl font-bold text-secondary">{formatCurrency(annualRevenue)}</p>
                </div>
                
                <div className="border-b border-slate-200 pb-3">
                  <p className="text-steel">ForgeCommand annual cost</p>
                  <p className="text-2xl font-bold text-primary">{formatCurrency(annualCost)}</p>
                </div>
                
                <div>
                  <p className="text-steel">Your potential ROI</p>
                  <p className="text-3xl font-bold text-green-600">{roi.toFixed(0)}%</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Guarantee */}
        <div className="mt-12 max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-start">
            <AlertCircle className="text-secondary mr-3 flex-shrink-0 mt-1" size={24} />
            <div>
              <h4 className="font-bold text-primary text-xl mb-2">14-Day Risk-Free Trial</h4>
              <p className="text-steel">
                If ForgeCommand doesn't book more jobs for your business within the first 14 days, you don't pay. No questions asked.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing; 