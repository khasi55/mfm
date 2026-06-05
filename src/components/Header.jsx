import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react';

export default function Header({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Expertise', href: '#strategies' },
    { name: 'Strategy Lab', href: '#configurator' },
    { name: 'Portal Demo', href: '#dashboard' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Consultation', href: '#planner' },
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        {/* Logo */}
        <a href="#" className="logo-area">
          <span className="logo-mark"><span>M</span></span>
          <div className="logo-text-group">
            <span className="logo-title">MFM</span>
            <span className="logo-subtitle">GROWTH PARTNERS</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Button & Theme Toggle */}
        <div className="cta-container">
          <button 
            onClick={toggleTheme} 
            className="theme-toggle-btn"
            aria-label="Toggle Theme"
            title={theme === 'light' ? 'Switch to Obsidian Gold Theme' : 'Switch to Ivory Gold Theme'}
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          <a href="#planner" className="header-btn">
            <span>Bespoke Blueprint</span>
            <ArrowUpRight size={14} className="header-btn-icon" />
          </a>
        </div>

        {/* Mobile menu button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="mobile-toggle"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${isOpen ? 'open' : ''}`}>
        <nav className="mobile-nav">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="mobile-link"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          
          <button 
            onClick={() => {
              toggleTheme();
              setIsOpen(false);
            }} 
            className="mobile-theme-toggle-btn"
          >
            {theme === 'light' ? (
              <>
                <Moon size={16} />
                <span>Obsidian Gold Theme</span>
              </>
            ) : (
              <>
                <Sun size={16} />
                <span>Ivory Gold Theme</span>
              </>
            )}
          </button>

          <a 
            href="#planner" 
            className="mobile-cta"
            onClick={() => setIsOpen(false)}
          >
            Request Strategy Blueprint
          </a>
        </nav>
      </div>

      <style>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: var(--header-height);
          background-color: transparent;
          border-bottom: 1px solid transparent;
          z-index: 1000;
          transition: var(--transition-smooth);
          display: flex;
          align-items: center;
        }
        
        .header.scrolled {
          background-color: rgba(10, 9, 8, 0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border-gold);
          height: 70px;
          box-shadow: var(--shadow-subtle);
        }
        
        .header-container {
          max-width: var(--max-width);
          width: 100%;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo-area {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
        }

        .logo-mark {
          font-family: var(--font-serif);
          font-size: 1.45rem;
          font-weight: 600;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1.5px solid var(--gold-medium);
          position: relative;
          background-color: transparent;
          transition: var(--transition-smooth);
        }

        .logo-mark::before {
          content: '';
          position: absolute;
          top: 3px;
          left: 3px;
          right: 3px;
          bottom: 3px;
          border: 1px solid rgba(173, 139, 84, 0.3);
          transition: var(--transition-smooth);
        }

        .logo-mark span {
          display: inline-block;
          background: var(--gold-text-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          transition: var(--transition-smooth);
        }

        .logo-area:hover .logo-mark {
          border-color: var(--gold-dark);
          transform: rotate(45deg);
        }

        .logo-area:hover .logo-mark::before {
          border-color: var(--gold-dark);
        }

        .logo-area:hover .logo-mark span {
          transform: rotate(-45deg);
        }

        .logo-text-group {
          display: flex;
          flex-direction: column;
          line-height: 1.1;
        }

        .logo-title {
          font-family: var(--font-serif);
          font-size: 1.5rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          color: var(--text-primary);
        }

        .logo-subtitle {
          font-size: 0.6rem;
          font-weight: 800;
          letter-spacing: 0.25em;
          color: var(--gold-dark);
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 2.2rem;
        }

        .nav-link {
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--text-secondary);
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          position: relative;
          padding: 0.5rem 0;
          transition: var(--transition-fast);
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 1px;
          background-color: var(--gold-medium);
          transition: var(--transition-smooth);
          transform: translateX(-50%);
        }

        .nav-link:hover {
          color: var(--gold-dark);
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .cta-container {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .theme-toggle-btn {
          background: transparent;
          border: 1px solid var(--border-gold);
          color: var(--gold-medium);
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .theme-toggle-btn:hover {
          background-color: var(--bg-secondary);
          border-color: var(--gold-medium);
          color: var(--gold-dark);
          transform: translateY(-2px);
        }

        .header-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.65rem 1.4rem;
          background: transparent;
          color: var(--text-primary);
          border: 1px solid var(--gold-medium);
          text-decoration: none;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          transition: var(--transition-smooth);
        }

        .header-btn:hover {
          background: var(--gold-gradient);
          border-color: var(--gold-dark);
          color: #ffffff;
          transform: translateY(-1px);
        }

        .header-btn-icon {
          transition: var(--transition-fast);
        }

        .header-btn:hover .header-btn-icon {
          transform: translate(2px, -2px);
        }

        .mobile-toggle {
          display: none;
          background: transparent;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
        }

        /* Mobile Menu */
        .mobile-drawer {
          position: fixed;
          top: var(--header-height);
          left: 0;
          width: 100%;
          height: 0;
          background-color: var(--bg-secondary);
          backdrop-filter: blur(10px);
          overflow: hidden;
          transition: var(--transition-smooth);
          border-bottom: 1px solid transparent;
        }

        .mobile-drawer.open {
          height: calc(100vh - var(--header-height));
          border-bottom: 1px solid var(--border-gold);
        }

        .mobile-nav {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 3rem 2rem;
          gap: 1.8rem;
        }

        .mobile-link {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-primary);
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          transition: var(--transition-fast);
        }

        .mobile-link:hover {
          color: var(--gold-dark);
        }

        .mobile-theme-toggle-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          background: transparent;
          border: 1px solid var(--border-gold);
          color: var(--text-primary);
          padding: 0.85rem;
          width: 100%;
          max-width: 300px;
          font-size: 0.85rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-top: 1rem;
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .mobile-theme-toggle-btn:hover {
          background-color: var(--bg-secondary);
          border-color: var(--gold-medium);
        }

        .mobile-cta {
          margin-top: 1.5rem;
          width: 100%;
          max-width: 300px;
          text-align: center;
          padding: 1rem;
          background: var(--dark-gradient);
          color: var(--bg-primary);
          border: 1px solid var(--text-primary);
          text-decoration: none;
          font-size: 0.85rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          box-shadow: var(--shadow-medium);
        }

        @media (max-width: 991px) {
          .desktop-nav, .cta-container {
            display: none;
          }
          .mobile-toggle {
            display: block;
          }
        }
      `}</style>
    </header>
  );
}
