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
    <aside style={{ width: '255px', flexShrink: 0 }}>
      <SectionCard padding="20px 18px">
        {/* Header with Clear All */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '18px',
          }}
        >
          <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#102E6D' }}>Filters</h3>
          <button
            type="button"
            onClick={handleClearAll}
            style={{
              background: 'none',
              border: 'none',
              color: '#1463F3',
              fontSize: '12px',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            Clear All
          </button>
        </div>

        {/* 1. Job Type */}
        <div style={{ marginBottom: '20px' }}>
          <h4 style={{ fontSize: '12.5px', fontWeight: 700, color: '#102E6D', marginBottom: '10px' }}>
            Job Type
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {Object.keys(jobTypes).map((type) => (
              <label
                key={type}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  fontSize: '12.5px',
                  color: '#475569',
                  userSelect: 'none',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <input
                    type="checkbox"
                    checked={jobTypes[type]}
                    onChange={() => toggleCheckbox(setJobTypes)(type)}
                    style={{
                      accentColor: '#1463F3',
                      width: '14px',
                      height: '14px',
                      borderRadius: '3px',
                      cursor: 'pointer',
                    }}
                  />
                  <span>{type}</span>
                </div>
                <span style={{ fontSize: '11px', color: '#94A3B8' }}>{jobTypeCounts[type]}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', backgroundColor: '#F1F5F9', marginBottom: '16px' }} />

        {/* 2. Experience Level */}
        <div style={{ marginBottom: '20px' }}>
          <h4 style={{ fontSize: '12.5px', fontWeight: 700, color: '#102E6D', marginBottom: '10px' }}>
            Experience Level
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {Object.keys(experienceLevels).map((level) => (
              <label
                key={level}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  fontSize: '12.5px',
                  color: '#475569',
                  userSelect: 'none',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <input
                    type="checkbox"
                    checked={experienceLevels[level]}
                    onChange={() => toggleCheckbox(setExperienceLevels)(level)}
                    style={{
                      accentColor: '#1463F3',
                      width: '14px',
                      height: '14px',
                      borderRadius: '3px',
                      cursor: 'pointer',
                    }}
                  />
                  <span>{level}</span>
                </div>
                <span style={{ fontSize: '11px', color: '#94A3B8' }}>{experienceCounts[level]}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', backgroundColor: '#F1F5F9', marginBottom: '16px' }} />

        {/* 3. Location */}
        <div style={{ marginBottom: '20px' }}>
          <h4 style={{ fontSize: '12.5px', fontWeight: 700, color: '#102E6D', marginBottom: '10px' }}>
            Location
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {Object.keys(locations).map((loc) => (
              <label
                key={loc}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  fontSize: '12.5px',
                  color: '#475569',
                  userSelect: 'none',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <input
                    type="checkbox"
                    checked={locations[loc]}
                    onChange={() => toggleCheckbox(setLocations)(loc)}
                    style={{
                      accentColor: '#1463F3',
                      width: '14px',
                      height: '14px',
                      borderRadius: '3px',
                      cursor: 'pointer',
                    }}
                  />
                  <span>{loc}</span>
                </div>
                <span style={{ fontSize: '11px', color: '#94A3B8' }}>{locationCounts[loc]}</span>
              </label>
            ))}
          </div>
          <button
            type="button"
            style={{
              background: 'none',
              border: 'none',
              color: '#1463F3',
              fontSize: '11.5px',
              fontWeight: 600,
              cursor: 'pointer',
              marginTop: '8px',
              padding: 0,
            }}
          >
            + More locations
          </button>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', backgroundColor: '#F1F5F9', marginBottom: '16px' }} />

        {/* 4. Salary Range (per annum) */}
        <div style={{ marginBottom: '20px' }}>
          <h4 style={{ fontSize: '12.5px', fontWeight: 700, color: '#102E6D', marginBottom: '10px' }}>
            Salary Range (per annum)
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {Object.keys(salaryRanges).map((sal) => (
              <label
                key={sal}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  fontSize: '12.5px',
                  color: '#475569',
                  userSelect: 'none',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <input
                    type="checkbox"
                    checked={salaryRanges[sal]}
                    onChange={() => toggleCheckbox(setSalaryRanges)(sal)}
                    style={{
                      accentColor: '#1463F3',
                      width: '14px',
                      height: '14px',
                      borderRadius: '3px',
                      cursor: 'pointer',
                    }}
                  />
                  <span>{sal}</span>
                </div>
                <span style={{ fontSize: '11px', color: '#94A3B8' }}>{salaryCounts[sal]}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', backgroundColor: '#F1F5F9', marginBottom: '16px' }} />

        {/* 5. Skills */}
        <div>
          <h4 style={{ fontSize: '12.5px', fontWeight: 700, color: '#102E6D', marginBottom: '10px' }}>
            Skills
          </h4>

          {/* Search skills input */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: '#F8FAFC',
              borderRadius: '6px',
              border: '1px solid #E2E8F0',
              padding: '6px 10px',
              marginBottom: '10px',
            }}
          >
            <Search size={13} color="#94A3B8" />
            <input
              type="text"
              placeholder="Search skills..."
              value={skillSearch}
              onChange={(e) => setSkillSearch(e.target.value)}
              style={{
                border: 'none',
                background: 'transparent',
                outline: 'none',
                fontSize: '12px',
                width: '100%',
                fontFamily: 'inherit',
                color: '#102E6D',
              }}
            />
          </div>

          {/* Skill pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '8px' }}>
            {allSkills
              .filter((s) => s.toLowerCase().includes(skillSearch.toLowerCase()))
              .map((skill) => {
                const isSelected = selectedSkills.includes(skill);
                return (
                  <button
                    key={skill}
                    type="button"
                    onClick={() => toggleSkill(skill)}
                    style={{
                      padding: '3px 9px',
                      borderRadius: '14px',
                      fontSize: '11.5px',
                      border: isSelected ? '1px solid #1463F3' : '1px solid #D5E3F8',
                      backgroundColor: isSelected ? '#EAF3FF' : '#FFFFFF',
                      color: isSelected ? '#1463F3' : '#475569',
                      fontWeight: isSelected ? 600 : 500,
                      cursor: 'pointer',
                      transition: 'all 0.15s ease',
                    }}
                  >
                    {skill}
                  </button>
                );
              })}
          </div>

          <button
            type="button"
            style={{
              background: 'none',
              border: 'none',
              color: '#1463F3',
              fontSize: '11.5px',
              fontWeight: 600,
              cursor: 'pointer',
              padding: 0,
            }}
          >
            + More
          </button>
        </div>
      </SectionCard>
    </aside>
  );
}
