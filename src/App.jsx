import Footer from "./Footer.jsx";
import { useState, useEffect } from "react";;
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

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);

      setTimeout(() => {
        const element = document.getElementById(id);

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
    }
  }, []);

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
          <a
              href={`${import.meta.env.BASE_URL}team/`}
              onClick={closeMenu}
          >
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
  src={`${import.meta.env.BASE_URL}images/oat-team-2026-2027.jpg`}
  style={{ 
    width: '40%', 
    height: 'auto', 
    borderRadius: '8px', 
    display: 'block',     // 1. Makes the image act like a container block
    marginLeft: '-70px'   // 2. Adjust this value to shift it as far left as needed
  }} 
  alt="OAT Lab Team 2026-2027 School Year" 
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
    src={`${import.meta.env.BASE_URL}images/oat-team-2026-2027-silly.jpg`}
    style={{ width: '80%', height: 'auto', borderRadius: '8px' }} 
    alt="OAT Lab Team 2026-2027 School Year Second Version" 
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

    {/* OLIN COLLEGE */}
    <a
      href="https://www.olin.edu/"
      target="_blank"
      rel="noopener noreferrer"
      className="connection-card"
    >

      <img
        src={`${import.meta.env.BASE_URL}images/olin.webp`}
        alt="Olin College"
        className="connection-image"
      />

      <h3>Olin Community</h3>

      <p>
        Students and faculty contribute
        engineering, design, research,
        and interdisciplinary perspectives.
      </p>
    </a>

    {/* CARROLL CENTER */}
    <a
      href="https://carroll.org/"
      target="_blank"
      rel="noopener noreferrer"
      className="connection-card"

    >

      <img
        src={`${import.meta.env.BASE_URL}images/carroll.png`}
        alt="The Carroll Center for the Blind"
        className="connection-image"
      />

      <h3>The Carroll Center for the Blind</h3>

      <p>
        The Carroll Center for the Blind is the foremost
        leader in vision rehabilitation services for
        individuals confronted by the challenges of
        vision loss. OAT Lab has taken initiative to
        interview people that are a part of here.
      </p>
    </a>

    {/* PERKINS SCHOOL FOR THE BLIND */}
    <a
      href="https://www.perkins.org/"
      target="_blank"
      rel="noopener noreferrer"
      className="connection-card"
    >

      <img
        src={`${import.meta.env.BASE_URL}images/perkins.png`}
        alt="Perkins School for the Blind"
        className="connection-image"
      />

      <h3>Perkins School for the Blind</h3>

      <p>
        Perkins helps children with disabilities find
        their place in the world. We are the worldwide
        leader in education services for children and
        young adults with disabilities. We believe every
        child can learn and learning is for life.
        OAT Lab has taken initiative to interview
        people that are a part of here.
      </p>
    </a>

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
      From ORBITAL's early exploration of accessible
      technology to OAT Lab's Jumbo Braille learning
      device, our journey has been shaped by research,
      design, and a commitment to accessibility.
            </p>

          </div>


          <div className="timeline">

            <div className="timeline-item">

              <div className="timeline-year">
                Fall 2024
              </div>

              <div>
                <h3>
                  The Beginning — Exploring Accessibility
                </h3>

                <p>
                  A group of Olin students formed ORBITAL (Olin Research for Biomedical Innovation and Technological Advancement Lab), a human-centered project team exploring a wide range of 
                  accessibility, biomedical, and assistive technology ideas. The original interest meeting focused on researching the needs of people with physical, mobility, and sensory 
                  disabilities before choosing a specific project.
                </p>

                <img
          src={`${import.meta.env.BASE_URL}images/history/ORBITAL-Textual-Logo(2).PNG`}
          alt="Original ORBITAL project team"
          className="timeline-image"
        />
              </div>

            </div>


            <div className="timeline-item">

              <div className="timeline-year">
                Spring 2025
              </div>

              <div>
                <h3>
                  The First Project: Open-Source Braille E-Reader
                </h3>

                <p>
                  The team narrowed its focus to an affordable, open-source Braille e-reader, designed to make digital reading more accessible. 
                  The proposal explored refreshable Braille cells, document-to-Braille conversion, and collaboration with Perkins School for the Blind.
                </p>
              </div>

            </div>


            <div className="timeline-item">

              <div className="timeline-year">
                Fall 2025
              </div>

              <div>
                <h3>
                  A New Identity: OAT Lab
                </h3>

                <p>
                  The team adopted the name Olin Assistive Technology Lab (OAT Lab), reflecting 
                  its broader mission of designing impactful assistive technology through student engineering, 
                  research, and collaboration with users.
                </p>
                <img
                src={`${import.meta.env.BASE_URL}images/history/oat_black-italics_laurel_tp.png`}
          alt="Original ORBITAL project team"
          className="timeline-image"
