import { Users, MapPin, Briefcase, Play } from 'lucide-react';
import SectionCard from '../../../common/userCommon/SectionCard';

export default function CompanyAboutSection({ company, onPlayVideo }) {
  return (
    <SectionCard className="p-5 bg-white border border-[#E2E8F0] shadow-sm rounded-[16px]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Side: About text + Stats badges */}
        <div className="lg:col-span-7 flex flex-col justify-between h-full">
          <div>
            <h3 className="text-[16px] font-bold text-[#0F172A] mb-2.5">
              About Us
            </h3>
            <p className="text-[12.5px] text-[#475569] leading-relaxed mb-6">
              {company.about}
            </p>
          </div>

          {/* 3 Metric Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            {/* Employees */}
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#EFF6FF] text-[#1463F3] flex items-center justify-center shrink-0">
                <Users size={16} />
              </div>
              <div className="min-w-0">
                <p className="text-[12px] font-bold text-[#0F172A] leading-tight">
                  {company.stats?.employees || '51–200'}
                </p>
                <p className="text-[10px] text-[#64748B] truncate">
                  Employees
                </p>
              </div>
            </div>

            {/* Headquarters */}
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#EFF6FF] text-[#1463F3] flex items-center justify-center shrink-0">
                <MapPin size={16} />
              </div>
              <div className="min-w-0">
                <p className="text-[12px] font-bold text-[#0F172A] leading-tight truncate">
                  {company.stats?.headquarters || 'Kolkata, West Bengal'}
                </p>
                <p className="text-[10px] text-[#64748B] truncate">
                  Headquarters
                </p>
              </div>
            </div>

            {/* Industry */}
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#EFF6FF] text-[#1463F3] flex items-center justify-center shrink-0">
                <Briefcase size={16} />
              </div>
              <div className="min-w-0">
                <p className="text-[12px] font-bold text-[#0F172A] leading-tight truncate">
                  {company.stats?.industry || 'IT Services & Consulting'}
                </p>
                <p className="text-[10px] text-[#64748B] truncate">
                  Industry
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Life @ Company Video Preview Card */}
        <div className="lg:col-span-5 relative rounded-xl overflow-hidden bg-slate-900 group aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto lg:h-[185px]">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
            alt="Life @ Company"
            className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-300"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

          {/* Life @ Company Floating Title */}
          <div className="absolute top-3 right-4 text-right">
            <span className="font-serif italic text-white text-[15px] font-medium drop-shadow-md">
              Life @
            </span>
            <p className="text-white font-bold text-[13px] drop-shadow-md leading-tight">
              {company.name.split(' ')[0]}
            </p>
          </div>

          {/* Play Button Overlay */}
          <button
            type="button"
            onClick={onPlayVideo}
            className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/60 flex items-center justify-center text-white hover:scale-110 hover:bg-white/30 transition-all cursor-pointer shadow-lg"
          >
            <Play size={20} fill="white" className="ml-0.5" />
          </button>
        </div>
      </div>
    </SectionCard>
  );
}
