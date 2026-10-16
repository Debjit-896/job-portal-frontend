import { Briefcase, Search, Building2, Users, TrendingUp } from 'lucide-react';

export default function BrandingPanel() {
  return (
    <div className="hidden md:flex flex-col min-w-0 min-h-0 bg-gradient-to-br from-[#f0f6ff] to-[#e0edff] p-[min(4rem,6vh)] md:p-[min(4rem,4vw)] overflow-hidden">
      <div className="flex items-center gap-2.5 mb-[min(2.5rem,3vh)]">
        <div className="w-[min(48px,5vh)] h-[min(48px,5vh)] bg-[#1463F3] rounded-[10px] flex items-center justify-center text-white">
          <Briefcase size={26} />
        </div>
        <div className="text-[min(2rem,3.5vh)] font-bold text-[#102E6D]">JobNest</div>
      </div>

      <h1 className="text-[min(2.5rem,4vh)] leading-tight font-bold text-[#102E6D] mb-[min(1.5rem,2vh)] max-w-[450px]">
        Find Your Dream Job &amp; Grow Your Career
      </h1>
      <p className="text-[min(1.125rem,2vh)] text-[#627BAF] leading-normal mb-[min(3rem,4vh)] max-w-[450px]">
        Discover great opportunities, connect with top companies, and build your professional network &mdash; all in one place.
      </p>

      <div className="flex flex-col gap-[min(1.5rem,2vh)] z-10">
        <div className="flex items-start gap-3">
          <div className="w-[min(40px,4vh)] h-[min(40px,4vh)] bg-[#F4F8FF] rounded-full flex items-center justify-center text-[#1463F3] shrink-0">
            <Search size={18} />
          </div>
          <div>
            <h3 className="text-[min(1rem,1.8vh)] font-semibold text-[#102E6D] mb-1">Find Jobs</h3>
            <p className="text-[min(0.875rem,1.5vh)] text-[#627BAF] leading-snug max-w-[300px]">
              Explore thousands of job opportunities across industries.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-[min(40px,4vh)] h-[min(40px,4vh)] bg-[#F4F8FF] rounded-full flex items-center justify-center text-[#1463F3] shrink-0">
            <Building2 size={18} />
          </div>
          <div>
            <h3 className="text-[min(1rem,1.8vh)] font-semibold text-[#102E6D] mb-1">Follow Companies</h3>
            <p className="text-[min(0.875rem,1.5vh)] text-[#627BAF] leading-snug max-w-[300px]">
              Stay updated with your favorite companies and their latest openings.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-[min(40px,4vh)] h-[min(40px,4vh)] bg-[#F4F8FF] rounded-full flex items-center justify-center text-[#1463F3] shrink-0">
            <Users size={18} />
          </div>
          <div>
            <h3 className="text-[min(1rem,1.8vh)] font-semibold text-[#102E6D] mb-1">Build Your Network</h3>
            <p className="text-[min(0.875rem,1.5vh)] text-[#627BAF] leading-snug max-w-[300px]">
              Connect with professionals and grow your career together.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-[min(40px,4vh)] h-[min(40px,4vh)] bg-[#F4F8FF] rounded-full flex items-center justify-center text-[#1463F3] shrink-0">
            <TrendingUp size={18} />
          </div>
          <div>
            <h3 className="text-[min(1rem,1.8vh)] font-semibold text-[#102E6D] mb-1">Get Noticed</h3>
            <p className="text-[min(0.875rem,1.5vh)] text-[#627BAF] leading-snug max-w-[300px]">
              Showcase your skills, portfolio and achievements to recruiters.
            </p>
          </div>
        </div>
      </div>

      <div className="relative w-full flex-1 min-h-0 flex items-end justify-center pointer-events-none z-0">
        <svg viewBox="0 0 400 250" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
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
        <div className="absolute top-[15%] right-[15%] font-serif italic text-[#1463F3] text-[min(1.5rem,2.5vh)] font-semibold -rotate-12 z-10">
          Better Jobs<br/>Brighter Future
        </div>
      </div>
    </div>
  );
}
