import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import EngineeringCvPreview from "./EngineeringCvPreview";

export default function DownloadEngineeringButton({ about, experience, education, skills, projects }) {
  const printRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => printRef.current,
    documentTitle: about?.name ? `${about.name.replace(/\s+/g, '_')}_Engineering_Resume` : "Engineering_Resume",
    removeAfterPrint: true
  });

  return (
    <div style={{ textAlign: 'center', margin: '2.2rem 0' }}>
      <button
        onClick={handlePrint}
        style={{
          background: 'linear-gradient(90deg, #2dff5c 0%, #376eff 60%, #2ddcff 100%)',
          color: '#fff',
          border: 'none',
          borderRadius: 10,
          fontWeight: 700,
          fontSize: '1.13rem',
          padding: '0.9rem 2.5rem',
          cursor: 'pointer',
          boxShadow: '0 2px 18px #0002',
          transition: 'background 0.18s, box-shadow 0.18s, transform 0.13s',
        }}
      >
        Download Engineering Resume
      </button>
      <div style={{ position: 'absolute', left: '-9999px', top: 0 }}>
        <div ref={printRef}>
          <EngineeringCvPreview about={about} experience={experience} education={education} skills={skills} projects={projects} />
        </div>
      </div>
    </div>
  );
}
