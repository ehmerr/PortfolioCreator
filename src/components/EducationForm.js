import React from "react";

function EducationForm({ education, setEducation }) {
  const handleChange = (idx, field, value) => {
    const updated = education.map((ed, i) =>
      i === idx ? { ...ed, [field]: value } : ed
    );
    setEducation(updated);
  };

  const addEducation = () => {
    setEducation([
      ...education,
      { school: "", degree: "", fromYear: "", toYear: "" }
    ]);
  };

  const removeEducation = idx => {
    setEducation(education.filter((_, i) => i !== idx));
  };

  return (
    <div>
      <h3>Education</h3>
      {education.length === 0 && <div style={{ color: '#aaa' }}>No education added.</div>}
      {education.map((ed, idx) => (
        <div key={idx} style={{ marginBottom: '1rem', padding: '0.7rem', background: '#232024', borderRadius: 8 }}>
          <input
            type="text"
            placeholder="School/University"
            value={ed.school}
            onChange={e => handleChange(idx, 'school', e.target.value)}
            style={{ marginRight: '0.5rem' }}
          />
          <input
            type="text"
            placeholder="Degree"
            value={ed.degree}
            onChange={e => handleChange(idx, 'degree', e.target.value)}
            style={{ marginRight: '0.5rem' }}
          />
          <select
            value={ed.fromYear || ''}
            onChange={e => handleChange(idx, 'fromYear', e.target.value)}
            style={{ marginRight: '0.3rem' }}
          >
            <option value="">From</option>
            {[...Array(31)].map((_, i) => {
              const year = 2000 + i;
              return <option key={year} value={year}>{year}</option>;
            })}
          </select>
          <span style={{ margin: '0 0.2rem' }}>-</span>
          <select
            value={ed.toYear || ''}
            onChange={e => handleChange(idx, 'toYear', e.target.value)}
            style={{ marginRight: '0.5rem' }}
          >
            <option value="">To</option>
            {[...Array(31)].map((_, i) => {
              const year = 2000 + i;
              return <option key={year} value={year}>{year}</option>;
            })}
          </select>
          <button type="button" onClick={() => removeEducation(idx)} style={{ background: '#440404', color: '#fff' }}>Remove</button>
        </div>
      ))}
      <button type="button" onClick={addEducation}>Add Education</button>
    </div>
  );
}

export default EducationForm;
