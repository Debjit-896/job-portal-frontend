import React, { useState } from 'react';
import { Save } from 'lucide-react';
import { FormProps } from '../../../types/profile';

export const AboutMeForm: React.FC<FormProps<string>> = ({
  initialData = '',
  onSave,
  onCancel,
}) => {
  const [aboutText, setAboutText] = useState<string>(initialData || '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(aboutText);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-xs">
      <div>
        <label className="font-semibold text-slate-700 block mb-1.5">
          About Description
        </label>
        <textarea
          rows={6}
          value={aboutText}
          onChange={(e) => setAboutText(e.target.value)}
          placeholder="Write a comprehensive overview of your professional career, passion, technical skills, and goals..."
          className="w-full p-3 border border-slate-300 rounded-xl outline-none focus:border-[#1463F3] text-slate-800 text-[12.5px] leading-relaxed resize-y bg-white transition-colors"
          required
          autoFocus
        />
        <p className="text-[11px] text-slate-400 mt-1">
          Characters: {aboutText.length} | Recommended: 150 – 500 characters
        </p>
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
          <Save size={13} />
          <span>Save About Me</span>
        </button>
      </div>
    </form>
  );
};

export default AboutMeForm;

