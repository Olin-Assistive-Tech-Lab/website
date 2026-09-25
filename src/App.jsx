import { useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  Menu,
  X,
  Accessibility,
  Lightbulb,
  Users,
  Code2,
} from "lucide-react";

import "./styles.css";

const researchAreas = [
  {
    number: "01",
    title: "Assistive Technology",
    description:
      "Exploring technologies that support greater independence, access, and participation in everyday life.",
    icon: Accessibility,
  },
  {
    number: "02",
    title: "Human-Centered Research",
    description:
      "Working directly with people with disabilities to understand experiences, barriers, and opportunities for design.",
    icon: Users,
  },
  {
    number: "03",
    title: "Accessible Interfaces",
    description:
      "Designing interactions that work across different abilities, devices, environments, and ways of experiencing technology.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Prototyping",
    description:
      "Turning research insights into tangible prototypes that can be tested, evaluated, and improved.",
    icon: Lightbulb,
  },
];

const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "We begin by listening to people and understanding their experiences with technology.",
  },
  {
    number: "02",
    title: "Explore",
    description:
      "Research and experimentation help us identify opportunities for more accessible technology.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "We develop concepts and prototypes around real needs rather than assumptions.",
  },
  {
    number: "04",
    title: "Test",
    description:
      "Prototypes are evaluated to learn what works, what does not, and what should change.",
  },
  {
    number: "05",
    title: "Iterate",
    description:
      "We use what we learn to continuously improve our designs and research.",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="site">

      {/* NAVIGATION */}

      <header className="navbar">

        <a
          href="#home"
          className="brand"
          onClick={closeMenu}
        >
          <span className="brand-logo">
            OAT
          </span>

          <span className="brand-text">
            OLIN
            <br />
            <strong>ASSISTIVE TECHNOLOGY LAB</strong>
          </span>
        </a>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
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

          <a href="#research" onClick={closeMenu}>
            Research
          </a>

          <a href="#approach" onClick={closeMenu}>
            Approach
          </a>

          <a href="#team" onClick={closeMenu}>
            Team
          </a>

          <a href="#partners" onClick={closeMenu}>
            Partners
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>

          <a
            href="#research"
            className="nav-cta"
            onClick={closeMenu}
          >
            Explore Our Work
          </a>
        </nav>

      </header>


      <main>

        {/* HERO */}

        <section
          id="home"
          className="hero"
        >

          <div className="hero-grid" />

          <div className="hero-content">

            <p className="eyebrow">
              OLIN COLLEGE OF ENGINEERING
              <span>•</span>
              ASSISTIVE TECHNOLOGY
              <span>•</span>
              HUMAN-CENTERED DESIGN
            </p>

            <h1>
              DESIGN.
              <br />
              <span>ADAPT.</span>
              <br />
              EMPOWER.
            </h1>

            <p className="hero-description">
              We explore how technology can
              make everyday experiences more
              accessible, independent, and
              inclusive.
            </p>

            <div className="hero-buttons">

              <a
                href="#research"
                className="button button-primary"
              >
                Explore Our Work
                <ArrowRight size={18} />
              </a>

              <a
                href="#about"
                className="button button-outline"
              >
                About the Lab
              </a>

            </div>

          </div>

          <a
            href="#about"
            className="scroll-indicator"
          >
            <ChevronDown size={18} />
            Explore the Lab
          </a>

        </section>


        {/* ABOUT */}

        <section
          id="about"
          className="section about"
        >

          <div className="section-label">
            01 / ABOUT THE LAB
          </div>

          <div className="about-grid">

            <div>

              <h2>
                Technology should
                <br />
                <em>work for everyone.</em>
              </h2>

            </div>

            <div>

              <p className="large-text">
                The Olin Assistive Technology
                Lab brings together engineering,
                design, research, and lived
                experience to explore better
                ways of interacting with
                technology.
              </p>

              <p>
                Our work focuses on understanding
                the experiences of people with
                disabilities and using those
                insights to create technologies
                that support access, independence,
                and participation.
              </p>

              <a
                href="#approach"
                className="text-link"
              >
                Our approach
                <ArrowRight size={17} />
              </a>

            </div>

          </div>

        </section>


        {/* FEATURE PROJECT */}

        <section
          id="feature"
          className="feature-project"
        >

          <div className="feature-image">

            <div className="image-placeholder">

              <Accessibility size={42} />

              <span>
                LAB PROJECT
              </span>

              <small>
                Replace with a project image
              </small>

            </div>

          </div>

          <div className="feature-info">

            <div className="section-label">
              02 / CURRENT WORK
            </div>

            <p className="kicker">
              RESEARCH • DESIGN • ACCESSIBILITY
            </p>

            <h2>
              TECHNOLOGY
              <br />
              <em>FOR PEOPLE.</em>
            </h2>

            <p>
              Our projects investigate how
              technology can better support
              people with different abilities
              and ways of interacting with
              the world.
            </p>

            <div className="feature-stats">

              <div>
                <strong>01</strong>
                <span>
                  HUMAN-CENTERED
                </span>
              </div>

              <div>
                <strong>∞</strong>
                <span>
                  POSSIBILITIES
                </span>
              </div>

              <div>
                <strong>100%</strong>
                <span>
                  ACCESSIBLE THINKING
                </span>
              </div>

            </div>

            <a
              href="#approach"
              className="button button-dark"
            >
              How We Work
              <ArrowRight size={18} />
            </a>

          </div>

        </section>


        {/* RESEARCH */}

        <section
          id="research"
          className="section research"
        >

          <div className="section-heading">

            <div className="section-label">
              03 / RESEARCH
            </div>

            <h2>
              We ask
              <br />
              <em>better questions.</em>
            </h2>

          </div>

          <div className="project-grid">

            {researchAreas.map((project) => {

              const Icon = project.icon;

              return (
                <article
                  className="project-card"
                  key={project.number}
                >

                  <span className="project-number">
                    {project.number}
                  </span>

                  <Icon
                    className="project-icon"
                    size={34}
                  />

                  <h3>
                    {project.title}
                  </h3>

                  <p>
                    {project.description}
                  </p>

                  <ArrowRight
                    className="project-arrow"
                    size={20}
                  />

                </article>
              );

            })}

          </div>

        </section>


        {/* APPROACH */}

        <section
          id="approach"
          className="section approach"
        >

          <div className="section-heading centered">

            <div className="section-label">
              04 / OUR APPROACH
            </div>

            <h2>
              Research.
              <br />
              <em>Design. Iterate.</em>
            </h2>

            <p>
              Accessibility is not something
              added at the end of a project.
              It is part of the process from
              the beginning.
            </p>

          </div>

          <div className="timeline">

            {process.map((item) => (

              <article
                className="timeline-item"
                key={item.number}
              >

                <div className="timeline-dot" />

                <div className="timeline-number">
                  {item.number}
                </div>

                <div>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.description}
                  </p>

                </div>

              </article>

            ))}

          </div>

        </section>


        {/* TEAM */}

        <section
          id="team"
          className="section team"
        >

          <div className="team-copy">

            <div className="section-label">
              05 / THE LAB
            </div>

            <h2>
              Different
              <br />
              <em>perspectives.</em>
            </h2>

            <p>
              Students, researchers,
              faculty, and collaborators
              bring different experiences
              and areas of expertise to
              our work.
            </p>

            <a
              href="#contact"
              className="button button-dark"
            >
              Meet the Lab
              <ArrowRight size={18} />
            </a>

          </div>

          <div className="team-collage">

            <div className="team-photo tall">
              LAB PHOTO
            </div>

            <div className="team-photo">
              RESEARCH
            </div>

            <div className="team-photo">
              PROTOTYPING
            </div>

          </div>

        </section>


        {/* PARTNERS */}

        <section
          id="partners"
          className="section partners"
        >

          <div className="section-heading centered">

            <div className="section-label">
              06 / COLLABORATION
            </div>

            <h2>
              Built through
              <br />
              <em>collaboration.</em>
            </h2>

            <p>
              Meaningful assistive technology
              grows from collaboration between
              researchers, designers, engineers,
              users, and communities.
            </p>

          </div>

          <div className="partner-grid">

            <div className="partner">
              OLIN
            </div>

            <div className="partner">
              RESEARCH
            </div>

            <div className="partner">
              COMMUNITY
            </div>

            <div className="partner">
              INDUSTRY
            </div>

            <div className="partner">
              ACCESSIBILITY
            </div>

          </div>

        </section>


        {/* CONTACT */}

        <section
          id="contact"
          className="contact"
        >

          <div className="contact-inner">

            <div>

              <div className="section-label">
                07 / CONTACT
              </div>

              <h2>
                Let's make
                <br />
                <em>technology accessible.</em>
              </h2>

              <p>
                Interested in our research,
                collaborating with the lab,
                or learning more about our
                projects?
              </p>

            </div>

            <form
              onSubmit={(event) =>
                event.preventDefault()
              }
            >

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

              <label>
                Organization

                <input
                  type="text"
                  placeholder="Organization"
                />
              </label>

              <label>
                Message

                <textarea
                  rows="5"
                  placeholder="Tell us about your interest..."
                />
              </label>

              <button
                type="submit"
                className="button button-primary"
              >
                Send Message
                <ArrowRight size={18} />
              </button>

            </form>

          </div>

        </section>

      </main>


      {/* FOOTER */}

      <footer>

        <div className="footer-brand">

          <span className="brand-logo">
            OAT
          </span>

          <div>

            <strong>
              OLIN ASSISTIVE TECHNOLOGY LAB
            </strong>

            <small>
              Human-centered.
              Accessible.
              Inclusive.
            </small>

          </div>

        </div>

        <p>
          Olin College of Engineering
        </p>

      </footer>

    </div>
  );
}

export default App;
