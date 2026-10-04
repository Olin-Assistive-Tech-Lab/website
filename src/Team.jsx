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
          name: "Member Name",
          role: "Lab Lead",
          image: "member1.jpg",
        },
        {
          name: "Member Name",
          role: "Project Lead",
          image: "member2.jpg",
        },
        {
          name: "Member Name",
          role: "Research Lead",
          image: "member3.jpg",
        },
        {
          name: "Member Name",
          role: "Team Lead",
          image: "member4.jpg",
        },
      ],
    },

    {
      title: "Mechanical",
      members: [
        {
          name: "Member Name",
          role: "Mechanical Design",
          image: "member5.jpg",
        },
        {
          name: "Member Name",
          role: "Mechanical Engineering",
          image: "member6.jpg",
        },
        {
          name: "Member Name",
          role: "Mechanical Design",
          image: "member7.jpg",
        },
        {
          name: "Member Name",
          role: "Mechanical Engineering",
          image: "member8.jpg",
        },
      ],
    },

    {
      title: "Software / Firmware",
      members: [
        {
          name: "Member Name",
          role: "Software",
          image: "member9.jpg",
        },
        {
          name: "Member Name",
          role: "Firmware",
          image: "member10.jpg",
        },
        {
          name: "Member Name",
          role: "Software",
          image: "member11.jpg",
        },
        {
          name: "Member Name",
          role: "Firmware",
          image: "member12.jpg",
        },
      ],
    },

    {
      title: "UI/UX & Design",
      members: [
        {
          name: "Member Name",
          role: "UI/UX Design",
          image: "member13.jpg",
        },
        {
          name: "Member Name",
          role: "User Research",
          image: "member14.jpg",
        },
        {
          name: "Member Name",
          role: "Product Design",
          image: "member15.jpg",
        },
        {
          name: "Member Name",
          role: "Visual Design",
          image: "member16.jpg",
        },
      ],
    },

    {
      title: "Hardware",
      members: [
        {
          name: "Member Name",
          role: "Hardware Engineering",
          image: "member17.jpg",
        },
        {
          name: "Member Name",
          role: "Electronics",
          image: "member18.jpg",
        },
        {
          name: "Member Name",
          role: "Device Interaction",
          image: "member19.jpg",
        },
        {
          name: "Member Name",
          role: "Hardware Engineering",
          image: "member20.jpg",
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
      href={`${base}team/`}
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
            OUR AMAZING TEAM
          </h1>

          <p>
            Our team of students, researchers, and collaborators
            design, build, and explore the future of assistive technology.
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
