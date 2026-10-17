import { useState } from 'react';
import { X, Save } from 'lucide-react';

export default function EditProfileModal({
  isOpen,
  onClose,
  initialData,
  onSave,
  section = 'all', // 'all' | 'about' | 'basic' | 'skills' | 'languages' | etc.
}) {
  const [formData, setFormData] = useState({
    name: initialData?.name || '',
    headline: initialData?.headline || '',
    location: initialData?.location || '',
    age: initialData?.age || 21,
    email: initialData?.email || '',
    shortBio: initialData?.shortBio || '',
    about: initialData?.about || '',
    phone: initialData?.basicInfo?.phone || '',
    dob: initialData?.basicInfo?.dob || '',
    gender: initialData?.basicInfo?.gender || 'Male',
    linkedin: initialData?.basicInfo?.linkedin || '',
    github: initialData?.basicInfo?.github || '',
    portfolio: initialData?.basicInfo?.portfolio || '',
    skills: initialData?.skills ? initialData.skills.join(', ') : '',
    languages: initialData?.languages || '',
    interests: initialData?.interests || '',
    achievements: initialData?.achievements || '',
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedSkills = formData.skills
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);

    onSave({
      ...initialData,
      name: formData.name,
      headline: formData.headline,
      location: formData.location,
      age: formData.age,
      email: formData.email,
      shortBio: formData.shortBio,
      about: formData.about,
      basicInfo: {
        ...initialData.basicInfo,
        fullName: formData.name,
        email: formData.email,
        phone: formData.phone,
        dob: formData.dob,
        age: formData.age,
        gender: formData.gender,
        location: formData.location,
        linkedin: formData.linkedin,
        github: formData.github,
        portfolio: formData.portfolio,
      },
      skills: updatedSkills,
      languages: formData.languages,
      interests: formData.interests,
      achievements: formData.achievements,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50/70">
          <div>
            <h3 className="text-base font-bold text-slate-800">
              Edit Profile
            </h3>
            <p className="text-xs text-slate-500">
              Update your public candidate profile details
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-200/60 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 flex flex-col gap-4 text-xs">
          {/* Basic Header Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="font-semibold text-slate-700 block mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:border-[#1463F3] text-slate-800"
                required
              />
            </div>

            <div>
              <label className="font-semibold text-slate-700 block mb-1">
                Professional Headline
              </label>
              <input
                type="text"
                name="headline"
                value={formData.headline}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:border-[#1463F3] text-slate-800"
                placeholder="Full Stack Developer | Java & Web"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="font-semibold text-slate-700 block mb-1">
                Location
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:border-[#1463F3] text-slate-800"
              />
            </div>

            <div>
              <label className="font-semibold text-slate-700 block mb-1">
                Age
              </label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:border-[#1463F3] text-slate-800"
              />
            </div>

            <div>
              <label className="font-semibold text-slate-700 block mb-1">
                Gender
              </label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:border-[#1463F3] text-slate-800 bg-white"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Non-Binary">Non-Binary</option>
                <option value="Prefer not to say">Prefer not to say</option>
              </select>
            </div>
          </div>

          <div>
            <label className="font-semibold text-slate-700 block mb-1">
              Short Bio (Subtitle in Header)
            </label>
            <input
              type="text"
              name="shortBio"
              value={formData.shortBio}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:border-[#1463F3] text-slate-800"
            />
          </div>

          <div>
            <label className="font-semibold text-slate-700 block mb-1">
              About Me Paragraph
            </label>
            <textarea
              name="about"
              rows={3}
              value={formData.about}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:border-[#1463F3] text-slate-800"
            />
          </div>

          {/* Contact Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="font-semibold text-slate-700 block mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:border-[#1463F3] text-slate-800"
              />
            </div>

            <div>
              <label className="font-semibold text-slate-700 block mb-1">
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:border-[#1463F3] text-slate-800"
              />
            </div>
          </div>

          {/* Social Profiles */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="font-semibold text-slate-700 block mb-1">
                LinkedIn (Handle/URL)
              </label>
              <input
                type="text"
                name="linkedin"
                value={formData.linkedin}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:border-[#1463F3] text-slate-800"
              />
            </div>

            <div>
              <label className="font-semibold text-slate-700 block mb-1">
                GitHub (Handle/URL)
              </label>
              <input
                type="text"
                name="github"
                value={formData.github}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:border-[#1463F3] text-slate-800"
              />
            </div>

            <div>
              <label className="font-semibold text-slate-700 block mb-1">
                Portfolio (URL)
              </label>
              <input
                type="text"
                name="portfolio"
                value={formData.portfolio}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:border-[#1463F3] text-slate-800"
              />
            </div>
          </div>

          {/* Skills (Comma separated) */}
          <div>
            <label className="font-semibold text-slate-700 block mb-1">
              Skills (Comma Separated)
            </label>
            <input
              type="text"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              placeholder="Java, Spring Boot, React, Next.js, Node.js"
              className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:border-[#1463F3] text-slate-800"
            />
          </div>

          {/* Additional details */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="font-semibold text-slate-700 block mb-1">
                Languages
              </label>
              <input
                type="text"
                name="languages"
                value={formData.languages}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:border-[#1463F3] text-slate-800"
              />
            </div>

            <div>
              <label className="font-semibold text-slate-700 block mb-1">
                Interests
              </label>
              <input
                type="text"
                name="interests"
                value={formData.interests}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:border-[#1463F3] text-slate-800"
              />
            </div>

            <div>
              <label className="font-semibold text-slate-700 block mb-1">
                Achievements
              </label>
              <input
                type="text"
                name="achievements"
                value={formData.achievements}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:border-[#1463F3] text-slate-800"
              />
            </div>
          </div>

          {/* Footer Controls */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-200 mt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg border border-slate-300 text-slate-600 font-semibold hover:bg-slate-100 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-lg bg-[#1463F3] hover:bg-[#0F52CC] text-white font-semibold flex items-center gap-1.5 shadow-sm transition-all"
            >
              <Save size={13} />
              <span>Save Changes</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
