export default function Avatar({ src, name = 'User', size = 40, className = '', status }) {
  const initials = name
    ? name
        .split(' ')
        .map((part) => part[0])
        .slice(0, 2)
        .join('')
        .toUpperCase()
    : 'U';

  return (
    <div
      style={{
        position: 'relative',
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: '50%',
        flexShrink: 0,
      }}
      className={className}
    >
      {src ? (
        <img
          src={src}
          alt={name}
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            objectFit: 'cover',
            display: 'block',
          }}
          onError={(e) => {
            e.currentTarget.style.display = 'none';
            if (e.currentTarget.nextSibling) {
              e.currentTarget.nextSibling.style.display = 'flex';
            }
          }}
        />
      ) : null}
      <div
        style={{
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          backgroundColor: '#EAF3FF',
          color: '#1463F3',
          display: src ? 'none' : 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 600,
          fontSize: `${Math.max(12, Math.round(size * 0.38))}px`,
          border: '1px solid #D8E6FF',
          userSelect: 'none',
        }}
      >
        {initials}
      </div>

      {status && (
        <span
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: `${Math.max(8, Math.round(size * 0.25))}px`,
            height: `${Math.max(8, Math.round(size * 0.25))}px`,
            borderRadius: '50%',
            backgroundColor: status === 'online' ? '#10B981' : '#94A3B8',
            border: '2px solid #FFFFFF',
          }}
        />
      )}
    </div>
  );
}
