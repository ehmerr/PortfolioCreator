import React from "react";

function ExperienceForm({ experience, setExperience }) {
  const handleChange = (idx, field, value) => {
    const updated = experience.map((exp, i) =>
      i === idx ? { ...exp, [field]: value } : exp
    );
    setExperience(updated);
  };

  const addExperience = () => {
    setExperience([
      ...experience,
      { company: "", role: "", duration: "" }
    ]);
  };

  const removeExperience = idx => {
    setExperience(experience.filter((_, i) => i !== idx));
  };

  return (
    <div>
      <h3>Experience</h3>
      {experience.length === 0 && <div style={{ color: '#aaa' }}>No experience added.</div>}
      {experience.map((exp, idx) => (
        <div key={idx} style={{ marginBottom: '1rem', padding: '0.7rem', background: '#232024', borderRadius: 8 }}>
          <input
            type="text"
            placeholder="Company"
            value={exp.company}
            onChange={e => handleChange(idx, 'company', e.target.value)}
            style={{ marginRight: '0.5rem' }}
          />
          <input
            type="text"
            placeholder="Role"
            value={exp.role}
            onChange={e => handleChange(idx, 'role', e.target.value)}
            style={{ marginRight: '0.5rem' }}
          />
          <input
            type="text"
            placeholder="Duration (e.g. 2022-2024)"
            value={exp.duration}
            onChange={e => handleChange(idx, 'duration', e.target.value)}
            style={{ width: 110, marginRight: '0.5rem' }}
          />
          <button type="button" onClick={() => removeExperience(idx)} style={{ background: '#440404', color: '#fff' }}>Remove</button>
        </div>
      ))}
      <button type="button" onClick={addExperience}>Add Experience</button>
    </div>
  );
}

export default ExperienceForm;
