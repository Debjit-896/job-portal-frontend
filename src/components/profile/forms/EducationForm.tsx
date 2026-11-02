import React, { useState } from 'react';
import { Save, Plus } from 'lucide-react';
import { FormProps, Education } from '../../../types/profile';

export const EducationForm: React.FC<FormProps<Education>> = ({
  initialData,
  mode,
  onSave,
  onCancel,
}) => {
  const [formData, setFormData] = useState({
    id: initialData?.id || 'edu-' + Date.now(),
    institution: initialData?.institution || '',
    degree: initialData?.degree || '',
    period: initialData?.period || '',
    location: initialData?.location || '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.institution.trim() || !formData.degree.trim()) return;

    const result: Education = {
      id: formData.id,
      institution: formData.institution.trim(),
      degree: formData.degree.trim(),
      period: formData.period.trim() || 'Graduated',
      location: formData.location.trim(),
    };

    onSave(result);
  };

  const isAdd = mode === 'add';

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-xs">
      <div>
        <label className="font-semibold text-slate-700 block mb-1">
          Institution / College / University *
        </label>
        <input
          type="text"
          name="institution"
          value={formData.institution}
          onChange={handleChange}
          placeholder="e.g. Acharyya Prafulla Chandra Roy Polytechnic"
          className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:border-[#1463F3] text-slate-800 text-[12.5px] bg-white transition-colors"
          required
          autoFocus
        />
      </div>

      <div>
        <label className="font-semibold text-slate-700 block mb-1">
          Degree / Diploma / Field of Study *
        </label>
        <input
          type="text"
          name="degree"
          value={formData.degree}
          onChange={handleChange}
          placeholder="e.g. Diploma in Computer Science & Engineering"
          className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:border-[#1463F3] text-slate-800 text-[12.5px] bg-white transition-colors"
          required
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <div>
          <label className="font-semibold text-slate-700 block mb-1">Period / Years</label>
          <input
            type="text"
            name="period"
            value={formData.period}
            onChange={handleChange}
            placeholder="e.g. 2022 – 2025"
            className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:border-[#1463F3] text-slate-800 text-[12.5px] bg-white transition-colors"
          />
        </div>

        <div>
          <label className="font-semibold text-slate-700 block mb-1">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="e.g. Kolkata, West Bengal, India"
            className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:border-[#1463F3] text-slate-800 text-[12.5px] bg-white transition-colors"
          />
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
          <span>{isAdd ? 'Add Education' : 'Save Changes'}</span>
        </button>
      </div>
    </form>
  );
};

export default EducationForm;

