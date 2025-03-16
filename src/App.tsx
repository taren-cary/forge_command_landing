import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import EarlyCatalyst from './components/EarlyCatalyst';
import Features from './components/Features';
import Transformation from './components/Transformation';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <EarlyCatalyst />
      <Features />
      <Transformation />
      <Pricing />
      <FAQ />
      <Footer />
      {/* Other sections will be added here */}
    </div>
  );
}

export default App;