import React from 'react';
import { ProfileSection } from '../../../types/profile';
import BaseProfileModal from './BaseProfileModal';
import ProfileFormRenderer, { getSectionModalMeta } from './ProfileFormRenderer';

export interface AddProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  section: ProfileSection | string | null;
  initialData?: any;
  onSave: (savedData: any) => void;
}

export const AddProfileModal: React.FC<AddProfileModalProps> = ({
  isOpen,
  onClose,
  section,
  initialData,
  onSave,
}) => {
  if (!isOpen || !section) return null;

  const meta = getSectionModalMeta(section, 'add');

  const handleSave = (savedData: any) => {
    onSave(savedData);
    onClose();
  };

  return (
    <BaseProfileModal
      isOpen={isOpen}
      onClose={onClose}
      title={meta.title}
      subtitle={meta.subtitle}
      icon={meta.icon}
      maxWidth={meta.maxWidth}
    >
      <ProfileFormRenderer
        section={section}
        mode="add"
        data={initialData}
        onSave={handleSave}
        onCancel={onClose}
      />
    </BaseProfileModal>
  );
};

export default AddProfileModal;

