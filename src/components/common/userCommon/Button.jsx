export default function Button({
  children,
  variant = 'primary', // 'primary' | 'secondary' | 'outline' | 'ghost'
  size = 'md',        // 'sm' | 'md' | 'lg'
  icon: Icon,
  iconPosition = 'left',
  fullWidth = false,
  className = '',
  disabled = false,
  onClick,
  type = 'button',
  ...props
}) {
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4.5 py-2.5 text-sm',
    lg: 'px-6 py-3 text-base',
  };

  const variantClasses = {
    primary: 'bg-[#1463F3] text-white border-transparent shadow-[0_2px_8px_rgba(20,99,243,0.24)] hover:bg-[#104ec4]',
    secondary: 'bg-[#EAF3FF] text-[#1463F3] border border-[#D8E6FF] hover:bg-[#dbeafe]',
    outline: 'bg-white text-[#102E6D] border border-[#D8E6FF] hover:bg-[#F8FAFC]',
    ghost: 'bg-transparent text-[#627BAF] hover:bg-[#F1F5F9]',
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 rounded-[10px] font-semibold transition-all duration-200 outline-none whitespace-nowrap ${
        fullWidth ? 'w-full' : 'w-auto'
      } ${disabled ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'} ${sizeClasses[size] || sizeClasses.md} ${
        variantClasses[variant] || variantClasses.primary
      } ${className}`}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon size={size === 'sm' ? 14 : size === 'lg' ? 18 : 16} />}
      {children}
      {Icon && iconPosition === 'right' && <Icon size={size === 'sm' ? 14 : size === 'lg' ? 18 : 16} />}
    </button>
  );
}
