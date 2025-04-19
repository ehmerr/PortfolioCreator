import React, { useState } from "react";
import AboutForm from "./components/AboutForm";
import SkillsForm from "./components/SkillsForm";
import ProjectsForm from "./components/ProjectsForm";
import EducationForm from "./components/EducationForm";
import ContactForm from "./components/ContactForm";
import ExperienceForm from "./components/ExperienceForm";
import InternshipForm from "./components/InternshipForm";
import PortfolioPreview from "./components/PortfolioPreview";
import SharePortfolioLink from "./components/SharePortfolioLink";
import "./App.css";



function App() {
  const [about, setAbout] = useState({ name: "", bio: "" });
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  const [education, setEducation] = useState([]);
  const [contact, setContact] = useState({});
  const [experience, setExperience] = useState([]);
  const [internships, setInternships] = useState([]);
  const [status, setStatus] = useState("");

  const savePortfolio = () => {
    setStatus("Saving...");
    try {
      if (about && about.name) {
        localStorage.setItem(
          'portfolio_' + about.name,
          JSON.stringify({ about, skills, projects, education, contact, experience, internships })
        );
        setStatus("Saved!");
      } else {
        setStatus("Name required to save portfolio");
      }
    } catch (err) {
      setStatus("Error saving portfolio");
    }
  };

  const loadPortfolio = () => {
    setStatus("Loading...");
    try {
      if (about && about.name) {
        const saved = localStorage.getItem('portfolio_' + about.name);
        if (saved) {
          const data = JSON.parse(saved);
          setAbout(data.about || { name: "", bio: "" });
          setSkills(data.skills || []);
          setProjects(data.projects || []);
          setEducation(data.education || []);
          setContact(data.contact || {});
          setExperience(data.experience || []);
          setInternships(data.internships || []);
          setStatus("Loaded!");
        } else {
          setStatus("No saved portfolio found");
        }
      } else {
        setStatus("Name required to load portfolio");
      }
    } catch (err) {
      setStatus("Error loading portfolio");
    }
  };

  return (
    <div className="app-container">
      <div className="edit-panel">
        <h2>Make Portfolio</h2>
        <AboutForm about={about} setAbout={setAbout} />
        <hr className="section-divider" />
        <ContactForm contact={contact} setContact={setContact} />
        <hr className="section-divider" />
        <EducationForm education={education} setEducation={setEducation} />
        <hr className="section-divider" />
        <ExperienceForm experience={experience} setExperience={setExperience} />
        <hr className="section-divider" />
        <InternshipForm internships={internships} setInternships={setInternships} />
        <hr className="section-divider" />
        <SkillsForm skills={skills} setSkills={setSkills} />
        <hr className="section-divider" />
        <ProjectsForm projects={projects} setProjects={setProjects} />
        <div style={{ marginTop: "1.5rem", display: "flex", gap: "1rem" }}>
          <button onClick={savePortfolio}>Save Portfolio</button>
          <button onClick={loadPortfolio}>Load Portfolio</button>
        </div>
        {status && <div style={{ marginTop: "1rem", color: "#c0392b" }}>{status}</div>}
      </div>
      <div className="preview-panel">
        <SharePortfolioLink username={about.name} />
        <PortfolioPreview
          about={about}
          contact={contact}
          education={education}
          experience={experience}
          internships={internships}
          skills={skills}
          projects={projects}
        />
      </div>
    </div>
  );
}

export default App;
