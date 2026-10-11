import { Briefcase, Search, Building2, Users, TrendingUp } from 'lucide-react';

export default function BrandingPanel() {
  return (
    <div className="auth-left">
      <div className="brand-header">
        <div className="brand-icon">
          <Briefcase size={28} />
        </div>
        <div className="brand-name">JobNest</div>
      </div>

      <h1 className="hero-title">Find Your Dream Job & Grow Your Career</h1>
      <p className="hero-description">
        Discover great opportunities, connect with top companies, and build your professional network — all in one place.
      </p>

      <div className="features-list">
        <div className="feature-item">
          <div className="feature-icon">
            <Search size={20} />
          </div>
          <div className="feature-content">
            <h3>Find Jobs</h3>
            <p>Explore thousands of job opportunities across industries.</p>
          </div>
        </div>

        <div className="feature-item">
          <div className="feature-icon">
            <Building2 size={20} />
          </div>
          <div className="feature-content">
            <h3>Follow Companies</h3>
            <p>Stay updated with your favorite companies and their latest openings.</p>
          </div>
        </div>

        <div className="feature-item">
          <div className="feature-icon">
            <Users size={20} />
          </div>
          <div className="feature-content">
            <h3>Build Your Network</h3>
            <p>Connect with professionals and grow your career together.</p>
          </div>
        </div>

        <div className="feature-item">
          <div className="feature-icon">
            <TrendingUp size={20} />
          </div>
          <div className="feature-content">
            <h3>Get Noticed</h3>
            <p>Showcase your skills, portfolio and achievements to recruiters.</p>
          </div>
        </div>
      </div>

      <div className="illustration-container">
        <svg viewBox="0 0 400 250" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 250 C100 200, 300 280, 400 220 L400 250 Z" fill="#D8E6FF" opacity="0.5"/>
          <path d="M0 250 C150 180, 250 250, 400 200 L400 250 Z" fill="#EAF3FF" />
          <g fill="#A0B3D6" opacity="0.3">
            <rect x="50" y="150" width="40" height="100" />
            <rect x="110" y="100" width="50" height="150" />
            <rect x="180" y="120" width="60" height="130" />
            <rect x="260" y="80" width="45" height="170" />
            <rect x="320" y="140" width="40" height="110" />
          </g>
          {/* Desk */}
          <rect x="10" y="235" width="220" height="15" fill="#204080" rx="4" />
          <rect x="30" y="250" width="15" height="20" fill="#204080" />
          <rect x="180" y="250" width="15" height="20" fill="#204080" />
          {/* Plant */}
          <path d="M210 235 Q200 210 205 190 Q215 210 210 235" fill="#4ADE80" />
          <path d="M210 235 Q220 210 215 190 Q205 210 210 235" fill="#4ADE80" />
          <path d="M210 235 Q210 200 210 185 Q215 200 210 235" fill="#22C55E" />
          <path d="M195 235 Q200 235 200 215 L220 215 Q220 235 225 235 Z" fill="#FFFFFF" />
          {/* Laptop */}
          <path d="M130 235 L120 180 L190 180 L180 235 Z" fill="#102E6D" />
          <rect x="125" y="185" width="60" height="45" fill="#FFFFFF" />
          <rect x="130" y="190" width="20" height="15" fill="#EAF3FF" rx="2" />
          <rect x="155" y="195" width="25" height="3" fill="#D8E6FF" />
          <rect x="155" y="202" width="15" height="3" fill="#D8E6FF" />
          <rect x="130" y="210" width="50" height="15" fill="#EAF3FF" rx="2" />
          <rect x="110" y="235" width="90" height="4" fill="#627BAF" />
          {/* Person */}
          <path d="M40 250 L40 180 Q40 140 70 140 L90 140 Q110 140 120 160 L130 200" fill="#1463F3" stroke="#102E6D" strokeWidth="2"/>
          {/* Head */}
          <circle cx="85" cy="110" r="20" fill="#FCD34D" />
          <path d="M60 110 Q70 80 90 90 Q110 100 100 120 Q80 125 65 115" fill="#102E6D" />
          {/* Arm */}
          <path d="M80 160 L110 180 L130 190" fill="none" stroke="#1463F3" strokeWidth="12" strokeLinecap="round" />
          <path d="M130 190 L140 195" fill="none" stroke="#FCD34D" strokeWidth="8" strokeLinecap="round" />
        </svg>
        <div className="slogan">Better Jobs<br/>Brighter Future</div>
      </div>
    </div>
  );
}
