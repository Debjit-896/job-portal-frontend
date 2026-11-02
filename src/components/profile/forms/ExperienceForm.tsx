import React, { useState } from 'react';
import { Save, Plus } from 'lucide-react';
import { FormProps, WorkExperience } from '../../../types/profile';

export const ExperienceForm: React.FC<FormProps<WorkExperience>> = ({
  initialData,
  mode,
  onSave,
  onCancel,
}) => {
  const [formData, setFormData] = useState({
    id: initialData?.id || 'exp-' + Date.now(),
    companyName: initialData?.companyName || '',
    role: initialData?.role || '',
    duration: initialData?.duration || '',
    skills: initialData?.skills ? initialData.skills.join(', ') : '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.companyName.trim() || !formData.role.trim()) return;

    const parsedSkills = formData.skills
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);

    const result: WorkExperience = {
      id: formData.id,
      companyName: formData.companyName.trim(),
      role: formData.role.trim(),
      duration: formData.duration.trim() || 'Present',
      skills: parsedSkills,
      company: initialData?.company || {
        id: formData.id,
        name: formData.companyName.trim(),
        iconBg: '#1E293B',
        iconText: formData.companyName.trim().charAt(0).toUpperCase() || 'C',
      },
    };

    onSave(result);
  };

  const isAdd = mode === 'add';

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-xs">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <div>
          <label className="font-semibold text-slate-700 block mb-1">Company Name *</label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="e.g. BrandingGuruji LLP, Google"
            className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:border-[#1463F3] text-slate-800 text-[12.5px] bg-white transition-colors"
            required
            autoFocus
          />
        </div>

        <div>
          <label className="font-semibold text-slate-700 block mb-1">Job Role / Title *</label>
          <input
            type="text"
            name="role"
            value={formData.role}
            onChange={handleChange}
            placeholder="e.g. Full Stack Developer, Junior Web Dev"
            className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:border-[#1463F3] text-slate-800 text-[12.5px] bg-white transition-colors"
            required
          />
        </div>
      </div>

      <div>
        <label className="font-semibold text-slate-700 block mb-1">Duration & Period</label>
        <input
          type="text"
          name="duration"
          value={formData.duration}
          onChange={handleChange}
          placeholder="e.g. Apr 2026 – Present (6 months)"
          className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:border-[#1463F3] text-slate-800 text-[12.5px] bg-white transition-colors"
        />
      </div>

      <div>
        <label className="font-semibold text-slate-700 block mb-1">Skills Used (Comma separated)</label>
        <input
          type="text"
          name="skills"
          value={formData.skills}
          onChange={handleChange}
          placeholder="e.g. React, Next.js, Node.js, Spring Boot"
          className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:border-[#1463F3] text-slate-800 text-[12.5px] bg-white transition-colors"
        />
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
          <span>{isAdd ? 'Add Experience' : 'Save Changes'}</span>
        </button>
      </div>
    </form>
  );
};

export default ExperienceForm;

