export default function SectionCard({
  children,
  className = '',
  style = {},
  padding = '18px 20px',
  bordered = true,
  shadow = '0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.03)',
  borderRadius = '14px',
}) {
  return (
    <div
      className={`user-section-card ${className}`}
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius,
        padding,
        border: bordered ? '1px solid #E9EFF8' : 'none',
        boxShadow: shadow,
        position: 'relative',
        ...style,
      }}
    >
      {children}
    </div>
  );
}
