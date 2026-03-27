export default function AboutGym() {
  return (
    <section
      id="about"
      style={{
        background: "var(--color-bg)",
        padding: "96px 24px",
      }}
    >
      <div
        style={{
          maxWidth: "var(--max-width)",
          margin: "0 auto",
        }}
      >
        <h2
          className="reveal"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(40px, 6vw, 64px)",
            letterSpacing: "0.04em",
            color: "var(--color-text)",
            textAlign: "center",
            marginBottom: "56px",
            textTransform: "uppercase",
          }}
        >
          ABOUT OUR GYM
        </h2>

        <div
          className="about-grid reveal"
          style={{
            display: "grid",
            gridTemplateColumns: "60% 40%",
            gap: "48px",
            alignItems: "center",
          }}
        >
          {/* Left — image */}
          <div
            style={{
              borderRadius: "var(--radius)",
              overflow: "hidden",
              aspectRatio: "16/9",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=900&q=80"
              alt="Athlete training in GymTeam"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

          {/* Right — content */}
          <div>
            {/* Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "var(--color-accent)",
                color: "#000",
                fontFamily: "var(--font-display)",
                fontSize: "22px",
                letterSpacing: "0.06em",
                padding: "8px 20px",
                borderRadius: "var(--radius)",
                marginBottom: "24px",
              }}
            >
              10 YEARS
            </div>

            <p
              style={{
                color: "var(--color-muted)",
                fontSize: "15px",
                lineHeight: 1.8,
                marginBottom: "32px",
              }}
            >
              GymTeam has been the city&apos;s most trusted fitness destination for over a decade.
              We combine cutting-edge equipment, evidence-based training methodologies, and a
              community that drives you forward — every single day. Whether you&apos;re starting
              your fitness journey or competing at the highest level, we have a program for you.
            </p>

            {/* Testimonial mini-cards */}
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              {[
                {
                  name: "Marcus Hall",
                  quote: "\"Best decision I ever made joining GymTeam!\"",
                  img: "https://i.pravatar.cc/80?img=12",
                },
                {
                  name: "Sofia Reyes",
                  quote: "\"My coaches changed my life completely.\"",
                  img: "https://i.pravatar.cc/80?img=25",
                },
              ].map((t) => (
                <div
                  key={t.name}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    background: "var(--color-bg-alt)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "var(--radius)",
                    padding: "12px 16px",
                    flex: "1 1 200px",
                  }}
                >
                  <img
                    src={t.img}
                    alt={t.name}
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      border: "2px solid var(--color-accent)",
                      objectFit: "cover",
                      flexShrink: 0,
                    }}
                  />
                  <div>
                    <p
                      style={{
                        fontWeight: 600,
                        fontSize: "13px",
                        color: "var(--color-text)",
                        marginBottom: "4px",
                      }}
                    >
                      {t.name}
                    </p>
                    <p style={{ color: "var(--color-muted)", fontSize: "12px", lineHeight: 1.4 }}>
                      {t.quote}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
