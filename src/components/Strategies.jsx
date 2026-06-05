import React, { useState } from 'react';
import { 
  Zap, Award, BarChart3, Bot, Search, Share2, 
  ChevronDown, ChevronUp, CheckCircle, ArrowRight 
} from 'lucide-react';

export default function Strategies() {
  const [activeStrategy, setActiveStrategy] = useState(null);

  const strategyData = [
    {
      id: 0,
      title: 'Hyper-Growth Hacking',
      tagline: 'High-frequency creative experimentation to unlock exponential acquisition channels.',
      icon: <Zap size={24} />,
      badge: 'Performance',
      target: 'D2C, B2C Tech, Fintech',
      impact: '2.5x to 4x scaling in 90 Days',
      channels: ['Meta Ads', 'TikTok Spark', 'Viral Loops', 'Programmatic Display', 'Retargeting Stacks'],
      playbook: [
        'Perform multi-angle landing page split testing with automated copy variants.',
        'Inject high-velocity UGC creative pipelines to refresh ads every 72 hours.',
        'Deploy custom post-purchase referral engines to turn buyers into advocates.',
        'Optimize bidding models using real-time API integrations with business systems.'
      ]
    },
    {
      id: 1,
      title: 'Bespoke Brand Architecture',
      tagline: 'Elevating identity, luxury storytelling, and positioning to demand price premiums.',
      icon: <Award size={24} />,
      badge: 'Brand Identity',
      target: 'Luxury Goods, Real Estate, Wealth Advisory',
      impact: '+45% Customer Lifetime Value (LTV)',
      channels: ['Editorial content', 'VVIP Events', 'Sensory Identity', 'High-end Partnerships'],
      playbook: [
        'Formulate a unique brand ethos, heritage narrative, and stylistic tone voice.',
        'Design a high-fidelity visual system with a premium, timeless color grammar.',
        'Curate exclusive private launch experiences for high-net-worth individuals.',
        'Align editorial publication content with top-tier luxury media distributions.'
      ]
    },
    {
      id: 2,
      title: 'Data Intelligence & Analytics',
      tagline: 'Multi-channel attribution modeling and custom telemetry to eliminate blind spots.',
      icon: <BarChart3 size={24} />,
      badge: 'Engineering',
      target: 'Enterprise SaaS, Large Scale Retail',
      impact: 'Up to 30% reduction in wasted ad spend',
      channels: ['Server-Side Tracking', 'Custom BI Dashboards', 'Predictive LTV Models'],
      playbook: [
        'Establish server-to-server tracking APIs to bypass browser tracking limitations.',
        'Build real-time BI data models mapping cost-per-acquisition to actual cash flow.',
        'Apply cohort analysis to pinpoint low-retention segments and address churn.',
        'Implement predictive scoring algorithms on early user behavior profiles.'
      ]
    },
    {
      id: 3,
      title: 'AI-Driven Customer Acquisition',
      tagline: 'Automated agentic lead qualification and hyper-personalized campaign distribution.',
      icon: <Bot size={24} />,
      badge: 'Artificial Intelligence',
      target: 'B2B Services, Enterprise Software',
      impact: '+65% Qualified Lead Conversion Rate',
      channels: ['AI Chat Agents', 'Hyper-personalized Outreach', 'Predictive Lead Scoring'],
      playbook: [
        'Deploy highly trained, contextual AI agents to qualify incoming web traffic 24/7.',
        'Draft highly tailored content matching exact recipient research matrices.',
        'Automate lead triage workflows mapping high-intent leads to key senior partners.',
        'Train neural-net scoring models to analyze conversion likelihood by user action.'
      ]
    },
    {
      id: 4,
      title: 'Precision SEO & Content Engineering',
      tagline: 'Programmatic SEO scaling and high-authority search visibility campaigns.',
      icon: <Search size={24} />,
      badge: 'Organic Traffic',
      target: 'Content Platforms, Directory Services, SaaS',
      impact: '+180% Organic Search Impressions',
      channels: ['Programmatic Landing Pages', 'Digital PR', 'Content Clusters'],
      playbook: [
        'Identify intent-based semantic clusters matching late-stage purchase searches.',
        'Engineer lightning-fast directory and resource libraries to capture long-tail terms.',
        'Execute editorial backlink outreach targeting elite trade journals and publications.',
        'Structure structured schema markups to guarantee rich search snippet inclusions.'
      ]
    },
    {
      id: 5,
      title: 'Social Commerce & Influencer Syndication',
      tagline: 'Direct-response social media content syndication scaling to micro-communities.',
      icon: <Share2 size={24} />,
      badge: 'Viral & Social',
      target: 'Consumer Products, Fashion, Beauty',
      impact: '+310% Social Media Referral Conversions',
      channels: ['TikTok Shop', 'Instagram Reels', 'Affiliate Creator Program'],
      playbook: [
        'Onboard and script hundreds of micro-influencers under structured brand playbooks.',
        'Incentivize creator output with hybrid flat-fee and performance-royalty commission.',
        'Maximize best-performing organic creator assets with paid amplification campaigns.',
        'Leverage real-time social commerce platform integrations to streamline checkouts.'
      ]
    }
  ];

  const toggleStrategy = (id) => {
    if (activeStrategy === id) {
      setActiveStrategy(null);
    } else {
      setActiveStrategy(id);
    }
  };

  return (
    <section id="strategies" className="section strategies-section">
      <div className="glow-blob" style={{ bottom: '10%', left: '-10%', width: '450px', height: '450px' }}></div>
      <div className="glow-blob" style={{ top: '10%', right: '-10%', width: '350px', height: '350px' }}></div>
      
      <div className="container">
        <div className="section-title-wrapper">
          <span className="gold-badge">Strategic Blueprints</span>
          <h2 className="section-title">Bespoke Marketing Frameworks</h2>
          <p className="section-subtitle">
            We reject templated approaches. Our methodologies are engineered specifically for your target audience, market dynamics, and cash efficiency goals.
          </p>
        </div>

        <div className="strategies-grid">
          {strategyData.map((strat) => {
            const isOpen = activeStrategy === strat.id;
            return (
              <div 
                key={strat.id} 
                className={`strategy-card ${isOpen ? 'active' : ''}`}
                onClick={() => toggleStrategy(strat.id)}
              >
                <div className="card-top">
                  <div className="strategy-icon-box">
                    {strat.icon}
                  </div>
                  <span className="strat-badge">{strat.badge}</span>
                </div>
                
                <h3 className="strategy-title">{strat.title}</h3>
                <p className="strategy-desc">{strat.tagline}</p>
                
                <div className="card-footer">
                  <span className="toggle-label">{isOpen ? 'Collapse Blueprint' : 'Expand Blueprint'}</span>
                  <div className="toggle-arrow-wrapper">
                    {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </div>
                </div>

                {/* Expanded Details Drawer */}
                <div className={`expanded-drawer-container ${isOpen ? 'open' : ''}`} onClick={(e) => e.stopPropagation()}>
                  <div className="expanded-drawer-content">
                    <div className="drawer-divider"></div>
                    
                    <div className="drawer-grid">
                      <div className="drawer-left">
                        <h4>Strategic Target & Impact</h4>
                        <div className="meta-row">
                          <span className="meta-label">Ideal For:</span>
                          <span className="meta-val">{strat.target}</span>
                        </div>
                        <div className="meta-row">
                          <span className="meta-label">Projected Impact:</span>
                          <span className="meta-val text-gold">{strat.impact}</span>
                        </div>
                        <div className="meta-row">
                          <span className="meta-label">Key Deliverable Channels:</span>
                          <div className="channel-tags">
                            {strat.channels.map((chan, idx) => (
                              <span key={idx} className="chan-tag">{chan}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="drawer-right">
                        <h4>Execution Playbook Steps</h4>
                        <ul className="playbook-steps">
                          {strat.playbook.map((step, idx) => (
                            <li key={idx}>
                              <CheckCircle size={14} className="playbook-check" />
                              <span>{step}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="drawer-action">
                      <a href="#planner" className="btn btn-gold btn-sm">
                        <span>Deploy This Blueprint</span>
                        <ArrowRight size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .strategies-section {
          background-color: var(--bg-primary);
          border-bottom: 1px solid var(--border-gold);
        }

        .strategies-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          position: relative;
          z-index: 10;
        }

        @media (max-width: 1024px) {
          .strategies-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .strategies-grid {
            grid-template-columns: 1fr;
          }
        }

        .strategy-card {
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-gold);
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          cursor: pointer;
          transition: var(--transition-smooth);
          position: relative;
          overflow: hidden;
        }

        /* Top accent line */
        .strategy-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 0;
          height: 3px;
          background: var(--gold-gradient);
          transition: var(--transition-smooth);
        }

        .strategy-card:hover::before {
          width: 100%;
        }

        .strategy-card:hover {
          border-color: var(--gold-medium);
          background-color: var(--bg-primary);
          box-shadow: var(--shadow-lux);
          transform: translateY(-5px);
        }

        .strategy-card.active {
          grid-column: span 3;
          background-color: var(--bg-primary);
          border-color: var(--gold-medium);
          cursor: default;
          transform: none;
          box-shadow: var(--shadow-lux);
        }

        @media (max-width: 1024px) {
          .strategy-card.active {
            grid-column: span 2;
          }
        }

        @media (max-width: 768px) {
          .strategy-card.active {
            grid-column: span 1;
          }
        }

        .card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .strategy-icon-box {
          width: 50px;
          height: 50px;
          border-radius: 4px;
          background: var(--gold-gradient);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .strat-badge {
          font-size: 0.7rem;
          font-weight: 700;
          color: var(--gold-dark);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          border: 1px solid var(--border-gold-strong);
          padding: 0.25rem 0.65rem;
          background-color: var(--bg-secondary);
        }

        .strategy-title {
          font-size: 1.8rem;
          font-weight: 400;
          margin-bottom: 1rem;
          letter-spacing: -0.01em;
        }

        .strategy-desc {
          font-size: 0.95rem;
          color: var(--text-secondary);
          margin-bottom: 2rem;
          flex-grow: 1;
        }

        .card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: auto;
          padding-top: 1rem;
          border-top: 1px solid var(--border-gold);
          color: var(--text-muted);
          font-weight: 600;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          transition: var(--transition-fast);
        }

        .strategy-card:hover .card-footer {
          color: var(--gold-dark);
        }

        .toggle-arrow-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: 1px solid var(--border-gold);
          transition: var(--transition-smooth);
        }

        .strategy-card:hover .toggle-arrow-wrapper {
          border-color: var(--gold-medium);
          background-color: var(--bg-secondary);
        }

        /* Expanded drawer container styling */
        .expanded-drawer-container {
          max-height: 0;
          overflow: hidden;
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .expanded-drawer-container.open {
          max-height: 800px;
        }

        .expanded-drawer-content {
          padding-top: 2rem;
          cursor: default;
        }

        .drawer-divider {
          height: 1px;
          background-color: var(--border-gold);
          margin-bottom: 2rem;
        }

        .drawer-grid {
          display: grid;
          grid-template-columns: 1.2fr 1.8fr;
          gap: 3rem;
          text-align: left;
        }

        @media (max-width: 991px) {
          .drawer-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }

        .drawer-left h4, .drawer-right h4 {
          font-family: var(--font-sans);
          font-weight: 700;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-primary);
          margin-bottom: 1.25rem;
          border-bottom: 1px solid var(--border-gold);
          padding-bottom: 0.5rem;
        }

        .meta-row {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          margin-bottom: 1.25rem;
        }

        .meta-label {
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          color: var(--text-muted);
          letter-spacing: 0.05em;
        }

        .meta-val {
          font-size: 1.05rem;
          font-weight: 500;
          color: var(--text-primary);
        }

        .text-gold {
          color: var(--gold-dark);
          font-weight: 700;
        }

        .channel-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: 0.35rem;
        }

        .chan-tag {
          font-size: 0.75rem;
          padding: 0.25rem 0.75rem;
          background-color: var(--bg-tertiary);
          border: 1px solid var(--border-gold);
          color: var(--text-secondary);
        }

        .playbook-steps {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .playbook-steps li {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          font-size: 0.95rem;
          color: var(--text-secondary);
        }

        .playbook-check {
          color: var(--gold-medium);
          margin-top: 0.25rem;
          flex-shrink: 0;
        }

        .drawer-action {
          margin-top: 2.5rem;
          display: flex;
          justify-content: flex-end;
          border-top: 1px solid var(--border-gold);
          padding-top: 1.5rem;
        }

        .btn-sm {
          padding: 0.7rem 1.6rem;
          font-size: 0.75rem;
          gap: 0.5rem;
        }
      `}</style>
    </section>
  );
}
