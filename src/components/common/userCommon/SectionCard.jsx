export default function SectionCard({
  children,
  className = '',
  padding = 'p-4 md:p-5',
  bordered = true,
  shadow = 'shadow-[0_1px_3px_rgba(0,0,0,0.05)]',
  rounded = 'rounded-[14px]',
  style,
  ...props
}) {
  return (
    <div
      className={`relative bg-white ${rounded} ${bordered ? 'border border-[#E9EFF8]' : ''} ${shadow} ${padding} ${className}`}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
}
