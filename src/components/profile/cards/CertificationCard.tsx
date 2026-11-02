import React from 'react';
import { Award, Plus, Edit2, ExternalLink, Calendar, FileText, CheckCircle2, Trash2, ArrowRight } from 'lucide-react';
import SectionCard from '../../common/userCommon/SectionCard';
import { Certification } from '../../../types/profile';

export interface CertificationCardProps {
  certifications?: Certification[];
  onAdd?: () => void;
  onEdit?: (item?: Certification) => void;
  onDelete?: (id: string) => void;
  onShowAll?: () => void;
}

export const CertificationCard: React.FC<CertificationCardProps> = ({
  certifications = [],
  onAdd,
  onEdit,
  onDelete,
  onShowAll,
}) => {
  const visibleCertifications = certifications.slice(0, 3);

  return (
    <SectionCard className="p-5 bg-white border border-[#E2E8F0] shadow-sm rounded-[16px]">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#F1F5F9]">
        <div className="flex items-center gap-2">
          <Award size={17} className="text-[#1463F3]" />
          <h3 className="text-[14px] font-bold text-[#0F172A]">Certifications</h3>
          {certifications.length > 0 && (
            <span className="text-[11px] font-semibold text-[#1463F3] bg-[#EFF6FF] px-2 py-0.5 rounded-full border border-[#BFDBFE]">
              {certifications.length}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          {onAdd && (
            <button
              type="button"
              onClick={onAdd}
              className="text-[#1463F3] text-[11.5px] font-semibold flex items-center gap-1 hover:underline bg-transparent border-0 cursor-pointer"
            >
              <Plus size={13} />
              <span>Add</span>
            </button>
          )}
        </div>
      </div>

      {/* Certifications List */}
      {certifications.length === 0 ? (
        <div className="py-6 text-center text-[#94A3B8] text-[12px] bg-slate-50 rounded-xl border border-dashed border-slate-200">
          <Award size={24} className="mx-auto text-slate-300 mb-1" />
          <p className="font-medium text-slate-600">No certifications added yet</p>
          <p className="text-[11px] mt-0.5">Upload and showcase your professional credentials</p>
          {onAdd && (
            <button
              type="button"
              onClick={onAdd}
              className="mt-2.5 inline-flex items-center gap-1 text-[11.5px] font-semibold text-[#1463F3] hover:underline cursor-pointer"
            >
              <Plus size={12} />
              <span>Add Certification</span>
            </button>
          )}
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {visibleCertifications.map((cert) => (
            <div
              key={cert.id}
              className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 p-3.5 rounded-xl border border-[#F1F5F9] bg-[#F8FAFC] hover:border-[#BFDBFE] transition-colors"
            >
              <div className="flex items-start gap-3.5 min-w-0 flex-1">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1463F3] to-[#0A47B8] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Award size={20} />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h4 className="text-[13.5px] font-bold text-[#0F172A] leading-tight">
                      {cert.title}
                    </h4>
                    {cert.isVerified !== false && (
                      <span className="flex items-center gap-0.5 text-[10px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-1.5 py-0.2 rounded-full">
                        <CheckCircle2 size={10} /> Verified
                      </span>
                    )}
                  </div>

                  <p className="text-[12.5px] font-medium text-[#475569] mt-0.5">
                    {cert.issuer}
                  </p>

                  <div className="flex items-center gap-2 text-[11px] text-[#64748B] mt-1 flex-wrap">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} className="text-[#94A3B8]" />
                      Issued {cert.issueDate}
                      {cert.expiryDate ? ` · Expires ${cert.expiryDate}` : ''}
                    </span>
                    {cert.credentialId && (
                      <>
                        <span>&bull;</span>
                        <span>ID: {cert.credentialId}</span>
                      </>
                    )}
                  </div>

                  <div className="flex items-center gap-2 mt-2 flex-wrap">
                    {cert.fileName && (
                      <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-white border border-[#CBD5E1] text-[11px] text-[#334155] font-medium">
                        <FileText size={12} className="text-[#1463F3]" />
                        <span className="truncate max-w-[180px]">{cert.fileName}</span>
                      </div>
                    )}

                    {cert.credentialUrl && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#1463F3] hover:underline"
                      >
                        <span>Show credential</span>
                        <ExternalLink size={11} />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1.5 self-end sm:self-start shrink-0">
                {onEdit && (
                  <button
                    type="button"
                    onClick={() => onEdit(cert)}
                    className="p-1.5 text-slate-400 hover:text-[#1463F3] hover:bg-white rounded-lg transition-colors cursor-pointer"
                    title="Edit Certificate"
                  >
                    <Edit2 size={13} />
                  </button>
                )}
                {onDelete && (
                  <button
                    type="button"
                    onClick={() => onDelete(cert.id)}
                    className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-white rounded-lg transition-colors cursor-pointer"
                    title="Delete Certificate"
                  >
                    <Trash2 size={13} />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Show all button when > 3 items */}
      {certifications.length > 3 && onShowAll && (
        <div className="mt-4 pt-3 border-t border-[#F1F5F9]">
          <button
            type="button"
            onClick={onShowAll}
            className="text-[#1463F3] hover:text-[#0F52CC] text-[12.5px] font-semibold flex items-center gap-1.5 hover:underline bg-transparent border-0 cursor-pointer"
          >
            <span>Show all {certifications.length} certifications</span>
            <ArrowRight size={13} />
          </button>
        </div>
      )}
    </SectionCard>
  );
};

export default CertificationCard;
