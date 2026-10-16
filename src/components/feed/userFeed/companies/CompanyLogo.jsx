export default function CompanyLogo({ company, size = 38 }) {
  if (company.isGoogle) {
    return (
      <div
        style={{
          width: `${size}px`,
          height: `${size}px`,
          borderRadius: '9px',
          border: '1px solid #E2E8F0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#FFFFFF',
          flexShrink: 0,
          boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
        }}
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
        style={{
          width: `${size}px`,
          height: `${size}px`,
          borderRadius: '9px',
          border: '1px solid #E2E8F0',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2.5px',
          padding: '8px',
          backgroundColor: '#FFFFFF',
          flexShrink: 0,
          boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
        }}
      >
        <div style={{ backgroundColor: '#F25022', borderRadius: '1px' }} />
        <div style={{ backgroundColor: '#7FBA00', borderRadius: '1px' }} />
        <div style={{ backgroundColor: '#00A4EF', borderRadius: '1px' }} />
        <div style={{ backgroundColor: '#FFB900', borderRadius: '1px' }} />
      </div>
    );
  }

  if (company.isAmazon) {
    return (
      <div
        style={{
          width: `${size}px`,
          height: `${size}px`,
          borderRadius: '9px',
          backgroundColor: '#1E293B',
          color: '#FF9900',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 800,
          fontSize: '20px',
          fontFamily: 'system-ui, sans-serif',
          flexShrink: 0,
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        }}
      >
        a
      </div>
    );
  }

  if (company.isTcs) {
    return (
      <div
        style={{
          width: `${size}px`,
          height: `${size}px`,
          borderRadius: '9px',
          border: '1px solid #E2E8F0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#FFFFFF',
          flexShrink: 0,
          boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
          padding: '2px',
        }}
      >
        <span
          style={{
            fontFamily: 'sans-serif',
            fontWeight: 800,
            fontSize: '11px',
            background: 'linear-gradient(90deg, #E11D48, #9333EA)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '-0.3px',
          }}
        >
          tcs
        </span>
      </div>
    );
  }

  if (company.isAccenture) {
    return (
      <div
        style={{
          width: `${size}px`,
          height: `${size}px`,
          borderRadius: '9px',
          backgroundColor: '#FAF5FF',
          border: '1px solid #E9D5FF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#9333EA',
          fontWeight: 800,
          fontSize: '20px',
          flexShrink: 0,
        }}
      >
        &gt;
      </div>
    );
  }

  if (company.isMeta) {
    return (
      <div
        style={{
          width: `${size}px`,
          height: `${size}px`,
          borderRadius: '9px',
          border: '1px solid #E2E8F0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#FFFFFF',
          flexShrink: 0,
        }}
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
        style={{
          width: `${size}px`,
          height: `${size}px`,
          borderRadius: '9px',
          backgroundColor: '#1E293B',
          color: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
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
        style={{
          width: `${size}px`,
          height: `${size}px`,
          borderRadius: '9px',
          backgroundColor: '#FA5252',
          color: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 900,
          fontSize: '20px',
          fontFamily: 'serif',
          flexShrink: 0,
        }}
      >
        A
      </div>
    );
  }

  if (company.isOpenAI) {
    return (
      <div
        style={{
          width: `${size}px`,
          height: `${size}px`,
          borderRadius: '9px',
          backgroundColor: '#10A37F',
          color: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 800,
          fontSize: '18px',
          flexShrink: 0,
        }}
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
        style={{
          width: `${size}px`,
          height: `${size}px`,
          borderRadius: '9px',
          backgroundColor: '#000000',
          color: '#E50914',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 900,
          fontSize: '22px',
          fontFamily: 'Impact, sans-serif',
          flexShrink: 0,
        }}
      >
        N
      </div>
    );
  }

  if (company.isSpotify) {
    return (
      <div
        style={{
          width: `${size}px`,
          height: `${size}px`,
          borderRadius: '9px',
          backgroundColor: '#1ED760',
          color: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
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
        style={{
          width: `${size}px`,
          height: `${size}px`,
          borderRadius: '9px',
          backgroundColor: '#0070AD',
          color: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 700,
          fontSize: '9.5px',
          fontFamily: 'sans-serif',
          flexShrink: 0,
        }}
      >
        Infosys
      </div>
    );
  }

  if (company.isWipro) {
    return (
      <div
        style={{
          width: `${size}px`,
          height: `${size}px`,
          borderRadius: '9px',
          border: '1px solid #E2E8F0',
          backgroundColor: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          padding: '2px',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '2px' }}>
            <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#EA4335' }} />
            <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#34A853' }} />
            <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#4285F4' }} />
          </div>
          <span style={{ fontSize: '9px', fontWeight: 800, color: '#1E293B' }}>wipro</span>
        </div>
      </div>
    );
  }

  if (company.isFlipkart) {
    return (
      <div
        style={{
          width: `${size}px`,
          height: `${size}px`,
          borderRadius: '9px',
          backgroundColor: '#FFEB3B',
          color: '#2874F0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 900,
          fontSize: '18px',
          fontStyle: 'italic',
          flexShrink: 0,
        }}
      >
        f
      </div>
    );
  }

  if (company.isLinkedIn) {
    return (
      <div
        style={{
          width: `${size}px`,
          height: `${size}px`,
          borderRadius: '9px',
          backgroundColor: '#0A66C2',
          color: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 800,
          fontSize: '16px',
          fontFamily: 'sans-serif',
          flexShrink: 0,
        }}
      >
        in
      </div>
    );
  }

  // Fallback
  return (
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: '9px',
        backgroundColor: company.iconBg || '#1E293B',
        color: '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 700,
        fontSize: '13px',
        flexShrink: 0,
      }}
    >
      {company.iconText || company.name?.charAt(0) || 'C'}
    </div>
  );
}
