import React, { useState } from "react";

// Generates a unique link based on window.location and username or timestamp
function getPortfolioLink(username) {
  const base = window.location.origin;
  // You can replace this with a real username or user ID if available
  const unique = username || `user-${Date.now()}`;
  return `${base}/portfolio/${unique}`;
}

export default function SharePortfolioLink({ username }) {
  const [copied, setCopied] = useState(false);
  const link = getPortfolioLink(username);

  const handleCopy = () => {
    navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div style={{ margin: '1.5rem 0', textAlign: 'center' }}>
      <h3 style={{ color: '#ff2d2d', marginBottom: 8 }}>Share Your Portfolio</h3>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 10 }}>
        <input
          type="text"
          value={link}
          readOnly
          style={{ width: 260, padding: '0.45rem', fontSize: 15, borderRadius: 6, border: '1px solid #ccc', color: '#333', background: '#f8f8f8' }}
        />
        <button
          onClick={handleCopy}
          style={{ padding: '0.45rem 1.1rem', fontSize: 15, borderRadius: 6, background: copied ? '#2ecc40' : '#ff2d2d', color: '#fff', border: 'none', cursor: 'pointer', fontWeight: 600 }}
        >
          {copied ? 'Copied!' : 'Copy Link'}
        </button>
      </div>
      <div style={{ fontSize: 13, color: '#888', marginTop: 4 }}>
        Anyone with this link can view your portfolio.
      </div>
    </div>
  );
}
