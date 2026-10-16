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
    <div className="relative bg-gradient-to-br from-[#EBF3FF] to-[#DCE9FC] rounded-2xl p-[24px_28px] border border-[#D1E2FB] overflow-hidden shadow-[0_4px_18px_rgba(20,99,243,0.05)]">
      {/* Decorative background glow */}
      <div className="absolute -top-10 right-40 w-[180px] h-[180px] rounded-full bg-white/45 blur-[30px] pointer-events-none" />

      <div className="flex items-center justify-between gap-6">
        {/* Left: Titles & Triple Filter Search Bar */}
        <div className="flex-1 min-w-0 z-1">
          <h1 className="text-[22px] font-extrabold text-[#102E6D] leading-tight tracking-[-0.3px] mb-1.5">
            Find Your Next Job
          </h1>

          <p className="text-[12.5px] text-[#536E9B] leading-[1.4] mb-4">
            Explore thousands of job opportunities from top companies
            <br />
            and take the next step in your career.
          </p>

          {/* 3-Part Unified Search Bar */}
          <div className="flex items-center bg-white rounded-xl p-[5px_6px] shadow-[0_3px_12px_rgba(16,46,109,0.07)] border border-[#D5E3F8] gap-1.5 max-w-[680px]">
            {/* Input 1: Job title, keyword */}
            <div className="flex items-center gap-2 flex-[1.4] px-2.5 py-1">
              <Search size={16} className="text-[#8DA0BD] shrink-0" />
              <input
                type="text"
                placeholder="Job title, keyword or company"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                className="border-0 outline-none bg-transparent w-full text-[12.5px] text-[#102E6D] placeholder:text-[#8DA0BD]"
              />
            </div>

            {/* Vertical Separator */}
            <div className="w-px h-[22px] bg-[#E2E8F0]" />

            {/* Input 2: Location Dropdown */}
            <div className="flex items-center gap-2 flex-1 px-2.5 py-1 cursor-pointer">
              <MapPin size={15} className="text-[#8DA0BD] shrink-0" />
              <input
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="border-0 outline-none bg-transparent w-full text-[12.5px] text-[#102E6D] placeholder:text-[#8DA0BD]"
              />
              <ChevronDown size={14} className="text-[#94A3B8]" />
            </div>

            {/* Vertical Separator */}
            <div className="w-px h-[22px] bg-[#E2E8F0]" />

            {/* Input 3: Job type Dropdown */}
            <div className="flex items-center gap-2 flex-[0.9] px-2.5 py-1 cursor-pointer">
              <Briefcase size={15} className="text-[#8DA0BD] shrink-0" />
              <input
                type="text"
                placeholder="Job type"
                value={jobType}
                onChange={(e) => setJobType(e.target.value)}
                className="border-0 outline-none bg-transparent w-full text-[12.5px] text-[#102E6D] placeholder:text-[#8DA0BD]"
              />
              <ChevronDown size={14} className="text-[#94A3B8]" />
            </div>

            {/* Search Jobs Button */}
            <Button
              variant="primary"
              size="sm"
              onClick={handleSearch}
              className="px-4.5 py-2 rounded-lg text-[12.5px] font-semibold shrink-0"
            >
              Search Jobs
            </Button>
          </div>
        </div>

        {/* Right: Slogan & Illustration */}
        <div className="relative w-[210px] h-[135px] shrink-0 flex flex-col items-center justify-end">
          {/* Floating Slogan badge */}
          <div className="absolute top-0 left-0 bg-white/92 backdrop-blur-[4px] px-2.5 py-1 rounded-lg border border-white/95 shadow-[0_3px_10px_rgba(16,46,109,0.05)] text-[10.5px] font-bold text-[#365280] leading-tight italic text-left z-2">
            <div>Better Jobs</div>
            <div className="text-[#1463F3]">Better Future</div>
          </div>

          {/* SVG Illustration */}
          <svg
            viewBox="0 0 240 140"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full overflow-visible"
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

