export default function Button({
  children,
  variant = 'primary', // 'primary' | 'secondary' | 'outline' | 'ghost'
  size = 'md',        // 'sm' | 'md' | 'lg'
  icon: Icon,
  iconPosition = 'left',
  fullWidth = false,
  className = '',
  style = {},
  disabled = false,
  onClick,
  type = 'button',
  ...props
}) {
  const baseStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    borderRadius: '10px',
    fontWeight: 600,
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'all 0.2s ease',
    outline: 'none',
    width: fullWidth ? '100%' : 'auto',
    opacity: disabled ? 0.6 : 1,
    whiteSpace: 'nowrap',
    fontFamily: 'inherit',
  };

  const sizeStyles = {
    sm: { padding: '6px 12px', fontSize: '13px' },
    md: { padding: '9px 18px', fontSize: '14px' },
    lg: { padding: '12px 24px', fontSize: '15px' },
  };

  const variantStyles = {
    primary: {
      backgroundColor: '#1463F3',
      color: '#FFFFFF',
      border: 'none',
      boxShadow: '0 2px 8px rgba(20, 99, 243, 0.24)',
    },
    secondary: {
      backgroundColor: '#EAF3FF',
      color: '#1463F3',
      border: '1px solid #D8E6FF',
    },
    outline: {
      backgroundColor: '#FFFFFF',
      color: '#102E6D',
      border: '1px solid #D8E6FF',
    },
    ghost: {
      backgroundColor: 'transparent',
      color: '#627BAF',
      border: 'none',
    },
  };

  const finalStyle = {
    ...baseStyle,
    ...(sizeStyles[size] || sizeStyles.md),
    ...(variantStyles[variant] || variantStyles.primary),
    ...style,
  };

  return (
    <button
      type={type}
      style={finalStyle}
      disabled={disabled}
      onClick={onClick}
      className={`user-btn ${className}`}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon size={size === 'sm' ? 14 : size === 'lg' ? 18 : 16} />}
      {children}
      {Icon && iconPosition === 'right' && <Icon size={size === 'sm' ? 14 : size === 'lg' ? 18 : 16} />}
    </button>
  );
}
