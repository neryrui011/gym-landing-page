const testimonials = [
  {
    quote:
      "GymTeam completely transformed my approach to fitness. The coaches are world-class and the community keeps you accountable every single day.",
    name: "Albert Turner",
    role: "Member since 2021",
    img: "https://i.pravatar.cc/80?img=33",
  },
  {
    quote:
      "I went from never exercising to competing in my first powerlifting meet — all thanks to GymTeam's incredible coaching staff.",
    name: "Rachel Kim",
    role: "Powerlifting Member",
    img: "https://i.pravatar.cc/80?img=47",
  },
  {
    quote:
      "Best gym I've ever been part of. The equipment, the schedule, the energy — everything is top tier. Wouldn't trade it for anything.",
    name: "Carlos Mendez",
    role: "CrossFit Member",
    img: "https://i.pravatar.cc/80?img=15",
  },
];

export default function Reviews() {
  return (
    <section
      id="contact"
      style={{
        background: "var(--color-bg)",
        padding: "96px 24px",
      }}
    >
      <div style={{ maxWidth: "var(--max-width)", margin: "0 auto" }}>
        <h2
          className="reveal"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(40px, 6vw, 64px)",
            letterSpacing: "0.04em",
            textAlign: "center",
            textTransform: "uppercase",
            marginBottom: "56px",
          }}
        >
          REVIEWS FROM CLIENTS
        </h2>

        <div
          className="reviews-grid reveal"
          style={{
            display: "grid",
            gridTemplateColumns: "45% 55%",
            gap: "48px",
            alignItems: "center",
          }}
        >
          {/* Left — image */}
          <div
            style={{
              borderRadius: "var(--radius)",
              overflow: "hidden",
              aspectRatio: "4/5",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?w=700&q=80"
              alt="Client training at GymTeam"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

          {/* Right — testimonials */}
          <div>
            {testimonials.map((t, i) => (
              <div
                key={i}
                style={{
                  background: "#1A1A1A",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius)",
                  padding: "32px",
                  marginBottom: i < testimonials.length - 1 ? "16px" : 0,
                }}
              >
                <div
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: "56px",
                    color: "var(--color-accent)",
                    lineHeight: 0.8,
                    marginBottom: "16px",
                  }}
                >
                  &ldquo;
                </div>
                <p
                  style={{
                    fontSize: "15px",
                    fontWeight: 600,
                    lineHeight: 1.6,
                    color: "var(--color-text)",
                    marginBottom: "20px",
                    fontStyle: "italic",
                  }}
                >
                  {t.quote}
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <img
                    src={t.img}
                    alt={t.name}
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "50%",
                      border: "2px solid var(--color-accent)",
                      objectFit: "cover",
                    }}
                  />
                  <div>
                    <p
                      style={{
                        fontWeight: 700,
                        fontSize: "14px",
                        color: "var(--color-text)",
                      }}
                    >
                      {t.name}
                    </p>
                    <p style={{ fontSize: "12px", color: "var(--color-accent)" }}>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .reviews-grid { grid-template-columns: 1fr !important; }
          .reviews-grid > div:first-child { aspect-ratio: 16/9 !important; }
        }
      `}</style>
    </section>
  );
}
