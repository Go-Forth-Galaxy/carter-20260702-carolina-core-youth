"use client";

import { useState } from "react";

const MORE_LINKS = [
  "Core IDP Training & Camps",
  "2026-2027 Age Group Shift",
  "Board of Directors",
  "Calendar",
  "Coaching Application",
  "Core Corner",
  "FAQs",
  "Fields",
  "Financial Aid",
  "Forms / Policies",
  "Mission",
  "Play It Forward Fund",
  "Refereeing Application",
  "Register",
  "Scholarships",
  "Staff",
  "Staff Role Openings",
  "Techne Futbol",
  "Uniforms",
];

export default function Header() {
  const [moreOpen, setMoreOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container">
        <nav className="nav">
          <a className="brand" href="#top">
            <svg className="mark" viewBox="0 0 64 64" fill="none" aria-hidden="true">
              <path d="M32 3 L58 11 V32 C58 47 46 57 32 61 C18 57 6 47 6 32 V11 Z" fill="none" stroke="#ffffff" strokeWidth="2.4" />
              <path d="M12 24 V15 L32 9 L52 15 V24 Z" fill="#ffffff" fillOpacity="0.14" />
              <line x1="10" y1="24" x2="54" y2="24" stroke="#ffffff" strokeWidth="2" />
              <circle cx="32" cy="16.5" r="3.4" fill="#ffffff" />
              <text x="32" y="47" textAnchor="middle" fontSize="19" fontWeight="900" fill="#ffffff" fontFamily="Figtree, Arial, sans-serif">CC</text>
            </svg>
            <span className="wordmark">
              <b>Carolina Core</b>
              <span>FC Youth</span>
            </span>
          </a>

          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#programs">Programs</a>
            <a href="#tryouts">Tryouts</a>
            <a href="#tournaments">Tournaments</a>
            <a href="#partners">Partners</a>
            <div
              className="more"
              onMouseEnter={() => setMoreOpen(true)}
              onMouseLeave={() => setMoreOpen(false)}
              onClick={() => setMoreOpen((v) => !v)}
            >
              More
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div className={`more-menu ${moreOpen ? "open" : ""}`}>
                {MORE_LINKS.map((label) => (
                  <a href="#programs" key={label}>
                    {label}
                  </a>
                ))}
              </div>
            </div>
            <a className="nav-cta" href="#register">
              I want to play!
            </a>
          </div>

          <button
            className="hamburger"
            aria-label="Toggle menu"
            onClick={() => setDrawerOpen((v) => !v)}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
            </svg>
          </button>
        </nav>
      </div>

      <div className={`mobile-drawer ${drawerOpen ? "open" : ""}`}>
        <a href="#home">Home</a>
        <a href="#programs">Programs</a>
        <a href="#tryouts">Tryouts</a>
        <a href="#tournaments">Tournaments</a>
        <a href="#partners">Partners</a>
        <a href="#register">I want to play!</a>
        <div className="grouplabel">More</div>
        {MORE_LINKS.map((label) => (
          <a href="#programs" key={label}>
            {label}
          </a>
        ))}
      </div>
    </header>
  );
}