/>
                
              </div>

            </div>


            <div className="timeline-item">

              <div className="timeline-year">
                Now
              </div>

              <div>
                <h3>
                  Jumbo Braille: Learning Through Touch
                </h3>

                <p>
                  The project evolved into a Braille learning device featuring enlarged, tactile Braille cells to help beginners develop familiarity with Braille. 
                  The current direction emphasizes interactive lessons, accessible physical controls, and audio and haptic feedback.
                </p>
                <img
          src={`${import.meta.env.BASE_URL}images/history/jumbo.png`}
          alt="Original ORBITAL project team"
          className="timeline-image"
        />

              </div>

            </div>

          </div>

        </section>


        
{/* =========================
    SPONSOR US
========================= */}

<section id="sponsor" className="sponsor">

  {/* LEFT SIDE — GOOGLE FORM */}
  <div className="sponsor-form-panel">

    <div className="sponsor-form-heading">
      <p className="section-label">
        BECOME A SPONSOR
      </p>

      <h3>Partner with OAT Lab.</h3>

      <p>
        Interested in supporting our work?
        Complete the form below to connect with
        our team about sponsorship opportunities,
        technical support, and collaboration.
      </p>
    </div>

    <div className="sponsor-google-form">
      <iframe
        title="OAT Lab Sponsorship Interest Form"
        src="https://docs.google.com/forms/d/e/1FAIpQLSfpmb2Dx732L7qkeZIbBq2hIBrV-0Ymv-UIp49YaeJ-QB6j8g/viewform?usp=sharing&ouid=101556864307449687472"
        width="100%"
        height="850"
        loading="lazy"
      >
        Loading…
      </iframe>
    </div>

  </div>


  {/* RIGHT SIDE — SPONSOR INFORMATION */}
  <div className="sponsor-content">

    <p className="section-label">
      05 / SUPPORT THE LAB
    </p>

    <h2>
      Sponsor
      <br />
      <em>our work.</em>
    </h2>

    <p className="sponsor-intro">
      Our team relies on collaborative relationships
      with sponsors to develop meaningful assistive
      technology.
    </p>

    <p className="sponsor-description">
      The Olin Assistive Technology Lab (OAT Lab)
      is a student-led project team dedicated to
      designing assistive devices that make the
      world more accessible.
    </p>

    <p className="sponsor-description">
      We are currently developing an open-source
      Braille learning device for people who have
      recently lost their vision or are beginning
      to learn Braille. By developing this device
      with its users in mind, we aim to make
      accessibility central to our engineering
      and design process.
    </p>

    <p className="sponsor-description">
      We welcome support from companies,
      organizations, professionals, and individuals.
      There are many ways to contribute to our work:
    </p>


    {/* SPONSORSHIP OPTIONS */}
    <div className="sponsor-options">

      <div className="sponsor-option">
        <h3>FUNDING</h3>

        <p>
          Financial contributions help us purchase
          electronic components, manufacture custom
          PCBs, fabricate prototypes, compensate
          research participants, and support
          team activities.
        </p>
      </div>

      <div className="sponsor-option">
        <h3>EQUIPMENT & MATERIALS</h3>

        <p>
          Donations of actuators, sensors,
          electronics, fabrication materials,
          and other hardware help us build
          and improve our Braille learning device.
        </p>
      </div>

      <div className="sponsor-option">
        <h3>MENTORSHIP</h3>

        <p>
          Professional expertise, design reviews,
          and technical guidance help our team
          overcome engineering challenges and
          provide valuable learning opportunities
          for student engineers.
        </p>
      </div>

      <div className="sponsor-option">
        <h3>SERVICES & MANUFACTURING</h3>

        <p>
          Access to specialized fabrication,
          manufacturing, testing, and engineering
          services helps us develop components
          that may be difficult to produce
          using our existing resources.
        </p>
      </div>

      <div className="sponsor-option">
        <h3>COMMUNITY COLLABORATION</h3>

        <p>
          Partnerships with accessibility
          organizations, educators, and members
          of the visually impaired community
          help us develop technology informed
          by real user needs and feedback.
        </p>
      </div>

    </div>


    {/* CROWDFUNDING INFORMATION */}
    <div className="sponsor-donate">

      <h3>Support Our $6,250 Fundraising Goal</h3>

      <p>
        Every contribution makes a difference.
        From purchasing components and manufacturing
        custom circuit boards to supporting user
        research and attending assistive technology
        conferences, your generosity helps us
        continue our work.
      </p>

      <p>
        Whether it's $5 or $1,000, thank you
        for helping us make accessible technology
        a reality.
      </p>

      <a
        href="https://www.olin.edu/oat"
        target="_blank"
        rel="noopener noreferrer"
        className="sponsor-button"
      >
        Donate Through Olin College
        <ArrowRight size={18} />
      </a>

    </div>


    {/* CONTACT */}
    <p className="sponsor-contact">
      Have questions about sponsoring or
      collaborating with OAT Lab?{" "}
      <a href="#contact">
        Contact our team.
      </a>
    </p>

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

      <Footer />

    </div>
  );
}

export default App;
