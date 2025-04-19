import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import ATSCvPreview from "./ATSCvPreview";

export default function DownloadATSButton({ about, experience, education, skills }) {
  const printRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => printRef.current,
    documentTitle: about?.name ? `${about.name.replace(/\s+/g, '_')}_ATS_CV` : "ATS_CV",
    removeAfterPrint: true
  });

  return (
    <div style={{ textAlign: 'center', margin: '2.2rem 0' }}>
      <button
        onClick={handlePrint}
        style={{
          background: 'linear-gradient(90deg, #ff2d2d 0%, #6e37ff 60%, #2ddcff 100%)',
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
        Download ATS-Friendly CV
      </button>
      <div style={{ position: 'absolute', left: '-9999px', top: 0 }}>
        <div ref={printRef}>
          <ATSCvPreview about={about} experience={experience} education={education} skills={skills} />
        </div>
      </div>
    </div>
  );
}
