const footerLinks = {
  Company: ["About Us", "Careers", "Press", "Partners"],
  Services: ["CrossFit", "Open Gym", "Powerlifting", "Gymnastics"],
  Contact: ["hello@gymteam.com", "+1 (555) 123-4567", "123 Fitness Ave, NY", "Mon–Sun: 6AM–11PM"],
};

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--color-bg)",
        borderTop: "1px solid var(--color-border)",
        padding: "72px 24px 32px",
      }}
    >
      <div
        style={{
          maxWidth: "var(--max-width)",
          margin: "0 auto",
        }}
      >
        <div
          className="footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr 1fr 1fr 1fr 1.5fr",
            gap: "40px",
            marginBottom: "56px",
          }}
        >
          {/* Column 1 — Brand */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "28px",
                letterSpacing: "0.06em",
                marginBottom: "12px",
              }}
            >
              GYM<span style={{ color: "var(--color-accent)" }}>TEAM</span>
            </div>
            <p
              style={{
                color: "var(--color-muted)",
                fontSize: "13px",
                lineHeight: 1.7,
                marginBottom: "24px",
                maxWidth: "220px",
              }}
            >
              Unleash your potential with world-class coaching and premium facilities.
            </p>
            {/* Social icons */}
            <div style={{ display: "flex", gap: "14px" }}>
              {["🐦", "📸", "💼", "📘"].map((icon, i) => (
                <button
                  key={i}
                  aria-label={`Social media ${i}`}
                  style={{
                    width: "36px",
                    height: "36px",
                    border: "1px solid var(--color-border)",
                    borderRadius: "50%",
                    background: "transparent",
                    color: "var(--color-muted)",
                    fontSize: "16px",
                    cursor: "pointer",
                    transition: "border-color 0.2s, color 0.2s",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--color-accent)";
                    (e.currentTarget as HTMLButtonElement).style.color = "var(--color-accent)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--color-border)";
                    (e.currentTarget as HTMLButtonElement).style.color = "var(--color-muted)";
                  }}
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>

          {/* Columns 2–4 — Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 700,
                  fontSize: "13px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--color-text)",
                  marginBottom: "20px",
                }}
              >
                {title}
              </h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      style={{
                        color: "var(--color-muted)",
                        textDecoration: "none",
                        fontSize: "13px",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) =>
                        ((e.target as HTMLElement).style.color = "var(--color-text)")
                      }
                      onMouseLeave={(e) =>
                        ((e.target as HTMLElement).style.color = "var(--color-muted)")
                      }
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Column 5 — Newsletter */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 700,
                fontSize: "13px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--color-text)",
                marginBottom: "20px",
              }}
            >
              NEWSLETTER
            </h4>
            <p
              style={{
                color: "var(--color-muted)",
                fontSize: "13px",
                lineHeight: 1.6,
                marginBottom: "16px",
              }}
            >
              Get fitness tips and exclusive offers straight to your inbox.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <input
                type="email"
                placeholder="Your email address"
                aria-label="Email for newsletter"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius)",
                  padding: "12px 16px",
                  color: "var(--color-text)",
                  fontSize: "13px",
                  fontFamily: "var(--font-body)",
                  outline: "none",
                }}
              />
              <button
                className="btn-primary"
                style={{ padding: "12px 16px", fontSize: "13px" }}
              >
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          style={{
            borderTop: "1px solid var(--color-border)",
            paddingTop: "24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <p style={{ color: "var(--color-muted)", fontSize: "12px" }}>
            © 2024 GymTeam. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "24px" }}>
            {["Privacy Policy", "Terms of Use", "Cookie Policy"].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  color: "var(--color-muted)",
                  textDecoration: "none",
                  fontSize: "12px",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "var(--color-text)")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = "var(--color-muted)")
                }
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
