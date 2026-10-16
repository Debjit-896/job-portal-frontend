import { useState } from 'react';
import { Search } from 'lucide-react';
import SectionCard from '../../../common/userCommon/SectionCard';

export default function JobFilterSidebar({ onFilterChange }) {
  // State for all filter groups
  const [jobTypes, setJobTypes] = useState({
    'Full-time': true,
    'Part-time': false,
    'Internship': false,
    'Contract': false,
    'Freelance': false,
  });

  const [experienceLevels, setExperienceLevels] = useState({
    'Entry Level (0-2 yrs)': false,
    'Mid Level (2-5 yrs)': false,
    'Senior Level (5+ yrs)': false,
  });

  const [locations, setLocations] = useState({
    'Remote': true,
    'Kolkata, West Bengal': false,
    'Bangalore, Karnataka': false,
    'Hyderabad, Telangana': false,
    'Pune, Maharashtra': false,
  });

  const [salaryRanges, setSalaryRanges] = useState({
    'Not Disclosed': false,
    '₹0 - ₹5 LPA': false,
    '₹5 - ₹10 LPA': false,
    '₹10 - ₹20 LPA': false,
    '₹20 LPA+': false,
  });

  const [skillSearch, setSkillSearch] = useState('');
  const [selectedSkills, setSelectedSkills] = useState(['React', 'Next.js', 'Java']);

  const handleClearAll = () => {
    setJobTypes({
      'Full-time': false,
      'Part-time': false,
      'Internship': false,
      'Contract': false,
      'Freelance': false,
    });
    setExperienceLevels({
      'Entry Level (0-2 yrs)': false,
      'Mid Level (2-5 yrs)': false,
      'Senior Level (5+ yrs)': false,
    });
    setLocations({
      'Remote': false,
      'Kolkata, West Bengal': false,
      'Bangalore, Karnataka': false,
      'Hyderabad, Telangana': false,
      'Pune, Maharashtra': false,
    });
    setSalaryRanges({
      'Not Disclosed': false,
      '₹0 - ₹5 LPA': false,
      '₹5 - ₹10 LPA': false,
      '₹10 - ₹20 LPA': false,
      '₹20 LPA+': false,
    });
    setSelectedSkills([]);
  };

  const toggleCheckbox = (setter) => (key) => {
    setter((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleSkill = (skill) => {
    setSelectedSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );
  };

  const jobTypeCounts = {
    'Full-time': '3,842',
    'Part-time': '312',
    'Internship': '621',
    'Contract': '174',
    'Freelance': '96',
  };

  const experienceCounts = {
    'Entry Level (0-2 yrs)': '1,942',
    'Mid Level (2-5 yrs)': '1,876',
    'Senior Level (5+ yrs)': '1,024',
  };

  const locationCounts = {
    'Remote': '1,203',
    'Kolkata, West Bengal': '932',
    'Bangalore, Karnataka': '841',
    'Hyderabad, Telangana': '620',
    'Pune, Maharashtra': '548',
  };

  const salaryCounts = {
    'Not Disclosed': '1,203',
    '₹0 - ₹5 LPA': '1,842',
    '₹5 - ₹10 LPA': '1,276',
    '₹10 - ₹20 LPA': '892',
    '₹20 LPA+': '526',
  };

  const allSkills = ['React', 'Next.js', 'Java', 'Spring Boot', 'Node.js', 'TypeScript'];

  return (
    <aside className="w-[255px] shrink-0">
      <SectionCard className="p-[18px_20px]">
        {/* Header with Clear All */}
        <div className="flex items-center justify-between mb-[18px]">
          <h3 className="text-[15px] font-bold text-[#102E6D]">Filters</h3>
          <button
            type="button"
            onClick={handleClearAll}
            className="bg-transparent border-0 text-[#1463F3] text-xs font-semibold cursor-pointer hover:underline"
          >
            Clear All
          </button>
        </div>

        {/* 1. Job Type */}
        <div className="mb-5">
          <h4 className="text-[12.5px] font-bold text-[#102E6D] mb-2.5">
            Job Type
          </h4>
          <div className="flex flex-col gap-2">
            {Object.keys(jobTypes).map((type) => (
              <label
                key={type}
                className="flex items-center justify-between cursor-pointer text-[12.5px] text-[#475569] select-none"
              >
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={jobTypes[type]}
                    onChange={() => toggleCheckbox(setJobTypes)(type)}
                    className="accent-[#1463F3] w-3.5 h-3.5 rounded cursor-pointer"
                  />
                  <span>{type}</span>
                </div>
                <span className="text-[11px] text-[#94A3B8]">{jobTypeCounts[type]}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-[#F1F5F9] mb-4" />

        {/* 2. Experience Level */}
        <div className="mb-5">
          <h4 className="text-[12.5px] font-bold text-[#102E6D] mb-2.5">
            Experience Level
          </h4>
          <div className="flex flex-col gap-2">
            {Object.keys(experienceLevels).map((level) => (
              <label
                key={level}
                className="flex items-center justify-between cursor-pointer text-[12.5px] text-[#475569] select-none"
              >
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={experienceLevels[level]}
                    onChange={() => toggleCheckbox(setExperienceLevels)(level)}
                    className="accent-[#1463F3] w-3.5 h-3.5 rounded cursor-pointer"
                  />
                  <span>{level}</span>
                </div>
                <span className="text-[11px] text-[#94A3B8]">{experienceCounts[level]}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-[#F1F5F9] mb-4" />

        {/* 3. Location */}
        <div className="mb-5">
          <h4 className="text-[12.5px] font-bold text-[#102E6D] mb-2.5">
            Location
          </h4>
          <div className="flex flex-col gap-2">
            {Object.keys(locations).map((loc) => (
              <label
                key={loc}
                className="flex items-center justify-between cursor-pointer text-[12.5px] text-[#475569] select-none"
              >
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={locations[loc]}
                    onChange={() => toggleCheckbox(setLocations)(loc)}
                    className="accent-[#1463F3] w-3.5 h-3.5 rounded cursor-pointer"
                  />
                  <span>{loc}</span>
                </div>
                <span className="text-[11px] text-[#94A3B8]">{locationCounts[loc]}</span>
              </label>
            ))}
          </div>
          <button
            type="button"
            className="bg-transparent border-0 text-[#1463F3] text-[11.5px] font-semibold cursor-pointer mt-2 p-0 hover:underline"
          >
            + More locations
          </button>
        </div>

        {/* Divider */}
        <div className="h-px bg-[#F1F5F9] mb-4" />

        {/* 4. Salary Range (per annum) */}
        <div className="mb-5">
          <h4 className="text-[12.5px] font-bold text-[#102E6D] mb-2.5">
            Salary Range (per annum)
          </h4>
          <div className="flex flex-col gap-2">
            {Object.keys(salaryRanges).map((sal) => (
              <label
                key={sal}
                className="flex items-center justify-between cursor-pointer text-[12.5px] text-[#475569] select-none"
              >
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={salaryRanges[sal]}
                    onChange={() => toggleCheckbox(setSalaryRanges)(sal)}
                    className="accent-[#1463F3] w-3.5 h-3.5 rounded cursor-pointer"
                  />
                  <span>{sal}</span>
                </div>
                <span className="text-[11px] text-[#94A3B8]">{salaryCounts[sal]}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-[#F1F5F9] mb-4" />

        {/* 5. Skills */}
        <div>
          <h4 className="text-[12.5px] font-bold text-[#102E6D] mb-2.5">
            Skills
          </h4>

          {/* Search skills input */}
          <div className="flex items-center gap-1.5 bg-[#F8FAFC] rounded-md border border-[#E2E8F0] px-2.5 py-1.5 mb-2.5">
            <Search size={13} className="text-[#94A3B8]" />
            <input
              type="text"
              placeholder="Search skills..."
              value={skillSearch}
              onChange={(e) => setSkillSearch(e.target.value)}
              className="border-0 bg-transparent outline-none text-xs w-full text-[#102E6D] placeholder:text-[#94A3B8]"
            />
          </div>

          {/* Skill pills */}
          <div className="flex flex-wrap gap-1.5 mb-2">
            {allSkills
              .filter((s) => s.toLowerCase().includes(skillSearch.toLowerCase()))
              .map((skill) => {
                const isSelected = selectedSkills.includes(skill);
                return (
                  <button
                    key={skill}
                    type="button"
                    onClick={() => toggleSkill(skill)}
                    className={`px-2.5 py-[3px] rounded-[14px] text-[11.5px] border cursor-pointer transition-all duration-150 ${
                      isSelected
                        ? 'border-[#1463F3] bg-[#EAF3FF] text-[#1463F3] font-semibold'
                        : 'border-[#D5E3F8] bg-white text-[#475569] font-medium hover:border-[#1463F3]/50'
                    }`}
                  >
                    {skill}
                  </button>
                );
              })}
          </div>

          <button
            type="button"
            className="bg-transparent border-0 text-[#1463F3] text-[11.5px] font-semibold cursor-pointer p-0 hover:underline"
          >
            + More
          </button>
        </div>
      </SectionCard>
    </aside>
  );
}

