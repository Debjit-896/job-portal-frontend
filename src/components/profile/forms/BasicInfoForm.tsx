import React, { useState } from 'react';
import { Save } from 'lucide-react';
import { FormProps, ProfileBasicInfo } from '../../../types/profile';

export const BasicInfoForm: React.FC<FormProps<ProfileBasicInfo>> = ({
  initialData,
  onSave,
  onCancel,
}) => {
  const [formData, setFormData] = useState<ProfileBasicInfo>({
    fullName: initialData?.fullName || '',
    email: initialData?.email || '',
    phone: initialData?.phone || '',
    dob: initialData?.dob || '',
    age: initialData?.age || 21,
    gender: initialData?.gender || 'Male',
    location: initialData?.location || '',
    linkedin: initialData?.linkedin || '',
    github: initialData?.github || '',
    portfolio: initialData?.portfolio || '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      ...formData,
      age: Number(formData.age) || 21,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3.5 text-xs">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <div>
          <label className="font-semibold text-slate-700 block mb-1">Full Name *</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:border-[#1463F3] text-slate-800 text-[12.5px] bg-white transition-colors"
            required
            autoFocus
          />
        </div>

        <div>
          <label className="font-semibold text-slate-700 block mb-1">Email Address *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:border-[#1463F3] text-slate-800 text-[12.5px] bg-white transition-colors"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
        <div>
          <label className="font-semibold text-slate-700 block mb-1">Phone Number</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:border-[#1463F3] text-slate-800 text-[12.5px] bg-white transition-colors"
          />
        </div>

        <div>
          <label className="font-semibold text-slate-700 block mb-1">Date of Birth</label>
          <input
            type="text"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            placeholder="15 May 2005"
            className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:border-[#1463F3] text-slate-800 text-[12.5px] bg-white transition-colors"
          />
        </div>

        <div>
          <label className="font-semibold text-slate-700 block mb-1">Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:border-[#1463F3] text-slate-800 bg-white text-[12.5px] cursor-pointer transition-colors"
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Non-Binary">Non-Binary</option>
            <option value="Prefer not to say">Prefer not to say</option>
          </select>
        </div>
      </div>

      <div>
        <label className="font-semibold text-slate-700 block mb-1">Location</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="City, State, Country"
          className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:border-[#1463F3] text-slate-800 text-[12.5px] bg-white transition-colors"
        />
      </div>

      <div className="pt-2 border-t border-slate-100 flex flex-col gap-3">
        <h4 className="font-bold text-slate-800 text-[12.5px]">Social Profiles & Links</h4>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
          <div>
            <label className="font-semibold text-slate-700 block mb-1">LinkedIn Handle/URL</label>
            <input
              type="text"
              name="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
              placeholder="linkedin.com/in/username"
              className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:border-[#1463F3] text-slate-800 text-[12px] bg-white transition-colors"
            />
          </div>

          <div>
            <label className="font-semibold text-slate-700 block mb-1">GitHub Handle/URL</label>
            <input
              type="text"
              name="github"
              value={formData.github}
              onChange={handleChange}
              placeholder="github.com/username"
              className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:border-[#1463F3] text-slate-800 text-[12px] bg-white transition-colors"
            />
          </div>

          <div>
            <label className="font-semibold text-slate-700 block mb-1">Portfolio URL</label>
            <input
              type="text"
              name="portfolio"
              value={formData.portfolio}
              onChange={handleChange}
              placeholder="https://mywebsite.dev"
              className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:border-[#1463F3] text-slate-800 text-[12px] bg-white transition-colors"
            />
          </div>
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
          <span>Save Basic Info</span>
        </button>
      </div>
    </form>
  );
};

export default BasicInfoForm;

