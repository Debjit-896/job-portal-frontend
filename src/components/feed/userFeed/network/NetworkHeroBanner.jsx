export default function NetworkHeroBanner() {
  const avatars = [
    { src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=80&q=80', top: '15px', right: '140px', size: 34 },
    { src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=80&q=80', top: '55px', right: '120px', size: 34 },
    { src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80', top: '35px', right: '190px', size: 34 },
    { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80', top: '65px', right: '240px', size: 32 },
    { src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=80&q=80', top: '25px', right: '60px', size: 36 },
  ];

  return (
    <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-[#EBF3FF] via-[#E1EDFD] to-[#D8E7FD] px-8 py-8 border border-[#CFE2FE] flex items-center justify-between min-h-[140px]">
      {/* Left text */}
      <div className="max-w-[440px] z-10">
        <h1 className="text-2xl font-extrabold text-[#102E6D] tracking-tight mb-2">
          Your Network
        </h1>
        <p className="text-[13.5px] text-[#475569] m-0 leading-relaxed">
          Connect with people, grow your professional network, and unlock new opportunities.
        </p>
      </div>

      {/* Right connected avatars network constellation graphic */}
      <div
        aria-hidden="true"
        className="relative w-[280px] h-[110px] shrink-0"
      >
        <svg
          width="280"
          height="110"
          viewBox="0 0 280 110"
          fill="none"
          className="absolute top-0 left-0"
        >
          <line x1="90" y1="80" x2="140" y2="50" stroke="#93C5FD" strokeWidth="1.5" strokeDasharray="3 3" />
          <line x1="140" y1="50" x2="190" y2="30" stroke="#93C5FD" strokeWidth="1.5" strokeDasharray="3 3" />
          <line x1="140" y1="50" x2="210" y2="70" stroke="#93C5FD" strokeWidth="1.5" strokeDasharray="3 3" />
          <line x1="190" y1="30" x2="260" y2="40" stroke="#93C5FD" strokeWidth="1.5" strokeDasharray="3 3" />
          <line x1="210" y1="70" x2="260" y2="40" stroke="#93C5FD" strokeWidth="1.5" strokeDasharray="3 3" />
          <line x1="40" y1="65" x2="90" y2="80" stroke="#93C5FD" strokeWidth="1.5" strokeDasharray="3 3" />
        </svg>

        {avatars.map((a, i) => (
          <div
            key={i}
            style={{
              top: a.top,
              right: a.right,
              width: `${a.size}px`,
              height: `${a.size}px`,
            }}
            className="absolute rounded-full overflow-hidden border-2 border-white shadow-[0_2px_6px_rgba(20,99,243,0.15)] bg-white"
          >
            <img
              src={a.src}
              alt="Network person"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
