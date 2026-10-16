import { FileText } from 'lucide-react';
import SectionCard from '../../../common/userCommon/SectionCard';

export default function MessageSharedFilesCard({
  files = [
    {
      id: 1,
      name: 'Wipro_Job_Details.pdf',
      size: '1.2 MB',
      date: 'Today, 10:37 AM',
      iconColor: 'bg-[#2563EB]',
    },
    {
      id: 2,
      name: 'Resume_Debjit.pdf',
      size: '856 KB',
      date: 'Yesterday, 6:21 PM',
      iconColor: 'bg-[#8B5CF6]',
    },
    {
      id: 3,
      name: 'Project_Overview.docx',
      size: '432 KB',
      date: '12 Sep, 2026',
      iconColor: 'bg-[#2563EB]',
    },
  ],
  onSeeAll,
  onFileClick,
}) {
  return (
    <SectionCard className="p-5 flex flex-col gap-3.5">
      <div className="flex items-center justify-between">
        <h4 className="text-[13.5px] font-bold text-[#102E6D] m-0">
          Shared Files
        </h4>
        <button
          type="button"
          onClick={onSeeAll}
          className="bg-transparent border-0 text-[#1463F3] text-xs font-semibold cursor-pointer hover:underline p-0"
        >
          See All
        </button>
      </div>

      <div className="flex flex-col gap-3">
        {files.map((file) => (
          <div
            key={file.id}
            onClick={() => onFileClick && onFileClick(file)}
            className="flex items-center gap-3 p-1 rounded-lg hover:bg-slate-50 cursor-pointer transition-colors"
          >
            <div
              className={`w-8 h-8 rounded-lg ${file.iconColor} text-white flex items-center justify-center shrink-0 shadow-xs`}
            >
              <FileText size={16} />
            </div>

            <div className="min-w-0 flex-1">
              <h5 className="text-[12px] font-semibold text-[#1E293B] m-0 truncate">
                {file.name}
              </h5>
              <p className="text-[10px] text-[#94A3B8] mt-0.5 mb-0">
                {file.size} &bull; {file.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}
