import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[100] bg-transparent border-none"
    >
      <div
        style={{
          maxWidth: "var(--max-width)",
          margin: "0 auto",
          padding: "0 24px",
          height: "68px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a
          href="#"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "28px",
            color: "var(--color-text)",
            textDecoration: "none",
            letterSpacing: "0.06em",
          }}
        >
          GYM<span style={{ color: "var(--color-accent)" }}>TEAM</span>
        </a>

        {/* Desktop Nav Links */}
        <div
          className="nav-links"
          style={{
            display: "flex",
            gap: "36px",
            listStyle: "none",
          }}
        >
          {["Home", "Shop", "Blog", "Contact"].map((link) => {
            const href = link === "Shop" ? "/shop" : link === "Home" ? "/" : `/#${link.toLowerCase()}`;
            return (
              <Link
                key={link}
                href={href}
                className="text-[var(--color-muted)] transition-colors duration-200 hover:text-[#C8FF00]"
                style={{
                  textDecoration: "none",
                  fontSize: "14px",
                  fontWeight: 400,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                {link}
              </Link>
            );
          })}
        </div>

        {/* Right Icons */}
        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          {/* Search */}
          <button
            aria-label="Search"
            className="text-[var(--color-muted)] transition-colors duration-200 hover:text-[#C8FF00]"
            style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={22} height={22}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </button>

          {/* Messages */}
          <button
            aria-label="Messages"
            className="text-[var(--color-muted)] transition-colors duration-200 hover:text-[#C8FF00]"
            style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={22} height={22}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
          </button>

          {/* Profile / Menu */}
          <button
            className="nav-icon text-[var(--color-muted)] transition-colors duration-200 hover:text-[#C8FF00]"
            aria-label="Profile"
            style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={22} height={22}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>

          {/* Hamburger (CSS only functionality via peer checkbox) */}
          <label
            htmlFor="mobile-menu-toggle"
            aria-label="Toggle menu"
            className="hamburger text-[var(--color-text)] transition-colors duration-200 hover:text-[#C8FF00]"
            style={{
              display: "none",
              fontSize: "22px",
              cursor: "pointer",
            }}
          >
            ☰
          </label>
        </div>
      </div>

      {/* Hidden checkbox logic for mobile menu */}
      <input type="checkbox" id="mobile-menu-toggle" className="peer hidden" />

      {/* Mobile Menu */}
      <div
        className="hidden peer-checked:flex flex-col gap-4 bg-black p-6 border-b"
        style={{ borderColor: "var(--color-border)" }}
      >
        {["Home", "Shop", "Blog", "Contact"].map((link) => {
          const href = link === "Shop" ? "/shop" : link === "Home" ? "/" : `/#${link.toLowerCase()}`;
          return (
            <Link
              key={link}
              href={href}
              className="text-[var(--color-muted)] transition-colors duration-200 hover:text-[#C8FF00]"
              style={{
                textDecoration: "none",
                fontSize: "16px",
                fontWeight: 500,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              {link}
            </Link>
          );
        })}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .hamburger { display: block !important; }
          .nav-icon { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
