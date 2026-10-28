export default function Footer() {
  const base = import.meta.env.BASE_URL;

  const socials = [
    {
      name: "Instagram",
      image: `${base}images/instagram.png`,
      url: "https://www.instagram.com/olinassistivetechlab/",
    },
    {
      name: "LinkedIn",
      image: `${base}images/linkedin.png`,
      url: "https://www.linkedin.com/company/olin-assistive-technology-lab/",
    },
    {
      name: "GitHub",
      image: `${base}images/github.png`,
      url: "https://github.com/Olin-Assistive-Tech-Lab",
    },
  ];

  return (
    <footer className="oat-footer">
      {/* COPYRIGHT */}
      <p className="footer-copyright">
        Copyright © Olin Assistive Technology Lab 2026
      </p>

      {/* SOCIAL MEDIA BUTTONS */}
      <div className="footer-socials">
        {socials.map((social) => {
          const image = (
            <img
              src={social.image}
              alt=""
              className="footer-social-image"
            />
          );

          return social.url ? (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-icon"
              aria-label={`Visit OAT Lab on ${social.name}`}
            >
              {image}
            </a>
          ) : (
            <span
              key={social.name}
              className="footer-social-icon"
              title={social.name}
            >
              {image}
            </span>
          );
        })}
      </div>

      {/* PRIVACY POLICY */}
      <a
  href={`${base}privacy/`}
  className="footer-privacy"
>
  Privacy Policy
</a>

    </footer>
  );
}
