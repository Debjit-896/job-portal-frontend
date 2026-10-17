import { ArrowRight, ChevronRight } from 'lucide-react';
import SectionCard from '../../../common/userCommon/SectionCard';

export default function CompanyPhotosSection({ photos = [], onViewAll }) {
  return (
    <SectionCard className="p-5 bg-white border border-[#E2E8F0] shadow-sm rounded-[16px] relative">
      {/* Header */}
      <div className="flex items-center justify-between mb-3.5">
        <h3 className="text-[15px] font-bold text-[#0F172A]">
          Company Photos
        </h3>
        <button
          type="button"
          onClick={onViewAll}
          className="text-[#1463F3] text-[11.5px] font-semibold flex items-center gap-0.5 hover:underline bg-transparent border-0 cursor-pointer"
        >
          View All Photos <ArrowRight size={12} />
        </button>
      </div>

      {/* Photos Carousel / Row */}
      <div className="relative">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="rounded-xl overflow-hidden aspect-[4/3] bg-slate-100 group border border-[#E2E8F0] shadow-xs relative"
            >
              <img
                src={photo.url}
                alt={photo.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        {/* Right Arrow floating navigation button matching screenshot */}
        <button
          type="button"
          onClick={onViewAll}
          className="absolute -right-3 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white shadow-md border border-[#E2E8F0] flex items-center justify-center text-[#475569] hover:text-[#0F172A] hover:scale-105 transition-all cursor-pointer z-10 hidden sm:flex"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </SectionCard>
  );
}
