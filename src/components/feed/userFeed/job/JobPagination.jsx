import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function JobPagination({
  currentPage = 1,
  totalPages = 123,
  onPageChange,
}) {
  const pages = [1, 2, 3, 4, 5, '...', totalPages];

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '6px',
        marginTop: '12px',
        marginBottom: '24px',
        userSelect: 'none',
      }}
    >
      {/* Prev Button */}
      <button
        type="button"
        disabled={currentPage === 1}
        onClick={() => onPageChange && onPageChange(currentPage - 1)}
        style={{
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          border: '1px solid #E2E8F0',
          backgroundColor: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
          color: currentPage === 1 ? '#CBD5E1' : '#64748B',
          transition: 'all 0.15s ease',
        }}
      >
        <ChevronLeft size={16} />
      </button>

      {/* Pages */}
      {pages.map((p, idx) => {
        if (p === '...') {
          return (
            <span
              key={`ellipsis-${idx}`}
              style={{
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#94A3B8',
                fontSize: '13px',
              }}
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
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              border: isActive ? 'none' : '1px solid #E2E8F0',
              backgroundColor: isActive ? '#1463F3' : '#FFFFFF',
              color: isActive ? '#FFFFFF' : '#475569',
              fontSize: '13px',
              fontWeight: isActive ? 700 : 500,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.15s ease',
            }}
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
        style={{
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          border: '1px solid #E2E8F0',
          backgroundColor: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
          color: currentPage === totalPages ? '#CBD5E1' : '#64748B',
          transition: 'all 0.15s ease',
        }}
      >
        <ChevronRight size={16} />
      </button>
    </div>
  );
}
