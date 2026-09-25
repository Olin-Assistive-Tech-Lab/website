import { useState } from "react";
import {
  ArrowRight,
  Menu,
  X,
  ExternalLink,
} from "lucide-react";

import "./styles.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="site">

      {/* =========================
          NAVIGATION
      ========================= */}

      <header className="navbar">

        <a
          href="#home"
          className="logo"
          onClick={closeMenu}
        >
          <img
            src="/images/oat-logo.png"
            alt="Olin Assistive Technology Lab"
          />
        </a>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open navigation"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav
          className={
            menuOpen
              ? "navigation open"
              : "navigation"
          }
        >
          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#goals" onClick={closeMenu}>
            Goals
          </a>

          <a href="#connections" onClick={closeMenu}>
            Connections
          </a>

          <a href="#history" onClick={closeMenu}>
            History
          </a>

          <a
            href="#sponsor"
            className="nav-button"
            onClick={closeMenu}
          >
            Sponsor Us
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
          <a href="#our-team" onClick={closeMenu}>
            Our Team
          </a>
        </nav>

      </header>


      <main>

        {/* =========================
            HERO
        ========================= */}

        <section
          id="home"
          className="hero"
        >

          <img
            className="hero-image"
            src="/images/oat-banner.jpg"
            alt="Olin Assistive Technology Lab"
          />

          <div className="hero-overlay" />

          <div className="hero-content" style={{ flex: 1, maxWidth: '50%' }}>

            <h1>
              OLIN
              <br />
              ASSISTIVE
              <br />
              <span>TECHNOLOGY LAB</span>
            </h1>

            <p className="hero-description">
              Olin’s newest project team dedicated to creating impactful assistive devices that make the world a more accessible place for those whom it is not designed for. The team was established to give students a place to practice their engineering and design skills while fostering a passion for a positive social impact.


            </p>

            <a
              href="#about"
              className="hero-button"
            >
              Learn More
              <ArrowRight size={18} />
            </a>

          </div>

          <img 
    src="/images/oat-team-2025-2026.jpg" 
    style={{ width: '40%', height: 'auto', borderRadius: '8px' }} 
    alt="OAT Lab Team 2025-2026 School Year" 
  />  

        </section>

        {/* =========================
            SUPPORT US
        ========================= */}
        


        {/* =========================
            ABOUT
        ========================= */}

        <section
          id="about"
          className="section about"
        >

          <div className="section-number">
            01
          </div>

          <div className="section-title">
            <p className="section-label">
              ABOUT THE LAB
            </p>

            <h2>
              Technology
              <br />
              <em>for everyone.</em>
            </h2>
          </div>

          <div className="about-content">

            <p className="lead">
              The Olin Assistive Technology Lab
              explores the intersection of people,
              technology, and accessibility.
            </p>

            <p>
              We investigate how people with
              different abilities experience
              technology and use those insights
              to explore new approaches to
              assistive technology, accessible
              interfaces, and human-centered
              design.
            </p>

            <p>
              Our work brings together students,
              researchers, faculty, and community
              members to learn from lived
              experiences and develop technology
              around real human needs.
            </p>

          </div>

        </section>


        {/* =========================
            GOALS
        ========================= */}

        <section
          id="goals"
          className="dark-section"
        >

          <div className="dark-heading">

            <p className="section-label">
              02 / OUR GOALS
            </p>

            <h2>
              What we're
              <br />
              <em>working toward.</em>
            </h2>

          </div>

          <div className="goals-grid">

            <article className="goal">

              <span>01</span>

              <h3>
                Understand
              </h3>

              <p>
                Learn from people with disabilities
                and understand the barriers they
                encounter when using technology.
              </p>

            </article>


            <article className="goal">

              <span>02</span>

              <h3>
                Design
              </h3>

              <p>
                Explore accessible interfaces,
                assistive technologies, and
                human-centered design approaches.
              </p>

            </article>


            <article className="goal">

              <span>03</span>

              <h3>
                Prototype
              </h3>

              <p>
                Turn research insights into
                tangible concepts and technologies
                that can be explored and tested.
              </p>

            </article>


            <article className="goal">

              <span>04</span>

              <h3>
                Empower
              </h3>

              <p>
                Help create technology that gives
                people greater choice, independence,
                and participation.
              </p>

            </article>

          </div>

        </section>


        {/* =========================
            CONNECTIONS
        ========================= */}

        <section
          id="connections"
          className="section connections"
        >

          <div className="section-number">
            03
          </div>

          <div className="section-title">

            <p className="section-label">
              OUR CONNECTIONS
            </p>

            <h2>
              Better work
              <br />
              <em>together.</em>
            </h2>

          </div>


          <div className="connection-grid">

            <div className="connection-card">
              <span>01</span>

              <h3>
                Olin Community
              </h3>

              <p>
                Students and faculty contribute
                engineering, design, research,
                and interdisciplinary perspectives.
              </p>
            </div>


            <div className="connection-card">
              <span>02</span>

              <h3>
                Research Participants
              </h3>

              <p>
                People with disabilities help us
                understand real experiences,
                challenges, and opportunities.
              </p>
            </div>


            <div className="connection-card">
              <span>03</span>

              <h3>
                Industry
              </h3>

              <p>
                Connections with organizations
                can help translate research into
                practical technologies and tools.
              </p>
            </div>


            <div className="connection-card">
              <span>04</span>

              <h3>
                Accessibility Community
              </h3>

              <p>
                We learn from the broader
                accessibility and assistive
                technology community.
              </p>
            </div>

          </div>

        </section>


        {/* =========================
            HISTORY
        ========================= */}

        <section
          id="history"
          className="history"
        >

          <div className="history-heading">

            <p className="section-label">
              04 / OUR HISTORY
            </p>

            <h2>
              Where we've
              <br />
              <em>been.</em>
            </h2>

            <p>
              The lab continues to grow through
              research, student projects, and
              collaborations focused on accessibility.
            </p>

          </div>


          <div className="timeline">

            <div className="timeline-item">

              <div className="timeline-year">
                BEGIN
              </div>

              <div>
                <h3>
                  Building the Lab
                </h3>

                <p>
                  Olin students and researchers
                  began exploring assistive technology
                  through hands-on projects and
                  accessibility-focused research.
                </p>
              </div>

            </div>


            <div className="timeline-item">

              <div className="timeline-year">
                RESEARCH
              </div>

              <div>
                <h3>
                  Learning From Users
                </h3>

                <p>
                  Research expanded to include
                  conversations and interviews with
                  people with disabilities to better
                  understand their experiences with
                  technology.
                </p>
              </div>

            </div>


            <div className="timeline-item">

              <div className="timeline-year">
                TODAY
              </div>

              <div>
                <h3>
                  Growing Through Collaboration
                </h3>

                <p>
                  Current work combines accessibility,
                  human-centered research, engineering,
                  and design to investigate new
                  assistive technologies.
                </p>
              </div>

            </div>


            <div className="timeline-item">

              <div className="timeline-year">
                NEXT
              </div>

              <div>
                <h3>
                  Expanding Possibilities
                </h3>

                <p>
                  We are continuing to build
                  partnerships, develop projects,
                  and create opportunities for
                  students to contribute to
                  accessible technology research.
                </p>
              </div>

            </div>

          </div>

        </section>


        {/* =========================
            SPONSOR
        ========================= */}

        <section
          id="sponsor"
          className="sponsor"
        >

          <div className="sponsor-image">

            <img
              src="/images/oat-logo.png"
              alt="oat lab logo"
            />

            <div className="sponsor-image-overlay" />

          </div>


          <div className="sponsor-content">

            <p className="section-label">
              05 / SUPPORT THE LAB
            </p>

            <h2>
              Sponsor
              <br />
              <em>our work.</em>
            </h2>

            <p className="sponsor-lead">
              Help students and researchers
              explore new possibilities in
              accessible and assistive technology.
            </p>

            <p>
              Support can take many forms,
              including financial contributions,
              equipment, technical expertise,
              mentorship, research partnerships,
              and opportunities for students.
            </p>


            <div className="support-options">

              <div>
                <strong>
                  Funding
                </strong>

                <span>
                  Support research and prototypes.
                </span>
              </div>

              <div>
                <strong>
                  Equipment
                </strong>

                <span>
                  Provide tools and technology.
                </span>
              </div>

              <div>
                <strong>
                  Mentorship
                </strong>

                <span>
                  Share expertise with students.
                </span>
              </div>

              <div>
                <strong>
                  Partnership
                </strong>

                <span>
                  Collaborate on accessibility research.
                </span>
              </div>

            </div>


            <a
              href="#contact"
              className="dark-button"
            >
              Become a Partner
              <ArrowRight size={18} />
            </a>

          </div>

        </section>


        {/* =========================
            CONTACT
        ========================= */}

        <section
          id="contact"
          className="contact"
        >

          <div className="contact-heading">

            <p className="section-label">
              06 / CONTACT
            </p>

            <h2>
              Let's connect.
            </h2>

            <p>
              Interested in our research,
              collaborating with the lab,
              sponsoring our work, or getting
              involved as a student?
            </p>

          </div>


          <form
            className="contact-form"
            onSubmit={(event) =>
              event.preventDefault()
            }
          >

            <div className="form-row">

              <label>
                Name

                <input
                  type="text"
                  placeholder="Your name"
                  required
                />
              </label>


              <label>
                Email

                <input
                  type="email"
                  placeholder="you@example.com"
                  required
                />
              </label>

            </div>


            <label>
              Organization

              <input
                type="text"
                placeholder="Organization or school"
              />
            </label>


            <label>
              How can we help?

              <textarea
                rows="5"
                placeholder="Tell us about your interest..."
              />
            </label>


            <button
              type="submit"
              className="submit-button"
            >
              Send Message
              <ArrowRight size={18} />
            </button>

          </form>

        </section>

      </main>


      {/* =========================
          FOOTER
      ========================= */}

      <footer>

        <img
          src="/images/oat-logo.png"
          alt="Olin Assistive Technology Lab"
        />

        <div>
          <strong>
            OLIN ASSISTIVE TECHNOLOGY LAB
          </strong>

          <span>
            Olin College of Engineering
          </span>
        </div>

        <a href="#home">
          Back to top ↑
        </a>

      </footer>

    </div>
  );
}

export default App;
