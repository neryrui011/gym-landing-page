const footerLinks = {
  Company: ["About Us", "Careers", "Press", "Partners"],
  Services: ["CrossFit", "Open Gym", "Powerlifting", "Gymnastics"],
  Contact: ["neryui011@gmail.com", " (+258) 84 77 42 684", "123 Fitness Ave, NY", "Mon–Sun: 6AM–11PM"],
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
              {[
                <span key="fb" className="[&>svg]:h-4 [&>svg]:w-4 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 320 512">
                    <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                  </svg>
                </span>,
                <span key="ig" className="[&>svg]:h-4 [&>svg]:w-4 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                  </svg>
                </span>,
                <span key="go" className="[&>svg]:h-4 [&>svg]:w-4 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 488 512">
                    <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                  </svg>
                </span>,
                <span key="tt" className="[&>svg]:h-4 [&>svg]:w-4 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
                    <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z" />
                  </svg>
                </span>
              ].map((icon, i) => (
                <button
                  key={i}
                  aria-label={`Social media ${i}`}
                  className="text-[var(--color-muted)] border border-[var(--color-border)] transition-all duration-200 hover:border-[#C8FF00] hover:text-[#C8FF00]"
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: "transparent",
                    fontSize: "16px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
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
                      className="text-[var(--color-muted)] transition-colors duration-200 hover:text-[#C8FF00]"
                      style={{
                        textDecoration: "none",
                        fontSize: "13px",
                      }}
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
            © 2026 Neryrui. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "24px" }}>
            {["Privacy Policy", "Terms of Use", "Cookie Policy"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[var(--color-muted)] transition-colors duration-200 hover:text-[#C8FF00]"
                style={{
                  textDecoration: "none",
                  fontSize: "12px",
                }}
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
