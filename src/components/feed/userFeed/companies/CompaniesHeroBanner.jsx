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
    <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-[#183883] via-[#1D4ED8] to-[#1E40AF] p-[30px_32px_28px_32px] text-white shadow-[0_8px_24px_rgba(20,99,243,0.15)]">
      {/* Decorative City Skyline Background on Right */}
      <div
        aria-hidden="true"
        className="absolute right-4.5 bottom-0 top-0 w-80 pointer-events-none flex items-end justify-end opacity-90"
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
      <div className="absolute right-8 top-6.5 text-right pointer-events-none leading-tight">
        <span className="block text-[15px] italic font-medium text-[#E0E7FF] drop-shadow">
          Better
        </span>
        <span className="block text-[15px] italic font-medium text-[#E0E7FF] drop-shadow">
          Companies
        </span>
        <span className="block text-[15px] italic font-medium text-[#FCD34D] drop-shadow">
          Brighter
        </span>
        <span className="block text-[15px] italic font-medium text-[#FCD34D] drop-shadow">
          Future
        </span>
      </div>

      {/* Header Titles */}
      <div className="relative z-2 max-w-[600px] mb-5.5">
        <h1 className="text-[26px] font-extrabold tracking-[-0.4px] mb-2 text-white">
          Discover Great Companies
        </h1>
        <p className="text-[13.5px] text-[#DBEAFE] leading-relaxed font-normal">
          Explore top companies, follow your favorites, and get the latest updates on jobs, culture and opportunities.
        </p>
      </div>

      {/* Search Input Bar with Industry Dropdown and Search Button */}
      <form
        onSubmit={handleSubmit}
        className="relative z-2 flex items-center bg-white rounded-xl p-[6px_7px_6px_16px] shadow-[0_8px_20px_rgba(0,0,0,0.12)] max-w-[680px] mb-4.5"
      >
        <Search size={18} className="text-[#94A3B8] shrink-0 mr-2.5" />
        <input
          type="text"
          placeholder="Search companies by name, industry, or location..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border-0 outline-none text-[13px] text-[#1E293B] flex-1 min-w-0 bg-transparent placeholder:text-[#94A3B8]"
        />

        {/* Vertical divider */}
        <div className="w-px h-6 bg-[#E2E8F0] mx-3" />

        {/* Industry dropdown */}
        <div className="relative flex items-center mr-2.5">
          <select
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
            className="appearance-none border-0 bg-transparent text-[12.5px] font-medium text-[#475569] pr-5 cursor-pointer outline-none"
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
            className="text-[#64748B] absolute right-0 pointer-events-none"
          />
        </div>

        {/* Blue Search Button */}
        <button
          type="submit"
          className="bg-[#1463F3] text-white border-0 rounded-[9px] py-2 px-6 text-[13px] font-semibold cursor-pointer transition-colors hover:bg-[#0F52CC] shrink-0"
        >
          Search
        </button>
      </form>

      {/* Popular Chips Row */}
      <div className="relative z-2 flex items-center gap-2 flex-wrap">
        <span className="text-xs font-semibold text-[#BFDBFE] mr-1">
          Popular:
        </span>
        {popularTags.map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() => onTagClick && onTagClick(tag)}
            className="bg-white/12 border border-white/25 rounded-[20px] py-1 px-3 text-[11.5px] text-white font-medium cursor-pointer backdrop-blur-xs transition-colors hover:bg-white/22"
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}

