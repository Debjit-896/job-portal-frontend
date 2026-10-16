import { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';

export default function CompaniesHeroBanner({ onSearch, onTagClick }) {
  const [query, setQuery] = useState('');
  const [industry, setIndustry] = useState('All Industries');

  const popularTags = [
    'Tech',
    'IT Services',
    'Product',
    'Finance',
    'Healthcare',
    'E-commerce',
    'EdTech',
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) onSearch({ query, industry });
  };

  return (
    <div
      style={{
        position: 'relative',
        borderRadius: '16px',
        overflow: 'hidden',
        background: 'linear-gradient(108deg, #183883 0%, #1D4ED8 45%, #2563EB 75%, #1E40AF 100%)',
        padding: '30px 32px 28px 32px',
        color: '#FFFFFF',
        boxShadow: '0 8px 24px rgba(20, 99, 243, 0.15)',
      }}
    >
      {/* Decorative City Skyline Background on Right */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          right: '18px',
          bottom: 0,
          top: 0,
          width: '320px',
          pointerEvents: 'none',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'flex-end',
          opacity: 0.9,
        }}
      >
        <svg width="280" height="150" viewBox="0 0 280 150" fill="none">
          {/* Subtle night sky stars/lights */}
          <circle cx="40" cy="30" r="1.5" fill="#93C5FD" opacity="0.6" />
          <circle cx="120" cy="20" r="1.5" fill="#93C5FD" opacity="0.8" />
          <circle cx="210" cy="25" r="2" fill="#93C5FD" opacity="0.5" />
          <circle cx="260" cy="45" r="1.5" fill="#93C5FD" opacity="0.7" />

          {/* Background buildings silhouette */}
          <rect x="30" y="45" width="34" height="105" rx="2" fill="#1E3A8A" opacity="0.7" />
          <rect x="70" y="25" width="42" height="125" rx="2" fill="#1E40AF" opacity="0.8" />
          <polygon points="91,10 75,25 107,25" fill="#1E40AF" opacity="0.8" />
          <rect x="120" y="55" width="36" height="95" rx="2" fill="#1E3A8A" opacity="0.7" />
          <rect x="165" y="35" width="46" height="115" rx="2" fill="#1D4ED8" opacity="0.85" />
          <polygon points="188,18 172,35 204,35" fill="#1D4ED8" opacity="0.85" />
          <rect x="220" y="60" width="38" height="90" rx="2" fill="#1E3A8A" opacity="0.7" />

          {/* Glowing windows */}
          <rect x="78" y="38" width="5" height="5" rx="1" fill="#FEF08A" opacity="0.9" />
          <rect x="88" y="38" width="5" height="5" rx="1" fill="#FEF08A" opacity="0.9" />
          <rect x="98" y="38" width="5" height="5" rx="1" fill="#FEF08A" opacity="0.9" />
          <rect x="78" y="52" width="5" height="5" rx="1" fill="#FEF08A" opacity="0.8" />
          <rect x="98" y="52" width="5" height="5" rx="1" fill="#FEF08A" opacity="0.8" />
          <rect x="88" y="66" width="5" height="5" rx="1" fill="#FEF08A" opacity="0.9" />
          <rect x="78" y="80" width="5" height="5" rx="1" fill="#FEF08A" opacity="0.7" />
          <rect x="98" y="80" width="5" height="5" rx="1" fill="#FEF08A" opacity="0.9" />
          <rect x="78" y="94" width="5" height="5" rx="1" fill="#FEF08A" opacity="0.8" />

          <rect x="173" y="48" width="6" height="6" rx="1" fill="#FEF08A" opacity="0.85" />
          <rect x="185" y="48" width="6" height="6" rx="1" fill="#FEF08A" opacity="0.85" />
          <rect x="197" y="48" width="6" height="6" rx="1" fill="#FEF08A" opacity="0.85" />
          <rect x="173" y="62" width="6" height="6" rx="1" fill="#FEF08A" opacity="0.9" />
          <rect x="197" y="62" width="6" height="6" rx="1" fill="#FEF08A" opacity="0.9" />
          <rect x="185" y="76" width="6" height="6" rx="1" fill="#FEF08A" opacity="0.8" />
          <rect x="173" y="90" width="6" height="6" rx="1" fill="#FEF08A" opacity="0.9" />
          <rect x="197" y="90" width="6" height="6" rx="1" fill="#FEF08A" opacity="0.85" />

          <rect x="38" y="60" width="4" height="4" rx="1" fill="#FEF08A" opacity="0.7" />
          <rect x="48" y="75" width="4" height="4" rx="1" fill="#FEF08A" opacity="0.8" />
          <rect x="38" y="90" width="4" height="4" rx="1" fill="#FEF08A" opacity="0.7" />

          <rect x="128" y="70" width="4" height="4" rx="1" fill="#FEF08A" opacity="0.75" />
          <rect x="138" y="85" width="4" height="4" rx="1" fill="#FEF08A" opacity="0.85" />

          <rect x="228" y="75" width="4" height="4" rx="1" fill="#FEF08A" opacity="0.75" />
          <rect x="240" y="90" width="4" height="4" rx="1" fill="#FEF08A" opacity="0.8" />
        </svg>
      </div>

      {/* Decorative text badge on right */}
      <div
        style={{
          position: 'absolute',
          right: '32px',
          top: '26px',
          textAlign: 'right',
          pointerEvents: 'none',
          lineHeight: '1.25',
        }}
      >
        <span
          style={{
            display: 'block',
            fontSize: '15px',
            fontFamily: 'cursive, Georgia, serif',
            fontStyle: 'italic',
            fontWeight: 500,
            color: '#E0E7FF',
            textShadow: '0 2px 4px rgba(0,0,0,0.2)',
          }}
        >
          Better
        </span>
        <span
          style={{
            display: 'block',
            fontSize: '15px',
            fontFamily: 'cursive, Georgia, serif',
            fontStyle: 'italic',
            fontWeight: 500,
            color: '#E0E7FF',
            textShadow: '0 2px 4px rgba(0,0,0,0.2)',
          }}
        >
          Companies
        </span>
        <span
          style={{
            display: 'block',
            fontSize: '15px',
            fontFamily: 'cursive, Georgia, serif',
            fontStyle: 'italic',
            fontWeight: 500,
            color: '#FCD34D',
            textShadow: '0 2px 4px rgba(0,0,0,0.2)',
          }}
        >
          Brighter
        </span>
        <span
          style={{
            display: 'block',
            fontSize: '15px',
            fontFamily: 'cursive, Georgia, serif',
            fontStyle: 'italic',
            fontWeight: 500,
            color: '#FCD34D',
            textShadow: '0 2px 4px rgba(0,0,0,0.2)',
          }}
        >
          Future
        </span>
      </div>

      {/* Header Titles */}
      <div style={{ position: 'relative', zIndex: 2, maxWidth: '600px', marginBottom: '22px' }}>
        <h1
          style={{
            fontSize: '26px',
            fontWeight: 800,
            letterSpacing: '-0.4px',
            marginBottom: '8px',
            color: '#FFFFFF',
          }}
        >
          Discover Great Companies
        </h1>
        <p
          style={{
            fontSize: '13.5px',
            color: '#DBEAFE',
            lineHeight: '1.5',
            fontWeight: 400,
          }}
        >
          Explore top companies, follow your favorites, and get the latest updates on jobs, culture and opportunities.
        </p>
      </div>

      {/* Search Input Bar with Industry Dropdown and Search Button */}
      <form
        onSubmit={handleSubmit}
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#FFFFFF',
          borderRadius: '12px',
          padding: '6px 7px 6px 16px',
          boxShadow: '0 8px 20px rgba(0, 0, 0, 0.12)',
          maxWidth: '680px',
          marginBottom: '18px',
        }}
      >
        <Search size={18} color="#94A3B8" style={{ flexShrink: 0, marginRight: '10px' }} />
        <input
          type="text"
          placeholder="Search companies by name, industry, or location..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{
            border: 'none',
            outline: 'none',
            fontSize: '13px',
            color: '#1E293B',
            flex: 1,
            minWidth: 0,
            background: 'transparent',
            fontFamily: 'inherit',
          }}
        />

        {/* Vertical divider */}
        <div style={{ width: '1px', height: '24px', backgroundColor: '#E2E8F0', margin: '0 12px' }} />

        {/* Industry dropdown */}
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', marginRight: '10px' }}>
          <select
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
            style={{
              appearance: 'none',
              border: 'none',
              background: 'transparent',
              fontSize: '12.5px',
              fontWeight: 500,
              color: '#475569',
              paddingRight: '20px',
              cursor: 'pointer',
              outline: 'none',
            }}
          >
            <option value="All Industries">All Industries</option>
            <option value="Technology">Technology</option>
            <option value="IT Services">IT Services</option>
            <option value="Finance">Finance</option>
            <option value="Healthcare">Healthcare</option>
            <option value="E-commerce">E-commerce</option>
          </select>
          <ChevronDown
            size={14}
            color="#64748B"
            style={{ position: 'absolute', right: 0, pointerEvents: 'none' }}
          />
        </div>

        {/* Blue Search Button */}
        <button
          type="submit"
          style={{
            backgroundColor: '#1463F3',
            color: '#FFFFFF',
            border: 'none',
            borderRadius: '9px',
            padding: '9px 24px',
            fontSize: '13px',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'background-color 0.15s ease',
            flexShrink: 0,
          }}
        >
          Search
        </button>
      </form>

      {/* Popular Chips Row */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          flexWrap: 'wrap',
        }}
      >
        <span style={{ fontSize: '12px', fontWeight: 600, color: '#BFDBFE', marginRight: '4px' }}>
          Popular:
        </span>
        {popularTags.map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() => onTagClick && onTagClick(tag)}
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.12)',
              border: '1px solid rgba(255, 255, 255, 0.25)',
              borderRadius: '20px',
              padding: '4px 13px',
              fontSize: '11.5px',
              color: '#FFFFFF',
              fontWeight: 500,
              cursor: 'pointer',
              backdropFilter: 'blur(4px)',
              transition: 'all 0.15s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.22)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.12)';
            }}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}
