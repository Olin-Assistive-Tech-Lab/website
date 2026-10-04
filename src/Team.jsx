import { useState } from "react";
import { Menu, X } from "lucide-react";

function Team() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const base = import.meta.env.BASE_URL;

  const teamSections = [
    {
      title: "Leadership",
      members: [
        {
          name: "Brandon Spiller",
          role: "Project Manager",
          image: "brandon.jpg",
        },
        {
          name: "Quinn Verrill",
          role: "Project Manager Emeritus",
          image: "quinn.jpg",
        },
        {
          name: "Ramzey Burdette",
          role: "Software/Firmware Development Lead",
          image: "rami.jpg",
        },
        {
          name: "Tierra Raiti",
          role: "Hardware Lead",
          image: "tierra.jpg",
        },
        {
          name: "Titilayo Oshinowo",
          role: "UI,UX, & Design Lead",
          image: "titi.jpg",
        },
        {
          name: "Trevor McDonald",
          role: "External Outreach Lead",
          image: "trevor.jpg",
        },
        {
          name: "Emma Larouche",
          role: "Mechanical & Actuation Lead",
          image: "emma.jpg",
        },
        {
          name: "Douglas Sanchez",
          role: "Internal Outreach Lead",
          image: "douglas.jpg",
        },
      ],
    },

    {
      title: "Hardware",
      members: [
        {
          name: "Eleane Lin",
          role: "Hardware",
          image: "eleane.jpg",
        },
        {
          name: "Christ-Ismael Kone",
          role: "Mechanical Engineering",
          image: "christ.jpg",
        },
      ],
    },

    {
      title: "Software / Firmware",
      members: [
        {
          name: "Evi Shih",
          role: "Software / Firmware",
          image: "evi.jpg",
        },
        {
          name: "Alexandre Picard",
          role: "Software / Firmware",
          image: "xandre.jpg",
        },
        {
          name: "Alex Solis",
          role: "Software / Firmware",
          image: "alex.jpg",
        },
        {
          name: "Sriya Buddharaju",
          role: "Firmware",
          image: "member12.jpg",
        },
      ],
    },

    {
      title: "UI/UX & Design",
      members: [
        {
          name: "Eiley Shat",
          role: "UI/UX Design",
          image: "eiley.jpg",
        },
        {
          name: "Saraya Perdios",
          role: "UI/UX Design",
          image: "saraya.jpg",
        },
        {
          name: "Lina Pu",
          role: "UI/UX Design",
          image: "lina.jpg",
        },
        {
          name: "Kylie Sayre",
          role: "UI/UX Design",
          image: "kylie.jpg",
        },
      ],
    },

    {
      title: "Mechanical & Actuation",
      members: [
        {
          name: "Anna Brown",
          role: "Mechanical & Actuation",
          image: "anna.jpg",
        },
        {
          name: "Audrey Garfield",
          role: "Mechanical & Actuation",
          image: "audrey.jpg",
        },
        {
          name: "Oliver Loffer",
          role: "Mechanical & Actuation",
          image: "oliver.jpg",
        },
        {
          name: "Spencer Fieldroy",
          role: "Mechanical & Actuation",
          image: "spencer.jpg",
        },
      ],
    },
  ];

  return (
    <div className="site">

      {/* =========================
          NAVIGATION
      ========================= */}

      <header className="navbar">

  <a
    href={`${base}`}
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

    <a
      href={`${base}#about`}
      onClick={closeMenu}
    >
      About
    </a>

    <a
      href={`${base}#goals`}
      onClick={closeMenu}
    >
      Goals
    </a>

    <a
      href={`${base}#connections`}
      onClick={closeMenu}
    >
      Connections
    </a>

    <a
      href={`${base}#history`}
      onClick={closeMenu}
    >
      History
    </a>

    <a
      href={`${base}#sponsor`}
      className="nav-button"
      onClick={closeMenu}
    >
      Sponsor Us
    </a>

    <a
      href={`${base}#contact`}
      onClick={closeMenu}
    >
      Contact
    </a>

    <a
    href={`${base}#team`}
    onClick={closeMenu}
    >
      Our Team
    </a>

  </nav>

</header>

      {/* =========================
          TEAM INTRO
      ========================= */}

      <main className="team-page">

        <section className="team-intro">

          <h1>
            OUR WONDERFUL TEAM
          </h1>

          <p>
            Our team of engineers research design, build, and explore the
            future of assistive technology.
          </p>

        </section>


        {/* =========================
            TEAM SECTIONS
        ========================= */}

        <div className="team-sections">

          {teamSections.map((section) => (

            <section
              className="team-section"
              key={section.title}
            >

              <h2>
                {section.title}
              </h2>

              <div className="team-members">

                {section.members.map((member) => (

                  <article
                    className="team-member"
                    key={`${section.title}-${member.name}-${member.role}`}
                  >

                    <img
                      src={`${base}images/${member.image}`}
                      alt={member.name}
                    />

                    <h3>
                      {member.name}
                    </h3>

                    <p>
                      {member.role}
                    </p>

                  </article>

                ))}

              </div>

            </section>

          ))}

        </div>

      </main>

    </div>
  );
}

export default Team;
