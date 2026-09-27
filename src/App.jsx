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
  src={`${import.meta.env.BASE_URL}images/oat-logo.png`}
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
            src={`${import.meta.env.BASE_URL}images/oat-banner.jpg`}
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
    src={`${import.meta.env.BASE_URL}images/oat-team-2025-2026.jpg`}
    style={{ width: '40%', height: 'auto', borderRadius: '8px' }} 
    alt="OAT Lab Team 2025-2026 School Year" 
  />  

        </section>

        {/* =========================
            SUPPORT US
        ========================= */}
        <section 
        className="section "
        >
          <div className="section-number">
            01
          </div>

          <div className="section-title">
            <p className="section-label">
              SUPPORT US
            </p>
          </div>

          <div className="about-content">

            <p className="lead">
              We are currently dedicated to designing an open source braille learning device for those who have recently lost their vision and are in the process of learning Braille. 
            </p>
            <p>
              By developing this device from scratch with its users in mind, we make impact a tangible part of our engineering and design process. To create it, the team will interact with the visually impaired community both to volunteer and to understand their issues that we could solve with our device. But we need your help. 
            </p>
          </div>

        </section>
        <section className="support-section">
  <div className="support-card">

    <p className="support-label">
      SUPPORT OUR TEAM
    </p>

    <h2>
      Help Us Build Our Braille Device!
    </h2>

    <a
      href="https://www.olin.edu/oat"
      target="_blank"
      rel="noopener noreferrer"
      className="donate-button"
    >
      Donate via Olin.edu
    </a>

    <p className="support-description">
      You will be directed to the official Olin College website.
    </p>

  </div>
</section>



        {/* =========================
            ABOUT
        ========================= */}

        <section
          id="about"
          className="section about"
        >

          <div className="section-number">
            02
          </div>

          <div className="section-title">
            <p className="section-label">
              ABOUT US
            </p>
            </div>
  
          <div className="about-content">

            <p>
              OAT Lab is dedicated to advancing the frontiers of assistive technology and medical device innovation. Our mission is to research, ideate, and design affordable cutting-edge technologies that seamlessly integrate with the human body, improving quality of life and empowering individuals by enhancing how they interact with the world.
            </p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img 
    src={`${import.meta.env.BASE_URL}images/pic-3.png`}
    style={{ width: '80%', height: 'auto', borderRadius: '8px' }} 
    alt="OAT Lab Team 2025-2026 School Year Second Version" 
  />

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

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img 
    src={`${import.meta.env.BASE_URL}images/device.png`}
    style={{ width: '60%', height: 'auto', borderRadius: '8px' }} 
    alt="OAT Lab Team 2025-2026 School Year Second Version" 
  />
  <br></br>
        </div>

        <div className="about-content">

            <p>
              A jumbo Braille learning device designed specially for those who have recently gone blind. The project will have features such as lost device notifications, loadable lessons, portability, and more technical features as-well. The project will have features such as Audio Feedback, Speech to Braille, Haptic Feedback, an 8-12 hour battery life, physical buttons for interface, bluetooth compatibility, and Document Memory Storage.
            </p>
            </div>

                <p className="support-label" style={{ textAlign: 'center', fontSize: '35px' }}>
  OUR SUB-TEAMS
</p>



          <div className="goals-grid">

            <article className="goal">

              <span>01</span>
              <img 
              src={`${import.meta.env.BASE_URL}images/design-placeholder.png`}
    style={{ width: '90%', height: 'auto', borderRadius: '3px', display: 'block', margin: '0 auto' }} 
    alt="OAT Lab Team 2025-2026 School Year Second Version" 
  />

              <h3>
                User Interface, User Experience, & Design
              </h3>

              <p>
                Responsible for modelling a comfortable, usable interface in simulation, working with users to improve it, and owning the form factor and hardware space assignments. 
              </p>

            </article>


            <article className="goal">

              <span>02</span>

              <img 
              src={`${import.meta.env.BASE_URL}images/firm-placeholder.png`}
    style={{ width: '90%', height: 'auto', borderRadius: '3px', display: 'block', margin: '0 auto' }} 
    alt="OAT Lab Team 2025-2026 School Year Second Version" 
  />

              <h3>
                Software/Firmware Development
              </h3>

              <p>
                Responsible for software simulation of the device, compiling high-level code down to the hardware, speech recognition, braille output, and reaching the Machine Learning Model on and off wifi. 
              </p>

            </article>


            <article className="goal">

              <span>03</span>

              <img 
    src={`${import.meta.env.BASE_URL}images/mech-placeholder.png`}
    style={{ width: '90%', height: 'auto', borderRadius: '3px', display: 'block', margin: '0 auto' }} 
    alt="OAT Lab Team 2025-2026 School Year Second Version" 
  />

              <h3>
                Mechanical & Actuation
              </h3>

              <p>
                Responsible for Validating designs and fabricating everything mechanical & actuation based including electromagnets, cells, small parts, form factor (shared with UI,UX,Design) plus potential partnerships for smaller 3D printing. 
              </p>

            </article>


            <article className="goal">

              <span>04</span>

              <img 
    src={`${import.meta.env.BASE_URL}images/hardware-placeholder.png`}
    style={{ width: '90%', height: 'auto', borderRadius: '3px', display: 'block', margin: '0 auto' }} 
    alt="OAT Lab Team 2025-2026 School Year Second Version" 
  />

              <h3>
                Hardware
              </h3>

              <p>
                Responsible for Circuit design and PCB assembly of the battery management system, the main board, the cell actuation boards. Breadboard and proto board prototypes, plus libraries the rest of the team can use. 
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

              <img 
    src={`${import.meta.env.BASE_URL}images/olin.webp`}
    style={{ width: '80%', height: 'auto', borderRadius: '3px', display: 'block', margin: '0 auto' }} 
    alt="OAT Lab Team 2025-2026 School Year Second Version" 
  />

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

              <img 
    src={`${import.meta.env.BASE_URL}images/carroll.png`}
    style={{ width: '80%', height: 'auto', borderRadius: '3px', display: 'block', margin: '0 auto' }} 
    alt="OAT Lab Team 2025-2026 School Year Second Version" 
  />

              <h3>
                The Carroll Center for the Blind
              </h3>

              <p>
                The Carroll Center for the Blind is the foremost leader in vision rehabilitation services for individuals confronted by the challenges of vision loss. OAT Lab has taken initiative to interview people that are a part of here.
              </p>
            </div>

            <div className="connection-card">
              <span>03</span>

              <img 
    src={`${import.meta.env.BASE_URL}images/perkins.png`} 
    style={{ width: '80%', height: 'auto', borderRadius: '3px', display: 'block', margin: '0 auto' }} 
    alt="OAT Lab Team 2025-2026 School Year Second Version" 
  />

              <h3>
                Perkins School for the Blind
              </h3>

              <p>
                TPerkins helps children with disabilities find their place in the world. We are the worldwide leader in education services for children and young adults with disabilities. We believe every child can learn and learning is for life. OAT Lab has taken initiative to interview people that are a part of here.
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
              src={`${import.meta.env.BASE_URL}images/oat-logo.png`}
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
          src={`${import.meta.env.BASE_URL}images/oat-logo.png`}
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
