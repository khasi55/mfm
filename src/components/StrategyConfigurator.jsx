import React, { useState, useEffect } from 'react';
import { Sparkles, Calculator, CheckCircle2, ChevronRight, BarChart } from 'lucide-react';

export default function StrategyConfigurator() {
  const [businessType, setBusinessType] = useState('d2c');
  const [businessGoal, setBusinessGoal] = useState('sales');
  const [budget, setBudget] = useState(25000);
  const [results, setResults] = useState(null);

  const businessTypes = [
    { id: 'd2c', label: 'High-Growth D2C', desc: 'Direct consumer retail brands' },
    { id: 'saas', label: 'Enterprise SaaS', desc: 'Subscription B2B softwares' },
    { id: 'luxury', label: 'Luxury & Prestige', desc: 'High ticket services & goods' },
    { id: 'fintech', label: 'FinTech & Wealth', desc: 'Financial platforms & advisory' },
  ];

  const businessGoals = [
    { id: 'sales', label: 'Direct Sales / ROAS', desc: 'Scale direct checkout conversions' },
    { id: 'leads', label: 'Enterprise Leads', desc: 'Book qualified meetings & pipeline' },
    { id: 'ltv', label: 'LTV & Retention', desc: 'Maximize repeat purchase value' },
    { id: 'traffic', label: 'Market Visibility', desc: 'Saturate target audience attention' },
  ];

  const calculateStrategy = () => {
    // Generate simulated projection based on selections
    let baseRoas = 2.4;
    let baseCpa = 45;
    let allocations = [];
    let channels = [];

    if (businessType === 'd2c') {
      baseCpa = 35;
      if (businessGoal === 'sales') {
        baseRoas = 3.8;
        allocations = [
          { name: 'Performance Social (Meta/TikTok)', percent: 50 },
          { name: 'Influencer & UGC Syndication', percent: 25 },
          { name: 'Precision Search (PPC)', percent: 15 },
          { name: 'Email & Retention Automations', percent: 10 }
        ];
        channels = ['Meta Ads API', 'TikTok Spark Ads', 'Klaviyo Automations'];
      } else if (businessGoal === 'ltv') {
        baseRoas = 5.2;
        allocations = [
          { name: 'Email & Retention Automations', percent: 45 },
          { name: 'VIP Loyalty Programs & Events', percent: 25 },
          { name: 'Custom Telemetry & Audits', percent: 15 },
          { name: 'Social Re-targeting', percent: 15 }
        ];
        channels = ['Klaviyo Flow Engine', 'Yotpo Premium', 'Meta Custom Audiences'];
      } else {
        baseRoas = 2.8;
        allocations = [
          { name: 'Performance Social', percent: 40 },
          { name: 'Precision Search (PPC)', percent: 30 },
          { name: 'Organic SEO Clusters', percent: 20 },
          { name: 'Email flows', percent: 10 }
        ];
        channels = ['Google Ads', 'Meta Performance Suite', 'Content Silos'];
      }
    } else if (businessType === 'saas') {
      baseCpa = 140;
      if (businessGoal === 'leads') {
        baseRoas = 4.2;
        allocations = [
          { name: 'AI outbound & Conversational leadgen', percent: 35 },
          { name: 'Precision Search (PPC)', percent: 30 },
          { name: 'Programmatic SEO & Content', percent: 20 },
          { name: 'Retargeting & Account-Based Ads', percent: 15 }
        ];
        channels = ['AI Warm-Outbound API', 'Google Search Ads', 'LinkedIn Account Matching'];
      } else {
        baseRoas = 3.0;
        allocations = [
          { name: 'Precision Search (PPC)', percent: 40 },
          { name: 'Programmatic SEO & Content', percent: 30 },
          { name: 'Client Education & Webinars', percent: 20 },
          { name: 'Retargeting', percent: 10 }
        ];
        channels = ['Google Search Ads', 'Webflow Directory SEO', 'LinkedIn Lead Ads'];
      }
    } else if (businessType === 'luxury') {
      baseCpa = 220;
      baseRoas = 4.8;
      allocations = [
        { name: 'Bespoke Brand Identity & Storytelling', percent: 40 },
        { name: 'VVIP Experiences & Private PR', percent: 30 },
        { name: 'High-Net-Worth Retargeting', percent: 20 },
        { name: 'Select Influencer Syndication', percent: 10 }
      ];
      channels = ['Private Press Placements', 'VVIP Landing Portals', 'Meta Elite Demographics'];
    } else { // fintech
      baseCpa = 85;
      baseRoas = 3.5;
      allocations = [
        { name: 'Compliance-Safe Paid Ads', percent: 35 },
        { name: 'Data Telemetry & Tracking APIs', percent: 25 },
        { name: 'Organic Trust & Thought Leadership', percent: 25 },
        { name: 'Retargeting Automations', percent: 15 }
      ];
      channels = ['Google Search (Intent)', 'Server-Side GA4 Tracking', 'Premium Financial PR'];
    }

    // Adjust ratios by budget scale
    if (budget > 100000) {
      baseRoas = Math.max(1.8, baseRoas - 0.3); // scaling ad spend decreases raw ROAS slightly, realistic!
      baseCpa = baseCpa * 0.95; // better efficiencies in scale
    } else if (budget < 20000) {
      baseRoas = baseRoas + 0.15; // smaller, highly focused spend gives better hyper-targeted ROAS
      baseCpa = baseCpa * 1.1; // lower spend lacks scale efficiencies
    }

    const estimatedConversions = Math.round(budget / baseCpa);
    const projectedRevenue = Math.round(budget * baseRoas);

    setResults({
      roas: baseRoas.toFixed(1),
      cpa: Math.round(baseCpa),
      conversions: estimatedConversions.toLocaleString(),
      revenue: projectedRevenue.toLocaleString(),
      allocations,
      channels
    });
  };

  useEffect(() => {
    calculateStrategy();
  }, [businessType, businessGoal, budget]);

  return (
    <section id="configurator" className="section configurator-section">
      <div className="container">
        <div className="section-title-wrapper">
          <span className="gold-badge">Interactive Tool</span>
          <h2 className="section-title">The MFM Strategy Lab</h2>
          <p className="section-subtitle">
            Configure your company parameters below to simulate your marketing channel mix and projected return metrics instantly.
          </p>
        </div>

        <div className="configurator-wrapper">
          {/* Inputs Panel */}
          <div className="inputs-panel">
            <h3 className="panel-title">
              <Calculator size={18} className="panel-title-icon" />
              <span>Configure Parameters</span>
            </h3>

            {/* Business Type */}
            <div className="input-group">
              <label className="input-label">Business Model</label>
              <div className="option-grid">
                {businessTypes.map((type) => (
                  <button
                    key={type.id}
                    className={`option-btn ${businessType === type.id ? 'selected' : ''}`}
                    onClick={() => setBusinessType(type.id)}
                  >
                    <span className="btn-label">{type.label}</span>
                    <span className="btn-desc">{type.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Goals */}
            <div className="input-group">
              <label className="input-label">Primary Objective</label>
              <div className="option-grid">
                {businessGoals.map((goal) => (
                  <button
                    key={goal.id}
                    className={`option-btn ${businessGoal === goal.id ? 'selected' : ''}`}
                    onClick={() => setBusinessGoal(goal.id)}
                  >
                    <span className="btn-label">{goal.label}</span>
                    <span className="btn-desc">{goal.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Budget Slider */}
            <div className="input-group">
              <div className="slider-header">
                <label className="input-label">Monthly Ad Spend Budget</label>
                <span className="slider-value">${budget.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="5000"
                max="250000"
                step="5000"
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="budget-slider"
              />
              <div className="slider-marks">
                <span>$5K</span>
                <span>$50K</span>
                <span>$100K</span>
                <span>$175K</span>
                <span>$250K+</span>
              </div>
            </div>
          </div>

          {/* Outputs / Results Panel */}
          <div className="results-panel">
            <h3 className="panel-title">
              <Sparkles size={18} className="panel-title-icon text-gold" />
              <span>Simulated Projection</span>
            </h3>

            {results && (
              <div className="results-content">
                {/* Stats row */}
                <div className="results-stats-row">
                  <div className="result-stat-box">
                    <span className="res-stat-lbl">Target ROAS</span>
                    <span className="res-stat-val text-gold">{results.roas}x</span>
                  </div>
                  <div className="result-stat-box">
                    <span className="res-stat-lbl">Estimated CPA</span>
                    <span className="res-stat-val">${results.cpa}</span>
                  </div>
                  <div className="result-stat-box">
                    <span className="res-stat-lbl">Projected Revenue</span>
                    <span className="res-stat-val">${results.revenue}</span>
                  </div>
                </div>

                {/* Strategy allocation bars */}
                <div className="allocation-section">
                  <h4 className="allocation-title">Channel Budget Allocation</h4>
                  <div className="allocation-list">
                    {results.allocations.map((alloc, i) => (
                      <div key={i} className="alloc-bar-item">
                        <div className="alloc-bar-meta">
                          <span className="alloc-name">{alloc.name}</span>
                          <span className="alloc-pct">{alloc.percent}%</span>
                        </div>
                        <div className="alloc-bar-bg">
                          <div 
                            className="alloc-bar-fill"
                            style={{ width: `${alloc.percent}%`, transition: 'width 0.6s ease-out' }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Playbook recommendations */}
                <div className="recommendations-section">
                  <h4 className="allocation-title">Recommended Stack</h4>
                  <ul className="rec-list">
                    {results.channels.map((chan, i) => (
                      <li key={i} className="rec-item">
                        <CheckCircle2 size={16} className="rec-icon text-gold" />
                        <span>{chan}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Call to action */}
                <div className="results-cta">
                  <a href="#planner" className="btn btn-primary btn-full">
                    <span>Export Strategy Brief</span>
                    <ChevronRight size={16} />
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .configurator-section {
          background-color: var(--bg-secondary);
          border-bottom: 1px solid var(--border-gold);
        }

        .configurator-wrapper {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 3rem;
          background: var(--bg-primary);
          border: 1px solid var(--border-gold);
          padding: 3.5rem;
          box-shadow: var(--shadow-lux);
        }

        @media (max-width: 1024px) {
          .configurator-wrapper {
            grid-template-columns: 1fr;
            padding: 2rem;
          }
        }

        .panel-title {
          font-family: var(--font-sans);
          font-size: 1rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-primary);
          margin-bottom: 2rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          border-bottom: 1px solid var(--border-gold);
          padding-bottom: 0.75rem;
        }

        .panel-title-icon {
          color: var(--text-muted);
        }

        .input-group {
          margin-bottom: 2.5rem;
        }

        .input-label {
          display: block;
          font-size: 0.85rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--text-secondary);
          letter-spacing: 0.05em;
          margin-bottom: 1rem;
        }

        .option-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.75rem;
        }

        @media (max-width: 500px) {
          .option-grid {
            grid-template-columns: 1fr;
          }
        }

        .option-btn {
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-gold);
          padding: 1rem;
          text-align: left;
          cursor: pointer;
          transition: var(--transition-fast);
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .option-btn:hover {
          border-color: var(--gold-medium);
          background-color: var(--bg-primary);
        }

        .option-btn.selected {
          border-color: var(--gold-dark);
          background-color: var(--gold-light);
        }

        .btn-label {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .btn-desc {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .slider-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
        }

        .slider-value {
          font-family: var(--font-serif);
          font-size: 1.6rem;
          font-weight: 600;
          color: var(--gold-dark);
        }

        .budget-slider {
          width: 100%;
          -webkit-appearance: none;
          height: 4px;
          border-radius: 2px;
          background: var(--border-gold-strong);
          outline: none;
          margin: 1rem 0;
        }

        .budget-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: var(--gold-dark);
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 2px 5px rgba(0,0,0,0.15);
          transition: var(--transition-fast);
        }

        .budget-slider::-webkit-slider-thumb:hover {
          transform: scale(1.15);
          background: var(--text-primary);
        }

        .slider-marks {
          display: flex;
          justify-content: space-between;
          font-size: 0.75rem;
          color: var(--text-muted);
          font-weight: 500;
        }

        /* Results Panel CSS */
        .results-panel {
          border-left: 1px solid var(--border-gold);
          padding-left: 3rem;
        }

        @media (max-width: 1024px) {
          .results-panel {
            border-left: none;
            padding-left: 0;
            padding-top: 2rem;
            border-top: 1px solid var(--border-gold);
          }
        }

        .results-stats-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          margin-bottom: 2.5rem;
        }

        .result-stat-box {
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-gold);
          padding: 1.25rem 0.75rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .res-stat-lbl {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .res-stat-val {
          font-family: var(--font-serif);
          font-size: 1.6rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .allocation-section {
          margin-bottom: 2.5rem;
        }

        .allocation-title {
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-secondary);
          margin-bottom: 1.25rem;
        }

        .allocation-list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .alloc-bar-item {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .alloc-bar-meta {
          display: flex;
          justify-content: space-between;
          font-size: 0.85rem;
          font-weight: 500;
        }

        .alloc-name {
          color: var(--text-primary);
        }

        .alloc-pct {
          color: var(--gold-dark);
          font-weight: 700;
        }

        .alloc-bar-bg {
          height: 6px;
          background-color: var(--bg-secondary);
          border-radius: 3px;
          overflow: hidden;
        }

        .alloc-bar-fill {
          height: 100%;
          background: var(--gold-gradient);
          border-radius: 3px;
        }

        .recommendations-section {
          margin-bottom: 2.5rem;
        }

        .rec-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .rec-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        .btn-full {
          width: 100%;
          gap: 0.75rem;
        }
      `}</style>
    </section>
  );
}
