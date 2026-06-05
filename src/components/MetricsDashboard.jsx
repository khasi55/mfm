import React, { useState } from 'react';
import { AreaChart, Shield, Calendar, RefreshCw, ArrowUpRight, TrendingUp } from 'lucide-react';

export default function MetricsDashboard() {
  const [activeMetric, setActiveMetric] = useState('roas');
  const [hoveredPoint, setHoveredPoint] = useState(null);

  const metricsData = {
    roas: {
      title: 'Return on Ad Spend (ROAS)',
      value: '4.8x',
      change: '+26.3% vs Q1',
      description: 'Weighted aggregate Return on Ad Spend across all activated paid search and social channels.',
      points: [
        { label: 'Jan', val: 3.2, display: '3.2x' },
        { label: 'Feb', val: 3.5, display: '3.5x' },
        { label: 'Mar', val: 3.8, display: '3.8x' },
        { label: 'Apr', val: 4.2, display: '4.2x' },
        { label: 'May', val: 4.5, display: '4.5x' },
        { label: 'Jun', val: 4.8, display: '4.8x' },
      ],
      color: '#c5a880',
      yMin: 2.0,
      yMax: 5.5,
    },
    cac: {
      title: 'Customer Acquisition Cost (CAC)',
      value: '$28.40',
      change: '-18.5% Efficiency Gain',
      description: 'Blended cost to acquire a net-new customer, optimized via high-frequency UGC adjustments.',
      points: [
        { label: 'Jan', val: 38.5, display: '$38.50' },
        { label: 'Feb', val: 35.2, display: '$35.20' },
        { label: 'Mar', val: 33.0, display: '$33.00' },
        { label: 'Apr', val: 30.8, display: '$30.80' },
        { label: 'May', val: 29.5, display: '$29.50' },
        { label: 'Jun', val: 28.4, display: '$28.40' },
      ],
      color: '#9a7b56',
      yMin: 25.0,
      yMax: 45.0,
    },
    volume: {
      title: 'Sales & Conversions',
      value: '14.2K',
      change: '+42.1% Volume Boost',
      description: 'Total monthly direct transactions tracked through our server-side API telemetry integrations.',
      points: [
        { label: 'Jan', val: 8.5, display: '8.5K' },
        { label: 'Feb', val: 9.8, display: '9.8K' },
        { label: 'Mar', val: 11.2, display: '11.2K' },
        { label: 'Apr', val: 12.0, display: '12.0K' },
        { label: 'May', val: 13.5, display: '13.5K' },
        { label: 'Jun', val: 14.2, display: '14.2K' },
      ],
      color: '#d4af37',
      yMin: 6.0,
      yMax: 16.0,
    }
  };

  const selectedMetric = metricsData[activeMetric];

  // SVG Chart Calculation Helpers
  const width = 600;
  const height = 250;
  const paddingX = 40;
  const paddingY = 30;

  const pointsCount = selectedMetric.points.length;
  const getX = (index) => paddingX + (index * (width - 2 * paddingX)) / (pointsCount - 1);
  
  const getY = (val) => {
    const range = selectedMetric.yMax - selectedMetric.yMin;
    const pct = (val - selectedMetric.yMin) / range;
    // SVG coordinate system starts from top, so we subtract from height
    return height - paddingY - pct * (height - 2 * paddingY);
  };

  // Build SVG Path string
  let pathD = '';
  let fillD = '';
  
  selectedMetric.points.forEach((pt, i) => {
    const x = getX(i);
    const y = getY(pt.val);
    
    if (i === 0) {
      pathD = `M ${x} ${y}`;
      fillD = `M ${x} ${height - paddingY} L ${x} ${y}`;
    } else {
      // Use bezier curve logic for smooth curves
      const prevX = getX(i - 1);
      const prevY = getY(selectedMetric.points[i - 1].val);
      const cpX1 = prevX + (x - prevX) / 2;
      const cpY1 = prevY;
      const cpX2 = prevX + (x - prevX) / 2;
      const cpY2 = y;
      
      pathD += ` C ${cpX1} ${cpY1}, ${cpX2} ${cpY2}, ${x} ${y}`;
      fillD += ` C ${cpX1} ${cpY1}, ${cpX2} ${cpY2}, ${x} ${y}`;
    }
    
    if (i === pointsCount - 1) {
      fillD += ` L ${x} ${height - paddingY} Z`;
    }
  });

  return (
    <section id="dashboard" className="section dashboard-section">
      <div className="container">
        <div className="section-title-wrapper">
          <span className="gold-badge">Live Demonstration</span>
          <h2 className="section-title">Client Performance Portal</h2>
          <p className="section-subtitle">
            See the type of granular transparency and real-time marketing attribution MFM provides via custom client portal integrations.
          </p>
        </div>

        <div className="dashboard-grid">
          {/* Dashboard Left: Metrics & Description */}
          <div className="dashboard-control-panel">
            <div className="portal-header-mock">
              <div className="portal-indicator">
                <Shield size={14} className="portal-icon" />
                <span>Secure Client Telemetry</span>
              </div>
              <div className="portal-date">
                <Calendar size={14} />
                <span>Last 6 Months</span>
              </div>
            </div>

            <h3 className="portal-title-text">Select Performance Vector</h3>
            
            {/* Metric Buttons */}
            <div className="metric-select-buttons">
              {Object.keys(metricsData).map((key) => {
                const met = metricsData[key];
                const active = activeMetric === key;
                return (
                  <button
                    key={key}
                    onClick={() => {
                      setActiveMetric(key);
                      setHoveredPoint(null);
                    }}
                    className={`metric-select-btn ${active ? 'active' : ''}`}
                  >
                    <div className="select-btn-meta">
                      <span className="btn-metric-title">{met.title}</span>
                      <span className="btn-metric-sub">{met.change}</span>
                    </div>
                    <span className="btn-metric-val">{met.value}</span>
                  </button>
                );
              })}
            </div>

            <div className="metric-details-card">
              <span className="details-heading">Metric Definition</span>
              <p className="details-text">{selectedMetric.description}</p>
              <div className="live-sync">
                <RefreshCw size={12} className="spin-icon" />
                <span>Data refreshes every 15 minutes</span>
              </div>
            </div>
          </div>

          {/* Dashboard Right: Chart Area */}
          <div className="dashboard-chart-canvas">
            <div className="chart-canvas-header">
              <div className="canvas-title-group">
                <h4>{selectedMetric.title} Overview</h4>
                <p>Telemetry Node: mfm-attribution-edge-v4</p>
              </div>
              <div className="canvas-stats">
                <span className="canvas-big-val">{selectedMetric.value}</span>
                <span className="canvas-percent-up">
                  <TrendingUp size={14} />
                  <span>{selectedMetric.change.split(' ')[0]}</span>
                </span>
              </div>
            </div>

            {/* Custom SVG Chart */}
            <div className="svg-container-wrapper">
              <svg viewBox={`0 0 ${width} ${height}`} className="svg-chart">
                <defs>
                  <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={selectedMetric.color} stopOpacity="0.35" />
                    <stop offset="100%" stopColor={selectedMetric.color} stopOpacity="0.0" />
                  </linearGradient>
                </defs>

                {/* Y Axis Gridlines */}
                {[0, 0.25, 0.5, 0.75, 1].map((ratio, i) => {
                  const val = selectedMetric.yMin + ratio * (selectedMetric.yMax - selectedMetric.yMin);
                  const y = getY(val);
                  return (
                    <g key={i}>
                      <line 
                        x1={paddingX} 
                        y1={y} 
                        x2={width - paddingX} 
                        y2={y} 
                        className="grid-line" 
                      />
                      <text 
                        x={paddingX - 10} 
                        y={y + 4} 
                        className="axis-label axis-y-label"
                      >
                        {val.toFixed(val % 1 === 0 ? 0 : 1)}
                      </text>
                    </g>
                  );
                })}

                {/* X Axis Labels */}
                {selectedMetric.points.map((pt, i) => (
                  <text 
                    key={i} 
                    x={getX(i)} 
                    y={height - 10} 
                    className="axis-label axis-x-label"
                  >
                    {pt.label}
                  </text>
                ))}

                {/* Gradient Fill Under Path */}
                <path d={fillD} fill="url(#chartGlow)" />

                {/* Primary Chart Line */}
                <path 
                  d={pathD} 
                  fill="none" 
                  stroke={selectedMetric.color} 
                  strokeWidth="3.5" 
                  strokeLinecap="round"
                />

                {/* Data Points / Interactivity circles */}
                {selectedMetric.points.map((pt, i) => {
                  const cx = getX(i);
                  const cy = getY(pt.val);
                  const isHovered = hoveredPoint === i;
                  return (
                    <g key={i}>
                      {/* Interactive hover target */}
                      <circle
                        cx={cx}
                        cy={cy}
                        r="18"
                        fill="transparent"
                        className="hover-target"
                        onMouseEnter={() => setHoveredPoint(i)}
                        onMouseLeave={() => setHoveredPoint(null)}
                      />
                      {/* Visible dot */}
                      <circle
                        cx={cx}
                        cy={cy}
                        r={isHovered ? "7" : "4.5"}
                        fill="#ffffff"
                        stroke={selectedMetric.color}
                        strokeWidth={isHovered ? "3.5" : "2"}
                        className="chart-dot"
                        pointerEvents="none"
                      />
                    </g>
                  );
                })}
              </svg>

              {/* Tooltip Popup */}
              {hoveredPoint !== null && (
                <div 
                  className="chart-tooltip"
                  style={{
                    left: `${getX(hoveredPoint) * (100 / 600)}%`,
                    top: `${getY(selectedMetric.points[hoveredPoint].val) - 45}px`
                  }}
                >
                  <span className="tooltip-lbl">{selectedMetric.points[hoveredPoint].label} Attribution</span>
                  <span className="tooltip-val">{selectedMetric.points[hoveredPoint].display}</span>
                </div>
              )}
            </div>

            {/* Bottom metadata tags */}
            <div className="canvas-footer-tags">
              <span className="footer-tag">✓ Attributed revenue: Direct Match</span>
              <span className="footer-tag">✓ API tracking: Operational</span>
              <span className="footer-tag">✓ Attribution window: 30-Day Click</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .dashboard-section {
          background-color: var(--bg-primary);
          border-bottom: 1px solid var(--border-gold);
        }

        .dashboard-grid {
          display: grid;
          grid-template-columns: 1fr 1.3fr;
          gap: 3rem;
          align-items: stretch;
        }

        @media (max-width: 1024px) {
          .dashboard-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
        }

        @media (max-width: 480px) {
          .dashboard-control-panel {
            padding: 1.5rem 1rem;
          }
        }

        /* Control Panel Styles */
        .dashboard-control-panel {
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-gold);
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
        }

        .portal-header-mock {
          display: flex;
          justify-content: space-between;
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-muted);
          border-bottom: 1px solid var(--border-gold-strong);
          padding-bottom: 1rem;
          margin-bottom: 1.5rem;
        }

        .portal-indicator, .portal-date {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .portal-icon {
          color: var(--gold-dark);
        }

        .portal-title-text {
          font-family: var(--font-sans);
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-primary);
          margin-bottom: 1.25rem;
        }

        .metric-select-buttons {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-bottom: 2rem;
        }

        .metric-select-btn {
          background-color: var(--bg-primary);
          border: 1px solid var(--border-gold);
          padding: 1.2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          transition: var(--transition-smooth);
        }

        .metric-select-btn:hover {
          border-color: var(--gold-medium);
          transform: translateX(4px);
        }

        .metric-select-btn.active {
          border-color: var(--gold-dark);
          background-color: var(--gold-light);
          transform: translateX(6px);
        }

        .select-btn-meta {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.15rem;
        }

        .btn-metric-title {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .btn-metric-sub {
          font-size: 0.75rem;
          color: var(--gold-dark);
          font-weight: 600;
        }

        .btn-metric-val {
          font-family: var(--font-serif);
          font-size: 1.6rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .metric-details-card {
          margin-top: auto;
          background-color: rgba(17, 16, 14, 0.65);
          border: 1px dashed var(--border-gold-strong);
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .details-heading {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--text-muted);
          letter-spacing: 0.05em;
        }

        .details-text {
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        .live-sync {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.75rem;
          color: var(--text-muted);
          margin-top: 0.5rem;
        }

        .spin-icon {
          animation: spin 6s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        /* Chart Canvas Styles */
        .dashboard-chart-canvas {
          background-color: var(--bg-primary);
          border: 1px solid var(--border-gold);
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          box-shadow: var(--shadow-lux);
          position: relative;
        }

        @media (max-width: 480px) {
          .dashboard-chart-canvas {
            padding: 1.5rem 1rem;
          }
          .chart-canvas-header {
            flex-direction: column;
            gap: 1rem;
          }
          .canvas-stats {
            align-items: flex-start;
          }
          .canvas-big-val {
            font-size: 2rem;
          }
        }

        .chart-canvas-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          border-bottom: 1px solid var(--border-gold);
          padding-bottom: 1.5rem;
          margin-bottom: 2rem;
        }

        .canvas-title-group h4 {
          font-family: var(--font-serif);
          font-size: 1.6rem;
          font-weight: 400;
          color: var(--text-primary);
        }

        .canvas-title-group p {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .canvas-stats {
          display: flex;
          align-items: baseline;
          gap: 0.75rem;
        }

        .canvas-big-val {
          font-family: var(--font-serif);
          font-size: 2.5rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .canvas-percent-up {
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          color: var(--gold-dark);
          font-size: 0.85rem;
          font-weight: 700;
        }

        /* SVG Chart Design */
        .svg-container-wrapper {
          position: relative;
          width: 100%;
          margin: 1rem 0;
        }

        .svg-chart {
          width: 100%;
          height: auto;
          overflow: visible;
        }

        .grid-line {
          stroke: var(--border-gold);
          stroke-width: 1;
          stroke-dasharray: 4, 4;
        }

        .axis-label {
          font-size: 10px;
          fill: var(--text-muted);
          font-weight: 600;
          font-family: var(--font-sans);
        }

        .axis-y-label {
          text-anchor: end;
        }

        .axis-x-label {
          text-anchor: middle;
        }

        .hover-target {
          cursor: pointer;
        }

        .chart-dot {
          transition: r 0.25s cubic-bezier(0.16, 1, 0.3, 1), stroke-width 0.25s;
        }

        /* Tooltip style */
        .chart-tooltip {
          position: absolute;
          background: var(--dark-gradient);
          color: white;
          padding: 0.65rem 0.9rem;
          border-radius: 4px;
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
          box-shadow: 0 4px 15px rgba(0,0,0,0.15);
          pointer-events: none;
          z-index: 50;
          transform: translate(-50%, -100%);
          transition: left 0.3s cubic-bezier(0.16, 1, 0.3, 1), top 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .tooltip-lbl {
          font-size: 0.7rem;
          color: rgba(255,255,255,0.7);
          text-transform: uppercase;
          font-weight: 600;
          letter-spacing: 0.05em;
        }

        .tooltip-val {
          font-family: var(--font-serif);
          font-size: 1.15rem;
          font-weight: 600;
          color: var(--gold-light);
        }

        .canvas-footer-tags {
          display: flex;
          gap: 1.5rem;
          border-top: 1px solid var(--border-gold);
          padding-top: 1.5rem;
          margin-top: 2rem;
        }

        .footer-tag {
          font-size: 0.75rem;
          color: var(--text-muted);
          font-weight: 500;
        }
      `}</style>
    </section>
  );
}
