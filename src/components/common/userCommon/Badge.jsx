export default function Badge({
  children,
  variant = 'default', // 'default' | 'primary' | 'success' | 'warning' | 'purple' | 'clickable'
  onClick,
  className = '',
  style = {},
}) {
  const baseStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '4px',
    padding: '4px 10px',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: 500,
    lineHeight: '1.2',
    userSelect: 'none',
    transition: 'all 0.15s ease',
    cursor: onClick ? 'pointer' : 'default',
  };

  const variantStyles = {
    default: {
      backgroundColor: '#F4F8FF',
      color: '#475569',
      border: '1px solid #E2E8F0',
    },
    primary: {
      backgroundColor: '#EAF3FF',
      color: '#1463F3',
      border: '1px solid #D8E6FF',
    },
    success: {
      backgroundColor: '#ECFDF5',
      color: '#059669',
      border: '1px solid #A7F3D0',
    },
    warning: {
      backgroundColor: '#FFFBEB',
      color: '#D97706',
      border: '1px solid #FDE68A',
    },
    purple: {
      backgroundColor: '#F5F3FF',
      color: '#7C3AED',
      border: '1px solid #DDD6FE',
    },
    clickable: {
      backgroundColor: '#FFFFFF',
      color: '#3B82F6',
      border: '1px solid #D8E6FF',
    },
  };

  return (
    <span
      onClick={onClick}
      style={{
        ...baseStyle,
        ...(variantStyles[variant] || variantStyles.default),
        ...style,
      }}
      className={`user-badge ${className}`}
    >
      {children}
    </span>
  );
}
