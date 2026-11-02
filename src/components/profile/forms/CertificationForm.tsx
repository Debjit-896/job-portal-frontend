import React, { useState, useRef } from 'react';
import { Save, Plus, Upload, FileText, X } from 'lucide-react';
import { FormProps, Certification } from '../../../types/profile';

export const CertificationForm: React.FC<FormProps<Certification>> = ({
  initialData,
  mode,
  onSave,
  onCancel,
}) => {
  const [formData, setFormData] = useState({
    id: initialData?.id || 'cert-' + Date.now(),
    title: initialData?.title || '',
    issuer: initialData?.issuer || '',
    issueDate: initialData?.issueDate || '',
    doesNotExpire: initialData?.expiryDate === 'No Expiration' || !initialData?.expiryDate,
    expiryDate: initialData?.expiryDate === 'No Expiration' ? '' : initialData?.expiryDate || '',
    credentialId: initialData?.credentialId || '',
    credentialUrl: initialData?.credentialUrl || '',
    fileName: initialData?.fileName || '',
    certificateUrl: initialData?.certificateUrl || '',
  });

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setFormData((prev) => ({
        ...prev,
        fileName: file.name,
        certificateUrl: url,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title.trim() || !formData.issuer.trim()) return;

    const result: Certification = {
      id: formData.id,
      title: formData.title.trim(),
      issuer: formData.issuer.trim(),
      issueDate: formData.issueDate.trim() || '2025',
      expiryDate: formData.doesNotExpire ? 'No Expiration' : formData.expiryDate.trim(),
      credentialId: formData.credentialId.trim(),
      credentialUrl: formData.credentialUrl.trim(),
      fileName: formData.fileName,
      certificateUrl: formData.certificateUrl,
      isVerified: true,
    };

    onSave(result);
  };

  const isAdd = mode === 'add';

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3.5 text-xs">
      <div>
        <label className="font-semibold text-slate-700 block mb-1">
          Certification Name *
        </label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="e.g. AWS Certified Solutions Architect – Associate"
          className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:border-[#1463F3] text-slate-800 text-[12.5px] bg-white transition-colors"
          required
          autoFocus
        />
      </div>

      <div>
        <label className="font-semibold text-slate-700 block mb-1">
          Issuing Organization *
        </label>
        <input
          type="text"
          name="issuer"
          value={formData.issuer}
          onChange={handleChange}
          placeholder="e.g. Amazon Web Services (AWS), Meta, Coursera"
          className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:border-[#1463F3] text-slate-800 text-[12.5px] bg-white transition-colors"
          required
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <div>
          <label className="font-semibold text-slate-700 block mb-1">Issue Date</label>
          <input
            type="text"
            name="issueDate"
            value={formData.issueDate}
            onChange={handleChange}
            placeholder="e.g. Jan 2025"
            className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:border-[#1463F3] text-slate-800 text-[12.5px] bg-white transition-colors"
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-1">
            <label className="font-semibold text-slate-700">Expiration Date</label>
            <label className="inline-flex items-center gap-1 text-[11px] text-slate-500 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.doesNotExpire}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, doesNotExpire: e.target.checked }))
                }
                className="rounded text-[#1463F3]"
              />
              <span>No expiry</span>
            </label>
          </div>
          <input
            type="text"
            disabled={formData.doesNotExpire}
            value={formData.doesNotExpire ? 'Does not expire' : formData.expiryDate}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, expiryDate: e.target.value }))
            }
            placeholder="e.g. Jan 2028"
            className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:border-[#1463F3] text-slate-800 text-[12.5px] bg-white disabled:bg-slate-100 disabled:text-slate-400 transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <div>
          <label className="font-semibold text-slate-700 block mb-1">Credential ID</label>
          <input
            type="text"
            name="credentialId"
            value={formData.credentialId}
            onChange={handleChange}
            placeholder="e.g. AWS-8924021"
            className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:border-[#1463F3] text-slate-800 text-[12.5px] bg-white transition-colors"
          />
        </div>

        <div>
          <label className="font-semibold text-slate-700 block mb-1">Credential URL</label>
          <input
            type="text"
            name="credentialUrl"
            value={formData.credentialUrl}
            onChange={handleChange}
            placeholder="https://aws.amazon.com/verification"
            className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:border-[#1463F3] text-slate-800 text-[12.5px] bg-white transition-colors"
          />
        </div>
      </div>

      {/* Upload Certificate File */}
      <div>
        <label className="font-semibold text-slate-700 block mb-1">
          Upload Certificate File (Image or PDF)
        </label>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="px-3 py-2 border border-slate-300 rounded-lg bg-white hover:bg-slate-100 text-slate-700 font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <Upload size={13} />
            <span>Choose Certificate File</span>
          </button>
          <input
            type="file"
            ref={fileInputRef}
            accept="image/*,.pdf"
            className="hidden"
            onChange={handleFileUpload}
          />

          {formData.fileName && (
            <div className="flex items-center gap-1.5 text-slate-700 font-medium bg-slate-50 px-2.5 py-1.5 rounded-lg border border-slate-200 truncate max-w-[220px]">
              <FileText size={13} className="text-[#1463F3] shrink-0" />
              <span className="truncate">{formData.fileName}</span>
              <button
                type="button"
                onClick={() =>
                  setFormData((prev) => ({ ...prev, fileName: '', certificateUrl: '' }))
                }
                className="text-slate-400 hover:text-red-500 ml-1 cursor-pointer"
              >
                <X size={12} />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Footer Actions */}
      <div className="flex items-center justify-end gap-2.5 pt-3.5 border-t border-slate-100 mt-2">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 rounded-lg border border-slate-300 text-slate-600 font-semibold hover:bg-slate-100 transition-colors cursor-pointer"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-5 py-2 rounded-lg bg-[#1463F3] hover:bg-[#0F52CC] text-white font-semibold flex items-center gap-1.5 shadow-xs transition-all cursor-pointer"
        >
          {isAdd ? <Plus size={13} strokeWidth={2.5} /> : <Save size={13} />}
          <span>{isAdd ? 'Add Certification' : 'Save Changes'}</span>
        </button>
      </div>
    </form>
  );
};

export default CertificationForm;

