import React from 'react';
import { ArrowDown, Award, TrendingUp, Compass, ShieldCheck } from 'lucide-react';
import goldEarthGlobe from '../assets/gold_earth_globe.png';

export default function Hero() {
  const stats = [
    { value: '$450M+', label: 'Client Revenue Generated', icon: <TrendingUp size={18} /> },
    { value: '382%', label: 'Average ROI Increase', icon: <Award size={18} /> },
    { value: '14+', label: 'Global Industry Niches', icon: <Compass size={18} /> },
    { value: '96%', label: 'Client Retention Rate', icon: <ShieldCheck size={18} /> },
  ];

  return (
    <section className="hero-section">
      <div className="hero-bg-accent"></div>
      <div className="glow-blob" style={{ top: '10%', left: '-5%' }}></div>
      <div className="glow-blob" style={{ bottom: '15%', right: '-5%', width: '500px', height: '500px' }}></div>
      
      {/* Floating geometric design accents */}
      <div className="deco-ring deco-ring-1 animate-float">
        <div className="gold-globe-wrapper">
          <img src={goldEarthGlobe} alt="Gold Earth Globe" className="gold-earth-globe-img" />
          <svg viewBox="0 0 100 100" className="gold-globe-svg-overlay">
            {/* Outer circle */}
            <circle cx="50" cy="50" r="49" fill="none" stroke="var(--gold-medium)" strokeWidth="0.6" />
            {/* Inner dashed ring */}
            <circle cx="50" cy="50" r="46" fill="none" stroke="var(--gold-medium)" strokeWidth="0.3" strokeDasharray="3 3" opacity="0.6" />
            {/* Diagonal tilted rings */}
            <ellipse cx="50" cy="50" rx="49" ry="20" fill="none" stroke="var(--gold-dark)" strokeWidth="0.4" transform="rotate(-30 50 50)" opacity="0.5" />
            <ellipse cx="50" cy="50" rx="49" ry="20" fill="none" stroke="var(--gold-dark)" strokeWidth="0.4" transform="rotate(30 50 50)" opacity="0.3" />
          </svg>
        </div>
      </div>
      <div className="deco-ring deco-ring-2 animate-float" style={{ animationDelay: '-3s' }}></div>

      <div className="container hero-container animate-fade-in">
        
        {/* Main Title */}
        <h1 className="hero-title">
          We Architect High-Performance <br />
          <span className="gold-text">Growth Engines</span> For Prestige Brands.
        </h1>
        
        {/* Subtitle */}
        <p className="hero-subtitle-text">
          Where data science meets luxury brand positioning. We craft bespoke multi-channel marketing systems that turn ambitious market-share goals into predictable, scalable revenue streams.
        </p>

        {/* Action Buttons */}
        <div className="hero-actions">
          <a href="#planner" className="btn btn-gold hero-btn-main">
            Design Your Blueprint
          </a>
          <a href="#configurator" className="btn btn-secondary">
            Strategy Lab
          </a>
        </div>

        {/* Stats Grid */}
        <div className="hero-stats-grid">
          {stats.map((stat, i) => (
            <div 
              key={i} 
              className="hero-stat-card"
              style={{ animationDelay: `${0.2 + i * 0.1}s` }}
            >
              <div className="stat-card-glow"></div>
              <div className="stat-icon-wrapper">
                {stat.icon}
              </div>
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <a href="#strategies" className="scroll-btn" aria-label="Scroll to strategies">
            <span>Explore The Strategies</span>
            <ArrowDown size={14} className="arrow-bounce" />
          </a>
        </div>
      </div>

      <style>{`
        .hero-section {
          padding-top: calc(var(--header-height) + 6rem);
          padding-bottom: 7rem;
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          background: linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
          overflow: hidden;
        }

        .hero-bg-accent {
          position: absolute;
          top: -200px;
          right: -100px;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(173, 139, 84, 0.12) 0%, rgba(10, 9, 8, 0) 70%);
          border-radius: 50%;
          pointer-events: none;
          filter: blur(50px);
        }

        /* Deco Ring Styles */
        .deco-ring {
          position: absolute;
          border: 1px solid var(--border-gold-strong);
          border-radius: 50%;
          pointer-events: none;
          z-index: 2;
        }
        .deco-ring-1 {
          width: 250px;
          height: 250px;
          top: 15%;
          right: 60px;
          opacity: 0.95;
          border: none;
        }

        .gold-globe-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          filter: drop-shadow(0 0 35px rgba(173, 139, 84, 0.25));
        }

        .gold-globe-wrapper::before {
          content: '';
          position: absolute;
          width: 82%;
          height: 82%;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(173, 139, 84, 0.22) 0%, rgba(0, 0, 0, 0) 70%);
          filter: blur(15px);
          z-index: -1;
        }

        .gold-earth-globe-img {
          width: 86%;
          height: 86%;
          object-fit: cover;
          border-radius: 50%;
          animation: spinGlobe 60s linear infinite;
        }

        .gold-globe-svg-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          animation: spinGlobeReverse 30s linear infinite;
        }

        @keyframes spinGlobe {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes spinGlobeReverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        @media (max-width: 991px) {
          .deco-ring-1 {
            width: 180px;
            height: 180px;
            top: 8%;
            right: 30px;
            opacity: 0.55;
          }
        }

        @media (max-width: 768px) {
          .deco-ring-1 {
            display: none;
          }
        }

        .deco-ring-2 {
          width: 160px;
          height: 160px;
          bottom: 22%;
          left: 6%;
          border-style: dashed;
          opacity: 0.25;
        }

        .hero-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          position: relative;
          z-index: 10;
          padding: 0 2rem;
        }

        .hero-title {
          font-size: 4.8rem;
          line-height: 1.1;
          margin-bottom: 2rem;
          letter-spacing: -0.02em;
          font-weight: 400;
        }

        @media (max-width: 991px) {
          .hero-title {
            font-size: 3.5rem;
          }
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.6rem;
          }
        }

        .hero-subtitle-text {
          font-size: 1.25rem;
          line-height: 1.8;
          color: var(--text-secondary);
          max-width: 800px;
          margin-bottom: 3rem;
        }

        @media (max-width: 768px) {
          .hero-subtitle-text {
            font-size: 1.1rem;
          }
        }

        .hero-actions {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 6rem;
        }

        @media (max-width: 480px) {
          .hero-actions {
            flex-direction: column;
            width: 100%;
            gap: 1rem;
          }
        }

        .hero-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.75rem;
          width: 100%;
          margin-bottom: 4rem;
        }

        @media (max-width: 991px) {
          .hero-stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.25rem;
          }
        }

        @media (max-width: 550px) {
          .hero-stats-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
        }

        .hero-stat-card {
          background-color: rgba(17, 16, 14, 0.7);
          backdrop-filter: blur(10px);
          border: 1px solid var(--border-gold);
          padding: 2.5rem 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          overflow: hidden;
          transition: var(--transition-smooth);
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        /* Top accent line */
        .hero-stat-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 0;
          height: 3px;
          background: var(--gold-gradient);
          transition: var(--transition-smooth);
        }

        .hero-stat-card:hover::before {
          width: 100%;
        }

        .hero-stat-card:hover {
          transform: translateY(-8px);
          border-color: var(--gold-medium);
          background-color: rgba(24, 23, 20, 0.9);
          box-shadow: var(--shadow-lux);
        }

        .stat-card-glow {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(173, 139, 84, 0.05) 0%, rgba(10, 9, 8, 0) 100%);
          pointer-events: none;
        }

        .stat-icon-wrapper {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          background-color: var(--bg-secondary);
          color: var(--gold-dark);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          border: 1px solid var(--border-gold);
          transition: var(--transition-smooth);
        }

        .hero-stat-card:hover .stat-icon-wrapper {
          background-color: var(--gold-light);
          transform: rotate(5deg) scale(1.08);
          color: var(--gold-deep);
        }

        .stat-value {
          font-family: var(--font-serif);
          font-size: 2.5rem;
          font-weight: 500;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
          letter-spacing: -0.01em;
        }

        .stat-label {
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .scroll-indicator {
          display: flex;
          justify-content: center;
          margin-top: 2rem;
        }

        .scroll-btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
          color: var(--text-muted);
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          transition: var(--transition-fast);
        }

        .scroll-btn:hover {
          color: var(--gold-dark);
        }

        .arrow-bounce {
          animation: bounce 1.5s infinite;
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(6px);
          }
        }
      `}</style>
    </section>
  );
}
