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

const PRIMARY = ["Home", "Programs", "Tryouts", "Tournaments", "Partners"];

function Logo() {
  return (
    <svg className="mark" viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <circle cx="32" cy="32" r="30" fill="#0fb5c4" />
      <circle cx="32" cy="32" r="30" stroke="#f6871f" strokeWidth="3" />
      <path d="M32 10 L50 22 V40 L32 54 L14 40 V22 Z" fill="#0b2545" />
      <path
        d="M32 20 l9 6 -3.5 10 h-11 L23 26 Z"
        fill="#0fb5c4"
        stroke="#ffffff"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <text
        x="32"
        y="49"
        textAnchor="middle"
        fontSize="9"
        fontWeight="800"
        fill="#ffffff"
        fontFamily="Poppins, sans-serif"
      >
        CC
      </text>
    </svg>
  );
}

export default function Header() {
  const [moreOpen, setMoreOpen] = useState(false);
  const [drawer, setDrawer] = useState(false);

  return (
    <header className="site-header">
      <div className="container">
        <nav className="nav">
          <a className="brand" href="#top">
            <Logo />
            <span className="wordmark">
              <b>Carolina Core</b>
              <span>FC Youth</span>
            </span>
          </a>

          <div className="nav-links">
            {PRIMARY.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`}>
                {item}
              </a>
            ))}
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
              <div
                className={`more-menu ${moreOpen ? "open" : ""}`}
                onMouseEnter={() => setMoreOpen(true)}
                onMouseLeave={() => setMoreOpen(false)}
              >
                {MORE_LINKS.map((link) => (
                  <a key={link} href="#programs">
                    {link}
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
            onClick={() => setDrawer((v) => !v)}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
            </svg>
          </button>
        </nav>
      </div>

      <div className={`mobile-drawer ${drawer ? "open" : ""}`}>
        {PRIMARY.map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setDrawer(false)}>
            {item}
          </a>
        ))}
        <a href="#register" onClick={() => setDrawer(false)}>
          I want to play!
        </a>
        <div className="grouplabel">More</div>
        {MORE_LINKS.map((link) => (
          <a key={link} href="#programs" onClick={() => setDrawer(false)}>
            {link}
          </a>
        ))}
      </div>
    </header>
  );
}
