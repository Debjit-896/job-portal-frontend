import React from 'react';
import ProfileActivityCard from '../../feed/userFeed/profile/ProfileActivityCard';

export interface ActivityCardProps {
  activities?: {
    posts?: any[];
    comments?: any[];
    documents?: any[];
  };
  onOpenCreatePost?: () => void;
  onViewAll?: () => void;
  onDeleteActivity?: (category: string, id: string | number) => void;
}

export const ActivityCard: React.FC<ActivityCardProps> = (props) => {
  return <ProfileActivityCard {...(props as any)} />;
};

export default ActivityCard;
