import React, { useState } from "react";

const RECOMMENDED_SKILLS = [
  "JavaScript", "Python", "React", "Node.js", "Express", "MongoDB", "HTML", "CSS", "TypeScript", "C++", "Java", "Git", "SQL", "REST APIs", "Communication", "Teamwork", "Problem Solving"
];

function SkillsForm({ skills, setSkills }) {
  const [skill, setSkill] = useState("");

  const addSkill = () => {
    if (skill && !skills.includes(skill)) {
      setSkills([...skills, skill]);
      setSkill("");
    }
  };

  const addRecommended = (recSkill) => {
    if (!skills.includes(recSkill)) {
      setSkills([...skills, recSkill]);
    }
  };

  return (
    <div>
      <h3>Skills</h3>
      <input
        type="text"
        value={skill}
        onChange={e => setSkill(e.target.value)}
        placeholder="Add a skill"
      />
      <button type="button" onClick={addSkill}>Add</button>
      <div style={{ margin: '0.7rem 0 1rem 0' }}>
        <div style={{ color: '#aaa', fontSize: '0.98rem', marginBottom: '0.2rem' }}>Recommended:</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {RECOMMENDED_SKILLS.filter(rec => !skills.includes(rec)).map(rec => (
            <button
              key={rec}
              type="button"
              style={{
                background: '#232024', color: '#ff2d2d', border: '1px solid #440404', borderRadius: 6,
                padding: '0.3rem 0.7rem', fontSize: '0.98rem', cursor: 'pointer',
                marginBottom: '0.2rem', transition: 'background 0.2s, color 0.2s'
              }}
              onClick={() => addRecommended(rec)}
            >
              {rec}
            </button>
          ))}
        </div>
      </div>
      <ul>
        {skills.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
    </div>
  );
}

export default SkillsForm;
