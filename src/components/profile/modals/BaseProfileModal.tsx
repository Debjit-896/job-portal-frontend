import React, { useEffect } from 'react';
import { X, LucideIcon } from 'lucide-react';
import { useBodyScrollLock } from '../../../hooks/useBodyScrollLock';

export interface BaseProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  icon?: LucideIcon;
  maxWidth?: string;
  children: React.ReactNode;
}

export const BaseProfileModal: React.FC<BaseProfileModalProps> = ({
  isOpen,
  onClose,
  title,
  subtitle,
  icon: Icon,
  maxWidth = 'max-w-xl',
  children,
}) => {
  // Lock background scroll when modal is open
  useBodyScrollLock(isOpen);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 overflow-y-auto"
    >
      <div
        className={`bg-white rounded-2xl w-full ${maxWidth} shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-150`}
      >
        {/* Modal Header */}
        <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/70 shrink-0">
          <div className="flex items-center gap-2.5 min-w-0">
            {Icon && (
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#1463F3] flex items-center justify-center shrink-0">
                <Icon size={18} />
              </div>
            )}
            <div className="min-w-0">
              <h3 className="text-[15px] font-bold text-[#0F172A] leading-tight truncate">
                {title}
              </h3>
              {subtitle && (
                <p className="text-[11.5px] text-[#64748B] mt-0.5 truncate">
                  {subtitle}
                </p>
              )}
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-200/60 transition-colors cursor-pointer shrink-0"
            title="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 flex-1 overflow-y-auto">{children}</div>
      </div>
    </div>
  );
};

export default BaseProfileModal;

