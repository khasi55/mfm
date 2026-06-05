import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Strategies from './components/Strategies';
import StrategyConfigurator from './components/StrategyConfigurator';
import MetricsDashboard from './components/MetricsDashboard';
import CaseStudies from './components/CaseStudies';
import ContactPlanner from './components/ContactPlanner';
import Footer from './components/Footer';

const LuxuryDivider = () => (
  <div className="luxury-divider">
    <div className="luxury-divider-line"></div>
    <div className="luxury-divider-diamond"></div>
    <div className="luxury-divider-line"></div>
  </div>
);

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="app-wrapper">
      {/* Header (Sticky navigation) */}
      <Header theme={theme} toggleTheme={toggleTheme} />

      {/* Main Content Layout */}
      <main>
        {/* Hero Section */}
        <Hero />

        <LuxuryDivider />

        {/* Strategies Section (Core strategic options detailed) */}
        <Strategies />

        <LuxuryDivider />

        {/* StrategyConfigurator (Strategy Lab ROI calculator) */}
        <StrategyConfigurator />

        <LuxuryDivider />

        {/* MetricsDashboard (Simulated client attribution portal) */}
        <MetricsDashboard />

        <LuxuryDivider />

        {/* Case Studies Section (Success archives) */}
        <CaseStudies />

        <LuxuryDivider />

        {/* ContactPlanner Section (Bespoke audit request questionnaire) */}
        <ContactPlanner />
      </main>

      {/* Footer Section */}
      <Footer />

      <style>{`
        .app-wrapper {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          position: relative;
        }
        
        main {
          flex: 1;
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </div>
  );
}

export default App;
