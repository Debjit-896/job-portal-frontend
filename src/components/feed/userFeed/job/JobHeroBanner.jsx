import { useState } from 'react';
import { Search, MapPin, Briefcase, ChevronDown } from 'lucide-react';
import Button from '../../../common/userCommon/Button';

export default function JobHeroBanner({ onSearch }) {
  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('');
  const [jobType, setJobType] = useState('');

  const handleSearch = () => {
    if (onSearch) {
      onSearch({ keyword, location, jobType });
    }
  };

  return (
    <div
      style={{
        position: 'relative',
        background: 'linear-gradient(135deg, #EBF3FF 0%, #DCE9FC 100%)',
        borderRadius: '16px',
        padding: '24px 28px',
        border: '1px solid #D1E2FB',
        overflow: 'hidden',
        boxShadow: '0 4px 18px rgba(20, 99, 243, 0.05)',
      }}
    >
      {/* Decorative background glow */}
      <div
        style={{
          position: 'absolute',
          top: '-40px',
          right: '160px',
          width: '180px',
          height: '180px',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.45)',
          filter: 'blur(30px)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px' }}>
        {/* Left: Titles & Triple Filter Search Bar */}
        <div style={{ flex: 1, minWidth: 0, zIndex: 1 }}>
          <h1
            style={{
              fontSize: '22px',
              fontWeight: '800',
              color: '#102E6D',
              lineHeight: '1.2',
              letterSpacing: '-0.3px',
              marginBottom: '6px',
            }}
          >
            Find Your Next Job
          </h1>

          <p
            style={{
              fontSize: '12.5px',
              color: '#536E9B',
              lineHeight: '1.4',
              marginBottom: '16px',
            }}
          >
            Explore thousands of job opportunities from top companies
            <br />
            and take the next step in your career.
          </p>

          {/* 3-Part Unified Search Bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#FFFFFF',
              borderRadius: '10px',
              padding: '5px 6px',
              boxShadow: '0 3px 12px rgba(16, 46, 109, 0.07)',
              border: '1px solid #D5E3F8',
              gap: '6px',
              maxWidth: '680px',
            }}
          >
            {/* Input 1: Job title, keyword */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flex: 1.4, padding: '4px 10px' }}>
              <Search size={16} color="#8DA0BD" style={{ flexShrink: 0 }} />
              <input
                type="text"
                placeholder="Job title, keyword or company"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                style={{
                  border: 'none',
                  outline: 'none',
                  background: 'transparent',
                  width: '100%',
                  fontSize: '12.5px',
                  color: '#102E6D',
                  fontFamily: 'inherit',
                }}
              />
            </div>

            {/* Vertical Separator */}
            <div style={{ width: '1px', height: '22px', backgroundColor: '#E2E8F0' }} />

            {/* Input 2: Location Dropdown */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                flex: 1,
                padding: '4px 10px',
                cursor: 'pointer',
              }}
            >
              <MapPin size={15} color="#8DA0BD" style={{ flexShrink: 0 }} />
              <input
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                style={{
                  border: 'none',
                  outline: 'none',
                  background: 'transparent',
                  width: '100%',
                  fontSize: '12.5px',
                  color: '#102E6D',
                  fontFamily: 'inherit',
                }}
              />
              <ChevronDown size={14} color="#94A3B8" />
            </div>

            {/* Vertical Separator */}
            <div style={{ width: '1px', height: '22px', backgroundColor: '#E2E8F0' }} />

            {/* Input 3: Job type Dropdown */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                flex: 0.9,
                padding: '4px 10px',
                cursor: 'pointer',
              }}
            >
              <Briefcase size={15} color="#8DA0BD" style={{ flexShrink: 0 }} />
              <input
                type="text"
                placeholder="Job type"
                value={jobType}
                onChange={(e) => setJobType(e.target.value)}
                style={{
                  border: 'none',
                  outline: 'none',
                  background: 'transparent',
                  width: '100%',
                  fontSize: '12.5px',
                  color: '#102E6D',
                  fontFamily: 'inherit',
                }}
              />
              <ChevronDown size={14} color="#94A3B8" />
            </div>

            {/* Search Jobs Button */}
            <Button
              variant="primary"
              size="sm"
              onClick={handleSearch}
              style={{
                padding: '8px 18px',
                borderRadius: '8px',
                fontSize: '12.5px',
                fontWeight: 600,
                flexShrink: 0,
              }}
            >
              Search Jobs
            </Button>
          </div>
        </div>

        {/* Right: Slogan & Illustration */}
        <div
          style={{
            position: 'relative',
            width: '210px',
            height: '135px',
            flexShrink: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}
        >
          {/* Floating Slogan badge */}
          <div
            style={{
              position: 'absolute',
              top: '0',
              left: '0',
              backgroundColor: 'rgba(255, 255, 255, 0.92)',
              backdropFilter: 'blur(4px)',
              padding: '4px 10px',
              borderRadius: '8px',
              border: '1px solid rgba(255, 255, 255, 0.95)',
              boxShadow: '0 3px 10px rgba(16, 46, 109, 0.05)',
              fontSize: '10.5px',
              fontWeight: 700,
              color: '#365280',
              lineHeight: '1.25',
              fontStyle: 'italic',
              textAlign: 'left',
              zIndex: 2,
            }}
          >
            <div>Better Jobs</div>
            <div style={{ color: '#1463F3' }}>Better Future</div>
          </div>

          {/* SVG Illustration */}
          <svg
            viewBox="0 0 240 140"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: '100%', height: '100%', overflow: 'visible' }}
          >
            {/* Background elements / Plants */}
            <path
              d="M210 115 C215 95 228 85 225 68 C218 78 214 92 210 115 Z"
              fill="#94C39B"
              opacity="0.8"
            />
            <path
              d="M218 115 C225 100 236 92 234 80 C228 92 222 103 218 115 Z"
              fill="#6EAD78"
              opacity="0.9"
            />
            <circle cx="218" cy="120" r="10" fill="#C2D9C5" />

            {/* Desk / Base line */}
            <path d="M50 128 L235 128" stroke="#CBD5E1" strokeWidth="2.5" strokeLinecap="round" />

            {/* Character */}
            <path
              d="M142 128 C142 102 150 90 166 90 C182 90 190 102 190 128 Z"
              fill="#2563EB"
            />
            <path
              d="M152 104 L138 118 L126 116"
              stroke="#FBCFE8"
              strokeWidth="4.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M152 102 C146 108 140 113 130 114"
              stroke="#1D4ED8"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              d="M178 102 C172 108 158 115 146 117"
              stroke="#1D4ED8"
              strokeWidth="6"
              strokeLinecap="round"
            />

            {/* Head and Hair */}
            <circle cx="166" cy="72" r="11" fill="#FED7AA" />
            <path
              d="M156 70 C156 60 164 57 174 57 C181 57 183 62 181 68 C178 66 174 65 169 66 C163 67 159 69 156 70 Z"
              fill="#1E293B"
            />
            <circle cx="168" cy="70" r="1.4" fill="#1E293B" />
            <path d="M166 75 C168 76.5 170 76.5 172 75" stroke="#D97706" strokeWidth="1" strokeLinecap="round" />

            {/* Laptop Screen */}
            <path
              d="M110 96 L136 96 L134 118 L108 118 Z"
              fill="#1E293B"
              rx="1.5"
            />
            <rect x="112" y="98" width="22" height="17" rx="1" fill="#3B82F6" opacity="0.85" />
            <rect x="115" y="102" width="10" height="1.6" rx="0.8" fill="#FFFFFF" opacity="0.8" />
            <rect x="115" y="106" width="16" height="1.6" rx="0.8" fill="#FFFFFF" opacity="0.6" />
            <rect x="115" y="110" width="12" height="1.6" rx="0.8" fill="#FFFFFF" opacity="0.6" />
            {/* Laptop Base */}
            <path
              d="M102 118 L142 118 L144 121 L100 121 Z"
              fill="#94A3B8"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
