import Header from "./components/Header";
import CookieBanner from "./components/CookieBanner";

const PROGRAMS = [
  {
    cap: "cap-1",
    name: "Recreational",
    age: "Ages 3–14",
    desc: "Where every player starts. Fun-first, low-pressure soccer that builds coordination, friendships, and a love for the game close to home.",
    icon: (
      <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 3l2.6 1.9-1 3h-3.2l-1-3L12 5zm-6 6.5l3-.4 1 3-1.8 2.6-2.7-.8-.5-2.9 1-1.5zm12 0l1 1.5-.5 2.9-2.7.8L15 14.1l1-3 3 .4z" fill="currentColor" />
    ),
  },
  {
    cap: "cap-2",
    name: "Academy",
    age: "Ages 5–10",
    desc: "The bridge between rec and competitive. Small-group training focused on technical foundations, first touch, and 1v1 confidence.",
    icon: (
      <path d="M3 10l9-5 9 5-9 5-9-5zm2 3.2l7 3.9 7-3.9V17l-7 3.9L5 17v-3.8zM20 11v5h1.6v-5H20z" fill="currentColor" />
    ),
  },
  {
    cap: "cap-3",
    name: "Select / Competitive",
    age: "Ages 8–18",
    desc: "Travel teams competing in NCYSA leagues and regional tournaments, developing serious players through year-round, structured training.",
    icon: (
      <path d="M6 4h12v3a4 4 0 01-4 4h-.3A2 2 0 0113 12.7V15h2v2H9v-2h2v-2.3a2 2 0 01-.7-1.7H10a4 4 0 01-4-4V4zM4 5H2v2a3 3 0 003 3V8a1 1 0 01-1-1V5zm16 0v2a1 1 0 01-1 1v2a3 3 0 003-3V5h-2zM8 19h8v2H8v-2z" fill="currentColor" />
    ),
  },
  {
    cap: "cap-4",
    name: "Core IDP",
    age: "All Ages",
    desc: "Individual Development Program — supplemental, position-specific training and camps built to accelerate players outside team sessions.",
    icon: (
      <path d="M12 3l8 4v5c0 5-3.4 8-8 9-4.6-1-8-4-8-9V7l8-4zm0 2.2L6 8v4c0 3.7 2.4 6 6 6.9 3.6-.9 6-3.2 6-6.9V8l-6-2.8zM11 10h2v5h-2v-5zm0-3h2v2h-2V7z" fill="currentColor" />
    ),
  },
  {
    cap: "cap-5",
    name: "Camps & Clinics",
    age: "Seasonal",
    desc: "Break camps, holiday clinics, and skills intensives open to the community — a great first step into the Carolina Core family.",
    icon: (
      <path d="M12 2l9 5.5-9 5.5-9-5.5L12 2zm0 13.2l7-4.3v3.4a2 2 0 01-1 1.7l-5 2.9a2 2 0 01-2 0l-5-2.9a2 2 0 01-1-1.7v-3.4l7 4.3z" fill="currentColor" />
    ),
  },
];

const PATHWAY = [
  { t: "Recreational", d: "First touches, teamwork, and fun in a supportive local environment." },
  { t: "Academy", d: "Technical foundations and small-group development for young players." },
  { t: "Select", d: "Competitive travel soccer in NCYSA leagues and tournaments." },
  { t: "Pre-ECNL / ECNL", d: "Elite pathway competition against the region's top clubs." },
  { t: "Pathway to Pro", d: "A clear line to Carolina Core FC and the professional game." },
];

const PARTNERS = [
  { i: "CC", n: "Carolina Core FC", s: "Pro Affiliate" },
  { i: "TF", n: "Techne Futbol", s: "Training Tech" },
  { i: "NC", n: "NCYSA", s: "Sanctioning Body" },
  { i: "KV", n: "City of Kernersville", s: "Community" },
  { i: "PF", n: "Play It Forward Fund", s: "Scholarships" },
  { i: "TC", n: "The Core Corner", s: "Team Store" },
  { i: "TW", n: "Triad Wellness", s: "Sports Medicine" },
  { i: "PS", n: "Piedmont Sports", s: "Equipment" },
];

