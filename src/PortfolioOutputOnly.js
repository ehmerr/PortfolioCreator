import React, { useEffect, useState } from "react";
import PortfolioPreview from "./components/PortfolioPreview";

// Simulate fetching portfolio data by username from localStorage or backend
function fetchPortfolioByUsername(username) {
  // This is a placeholder. Replace with real API call if needed.
  const saved = localStorage.getItem("portfolio_" + username);
  if (saved) return JSON.parse(saved);
  return null;
}

export default function PortfolioOutputOnly({ match }) {
  // For react-router v6, use useParams instead of match
  const username = match?.params?.username || window.location.pathname.split("/").pop();
  const [portfolio, setPortfolio] = useState(null);

  useEffect(() => {
    const data = fetchPortfolioByUsername(username);
    setPortfolio(data);
  }, [username]);

  if (!portfolio) {
    return <div style={{ textAlign: 'center', marginTop: 80, color: '#ff2d2d' }}>Portfolio not found for <b>{username}</b>.</div>;
  }

  return (
    <div style={{ minHeight: '100vh', background: '#18151b', padding: '2.5rem 0' }}>
      <PortfolioPreview
        about={portfolio.about}
        contact={portfolio.contact}
        education={portfolio.education}
        experience={portfolio.experience}
        internships={portfolio.internships}
        skills={portfolio.skills}
        projects={portfolio.projects}
      />
    </div>
  );
}
