import SectionCard from '../../../common/userCommon/SectionCard';

export default function RecentActivityCard({
  activities = [
    {
      id: 1,
      name: 'Rohit Sharma',
      action: 'viewed your profile',
      time: '2 hours ago',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=120&q=80',
    },
    {
      id: 2,
      name: 'Sneha Roy',
      action: 'accepted your connection',
      time: '6 hours ago',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80',
    },
    {
      id: 3,
      name: 'TCS',
      action: 'posted a new job',
      time: '8 hours ago',
      iconBg: 'bg-[#4F46E5]',
      iconType: 'users',
    },
    {
      id: 4,
      name: 'Accenture',
      action: 'started following you',
      time: '1 day ago',
      iconBg: 'bg-[#0D9488]',
      iconType: 'building',
    },
    {
      id: 5,
      name: 'Ankit Das',
      action: 'commented on your post',
      time: '1 day ago',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
    },
  ],
}) {
  return (
    <SectionCard className="p-4.5">
      <h3 className="text-[14px] font-bold text-[#102E6D] mb-3.5">
        Recent Activity
      </h3>

      <div className="flex flex-col gap-3.5">
        {activities.map((item) => (
          <div key={item.id} className="flex items-start gap-2.5">
            {/* Avatar or Icon */}
            {item.avatar ? (
              <img
                src={item.avatar}
                alt={item.name}
                className="w-8 h-8 rounded-full object-cover shrink-0 mt-0.5"
              />
            ) : (
              <div
                className={`w-8 h-8 rounded-full ${item.iconBg || 'bg-[#1463F3]'} text-white flex items-center justify-center text-xs font-semibold shrink-0 mt-0.5`}
              >
                {item.name.charAt(0)}
              </div>
            )}

            {/* Info */}
            <div className="flex-1 min-w-0">
              <p className="text-[12px] text-[#1E293B] leading-tight mb-0.5">
                <span className="font-semibold text-[#102E6D]">{item.name}</span>{' '}
                <span className="text-[#64748B]">{item.action}</span>
              </p>
              <p className="text-[10.5px] text-[#94A3B8]">{item.time}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}
