import React, { useState } from 'react';
import { Save, Plus } from 'lucide-react';
import { FormProps, Project } from '../../../types/profile';

export const ProjectsForm: React.FC<FormProps<Project>> = ({
  initialData,
  mode,
  onSave,
  onCancel,
}) => {
  const [formData, setFormData] = useState({
    id: initialData?.id || 'proj-' + Date.now(),
    title: initialData?.title || '',
    description: initialData?.description || '',
    tags: initialData?.tags ? initialData.tags.join(', ') : '',
    isCloud: initialData?.isCloud !== undefined ? initialData.isCloud : true,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title.trim()) return;

    const parsedTags = formData.tags
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);

    const result: Project = {
      id: formData.id,
      title: formData.title.trim(),
      description: formData.description.trim(),
      tags: parsedTags,
      isCloud: formData.isCloud,
    };

    onSave(result);
  };

  const isAdd = mode === 'add';

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-xs">
      <div>
        <label className="font-semibold text-slate-700 block mb-1">
          Project Title *
        </label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="e.g. JobNova AI, NexKart"
          className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:border-[#1463F3] text-slate-800 text-[12.5px] bg-white transition-colors"
          required
          autoFocus
        />
      </div>

      <div>
        <label className="font-semibold text-slate-700 block mb-1">Description</label>
        <textarea
          rows={3}
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Describe the application features, architecture, and impact..."
          className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:border-[#1463F3] text-slate-800 text-[12.5px] bg-white resize-y transition-colors"
        />
      </div>

      <div>
        <label className="font-semibold text-slate-700 block mb-1">
          Tech Stack Tags (Comma separated)
        </label>
        <input
          type="text"
          name="tags"
          value={formData.tags}
          onChange={handleChange}
          placeholder="e.g. Spring Boot, React, MySQL, Docker"
          className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:border-[#1463F3] text-slate-800 text-[12.5px] bg-white transition-colors"
        />
      </div>

      <div className="flex items-center gap-2 mt-0.5">
        <input
          type="checkbox"
          id="isCloud"
          checked={formData.isCloud}
          onChange={(e) => setFormData((prev) => ({ ...prev, isCloud: e.target.checked }))}
          className="w-4 h-4 text-[#1463F3] rounded border-slate-300 cursor-pointer"
        />
        <label htmlFor="isCloud" className="font-medium text-slate-700 cursor-pointer">
          Cloud / Deployed Web Application
        </label>
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
          <span>{isAdd ? 'Add Project' : 'Save Changes'}</span>
        </button>
      </div>
    </form>
  );
};

export default ProjectsForm;

