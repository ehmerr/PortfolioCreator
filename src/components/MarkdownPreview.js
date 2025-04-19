import React from "react";
import ReactMarkdown from "react-markdown";

export default function MarkdownPreview({ value }) {
  return (
    <div className="markdown-preview" style={{
      background: "rgba(36,28,41,0.13)",
      borderRadius: 12,
      padding: "1.1rem 1.1rem 1.2rem 1.1rem",
      marginTop: 12,
      marginBottom: 16,
      minHeight: 60,
      fontSize: "1.08rem",
      color: "#f2f2f2",
      boxShadow: "0 2px 10px #0002",
      border: "1.5px solid #23232e",
      overflowX: "auto"
    }}>
      <ReactMarkdown>{value || "Nothing to preview yet. Try writing some *Markdown*!"}</ReactMarkdown>
    </div>
  );
}
