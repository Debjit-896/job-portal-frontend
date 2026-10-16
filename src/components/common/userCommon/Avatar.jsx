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
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`relative rounded-full shrink-0 ${className}`}
    >
      {src ? (
        <img
          src={src}
          alt={name}
          className="w-full h-full rounded-full object-cover block"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
            if (e.currentTarget.nextSibling) {
              e.currentTarget.nextSibling.style.display = 'flex';
            }
          }}
        />
      ) : null}
      <div
        style={{ fontSize: `${Math.max(12, Math.round(size * 0.38))}px` }}
        className={`w-full h-full rounded-full bg-[#EAF3FF] text-[#1463F3] border border-[#D8E6FF] items-center justify-center font-semibold select-none ${
          src ? 'hidden' : 'flex'
        }`}
      >
        {initials}
      </div>

      {status && (
        <span
          style={{
            width: `${Math.max(8, Math.round(size * 0.25))}px`,
            height: `${Math.max(8, Math.round(size * 0.25))}px`,
          }}
          className={`absolute bottom-0 right-0 rounded-full border-2 border-white ${
            status === 'online' ? 'bg-[#10B981]' : 'bg-[#94A3B8]'
          }`}
        />
      )}
    </div>
  );
}
