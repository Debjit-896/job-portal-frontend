export default function Badge({
  children,
  variant = 'default',
  onClick,
  className = '',
  ...props
}) {
  const variantClasses = {
    default: 'bg-[#F4F8FF] text-[#475569] border-[#E2E8F0]',
    primary: 'bg-[#EAF3FF] text-[#1463F3] border-[#D8E6FF]',
    success: 'bg-[#ECFDF5] text-[#059669] border-[#A7F3D0]',
    warning: 'bg-[#FFFBEB] text-[#D97706] border-[#FDE68A]',
    purple: 'bg-[#F5F3FF] text-[#7C3AED] border-[#DDD6FE]',
    clickable: 'bg-white text-[#3B82F6] border-[#D8E6FF] hover:bg-[#F8FAFC]',
  };

  return (
    <span
      onClick={onClick}
      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium leading-none select-none border transition-all duration-150 ${
        onClick ? 'cursor-pointer' : 'cursor-default'
      } ${variantClasses[variant] || variantClasses.default} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
