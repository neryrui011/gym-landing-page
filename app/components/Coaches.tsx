const coaches = [
  {
    name: "Jane Cooper",
    role: "CrossFit Coach",
    img: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&q=80",
    socials: ["🐦", "📸", "💼"],
  },
  {
    name: "Brooklyn Simmons",
    role: "Strength Coach",
    img: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=400&q=80",
    socials: ["🐦", "📸", "💼"],
  },
  {
    name: "Savannah Nguyen",
    role: "Yoga & Mobility",
    img: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=400&q=80",
    socials: ["🐦", "📸", "💼"],
  },
  {
    name: "Kathryn Murphy",
    role: "Powerlifting Coach",
    img: "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?w=400&q=80",
    socials: ["🐦", "📸", "💼"],
  },
];

export default function Coaches() {
  return (
    <section
      style={{
        background: "var(--color-bg-alt)",
        padding: "96px 24px",
      }}
    >
      <div style={{ maxWidth: "var(--max-width)", margin: "0 auto" }}>
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <h2
            className="reveal"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(40px, 6vw, 64px)",
              letterSpacing: "0.04em",
              color: "var(--color-text)",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}
          >
            OUR BEST COACHES
          </h2>
          <p style={{ color: "var(--color-muted)", fontSize: "15px" }}>
            World-class athletes and certified professionals dedicated to your success.
          </p>
        </div>

        {/* Cards grid */}
        <div
          className="coaches-grid reveal"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "24px",
          }}
        >
          {coaches.map((c) => (
            <div key={c.name} className="coach-card">
              <img
                src={c.img}
                alt={c.name}
                style={{
                  width: "100%",
                  aspectRatio: "3/4",
                  objectFit: "cover",
                  display: "block",
                }}
              />
              {/* Default name bar */}
              <div
                style={{
                  padding: "16px",
                  background: "var(--color-bg)",
                  borderTop: "2px solid var(--color-border)",
                  textAlign: "center",
                }}
              >
                <p style={{ fontWeight: 700, fontSize: "15px", letterSpacing: "0.04em" }}>{c.name}</p>
                <p style={{ color: "var(--color-accent)", fontSize: "12px", marginTop: "4px" }}>{c.role}</p>
              </div>
              {/* Hover overlay */}
              <div className="coach-overlay">
                <div style={{ width: "100%" }}>
                  <p
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "22px",
                      letterSpacing: "0.04em",
                      color: "var(--color-accent)",
                      marginBottom: "8px",
                    }}
                  >
                    {c.name}
                  </p>
                  <div style={{ display: "flex", gap: "12px" }}>
                    {c.socials.map((icon, i) => (
                      <span
                        key={i}
                        style={{
                          fontSize: "18px",
                          cursor: "pointer",
                          transition: "transform 0.2s",
                        }}
                      >
                        {icon}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "8px",
            marginTop: "32px",
          }}
        >
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              style={{
                width: i === 1 ? "24px" : "8px",
                height: "8px",
                borderRadius: "4px",
                background: i === 1 ? "var(--color-accent)" : "rgba(255,255,255,0.2)",
                transition: "width 0.3s",
              }}
            />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .coaches-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 480px) {
          .coaches-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
