import React from "react";

export default function ATSCvPreview({ about, experience = [], education = [], skills = [] }) {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#222', background: '#fff', padding: 32, width: 600, margin: '0 auto', borderRadius: 12, boxShadow: '0 2px 20px #0001' }}>
      <h1 style={{ fontSize: '2.1rem', marginBottom: 4 }}>{about?.name || "Your Name"}</h1>
      {about?.bio && <p style={{ marginBottom: 18 }}>{about.bio}</p>}
      <h2 style={{ fontSize: '1.25rem', margin: '1.2rem 0 0.4rem 0' }}>Experience</h2>
      <ul style={{ paddingLeft: 18, marginBottom: 16 }}>
        {experience.length === 0 ? <li style={{ color: '#aaa' }}>No experience added yet.</li> : experience.map((exp, i) => (
          <li key={i} style={{ marginBottom: 8 }}>
            <strong>{exp.title}</strong> at {exp.company} ({exp.start} - {exp.end || 'Present'})<br />
            <span>{exp.description}</span>
          </li>
        ))}
      </ul>
      <h2 style={{ fontSize: '1.25rem', margin: '1.2rem 0 0.4rem 0' }}>Education</h2>
      <ul style={{ paddingLeft: 18, marginBottom: 16 }}>
        {education.length === 0 ? <li style={{ color: '#aaa' }}>No education added yet.</li> : education.map((edu, i) => (
          <li key={i} style={{ marginBottom: 8 }}>
            <strong>{edu.degree}</strong> at {edu.school} ({edu.start} - {edu.end || 'Present'})
          </li>
        ))}
      </ul>
      <h2 style={{ fontSize: '1.25rem', margin: '1.2rem 0 0.4rem 0' }}>Skills</h2>
      <ul style={{ paddingLeft: 18 }}>
        {skills.length === 0 ? <li style={{ color: '#aaa' }}>No skills added yet.</li> : skills.map((skill, i) => <li key={i}>{skill}</li>)}
      </ul>
    </div>
  );
}
