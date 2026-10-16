export default function SettingsHeader({
  title = 'Settings',
  subtitle = 'Manage your account, privacy, and preferences',
}) {
  return (
    <div className="mb-2">
      <h1 className="text-2xl font-extrabold text-[#102E6D] tracking-tight mb-1">
        {title}
      </h1>
      <p className="text-[13.5px] text-[#64748B] m-0">
        {subtitle}
      </p>
    </div>
  );
}
