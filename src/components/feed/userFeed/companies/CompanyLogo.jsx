export default function CompanyLogo({ company, size = 38 }) {
  const sizeStyle = { width: `${size}px`, height: `${size}px` };

  if (company.isCloudWind) {
    return (
      <div
        style={sizeStyle}
        className="rounded-[9px] bg-[#1463F3] flex items-center justify-center text-white shrink-0 shadow-[0_2px_6px_rgba(20,99,243,0.25)]"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
        </svg>
      </div>
    );
  }

  if (company.isGoogle) {
    return (
      <div
        style={sizeStyle}
        className="rounded-[9px] border border-[#E2E8F0] flex items-center justify-center bg-white shrink-0 shadow-[0_1px_3px_rgba(0,0,0,0.05)]"
      >
        <svg width="20" height="20" viewBox="0 0 24 24">
          <path
            fill="#4285F4"
            d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.65v3h3.88c2.27-2.09 3.665-5.17 3.665-9.09z"
          />
          <path
            fill="#34A853"
            d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.1C3.28 21.44 7.34 24 12 24z"
          />
          <path
            fill="#FBBC05"
            d="M5.28 14.32c-.25-.72-.38-1.49-.38-2.32s.13-1.6.38-2.32V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.1z"
          />
          <path
            fill="#EA4335"
            d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.28 2.56 1.25 6.58l4.03 3.1c.95-2.83 3.6-4.93 6.72-4.93z"
          />
        </svg>
      </div>
    );
  }

  if (company.isMicrosoft) {
    return (
      <div
        style={sizeStyle}
        className="rounded-[9px] border border-[#E2E8F0] grid grid-cols-2 gap-[2.5px] p-2 bg-white shrink-0 shadow-[0_1px_3px_rgba(0,0,0,0.05)]"
      >
        <div className="bg-[#F25022] rounded-[1px]" />
        <div className="bg-[#7FBA00] rounded-[1px]" />
        <div className="bg-[#00A4EF] rounded-[1px]" />
        <div className="bg-[#FFB900] rounded-[1px]" />
      </div>
    );
  }

  if (company.isAmazon) {
    return (
      <div
        style={sizeStyle}
        className="rounded-[9px] bg-[#1E293B] text-[#FF9900] flex items-center justify-center font-extrabold text-xl shrink-0 shadow-[0_1px_3px_rgba(0,0,0,0.1)]"
      >
        a
      </div>
    );
  }

  if (company.isTcs) {
    return (
      <div
        style={sizeStyle}
        className="rounded-[9px] border border-[#E2E8F0] flex items-center justify-center bg-white shrink-0 shadow-[0_1px_3px_rgba(0,0,0,0.05)] p-0.5"
      >
        <span className="font-sans font-extrabold text-[11px] bg-gradient-to-r from-[#E11D48] to-[#9333EA] bg-clip-text text-transparent tracking-[-0.3px]">
          tcs
        </span>
      </div>
    );
  }

  if (company.isAccenture) {
    return (
      <div
        style={sizeStyle}
        className="rounded-[9px] bg-[#FAF5FF] border border-[#E9D5FF] flex items-center justify-center text-[#9333EA] font-extrabold text-xl shrink-0"
      >
        &gt;
      </div>
    );
  }

  if (company.isMeta) {
    return (
      <div
        style={sizeStyle}
        className="rounded-[9px] border border-[#E2E8F0] flex items-center justify-center bg-white shrink-0"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="#0081FB">
          <path d="M12 3.5c-3.15 0-5.87 1.76-7.36 4.34-1.6 2.76-1.57 6.13.06 8.85C6.18 19.39 8.95 21 12 21c3.05 0 5.82-1.61 7.3-4.31 1.63-2.72 1.66-6.09.06-8.85C17.87 5.26 15.15 3.5 12 3.5zm0 14.5c-2.3 0-4.38-1.22-5.5-3.13-1.2-2.05-1.22-4.57-.05-6.64C7.57 6.32 9.68 5.1 12 5.1s4.43 1.22 5.55 3.13c1.17 2.07 1.15 4.59-.05 6.64-1.12 1.91-3.2 3.13-5.5 3.13z"/>
        </svg>
      </div>
    );
  }

  if (company.isApple) {
    return (
      <div
        style={sizeStyle}
        className="rounded-[9px] bg-[#1E293B] text-white flex items-center justify-center shrink-0"
      >
        <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 7.15c.61-.75 1.04-1.8 1.01-2.85-.92.04-2.07.62-2.73 1.39-.56.66-.99 1.72-.94 2.76 1.05.08 2.05-.55 2.66-1.3z" />
        </svg>
      </div>
    );
  }

  if (company.isAdobe) {
    return (
      <div
        style={sizeStyle}
        className="rounded-[9px] bg-[#FA5252] text-white flex items-center justify-center font-black text-xl font-serif shrink-0"
      >
        A
      </div>
    );
  }

  if (company.isOpenAI) {
    return (
      <div
        style={sizeStyle}
        className="rounded-[9px] bg-[#10A37F] text-white flex items-center justify-center font-extrabold text-lg shrink-0"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="2.5" fill="none" />
          <path d="M12 7v10M7 12h10" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </div>
    );
  }

  if (company.isNetflix) {
    return (
      <div
        style={sizeStyle}
        className="rounded-[9px] bg-black text-[#E50914] flex items-center justify-center font-black text-[22px] font-sans shrink-0"
      >
        N
      </div>
    );
  }

  if (company.isSpotify) {
    return (
      <div
        style={sizeStyle}
        className="rounded-[9px] bg-[#1ED760] text-white flex items-center justify-center shrink-0"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
          <circle cx="12" cy="12" r="10" />
          <path d="M7 9.5c3.5-1 7.5-.7 10.5.8" stroke="#1ED760" strokeWidth="2" strokeLinecap="round" fill="none" />
          <path d="M7.8 12.3c2.9-.8 6.2-.6 8.7.6" stroke="#1ED760" strokeWidth="1.8" strokeLinecap="round" fill="none" />
          <path d="M8.5 15c2.3-.6 4.9-.5 7 .5" stroke="#1ED760" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        </svg>
      </div>
    );
  }

  if (company.isInfosys) {
    return (
      <div
        style={sizeStyle}
        className="rounded-[9px] bg-[#0070AD] text-white flex items-center justify-center font-bold text-[9.5px] font-sans shrink-0"
      >
        Infosys
      </div>
    );
  }

  if (company.isWipro) {
    return (
      <div
        style={sizeStyle}
        className="rounded-[9px] border border-[#E2E8F0] bg-white flex items-center justify-center shrink-0 p-0.5"
      >
        <div className="flex flex-col items-center">
          <div className="flex gap-0.5">
            <span className="w-1 h-1 rounded-full bg-[#EA4335]" />
            <span className="w-1 h-1 rounded-full bg-[#34A853]" />
            <span className="w-1 h-1 rounded-full bg-[#4285F4]" />
          </div>
          <span className="text-[9px] font-extrabold text-[#1E293B]">wipro</span>
        </div>
      </div>
    );
  }

  if (company.isFlipkart) {
    return (
      <div
        style={sizeStyle}
        className="rounded-[9px] bg-[#FFEB3B] text-[#2874F0] flex items-center justify-center font-black text-lg italic shrink-0"
      >
        f
      </div>
    );
  }

  if (company.isLinkedIn) {
    return (
      <div
        style={sizeStyle}
        className="rounded-[9px] bg-[#0A66C2] text-white flex items-center justify-center font-extrabold text-base font-sans shrink-0"
      >
        in
      </div>
    );
  }

  // Fallback
  return (
    <div
      style={{ ...sizeStyle, backgroundColor: company.iconBg || '#1E293B' }}
      className="rounded-[9px] text-white flex items-center justify-center font-bold text-[13px] shrink-0"
    >
      {company.iconText || company.name?.charAt(0) || 'C'}
    </div>
  );
}

