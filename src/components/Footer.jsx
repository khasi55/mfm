import React, { useState } from 'react';
import { ArrowRight, Send, Check } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container footer-grid">
          {/* Brand Info */}
          <div className="footer-brand">
            <div className="logo-area">
              <span className="logo-mark"><span>M</span></span>
              <div className="logo-text-group">
                <span className="logo-title">MFM</span>
                <span className="logo-subtitle">GROWTH PARTNERS</span>
              </div>
            </div>
            <p className="brand-pitch">
              A bespoke growth consultancy engineered for luxury, enterprise, and high-growth brands. We scale revenue through predictive strategy and elegant execution.
            </p>
            <div className="office-address">
              <span>Representative Office</span>
              <p>5th Avenue, Suite 4800, New York, NY 10118</p>
            </div>
          </div>

          {/* Links 1 */}
          <div className="footer-links-col">
            <h3>Consulting Services</h3>
            <ul className="footer-links">
              <li><a href="#strategies">Brand Architecture</a></li>
              <li><a href="#strategies">Hyper-Growth Scaling</a></li>
              <li><a href="#strategies">Predictive Data Analytics</a></li>
              <li><a href="#strategies">Precision Search Engineering</a></li>
              <li><a href="#strategies">Enterprise Lead Capture</a></li>
            </ul>
          </div>

          {/* Links 2 */}
          <div className="footer-links-col">
            <h3>Growth Hub</h3>
            <ul className="footer-links">
              <li><a href="#configurator">Interactive Strategy Lab</a></li>
              <li><a href="#dashboard">Portal Mockup</a></li>
              <li><a href="#case-studies">Success Archives</a></li>
              <li><a href="#planner">Custom Strategy Audit</a></li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div className="footer-newsletter">
            <h3>Join The Intelligence Brief</h3>
            <p className="newsletter-desc">
              Exclusive strategy updates, market analysis, and premium growth playbooks. Delivered bi-weekly.
            </p>
            <form onSubmit={handleSubscribe} className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter corporate email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-btn" aria-label="Subscribe">
                {subscribed ? <Check size={16} className="text-gold" /> : <ArrowRight size={16} />}
              </button>
            </form>
            {subscribed && (
              <span className="subscribe-success">
                Thank you. You have been added to the elite brief.
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container bottom-container">
          <p className="copyright">
            &copy; {new Date().getFullYear()} MFM Growth Partners. All rights reserved.
          </p>
          <div className="bottom-links">
            <a href="#">Privacy Charter</a>
            <a href="#">Terms of Engagement</a>
            <a href="#">Client Portal</a>
          </div>
        </div>
      </div>

      <style>{`
        .footer {
          background-color: var(--bg-secondary);
          border-top: 1px solid var(--border-gold);
          padding-top: 6rem;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2.2fr 1fr 1fr 1.8fr;
          gap: 4rem;
          padding-bottom: 5rem;
          border-bottom: 1px solid var(--border-gold);
        }

        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
          }
        }

        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
        }

        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .brand-pitch {
          font-size: 0.95rem;
          color: var(--text-secondary);
          max-width: 340px;
        }

        .office-address {
          font-size: 0.8rem;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .office-address span {
          text-transform: uppercase;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: var(--gold-dark);
        }

        .office-address p {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .footer-links-col h3, .footer-newsletter h3 {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 1.5rem;
          letter-spacing: 0.02em;
        }

        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .footer-links a {
          font-size: 0.9rem;
          color: var(--text-secondary);
          text-decoration: none;
          transition: var(--transition-fast);
        }

        .footer-links a:hover {
          color: var(--gold-dark);
          padding-left: 4px;
        }

        .newsletter-desc {
          font-size: 0.9rem;
          color: var(--text-muted);
          margin-bottom: 1.5rem;
          max-width: 320px;
        }

        .newsletter-form {
          display: flex;
          border-bottom: 1px solid var(--border-gold-strong);
          position: relative;
        }

        .newsletter-input {
          flex: 1;
          background: transparent;
          border: none;
          padding: 0.8rem 0.5rem 0.8rem 0;
          font-family: var(--font-sans);
          font-size: 0.9rem;
          color: var(--text-primary);
          outline: none;
        }

        .newsletter-input::placeholder {
          color: var(--text-muted);
          font-style: italic;
        }

        .newsletter-btn {
          background: transparent;
          border: none;
          cursor: pointer;
          color: var(--text-primary);
          padding: 0.5rem;
          transition: var(--transition-fast);
          display: flex;
          align-items: center;
        }

        .newsletter-btn:hover {
          color: var(--gold-dark);
          transform: translateX(3px);
        }

        .subscribe-success {
          display: block;
          margin-top: 0.75rem;
          font-size: 0.8rem;
          color: var(--gold-dark);
          font-weight: 500;
        }

        .footer-bottom {
          padding: 2.5rem 2rem;
          background-color: var(--bg-tertiary);
        }

        .bottom-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        @media (max-width: 768px) {
          .bottom-container {
            flex-direction: column;
            gap: 1.5rem;
            text-align: center;
          }
        }

        .bottom-links {
          display: flex;
          gap: 2rem;
        }

        .bottom-links a {
          color: var(--text-muted);
          text-decoration: none;
          transition: var(--transition-fast);
        }

        .bottom-links a:hover {
          color: var(--gold-dark);
        }
      `}</style>
    </footer>
  );
}
