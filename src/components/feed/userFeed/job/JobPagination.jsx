import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function JobPagination({
  currentPage = 1,
  totalPages = 123,
  onPageChange,
}) {
  const pages = [1, 2, 3, 4, 5, '...', totalPages];

  return (
    <div className="flex items-center justify-center gap-1.5 mt-3 mb-6 select-none">
      {/* Prev Button */}
      <button
        type="button"
        disabled={currentPage === 1}
        onClick={() => onPageChange && onPageChange(currentPage - 1)}
        className={`w-8 h-8 rounded-full border border-[#E2E8F0] bg-white flex items-center justify-center transition-all ${
          currentPage === 1 ? 'cursor-not-allowed text-[#CBD5E1]' : 'cursor-pointer text-[#64748B] hover:bg-[#F8FAFC]'
        }`}
      >
        <ChevronLeft size={16} />
      </button>

      {/* Pages */}
      {pages.map((p, idx) => {
        if (p === '...') {
          return (
            <span
              key={`ellipsis-${idx}`}
              className="w-8 h-8 flex items-center justify-center text-[#94A3B8] text-[13px]"
            >
              ...
            </span>
          );
        }

        const isActive = currentPage === p;
        return (
          <button
            key={p}
            type="button"
            onClick={() => onPageChange && onPageChange(p)}
            className={`w-8 h-8 rounded-full flex items-center justify-center text-[13px] cursor-pointer transition-all ${
              isActive
                ? 'bg-[#1463F3] text-white font-bold border-0 shadow-sm'
                : 'border border-[#E2E8F0] bg-white text-[#475569] font-medium hover:bg-[#F8FAFC]'
            }`}
          >
            {p}
          </button>
        );
      })}

      {/* Next Button */}
      <button
        type="button"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange && onPageChange(currentPage + 1)}
        className={`w-8 h-8 rounded-full border border-[#E2E8F0] bg-white flex items-center justify-center transition-all ${
          currentPage === totalPages ? 'cursor-not-allowed text-[#CBD5E1]' : 'cursor-pointer text-[#64748B] hover:bg-[#F8FAFC]'
        }`}
      >
        <ChevronRight size={16} />
      </button>
    </div>
  );
}

