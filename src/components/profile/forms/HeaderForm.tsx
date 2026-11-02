import React, { useState, useRef } from 'react';
import { Save, Camera } from 'lucide-react';
import { FormProps } from '../../../types/profile';

interface HeaderFormData {
  name: string;
  headline: string;
  location: string;
  age: number;
  email: string;
  shortBio: string;
  avatar: string;
}

export const HeaderForm: React.FC<FormProps<HeaderFormData>> = ({
  initialData,
  onSave,
  onCancel,
}) => {
  const [formData, setFormData] = useState<HeaderFormData>({
    name: initialData?.name || '',
    headline: initialData?.headline || '',
    location: initialData?.location || '',
    age: initialData?.age || 21,
    email: initialData?.email || '',
    shortBio: initialData?.shortBio || '',
    avatar: initialData?.avatar || '',
  });

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAvatarFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setFormData((prev) => ({ ...prev, avatar: url }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      ...formData,
      age: Number(formData.age) || 21,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-xs">
      {/* Avatar Change */}
      <div className="flex items-center gap-4 p-3 bg-slate-50 rounded-xl border border-slate-200">
        <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-xs shrink-0 bg-slate-200">
          <img
            src={formData.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80'}
            alt="Avatar"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <p className="font-semibold text-slate-800 text-[12px] mb-1">Profile Photo</p>
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-100 font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <Camera size={13} />
            <span>Change photo</span>
          </button>
          <input
            type="file"
            ref={fileInputRef}
            accept="image/*"
            className="hidden"
            onChange={handleAvatarFile}
          />
        </div>
      </div>

      <div>
        <label className="font-semibold text-slate-700 block mb-1">Full Name *</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:border-[#1463F3] text-slate-800 text-[12.5px] bg-white transition-colors"
          required
        />
      </div>

      <div>
        <label className="font-semibold text-slate-700 block mb-1">Professional Headline</label>
        <input
          type="text"
          name="headline"
          value={formData.headline}
          onChange={handleChange}
          placeholder="e.g. Full Stack Developer | Java & Web Technologies"
          className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:border-[#1463F3] text-slate-800 text-[12.5px] bg-white transition-colors"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <div>
          <label className="font-semibold text-slate-700 block mb-1">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:border-[#1463F3] text-slate-800 text-[12.5px] bg-white transition-colors"
          />
        </div>
        <div>
          <label className="font-semibold text-slate-700 block mb-1">Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:border-[#1463F3] text-slate-800 text-[12.5px] bg-white transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="font-semibold text-slate-700 block mb-1">Public Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:border-[#1463F3] text-slate-800 text-[12.5px] bg-white transition-colors"
        />
      </div>

      <div>
        <label className="font-semibold text-slate-700 block mb-1">Short Bio</label>
        <textarea
          name="shortBio"
          rows={2}
          value={formData.shortBio}
          onChange={handleChange}
          placeholder="A brief summary that appears directly under your header details"
          className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:border-[#1463F3] text-slate-800 text-[12.5px] bg-white resize-y transition-colors"
        />
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
          <span>Save Changes</span>
        </button>
      </div>
    </form>
  );
};

export default HeaderForm;

