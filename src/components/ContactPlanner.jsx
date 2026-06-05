import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, Check, Sparkles, AlertCircle } from 'lucide-react';

export default function ContactPlanner() {
  const [step, setStep] = useState(1);
  const [revenue, setRevenue] = useState('');
  const [bottleneck, setBottleneck] = useState('');
  const [service, setService] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const revenues = [
    { value: 'under-100k', label: 'Under $100K / Month' },
    { value: '100k-500k', label: '$100K - $500K / Month' },
    { value: '500k-2m', label: '$500K - $2M / Month' },
    { value: 'over-2m', label: 'Over $2M / Month' },
  ];

  const bottlenecks = [
    { value: 'ad-scale', label: 'Ad Scalability Drops', desc: 'Acquisition costs spike when scaling budget' },
    { value: 'tracking', label: 'Attribution & Tracking', desc: 'Hard to track actual ROI across channels' },
    { value: 'brand-equity', label: 'Brand Positioning', desc: 'Struggling to demand premium pricing' },
    { value: 'lead-quality', label: 'Low Lead Quality', desc: 'Sales team wasting time on unqualified leads' },
  ];

  const services = [
    { value: 'full-execution', label: 'Full Retainer Execution', desc: 'MFM manages channels, creators & copy end-to-end' },
    { value: 'consulting', label: 'Strategic Consulting', desc: 'High-level advisory and roadmap consulting' },
    { value: 'audit', label: 'Growth & Attribution Audit', desc: 'A thorough 2-week telemetry and channel audit' },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validateStep = () => {
    if (step === 1 && !revenue) return false;
    if (step === 2 && !bottleneck) return false;
    if (step === 3 && !service) return false;
    return true;
  };

  const nextStep = () => {
    if (validateStep()) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Corporate name is required';
    if (!formData.email.trim() || !formData.email.includes('@')) tempErrors.email = 'Valid corporate email is required';
    if (!formData.website.trim()) tempErrors.website = 'Website URL is required';

    if (Object.keys(tempErrors).length > 0) {
      setErrors(tempErrors);
      return;
    }

    setSubmitted(true);
  };

  // Generate dynamic calculation for readiness score based on selections
  const getReadinessScore = () => {
    let score = 50;
    if (revenue === '500k-2m' || revenue === 'over-2m') score += 20;
    if (revenue === '100k-500k') score += 10;
    if (bottleneck === 'tracking') score += 15; // highly ready for MFM server telemetry
    if (bottleneck === 'ad-scale') score += 10;
    if (service === 'audit') score += 10;
    return Math.min(95, score);
  };

  const getStrategicAdvice = () => {
    switch (bottleneck) {
      case 'ad-scale':
        return 'Your acquisition channel diversification is critical. We recommend starting with a Creator UGC pipeline combined with server-side API configurations to bypass pixel drop-offs.';
      case 'tracking':
        return 'Attribution leakage is severely draining your profitability. We advise prioritizing server-to-server Conversions API integrations for Meta and Google Ads before scaling ad budgets.';
      case 'brand-equity':
        return 'Standard performance marketing is commoditizing your brand. Focus on establishing a luxury Brand Identity system, luxury editorial media buying, and high-net-worth VIP outreach networks.';
      case 'lead-quality':
        return 'Your qualification filters are too low. Deploying contextual AI lead-qualification forms and programmatic pre-scoring will help focus your sales representatives on high-value contracts.';
      default:
        return '';
    }
  };

  return (
    <section id="planner" className="section planner-section">
      <div className="container">
        <div className="section-title-wrapper">
          <span className="gold-badge">Strategy Engagement</span>
          <h2 className="section-title">Request Bespoke Blueprint</h2>
          <p className="section-subtitle">
            Take our 60-second growth planner to benchmark your brand and request a custom marketing roadmap from our advisory team.
          </p>
        </div>

        <div className="planner-container">
          {/* Left / Main Section: Form Steps */}
          {!submitted ? (
            <div className="planner-card">
              {/* Progress Steps Header */}
              <div className="steps-header">
                {[1, 2, 3, 4].map((num) => (
                  <div key={num} className={`step-indicator ${step >= num ? 'active' : ''} ${step > num ? 'completed' : ''}`}>
                    <div className="indicator-dot">
                      {step > num ? <Check size={12} /> : num}
                    </div>
                    <span className="indicator-label">
                      {num === 1 && 'Scale'}
                      {num === 2 && 'Obstacle'}
                      {num === 3 && 'Service'}
                      {num === 4 && 'Contact'}
                    </span>
                  </div>
                ))}
              </div>

              {/* Step Content */}
              <div className="step-content">
                {step === 1 && (
                  <div className="step-fade-in">
                    <h3 className="step-question">What is your current monthly revenue scale?</h3>
                    <p className="step-sub-question">This helps us understand your baseline scale and cache sizes.</p>
                    <div className="planner-options-list">
                      {revenues.map((rev) => (
                        <button
                          key={rev.value}
                          className={`planner-option-card ${revenue === rev.value ? 'selected' : ''}`}
                          onClick={() => setRevenue(rev.value)}
                        >
                          <div className="option-check-circle">
                            {revenue === rev.value && <div className="checked-inner" />}
                          </div>
                          <span>{rev.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="step-fade-in">
                    <h3 className="step-question">What is your primary marketing bottleneck?</h3>
                    <p className="step-sub-question">Select the main blocker holding back your next growth tier.</p>
                    <div className="planner-options-list">
                      {bottlenecks.map((bot) => (
                        <button
                          key={bot.value}
                          className={`planner-option-card-large ${bottleneck === bot.value ? 'selected' : ''}`}
                          onClick={() => setBottleneck(bot.value)}
                        >
                          <div className="option-check-circle">
                            {bottleneck === bot.value && <div className="checked-inner" />}
                          </div>
                          <div className="option-text-wrap">
                            <span className="card-lbl-large">{bot.label}</span>
                            <span className="card-desc-large">{bot.desc}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="step-fade-in">
                    <h3 className="step-question">Which MFM consulting service matches your goals?</h3>
                    <p className="step-sub-question">Select how your organization prefers to engage with our advisors.</p>
                    <div className="planner-options-list">
                      {services.map((serv) => (
                        <button
                          key={serv.value}
                          className={`planner-option-card-large ${service === serv.value ? 'selected' : ''}`}
                          onClick={() => setService(serv.value)}
                        >
                          <div className="option-check-circle">
                            {service === serv.value && <div className="checked-inner" />}
                          </div>
                          <div className="option-text-wrap">
                            <span className="card-lbl-large">{serv.label}</span>
                            <span className="card-desc-large">{serv.desc}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {step === 4 && (
                  <form onSubmit={handleSubmit} className="step-fade-in contact-form-grid">
                    <h3 className="step-question">Submit Corporate Credentials</h3>
                    <p className="step-sub-question">Provide your details to sync your plan with an executive advisor.</p>
                    
                    <div className="form-field">
                      <label>Corporate Name / Representative</label>
                      <input 
                        type="text" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleInputChange} 
                        placeholder="Johnathan Davis"
                        className={errors.name ? 'error' : ''}
                      />
                      {errors.name && <span className="error-lbl"><AlertCircle size={12} /> {errors.name}</span>}
                    </div>

                    <div className="form-field">
                      <label>Corporate Email</label>
                      <input 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleInputChange} 
                        placeholder="jdavis@company.com"
                        className={errors.email ? 'error' : ''}
                      />
                      {errors.email && <span className="error-lbl"><AlertCircle size={12} /> {errors.email}</span>}
                    </div>

                    <div className="form-field">
                      <label>Website URL</label>
                      <input 
                        type="text" 
                        name="website" 
                        value={formData.website} 
                        onChange={handleInputChange} 
                        placeholder="https://company.com"
                        className={errors.website ? 'error' : ''}
                      />
                      {errors.website && <span className="error-lbl"><AlertCircle size={12} /> {errors.website}</span>}
                    </div>

                    <div className="form-field full-width">
                      <label>Additional Brief Context (Optional)</label>
                      <textarea 
                        name="message" 
                        value={formData.message} 
                        onChange={handleInputChange} 
                        placeholder="Tell us about your product margin, channels, or timeline goals."
                        rows="3"
                      />
                    </div>
                    
                    <button type="submit" style={{ display: 'none' }} id="submit-hidden-btn" />
                  </form>
                )}
              </div>

              {/* Navigation Footer */}
              <div className="planner-footer">
                {step > 1 && (
                  <button onClick={prevStep} className="btn-nav btn-prev">
                    <ChevronLeft size={16} />
                    <span>Back</span>
                  </button>
                )}
                
                {step < 4 ? (
                  <button 
                    onClick={nextStep} 
                    className="btn-nav btn-next"
                    disabled={!validateStep()}
                  >
                    <span>Next</span>
                    <ChevronRight size={16} />
                  </button>
                ) : (
                  <button 
                    onClick={() => document.getElementById('submit-hidden-btn').click()} 
                    className="btn-nav btn-submit"
                  >
                    <span>Request Audit</span>
                    <Sparkles size={14} className="submit-sparkle" />
                  </button>
                )}
              </div>
            </div>
          ) : (
            /* Success State Screen */
            <div className="success-panel animate-fade-in">
              <div className="success-badge-mark">
                <Check size={36} />
              </div>
              <h3 className="success-title">Engagement Brief Compiled</h3>
              <p className="success-desc">
                Thank you, <strong>{formData.name}</strong>. Your parameters have been matched with our core strategies. A senior MFM advisory partner will review your assets at <strong>{formData.website}</strong> and send an audit within 24 hours.
              </p>

              {/* Dynamic results report block */}
              <div className="success-advice-report">
                <div className="report-header">
                  <h4>Custom Strategy Report</h4>
                  <div className="report-score-pill">
                    <span>MFM Blueprint Match:</span>
                    <strong>{getReadinessScore()}%</strong>
                  </div>
                </div>
                <div className="report-divider"></div>
                <div className="report-body">
                  <p className="report-advice-heading">Advisory Recommendation:</p>
                  <p className="report-advice-content">{getStrategicAdvice()}</p>
                </div>
              </div>

              <div className="success-action">
                <button 
                  onClick={() => {
                    setSubmitted(false);
                    setStep(1);
                    setRevenue('');
                    setBottleneck('');
                    setService('');
                    setFormData({ name: '', email: '', website: '', message: '' });
                  }} 
                  className="btn btn-secondary btn-sm"
                >
                  Configure Another Brand
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .planner-section {
          background-color: var(--bg-primary);
          border-bottom: 1px solid var(--border-gold);
        }

        .planner-container {
          max-width: 800px;
          margin: 0 auto;
        }

        .planner-card, .success-panel {
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-gold);
          padding: 3.5rem;
          box-shadow: var(--shadow-lux);
        }

        @media (max-width: 600px) {
          .planner-card, .success-panel {
            padding: 2rem 1.5rem;
          }
        }

        /* Step Indicators */
        .steps-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 3rem;
          position: relative;
        }

        .steps-header::before {
          content: '';
          position: absolute;
          top: 15px;
          left: 0;
          width: 100%;
          height: 1px;
          background-color: var(--border-gold-strong);
          z-index: 1;
        }

        .step-indicator {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          position: relative;
          z-index: 5;
        }

        .indicator-dot {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background-color: var(--bg-secondary);
          border: 1.5px solid var(--border-gold-strong);
          color: var(--text-muted);
          font-size: 0.8rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition-smooth);
        }

        .step-indicator.active .indicator-dot {
          border-color: var(--gold-dark);
          background-color: var(--gold-light);
          color: var(--gold-deep);
        }

        .step-indicator.completed .indicator-dot {
          background: var(--gold-gradient);
          border-color: var(--gold-dark);
          color: var(--text-primary);
        }

        .indicator-label {
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--text-muted);
          letter-spacing: 0.05em;
        }

        .step-indicator.active .indicator-label {
          color: var(--text-primary);
        }

        /* Questions and Sub-questions */
        .step-question {
          font-family: var(--font-serif);
          font-size: 1.8rem;
          font-weight: 500;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
          line-height: 1.2;
        }

        .step-sub-question {
          font-size: 0.9rem;
          color: var(--text-muted);
          margin-bottom: 2rem;
        }

        /* Options list */
        .planner-options-list {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .planner-option-card {
          background-color: var(--bg-primary);
          color: var(--text-primary);
          font-family: inherit;
          border: 1px solid var(--border-gold);
          padding: 1.25rem 1.5rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          cursor: pointer;
          transition: var(--transition-fast);
          width: 100%;
          text-align: left;
        }

        .planner-option-card:hover {
          border-color: var(--gold-medium);
          background-color: var(--bg-secondary);
        }

        .planner-option-card.selected {
          border-color: var(--gold-dark);
          background-color: var(--gold-light);
        }

        .option-check-circle {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          border: 1.5px solid var(--border-gold-strong);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          background-color: white;
        }

        .planner-option-card.selected .option-check-circle,
        .planner-option-card-large.selected .option-check-circle {
          border-color: var(--gold-dark);
        }

        .checked-inner {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--gold-gradient);
        }

        /* Large Options Cards (Bottlenecks / Services) */
        .planner-option-card-large {
          background-color: var(--bg-primary);
          color: var(--text-primary);
          font-family: inherit;
          border: 1px solid var(--border-gold);
          padding: 1.5rem;
          display: flex;
          align-items: flex-start;
          gap: 1.25rem;
          cursor: pointer;
          transition: var(--transition-fast);
          width: 100%;
          text-align: left;
        }

        .planner-option-card-large:hover {
          border-color: var(--gold-medium);
          background-color: var(--bg-secondary);
        }

        .planner-option-card-large.selected {
          border-color: var(--gold-dark);
          background-color: var(--gold-light);
        }

        .option-text-wrap {
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
        }

        .card-lbl-large {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .card-desc-large {
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        /* Contact Form Grid */
        .contact-form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          text-align: left;
        }

        @media (max-width: 600px) {
          .contact-form-grid {
            grid-template-columns: 1fr;
          }
        }

        .form-field {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-field.full-width {
          grid-column: span 2;
        }

        @media (max-width: 600px) {
          .form-field.full-width {
            grid-column: span 1;
          }
        }

        .form-field label {
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--text-secondary);
          letter-spacing: 0.05em;
        }

        .form-field input, .form-field textarea {
          background-color: var(--bg-primary);
          border: 1px solid var(--border-gold-strong);
          padding: 0.85rem 1.2rem;
          font-family: var(--font-sans);
          font-size: 0.95rem;
          color: var(--text-primary);
          outline: none;
          transition: var(--transition-fast);
        }

        .form-field input:focus, .form-field textarea:focus {
          border-color: var(--gold-dark);
          box-shadow: 0 0 0 3px rgba(197, 168, 128, 0.15);
        }

        .form-field input.error, .form-field textarea.error {
          border-color: #dc2626;
        }

        .error-lbl {
          font-size: 0.75rem;
          color: #dc2626;
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        /* Navigation Footer */
        .planner-footer {
          margin-top: 3rem;
          padding-top: 2rem;
          border-top: 1px solid var(--border-gold);
          display: flex;
          justify-content: flex-end;
          gap: 1rem;
        }

        .btn-nav {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.8rem 1.8rem;
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          cursor: pointer;
          border: none;
          color: var(--text-primary);
          font-family: inherit;
          transition: var(--transition-fast);
        }

        .btn-prev {
          background-color: transparent;
          color: var(--text-secondary);
          border: 1px solid var(--border-gold-strong);
        }

        .btn-prev:hover {
          background-color: var(--bg-primary);
          color: var(--text-primary);
        }

        .btn-next {
          background: var(--dark-gradient);
          color: white;
        }

        .btn-next:disabled {
          background: var(--bg-tertiary);
          border: 1px solid var(--border-gold);
          color: var(--text-muted);
          opacity: 0.4;
          cursor: not-allowed;
        }

        .btn-next:not(:disabled):hover {
          transform: translateY(-1px);
        }

        .btn-submit {
          background: var(--gold-gradient);
          color: var(--text-primary);
          border: 1px solid var(--gold-medium);
        }

        .btn-submit:hover {
          background: var(--dark-gradient);
          color: white;
          border-color: var(--text-primary);
          transform: translateY(-2px);
          box-shadow: var(--shadow-lux);
        }

        .submit-sparkle {
          animation: sparkle 2s infinite;
        }

        @keyframes sparkle {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.2) rotate(15deg); opacity: 1; }
        }

        /* Success Panel CSS */
        .success-panel {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .success-badge-mark {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background: var(--gold-gradient);
          color: var(--text-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: var(--shadow-lux);
          margin-bottom: 2rem;
        }

        .success-title {
          font-family: var(--font-serif);
          font-size: 2.2rem;
          font-weight: 500;
          color: var(--text-primary);
          margin-bottom: 1rem;
        }

        .success-desc {
          font-size: 1.05rem;
          color: var(--text-secondary);
          max-width: 600px;
          margin-bottom: 2.5rem;
        }

        .success-advice-report {
          background-color: var(--bg-primary);
          border: 1px solid var(--border-gold);
          text-align: left;
          width: 100%;
          max-width: 640px;
          margin-bottom: 3rem;
          box-shadow: var(--shadow-medium);
        }

        .report-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem 2rem;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .report-header h4 {
          font-family: var(--font-sans);
          font-weight: 700;
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-primary);
        }

        .report-score-pill {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .report-score-pill strong {
          color: var(--gold-dark);
          font-size: 1rem;
          font-weight: 800;
        }

        .report-divider {
          height: 1px;
          background-color: var(--border-gold);
        }

        .report-body {
          padding: 2rem;
        }

        .report-advice-heading {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--text-muted);
          letter-spacing: 0.05em;
          margin-bottom: 0.5rem;
        }

        .report-advice-content {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .step-fade-in {
          animation: fadeInUp 0.4s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
