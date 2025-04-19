import React from "react";

function PortfolioPreview({ about, contact = {}, education = [], experience = [], internships = [], skills = [], projects = [] }) {
  // Show avatar image if selected, else show placeholder with first letter
  const avatarLetter = about.name ? about.name[0].toUpperCase() : "?";
  return (
    <div>
      <div className="avatar-container">
        {about.avatar ? (
          <img className="avatar-img" src={about.avatar} alt="Avatar" />
        ) : (
          <div className="avatar-placeholder">{avatarLetter}</div>
        )}
        <h2 style={{ margin: "0.3rem 0 0.2rem 0", fontWeight: 700, fontSize: "2rem", color: "#ff2d2d" }}>{about.name || "Your Name"}</h2>
        <p style={{ color: "#e6e6e6", margin: 0, fontSize: "1.08rem" }}>{about.bio || "Your bio goes here."}</p>
      </div>
      <hr className="section-divider" />
      <h3 style={{ letterSpacing: 0.5, color: "#ff2d2d" }}>Contact Info</h3>
      <ul>
        {contact.email && <li><b>Email:</b> <a href={`mailto:${contact.email}`} style={{ color: '#ff2d2d' }}>{contact.email}</a></li>}
        {contact.linkedin && <li><b>LinkedIn:</b> <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: '#ff2d2d' }}>{contact.linkedin}</a></li>}
        {contact.website && <li><b>Website:</b> <a href={contact.website} target="_blank" rel="noopener noreferrer" style={{ color: '#ff2d2d' }}>{contact.website}</a></li>}
        {!contact.email && !contact.linkedin && !contact.website && <li>No contact info provided.</li>}
      </ul>
      <hr className="section-divider" />
      <h3 style={{ letterSpacing: 0.5, color: "#ff2d2d" }}>Social Links</h3>
      <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '1.1rem', listStyle: 'none', padding: 0 }}>
        {about.github && <li><a href={about.github} target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'none' }}><b>GitHub</b></a></li>}
        {about.linkedin && <li><a href={about.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: '#0077b5', textDecoration: 'none' }}><b>LinkedIn</b></a></li>}
        {about.twitter && <li><a href={about.twitter} target="_blank" rel="noopener noreferrer" style={{ color: '#1da1f2', textDecoration: 'none' }}><b>Twitter</b></a></li>}
        {about.facebook && <li><a href={about.facebook} target="_blank" rel="noopener noreferrer" style={{ color: '#1877f3', textDecoration: 'none' }}><b>Facebook</b></a></li>}
        {about.instagram && <li><a href={about.instagram} target="_blank" rel="noopener noreferrer" style={{ color: '#e4405f', textDecoration: 'none' }}><b>Instagram</b></a></li>}
        {about.website && <li><a href={about.website} target="_blank" rel="noopener noreferrer" style={{ color: '#ff2d2d', textDecoration: 'none' }}><b>Website</b></a></li>}
        {(!about.github && !about.linkedin && !about.twitter && !about.facebook && !about.instagram && !about.website) && <li>No social links provided.</li>}
      </ul>
      <hr className="section-divider" />
      <h3 style={{ letterSpacing: 0.5, color: "#ff2d2d" }}>Education</h3>
      <ul>
        {education.length === 0 ? <li>No education added.</li> : education.map((ed, i) => {
          const years = ed.fromYear && ed.toYear ? `${ed.fromYear} - ${ed.toYear}` : (ed.fromYear || ed.toYear || "");
          return (
            <li key={i}><b>{ed.degree}</b> at {ed.school} <span style={{ color: '#aaa', fontSize: '0.97em' }}>{years && `(${years})`}</span></li>
          );
        })}
      </ul>
      {experience.length > 0 && internships.length > 0 && <>
        <hr className="section-divider" />
        <h3 style={{ letterSpacing: 0.5, color: "#ff2d2d" }}>Experience</h3>
        <ul>
          {experience.map((exp, i) => (
            <li key={i}><b>{exp.role}</b> at {exp.company} <span style={{ color: '#aaa', fontSize: '0.97em' }}>({exp.duration})</span></li>
          ))}
        </ul>
        <hr className="section-divider" />
        <h3 style={{ letterSpacing: 0.5, color: "#ff2d2d" }}>Internships</h3>
        <div>
          {internships.map((intern, i) => (
            <div className="project-card" key={i} style={{ background: '#1e1b20' }}>
              <div style={{ fontWeight: 600, fontSize: '1.07rem', color: '#fff' }}>{intern.role} at {intern.company}</div>
              <div style={{ color: '#aaa', fontSize: '0.98rem', margin: '0.2rem 0 0.2rem 0' }}>{intern.duration}</div>
              {intern.description && <div style={{ color: '#e6e6e6', margin: '0.2rem 0 0.2rem 0' }}>{intern.description}</div>}
            </div>
          ))}
        </div>
        <hr className="section-divider" />
      </>}

      <h3 style={{ letterSpacing: 0.5, color: "#ff2d2d" }}>Skills</h3>
      <ul>
        {skills.length === 0 ? <li>No skills added.</li> : skills.map((s, i) => <li key={i}>{s}</li>)}
      </ul>
      <hr className="section-divider" />
      <h3 style={{ letterSpacing: 0.5, color: "#ff2d2d" }}>Projects</h3>
      <div>
        {projects.length === 0 ? <div style={{ color: '#aaa' }}>No projects added.</div> :
          projects.map((p, i) => (
            <div className="project-card" key={i}>
              <div style={{ fontWeight: 600, fontSize: '1.12rem', color: '#fff' }}>{p.title}</div>
              <div style={{ color: '#e6e6e6', margin: '0.3rem 0 0.2rem 0' }}>{p.description}</div>
              {p.github && (
                <a className="github-link" href={p.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              )}
            </div>
          ))}
      </div>
    </div>
  );
}

export default PortfolioPreview;
