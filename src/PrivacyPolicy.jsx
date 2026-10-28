
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Footer from "./Footer.jsx";

export default function PrivacyPolicy() {
  const [menuOpen, setMenuOpen] = useState(false);
  const base = import.meta.env.BASE_URL;

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site">

      {/* =========================
          NAVIGATION HEADER
      ========================= */}

      <header className="navbar">
        <a
          href={base}
          className="logo"
          onClick={closeMenu}
        >
          <img
            src={`${base}images/oat-logo.png`}
            alt="Olin Assistive Technology Lab"
          />
        </a>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className={menuOpen ? "navigation open" : "navigation"}>
          <a href={`${base}#about`} onClick={closeMenu}>
            About
          </a>

          <a href={`${base}#goals`} onClick={closeMenu}>
            Goals
          </a>

          <a href={`${base}#connections`} onClick={closeMenu}>
            Connections
          </a>

          <a href={`${base}#history`} onClick={closeMenu}>
            History
          </a>

          <a
            href={`${base}#sponsor`}
            className="nav-button"
            onClick={closeMenu}
          >
            Sponsor Us
          </a>

          <a href={`${base}#contact`} onClick={closeMenu}>
            Contact
          </a>

          <a href={`${base}team/`} onClick={closeMenu}>
            Our Team
          </a>
        </nav>
      </header>

      {/* =========================
          PRIVACY POLICY CONTENT
      ========================= */}

      <main className="privacy-page">
        <h1>PRIVACY POLICY</h1>

        <div className="privacy-content">
          <p>
            This Privacy Policy describes how your personal
            information is collected, used, and shared when
            you visit the Olin Assistive Technology Lab website
            (the "Site").
          </p>

          <h2>PERSONAL INFORMATION WE COLLECT</h2>

          <p>
            We do not collect any personal information through
            this website or use any cookies.
          </p>

          <h2>CHANGES</h2>

          <p>
            We may update this privacy policy from time to time
            for personal, operational, legal, or regulatory reasons.
          </p>

          <h2>CONTACT US</h2>

          <p>
            For more information about our privacy practices,
            or if you have questions, please contact us through
            the contact section of our website.
          </p>
        </div>
      </main>

      {/* SHARED FOOTER */}
      <Footer />

    </div>
  );
}
