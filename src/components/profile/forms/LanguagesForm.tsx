import React, { useState } from 'react';
import { Save, Plus } from 'lucide-react';
import { FormProps, Language } from '../../../types/profile';

const PROFICIENCY_LEVELS = [
  'Native or Bilingual Proficiency',
  'Full Professional Proficiency',
  'Professional Working Proficiency',
  'Limited Working Proficiency',
  'Elementary Proficiency',
];

export const LanguagesForm: React.FC<FormProps<Language>> = ({
  initialData,
  mode,
  onSave,
  onCancel,
}) => {
  const [formData, setFormData] = useState({
    id: initialData?.id || 'lang-' + Date.now(),
    language: initialData?.language || '',
    proficiency: initialData?.proficiency || 'Full Professional Proficiency',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.language.trim()) return;

    const result: Language = {
      id: formData.id,
      language: formData.language.trim(),
      proficiency: formData.proficiency,
    };

    onSave(result);
  };

  const isAdd = mode === 'add';

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-xs">
      <div>
        <label className="font-semibold text-slate-700 block mb-1">
          Language Name *
        </label>
        <input
          type="text"
          name="language"
          value={formData.language}
          onChange={handleChange}
          placeholder="e.g. English, Bengali, Hindi, German, Spanish"
          className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:border-[#1463F3] text-slate-800 text-[12.5px] bg-white transition-colors"
          required
          autoFocus
        />
      </div>

      <div>
        <label className="font-semibold text-slate-700 block mb-1">
          Proficiency Level
        </label>
        <select
          name="proficiency"
          value={formData.proficiency}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:border-[#1463F3] text-slate-800 text-[12.5px] bg-white cursor-pointer transition-colors"
        >
          {PROFICIENCY_LEVELS.map((level) => (
            <option key={level} value={level}>
              {level}
            </option>
          ))}
        </select>
      </div>

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
          <span>{isAdd ? 'Add Language' : 'Save Changes'}</span>
        </button>
      </div>
    </form>
  );
};

export default LanguagesForm;

