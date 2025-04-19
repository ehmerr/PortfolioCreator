import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import PortfolioOutputOnly from "./PortfolioOutputOnly";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/portfolio/:username" element={<PortfolioOutputOnly />} />
        <Route path="/*" element={<App />} />
      </Routes>
    </Router>
  );
}
