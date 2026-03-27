"use client";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? "#000" : "transparent",
        backdropFilter: scrolled ? "none" : "none",
        transition: "background 0.4s ease",
        borderBottom: "1px solid var(--color-border)",
      }}
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
          {["Home", "Shop", "Blog", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              style={{
                color: "var(--color-muted)",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: 400,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "var(--color-accent)")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "var(--color-muted)")
              }
            >
              {link}
            </a>
          ))}
        </div>

        {/* Right Icons */}
        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          {/* Search */}
          <button
            aria-label="Search"
            style={{ background: "none", border: "none", color: "var(--color-muted)", cursor: "pointer", display: "flex", alignItems: "center", transition: "color 0.2s" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--color-accent)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--color-muted)")}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={22} height={22}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </button>

          {/* Messages */}
          <button
            aria-label="Messages"
            style={{ background: "none", border: "none", color: "var(--color-muted)", cursor: "pointer", display: "flex", alignItems: "center", transition: "color 0.2s" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--color-accent)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--color-muted)")}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={22} height={22}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
          </button>

          {/* Profile / Menu */}
          <button
            aria-label="Profile"
            style={{ background: "none", border: "none", color: "var(--color-muted)", cursor: "pointer", display: "flex", alignItems: "center", transition: "color 0.2s" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--color-accent)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--color-muted)")}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={22} height={22}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>

          {/* Hamburger */}
          <button
            aria-label="Toggle menu"
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              display: "none",
              background: "none",
              border: "none",
              color: "var(--color-text)",
              fontSize: "22px",
              cursor: "pointer",
            }}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            background: "#000",
            padding: "16px 24px 24px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          {["Home", "Shop", "Blog", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              style={{
                color: "var(--color-muted)",
                textDecoration: "none",
                fontSize: "16px",
                fontWeight: 500,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              {link}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .hamburger { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
