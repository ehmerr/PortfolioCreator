import React, { useState } from "react";

function ProjectsForm({ projects, setProjects }) {
  const [project, setProject] = useState({ title: "", description: "", github: "" });

  const addProject = () => {
    if (project.title && project.description) {
      setProjects([...projects, project]);
      setProject({ title: "", description: "", github: "" });
    }
  };

  return (
    <div>
      <h3>Projects</h3>
      <input
        type="text"
        value={project.title}
        onChange={e => setProject({ ...project, title: e.target.value })}
        placeholder="Project Title"
      />
      <br />
      <textarea
        value={project.description}
        onChange={e => setProject({ ...project, description: e.target.value })}
        placeholder="Project Description"
      />
      <br />
      <input
        type="url"
        value={project.github}
        onChange={e => setProject({ ...project, github: e.target.value })}
        placeholder="GitHub Link (optional)"
        style={{ width: "100%", marginTop: "0.5rem" }}
      />
      <br />
      <button type="button" onClick={addProject}>Add Project</button>
      <ul>
        {projects.map((p, i) => (
          <ProjectItem
            key={i}
            index={i}
            project={p}
            projects={projects}
            setProjects={setProjects}
          />
        ))}
      </ul>
    </div>
  );
}

function ProjectItem({ index, project, projects, setProjects }) {
  const [isEditing, setIsEditing] = React.useState(false);
  const [editProject, setEditProject] = React.useState({ ...project });

  const saveEdit = () => {
    const updatedProjects = projects.map((p, i) =>
      i === index ? editProject : p
    );
    setProjects(updatedProjects);
    setIsEditing(false);
  };

  return (
    <li style={{ marginBottom: '1rem' }}>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editProject.title}
            onChange={e => setEditProject({ ...editProject, title: e.target.value })}
            placeholder="Project Title"
            style={{ width: '100%' }}
          />
          <br />
          <textarea
            value={editProject.description}
            onChange={e => setEditProject({ ...editProject, description: e.target.value })}
            placeholder="Project Description"
            style={{ width: '100%', marginTop: '0.5rem' }}
          />
          <br />
          <input
            type="url"
            value={editProject.github}
            onChange={e => setEditProject({ ...editProject, github: e.target.value })}
            placeholder="GitHub Link (optional)"
            style={{ width: '100%', marginTop: '0.5rem' }}
          />
          <br />
          <button type="button" onClick={saveEdit} style={{ marginTop: '0.5rem' }}>Save</button>
          <button type="button" onClick={() => setIsEditing(false)} style={{ marginLeft: '0.5rem' }}>Cancel</button>
        </div>
      ) : (
        <div>
          <strong>{project.title}</strong>: {project.description}
          {project.github && (
            <>
              <br />
              <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            </>
          )}
          <br />
          <button type="button" onClick={() => setIsEditing(true)} style={{ marginTop: '0.5rem' }}>Edit</button>
        </div>
      )}
    </li>
  );
}

export default ProjectsForm;

