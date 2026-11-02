import React from 'react';
import { ProfileSection } from '../../../types/profile';
import BaseProfileModal from './BaseProfileModal';
import ProfileFormRenderer, { getSectionModalMeta } from './ProfileFormRenderer';

export interface EditProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  section: ProfileSection | string | null;
  initialData?: any;
  onSave: (savedData: any) => void;
}

export const EditProfileModal: React.FC<EditProfileModalProps> = ({
  isOpen,
  onClose,
  section,
  initialData,
  onSave,
}) => {
  if (!isOpen || !section) return null;

  const meta = getSectionModalMeta(section, 'edit');

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
        mode="edit"
        data={initialData}
        onSave={handleSave}
        onCancel={onClose}
      />
    </BaseProfileModal>
  );
};

export default EditProfileModal;

