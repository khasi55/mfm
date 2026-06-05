import React, { useState } from 'react';
import { ChevronRight, TrendingUp, DollarSign, Calendar, Target } from 'lucide-react';

export default function CaseStudies() {
  const [activeCase, setActiveCase] = useState(0);

  const cases = [
    {
      id: 0,
      client: 'Aura Luxury Cosmetics',
      category: 'Prestige Consumer D2C',
      stat: '+320%',
      statLabel: 'eCommerce ROAS Scale',
      duration: '4 Months',
      budget: '$45K / Month',
      highlight: 'Activated high-frequency creator syndication combined with predictive search targeting.',
      challenge: 'Aura was struggling to scale their media spend past $15K/month without experiencing a rapid drop in ad efficiency and direct ROI.',
      solution: 'MFM designed a structured content pipeline onboarding 65 premium creators. We built custom server-side attribution to scale ads across Meta and TikTok Shop, focusing on direct-checkout conversion tags.',
      results: [
        'Scalability reached $120K/month monthly spend.',
        'Blended ROAS stabilized at 4.6x (up from 1.8x).',
        'Customer Acquisition Cost (CAC) reduced by 34%.'
      ]
    },
    {
      id: 1,
      client: 'Apex Venture Partners',
      category: 'Institutional Wealth & Private Equity',
      stat: '$4.8M',
      statLabel: 'Qualified LP Pipeline',
      duration: '90 Days',
      budget: '$20K / Month',
      highlight: 'Deployed custom B2B telemetry and AI-driven conversational qualification.',
      challenge: 'Apex needed to identify and qualify ultra-high-net-worth LPs (Limited Partners) without relying on inefficient traditional cold outreach methods.',
      solution: 'We engineered a highly targeted, database-matched LinkedIn account playbook. This was backed by interactive custom landing portals that qualified leads via semantic AI intake forms.',
      results: [
        'Over 85 pre-qualified inquiries within 90 days.',
        'Total accredited capital pipeline reached $4.8 Million.',
        'Response rate to corporate correspondence increased by 280%.'
      ]
    },
    {
      id: 2,
      client: 'Vanguard SaaS Solutions',
      category: 'Enterprise B2B Software',
      stat: '+180%',
      statLabel: 'Demo Booking Surge',
      duration: '6 Months',
      budget: '$35K / Month',
      highlight: 'Built programmatic SEO systems mapping intent-driven search directories.',
      challenge: 'Vanguard relied heavily on paid Search PPC, driving up demo booking costs to an unsustainable $180/lead.',
      solution: 'MFM executed a full semantic clustering overhaul. We programmatically built 250+ highly optimized resource landing pages, capturing high-intent B2B search terms without ad spend.',
      results: [
        'Organic impressions scaled from 20K to 180K monthly.',
        'Cost Per Demo dropped from $180 to $62.',
        'Recurring revenue pipeline increased by $1.2M.'
      ]
    }
  ];

  return (
    <section id="case-studies" className="section cases-section">
      <div className="container">
        <div className="section-title-wrapper">
          <span className="gold-badge">Proven Results</span>
          <h2 className="section-title">The Success Archives</h2>
          <p className="section-subtitle">
            Explore detailed records of how we have deployed strategic marketing playbooks to solve growth plateaus for elite operations.
          </p>
        </div>

        <div className="cases-grid">
          {/* Left Side: Case list selector */}
          <div className="cases-selector">
            {cases.map((cs, idx) => {
              const active = activeCase === idx;
              return (
                <button
                  key={cs.id}
                  onClick={() => setActiveCase(idx)}
                  className={`case-select-card ${active ? 'active' : ''}`}
                >
                  <div className="selector-meta">
                    <span className="case-sel-cat">{cs.category}</span>
                    <h3 className="case-sel-client">{cs.client}</h3>
                  </div>
                  <div className="selector-icon-wrap">
                    <ChevronRight size={18} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Side: Case Details Showcase */}
          <div className="case-showcase-card">
            <div className="showcase-glow"></div>
            
            {/* Header with big numbers */}
            <div className="showcase-header">
              <div className="big-stat-wrapper">
                <span className="showcase-stat-num text-gold">{cases[activeCase].stat}</span>
                <span className="showcase-stat-lbl">{cases[activeCase].statLabel}</span>
              </div>
              <div className="showcase-meta-info">
                <div className="meta-info-item">
                  <Calendar size={14} className="text-gold" />
                  <span>Timeline: <strong>{cases[activeCase].duration}</strong></span>
                </div>
                <div className="meta-info-item">
                  <DollarSign size={14} className="text-gold" />
                  <span>Budget: <strong>{cases[activeCase].budget}</strong></span>
                </div>
              </div>
            </div>

            {/* Case Copy */}
            <div className="showcase-body">
              <div className="showcase-brief">
                <Target size={16} className="brief-icon" />
                <p><strong>Strategic Move:</strong> {cases[activeCase].highlight}</p>
              </div>

              <div className="narrative-section">
                <div className="narrative-block">
                  <h4>The Obstacle</h4>
                  <p>{cases[activeCase].challenge}</p>
                </div>
                
                <div className="narrative-block">
                  <h4>The Engagement Strategy</h4>
                  <p>{cases[activeCase].solution}</p>
                </div>
              </div>

              {/* Achievements bullet grid */}
              <div className="achievements-section">
                <h4>Verified Results</h4>
                <ul className="results-list">
                  {cases[activeCase].results.map((res, i) => (
                    <li key={i}>
                      <TrendingUp size={16} className="res-trend-icon" />
                      <span>{res}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .cases-section {
          background-color: var(--bg-secondary);
          border-bottom: 1px solid var(--border-gold);
        }

        .cases-grid {
          display: grid;
          grid-template-columns: 1fr 1.8fr;
          gap: 3rem;
          align-items: start;
        }

        @media (max-width: 991px) {
          .cases-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }

        /* Selector Buttons */
        .cases-selector {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .case-select-card {
          background-color: var(--bg-primary);
          border: 1px solid var(--border-gold);
          padding: 1.5rem 2rem;
          text-align: left;
          cursor: pointer;
          transition: var(--transition-smooth);
          display: flex;
          justify-content: justify;
          align-items: center;
          width: 100%;
        }

        .case-select-card:hover {
          border-color: var(--gold-medium);
          transform: translateY(-2px);
        }

        .case-select-card.active {
          border-color: var(--gold-dark);
          background-color: var(--gold-light);
          transform: translateX(4px);
        }

        .selector-meta {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .case-sel-cat {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--gold-dark);
          letter-spacing: 0.05em;
        }

        .case-sel-client {
          font-family: var(--font-serif);
          font-size: 1.4rem;
          font-weight: 500;
          color: var(--text-primary);
        }

        .selector-icon-wrap {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 1px solid var(--border-gold);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-muted);
          transition: var(--transition-fast);
        }

        .case-select-card:hover .selector-icon-wrap {
          border-color: var(--gold-medium);
          color: var(--gold-dark);
          transform: translateX(3px);
        }

        /* Case Showcase Box */
        .case-showcase-card {
          background-color: var(--bg-primary);
          border: 1px solid var(--border-gold);
          padding: 3.5rem;
          box-shadow: var(--shadow-lux);
          position: relative;
          overflow: hidden;
        }

        @media (max-width: 600px) {
          .case-showcase-card {
            padding: 2rem 1.5rem;
          }
        }

        .showcase-glow {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(197, 168, 128, 0.03) 0%, rgba(255, 255, 255, 0) 100%);
          pointer-events: none;
        }

        .showcase-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          border-bottom: 1px solid var(--border-gold);
          padding-bottom: 2rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
          gap: 1.5rem;
        }

        .big-stat-wrapper {
          display: flex;
          flex-direction: column;
        }

        .showcase-stat-num {
          font-family: var(--font-serif);
          font-size: 4rem;
          line-height: 1;
          font-weight: 500;
          margin-bottom: 0.25rem;
        }

        .showcase-stat-lbl {
          font-size: 0.85rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--text-muted);
          letter-spacing: 0.1em;
        }

        .showcase-meta-info {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .meta-info-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        .showcase-brief {
          display: flex;
          gap: 0.75rem;
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-gold);
          padding: 1.25rem;
          margin-bottom: 2rem;
          align-items: flex-start;
        }

        .brief-icon {
          color: var(--gold-dark);
          margin-top: 0.2rem;
          flex-shrink: 0;
        }

        .brief-icon + p {
          font-size: 0.95rem;
          color: var(--text-primary);
        }

        .narrative-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem;
          margin-bottom: 2.5rem;
        }

        @media (max-width: 768px) {
          .narrative-section {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
        }

        .narrative-block h4, .achievements-section h4 {
          font-family: var(--font-sans);
          font-weight: 700;
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-primary);
          margin-bottom: 0.75rem;
        }

        .narrative-block p {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.7;
        }

        .achievements-section {
          border-top: 1px dashed var(--border-gold);
          padding-top: 2rem;
        }

        .results-list {
          list-style: none;
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.85rem;
        }

        .results-list li {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 1rem;
          color: var(--text-primary);
          font-weight: 500;
        }

        .res-trend-icon {
          color: var(--gold-dark);
          flex-shrink: 0;
        }
      `}</style>
    </section>
  );
}
