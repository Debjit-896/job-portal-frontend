import React, { useState } from 'react';
import { Save, Plus, X } from 'lucide-react';
import { FormProps } from '../../../types/profile';

const POPULAR_SUGGESTIONS = [
  'React',
  'Next.js',
  'Node.js',
  'Express.js',
  'TypeScript',
  'Java',
  'Spring Boot',
  'Python',
  'Docker',
  'PostgreSQL',
  'MongoDB',
  'Tailwind CSS',
  'Git',
];

export const SkillsForm: React.FC<FormProps<string[]>> = ({
  initialData = [],
  mode,
  onSave,
  onCancel,
}) => {
  const [skills, setSkills] = useState<string[]>(Array.isArray(initialData) ? initialData : []);
  const [newSkill, setNewSkill] = useState('');

  const handleAddSkill = (skillToAdd?: string) => {
    const trimmed = (skillToAdd || newSkill).trim();
    if (!trimmed) return;
    if (!skills.some((s) => s.toLowerCase() === trimmed.toLowerCase())) {
      setSkills((prev) => [...prev, trimmed]);
    }
    setNewSkill('');
  };

  const handleRemoveSkill = (skillToRemove: string) => {
    setSkills((prev) => prev.filter((s) => s !== skillToRemove));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(skills);
  };

  const unselectedSuggestions = POPULAR_SUGGESTIONS.filter(
    (s) => !skills.some((existing) => existing.toLowerCase() === s.toLowerCase())
  ).slice(0, 8);

  const isAdd = mode === 'add';

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-xs">
      <div>
        <label className="font-semibold text-slate-700 block mb-1">
          {isAdd ? 'Add Skill' : 'Add New Skill'}
        </label>
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                handleAddSkill();
              }
            }}
            placeholder="e.g. Kotlin, Docker, Microservices"
            className="flex-1 px-3 py-2 border border-slate-300 rounded-lg outline-none focus:border-[#1463F3] text-slate-800 text-[12.5px] bg-white transition-colors"
            autoFocus
          />
          <button
            type="button"
            onClick={() => handleAddSkill()}
            className="px-4 py-2 bg-[#1463F3] hover:bg-[#0F52CC] text-white font-semibold rounded-lg flex items-center gap-1 transition-colors cursor-pointer"
          >
            <Plus size={14} />
            <span>Add</span>
          </button>
        </div>
      </div>

      {unselectedSuggestions.length > 0 && (
        <div>
          <p className="text-[11px] font-semibold text-slate-500 mb-1.5">
            Quick suggestions:
          </p>
          <div className="flex flex-wrap gap-1.5">
            {unselectedSuggestions.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => handleAddSkill(s)}
                className="px-2.5 py-1 rounded-md bg-slate-100 hover:bg-[#EFF6FF] hover:text-[#1463F3] text-slate-600 text-[11px] font-medium flex items-center gap-1 transition-colors cursor-pointer"
              >
                <Plus size={11} />
                <span>{s}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      <div>
        <div className="flex items-center justify-between mb-2">
          <label className="font-semibold text-slate-700 text-[12px]">
            Skills List ({skills.length})
          </label>
          {skills.length > 0 && (
            <button
              type="button"
              onClick={() => setSkills([])}
              className="text-red-500 hover:underline text-[11px] font-medium cursor-pointer"
            >
              Clear all
            </button>
          )}
        </div>

        <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 min-h-[90px] flex flex-wrap gap-2 content-start">
          {skills.length === 0 ? (
            <p className="text-slate-400 py-3 text-center w-full">
              No skills added yet. Type a skill name above or click a suggestion.
            </p>
          ) : (
            skills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#EFF6FF] text-[#1463F3] border border-[#BFDBFE] font-semibold text-[11.5px]"
              >
                <span>{skill}</span>
                <button
                  type="button"
                  onClick={() => handleRemoveSkill(skill)}
                  className="p-0.5 hover:bg-[#DBEAFE] rounded text-[#1463F3] transition-colors cursor-pointer"
                  title="Remove"
                >
                  <X size={12} />
                </button>
              </span>
            ))
          )}
        </div>
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
          <span>Save Skills</span>
        </button>
      </div>
    </form>
  );
};

export default SkillsForm;

