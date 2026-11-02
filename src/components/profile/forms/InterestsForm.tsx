import React, { useState } from 'react';
import { Save, Plus, X } from 'lucide-react';
import { FormProps } from '../../../types/profile';

const SUGGESTED_INTERESTS = [
  'Coding',
  'Open Source',
  'Tech News',
  'Gaming',
  'Travel',
  'Artificial Intelligence',
  'System Design',
  'UI/UX Design',
];

export const InterestsForm: React.FC<FormProps<string>> = ({
  initialData = '',
  mode,
  onSave,
  onCancel,
}) => {
  const initialList = Array.isArray(initialData)
    ? initialData
    : typeof initialData === 'string'
    ? initialData
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean)
    : [];

  const [interestList, setInterestList] = useState<string[]>(initialList);
  const [newInterest, setNewInterest] = useState('');

  const handleAdd = (val?: string) => {
    const trimmed = (val || newInterest).trim();
    if (!trimmed) return;
    if (!interestList.some((i) => i.toLowerCase() === trimmed.toLowerCase())) {
      setInterestList((prev) => [...prev, trimmed]);
    }
    setNewInterest('');
  };

  const handleRemove = (val: string) => {
    setInterestList((prev) => prev.filter((i) => i !== val));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(interestList.join(', '));
  };

  const remainingSuggestions = SUGGESTED_INTERESTS.filter(
    (s) => !interestList.some((i) => i.toLowerCase() === s.toLowerCase())
  ).slice(0, 6);

  const isAdd = mode === 'add';

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-xs">
      <div>
        <label className="font-semibold text-slate-700 block mb-1">
          {isAdd ? 'Add Interest' : 'Add New Interest'}
        </label>
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={newInterest}
            onChange={(e) => setNewInterest(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                handleAdd();
              }
            }}
            placeholder="e.g. AI Research, Cloud Architecture"
            className="flex-1 px-3 py-2 border border-slate-300 rounded-lg outline-none focus:border-[#1463F3] text-slate-800 text-[12.5px] bg-white transition-colors"
            autoFocus
          />
          <button
            type="button"
            onClick={() => handleAdd()}
            className="px-4 py-2 bg-[#1463F3] hover:bg-[#0F52CC] text-white font-semibold rounded-lg flex items-center gap-1 transition-colors cursor-pointer"
          >
            <Plus size={14} />
            <span>Add</span>
          </button>
        </div>
      </div>

      {remainingSuggestions.length > 0 && (
        <div>
          <p className="text-[11px] font-semibold text-slate-500 mb-1.5">Suggestions:</p>
          <div className="flex flex-wrap gap-1.5">
            {remainingSuggestions.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => handleAdd(s)}
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
        <label className="font-semibold text-slate-700 block mb-2">
          Selected Interests ({interestList.length})
        </label>
        <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 min-h-[90px] flex flex-wrap gap-2 content-start">
          {interestList.length === 0 ? (
            <p className="text-slate-400 py-3 text-center w-full">No interests selected yet.</p>
          ) : (
            interestList.map((interest) => (
              <span
                key={interest}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white text-slate-700 border border-slate-200 font-semibold text-[11.5px]"
              >
                <span>{interest}</span>
                <button
                  type="button"
                  onClick={() => handleRemove(interest)}
                  className="p-0.5 hover:bg-slate-100 rounded text-slate-400 hover:text-red-500 transition-colors cursor-pointer"
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
          {isAdd ? <Plus size={13} strokeWidth={2.5} /> : <Save size={13} />}
          <span>{isAdd ? 'Add Interests' : 'Save Interests'}</span>
        </button>
      </div>
    </form>
  );
};

export default InterestsForm;
