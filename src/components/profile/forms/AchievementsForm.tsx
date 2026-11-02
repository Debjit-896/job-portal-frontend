import React, { useState, useRef } from 'react';
import { Save, Plus, Image as ImageIcon, FileText, X } from 'lucide-react';
import { FormProps, Achievement } from '../../../types/profile';

export const AchievementsForm: React.FC<FormProps<Achievement>> = ({
  initialData,
  mode,
  onSave,
  onCancel,
}) => {
  const [formData, setFormData] = useState({
    id: initialData?.id || 'achieve-' + Date.now(),
    title: initialData?.title || '',
    issuer: initialData?.issuer || '',
    date: initialData?.date || '',
    description: initialData?.description || '',
    link: initialData?.link || '',
    photo: initialData?.photo || null,
    fileName: initialData?.fileName || null,
    fileUrl: initialData?.fileUrl || null,
  });

  const photoInputRef = useRef<HTMLInputElement | null>(null);
  const docInputRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setFormData((prev) => ({
        ...prev,
        photo: url,
      }));
    }
  };

  const handleDocUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setFormData((prev) => ({
        ...prev,
        fileName: file.name,
        fileUrl: url,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title.trim()) return;

    const result: Achievement = {
      id: formData.id,
      title: formData.title.trim(),
      issuer: formData.issuer.trim(),
      date: formData.date.trim(),
      description: formData.description.trim(),
      link: formData.link.trim(),
      photo: formData.photo,
      fileName: formData.fileName,
      fileUrl: formData.fileUrl,
    };

    onSave(result);
  };

  const isAdd = mode === 'add';

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3.5 text-xs">
      <div>
        <label className="font-semibold text-slate-700 block mb-1">
          Achievement / Award Title *
        </label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="e.g. Winner - National Hackathon 2024"
          className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:border-[#1463F3] text-slate-800 text-[12.5px] bg-white transition-colors"
          required
          autoFocus
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <div>
          <label className="font-semibold text-slate-700 block mb-1">
            Issuer / Organizer / Event
          </label>
          <input
            type="text"
            name="issuer"
            value={formData.issuer}
            onChange={handleChange}
            placeholder="e.g. TechNova Summit / College Department"
            className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:border-[#1463F3] text-slate-800 text-[12.5px] bg-white transition-colors"
          />
        </div>

        <div>
          <label className="font-semibold text-slate-700 block mb-1">
            Date / Year
          </label>
          <input
            type="text"
            name="date"
            value={formData.date}
            onChange={handleChange}
            placeholder="e.g. Oct 2024"
            className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:border-[#1463F3] text-slate-800 text-[12.5px] bg-white transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="font-semibold text-slate-700 block mb-1">Description</label>
        <textarea
          rows={3}
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Describe your achievement, project, team ranking, or scope..."
          className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:border-[#1463F3] text-slate-800 text-[12.5px] bg-white resize-y transition-colors"
        />
      </div>

      <div>
        <label className="font-semibold text-slate-700 block mb-1">
          Public Recognition Link (Optional)
        </label>
        <input
          type="text"
          name="link"
          value={formData.link}
          onChange={handleChange}
          placeholder="https://hackathon.techfest.org/winners"
          className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:border-[#1463F3] text-slate-800 text-[12.5px] bg-white transition-colors"
        />
      </div>

      {/* Attachments Section */}
      <div className="pt-2 border-t border-slate-200 flex flex-col gap-2.5">
        <label className="font-bold text-slate-800 text-[12px]">
          Attachment: Photo or Verification File
        </label>

        <div className="flex items-center gap-3 flex-wrap">
          <button
            type="button"
            onClick={() => photoInputRef.current?.click()}
            className="px-3 py-1.5 border border-slate-300 rounded-lg bg-white hover:bg-slate-100 text-slate-700 font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <ImageIcon size={14} className="text-[#1463F3]" />
            <span>Upload Photo</span>
          </button>
          <input
            type="file"
            ref={photoInputRef}
            accept="image/*"
            className="hidden"
            onChange={handlePhotoUpload}
          />

          <button
            type="button"
            onClick={() => docInputRef.current?.click()}
            className="px-3 py-1.5 border border-slate-300 rounded-lg bg-white hover:bg-slate-100 text-slate-700 font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <FileText size={14} className="text-emerald-600" />
            <span>Upload Document</span>
          </button>
          <input
            type="file"
            ref={docInputRef}
            accept=".pdf,.doc,.docx"
            className="hidden"
            onChange={handleDocUpload}
          />
        </div>

        {/* Attachment Previews */}
        <div className="flex items-center gap-3 flex-wrap mt-1">
          {formData.photo && (
            <div className="relative w-20 h-20 rounded-lg overflow-hidden border border-slate-200 bg-slate-100 group shadow-xs">
              <img
                src={formData.photo}
                alt="Achievement preview"
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setFormData((p) => ({ ...p, photo: null }))}
                className="absolute top-1 right-1 p-1 bg-black/70 hover:bg-black text-white rounded-full transition-colors cursor-pointer"
                title="Remove photo"
              >
                <X size={11} />
              </button>
            </div>
          )}

          {formData.fileName && (
            <div className="flex items-center gap-2 bg-slate-50 px-3 py-2 rounded-lg border border-slate-200 text-slate-700 font-medium">
              <FileText size={14} className="text-[#1463F3] shrink-0" />
              <span className="truncate max-w-[180px]">{formData.fileName}</span>
              <button
                type="button"
                onClick={() => setFormData((p) => ({ ...p, fileName: null, fileUrl: null }))}
                className="text-slate-400 hover:text-red-500 ml-1 cursor-pointer"
                title="Remove file"
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
          <span>{isAdd ? 'Add Achievement' : 'Save Changes'}</span>
        </button>
      </div>
    </form>
  );
};

export default AchievementsForm;