export default function Home() {
  return (
    <>
      <span id="top" />
      <div className="announce">
        Rec Registration for Fall 2026 is OPEN!!{" "}
        <a href="#register">Click here to register!</a>
      </div>

      <Header />

      <section className="hero" id="home">
        <div className="container">
          <span className="eyebrow">Kernersville, North Carolina</span>
          <h1>Carolina Core FC Youth</h1>
          <p className="lede">
            Building better players and better people. From first kick to the
            professional pathway, we develop youth soccer in the Piedmont Triad
            with world-class coaching, character, and community.
          </p>
          <div className="hero-ctas">
            <a className="btn btn-primary" href="#register">
              I want to play!
            </a>
            <a className="btn btn-ghost" href="#programs">
              Explore Programs
            </a>
          </div>
        </div>
      </section>

      <section className="section" id="programs">
        <div className="container">
          <div className="section-head">
            <span className="kicker">Get Started</span>
            <h2>Choose Your Program</h2>
            <p>
              Every player has a place at Carolina Core FC Youth. Find the level
              that fits your child today — and the pathway that grows with them.
            </p>
          </div>
          <div className="program-grid">
            {PROGRAMS.map((p) => (
              <div className="program-card" key={p.name}>
                <div className={`cap ${p.cap}`}>
                  <svg viewBox="0 0 24 24">{p.icon}</svg>
                </div>
                <div className="body">
                  <h3>{p.name}</h3>
                  <p>{p.desc}</p>
                  <span className="agebadge">{p.age}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt" id="tryouts">
        <div className="container">
          <div className="section-head">
            <span className="kicker">Development</span>
            <h2>Player Pathway</h2>
            <p>
              A clear, connected journey from your child&apos;s first practice
              all the way to the professional ranks of Carolina Core FC.
            </p>
          </div>
          <div className="pathway">
            {PATHWAY.map((s, i) => (
              <div className="step" key={s.t}>
                <div className="num">{i + 1}</div>
                <h4>{s.t}</h4>
                <p>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band" id="tournaments">
        <div className="container">
          <h2>Host &amp; Compete — Core Tournaments</h2>
          <p>
            Carolina Core FC Youth hosts and travels to premier tournaments
            across the Carolinas. Bring your team and compete on the best fields
            in the Triad.
          </p>
          <a className="btn btn-primary" href="#register">
            View Tournament Schedule
          </a>
        </div>
      </section>

      <section className="section" id="partners">
        <div className="container">
          <div className="section-head">
            <span className="kicker">Thank You</span>
            <h2>Signature Partners</h2>
            <p>
              Our programs are powered by the generous support of partners who
              believe in youth soccer and the Kernersville community.
            </p>
          </div>
          <div className="partner-grid">
            {PARTNERS.map((p) => (
              <div className="partner" key={p.n}>
                <div className="pill">{p.i}</div>
                <b>{p.n}</b>
                <span>{p.s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band" id="register" style={{ background: "linear-gradient(120deg,#f6871f,#e0730c)" }}>
        <div className="container">
          <h2>Ready to Play?</h2>
          <p>Rec Registration for Fall 2026 is OPEN. Secure your child&apos;s spot today.</p>
          <a className="btn btn-ghost" href="#register" style={{ borderColor: "#fff" }}>
            Register Now
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-brand">
              <a className="brand" href="#top">
                <svg className="mark" viewBox="0 0 64 64" fill="none" aria-hidden="true">
                  <circle cx="32" cy="32" r="30" fill="#0fb5c4" />
                  <circle cx="32" cy="32" r="30" stroke="#f6871f" strokeWidth="3" />
                  <path d="M32 10 L50 22 V40 L32 54 L14 40 V22 Z" fill="#0b2545" />
                  <path d="M32 20 l9 6 -3.5 10 h-11 L23 26 Z" fill="#0fb5c4" stroke="#ffffff" strokeWidth="1.5" strokeLinejoin="round" />
                </svg>
                <span className="wordmark">
                  <b>Carolina Core</b>
                  <span>FC Youth</span>
                </span>
              </a>
              <p>
                Developing youth soccer players and people of character in
                Kernersville and the Piedmont Triad.
              </p>
            </div>
            <div className="footer-col">
              <h5>Explore</h5>
              <a href="#programs">Programs</a>
              <a href="#tryouts">Tryouts</a>
              <a href="#tournaments">Tournaments</a>
              <a href="#partners">Partners</a>
              <a href="#register">Register</a>
            </div>
            <div className="footer-col">
              <h5>Contact</h5>
              <p>Carolina Core FC Youth</p>
              <p>P.O. Box 333</p>
              <p>Kernersville, NC, 27285</p>
              <a href="tel:3369920089">336.992.0089</a>
            </div>
          </div>
          <div className="footer-bottom">
            Copyright © 2026 Carolina Core FC Youth - All Rights Reserved.
          </div>
        </div>
      </footer>

      <CookieBanner />
    </>
  );
}
