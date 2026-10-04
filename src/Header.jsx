function Header() {
  const base = import.meta.env.BASE_URL;

  return (
    <header className="site-header">
      <a href={base} className="site-logo">
        <img
          src={`${base}images/oat-logo.png`}
          alt="Olin Assistive Technology Lab"
        />
      </a>

      <nav className="site-nav">
        <a href={`${base}#about`}>
          ABOUT
        </a>

        <a href={`${base}#goals`}>
          GOALS
        </a>

        <a href={`${base}#connections`}>
          CONNECTIONS
        </a>

        <a href={`${base}#history`}>
          HISTORY
        </a>

        <a
          href={`${base}#sponsor`}
          className="sponsor-link"
        >
          SPONSOR US
        </a>

        <a href={`${base}#contact`}>
          CONTACT
        </a>

        <a href={`${base}team/`}>
          OUR TEAM
        </a>
      </nav>
    </header>
  );
}

export default Header;

