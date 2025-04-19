import React from "react";

function InternshipForm({ internships, setInternships }) {
  const handleChange = (idx, field, value) => {
    const updated = internships.map((intern, i) =>
      i === idx ? { ...intern, [field]: value } : intern
    );
    setInternships(updated);
  };

  const addInternship = () => {
    setInternships([
      ...internships,
      { company: "", role: "", duration: "", description: "" }
    ]);
  };

  const removeInternship = idx => {
    setInternships(internships.filter((_, i) => i !== idx));
  };

  return (
    <div>
      <h3>Internships</h3>
      {internships.length === 0 && <div style={{ color: '#aaa' }}>No internships added.</div>}
      {internships.map((intern, idx) => (
        <div key={idx} style={{ marginBottom: '1rem', padding: '0.7rem', background: '#232024', borderRadius: 8 }}>
          <input
            type="text"
            placeholder="Company"
            value={intern.company}
            onChange={e => handleChange(idx, 'company', e.target.value)}
            style={{ marginRight: '0.5rem' }}
          />
          <input
            type="text"
            placeholder="Role"
            value={intern.role}
            onChange={e => handleChange(idx, 'role', e.target.value)}
            style={{ marginRight: '0.5rem' }}
          />
          <input
            type="text"
            placeholder="Duration (e.g. Summer 2024)"
            value={intern.duration}
            onChange={e => handleChange(idx, 'duration', e.target.value)}
            style={{ width: 120, marginRight: '0.5rem' }}
          />
          <input
            type="text"
            placeholder="Description (optional)"
            value={intern.description}
            onChange={e => handleChange(idx, 'description', e.target.value)}
            style={{ width: 180, marginRight: '0.5rem' }}
          />
          <button type="button" onClick={() => removeInternship(idx)} style={{ background: '#440404', color: '#fff' }}>Remove</button>
        </div>
      ))}
      <button type="button" onClick={addInternship}>Add Internship</button>
    </div>
  );
}

export default InternshipForm;
