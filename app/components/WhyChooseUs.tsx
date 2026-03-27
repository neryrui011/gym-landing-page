"use client";
import { useState } from "react";

const cards = [
  {
    id: 1,
    title: "MUSCLES BUILDING",
    desc: "Transform your physique with science-backed hypertrophy programs designed by our elite coaches.",
    img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&q=80",
  },
  {
    id: 2,
    title: "CARDIO TRAINING",
    desc: "Boost your endurance and heart health with high-intensity cardio sessions tailored to your fitness level.",
    img: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=600&q=80",
  },
  {
    id: 3,
    title: "CROSSFIT CLASSES",
    desc: "Push your limits with dynamic functional training combining strength, speed, and agility.",
    img: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=600&q=80",
  },
  {
    id: 4,
    title: "POWERLIFTING",
    desc: "Master the big three — squat, bench, deadlift — with expert guidance on form and progressive overload.",
    img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80",
  },
  {
    id: 5,
    title: "GYMNASTICS",
    desc: "Develop body control, flexibility, and raw strength through structured gymnastics fundamentals.",
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80",
  },
];

export default function WhyChooseUs() {
  const [index, setIndex] = useState(0);
  const visible = 3;
  const max = cards.length - visible;

  const prev = () => setIndex((i) => Math.max(i - 1, 0));
  const next = () => setIndex((i) => Math.min(i + 1, max));

  return (
    <section
      id="why-choose-us"
      style={{
        background: "var(--color-bg-alt)",
        padding: "96px 24px",
      }}
    >
      <div style={{ maxWidth: "var(--max-width)", margin: "0 auto" }}>
        {/* Heading */}
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
          WHY CHOOSE US
        </h2>

        {/* Carousel wrapper */}
        <div style={{ position: "relative", display: "flex", alignItems: "center", gap: "16px" }}>
          {/* Prev arrow */}
          <button
            onClick={prev}
            aria-label="Previous"
            disabled={index === 0}
            style={{
              flexShrink: 0,
              width: "44px",
              height: "44px",
              border: "1px solid var(--color-border)",
              borderRadius: "50%",
              background: "transparent",
              color: "var(--color-text)",
              fontSize: "20px",
              cursor: index === 0 ? "not-allowed" : "pointer",
              opacity: index === 0 ? 0.3 : 1,
              transition: "border-color 0.2s, color 0.2s",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            ‹
          </button>

          {/* Overflow clip */}
          <div style={{ overflow: "hidden", flex: 1 }}>
            <div
              className="carousel-track"
              style={{
                display: "flex",
                gap: "24px",
                transform: `translateX(calc(-${index} * (100% / ${visible} + 8px)))`,
              }}
            >
              {cards.map((card) => (
                <div
                  key={card.id}
                  className="card-hover"
                  style={{
                    minWidth: `calc(100% / ${visible} - 16px)`,
                    background: "var(--color-bg)",
                    borderRadius: "var(--radius)",
                    overflow: "hidden",
                  }}
                >
                  {/* Image */}
                  <div style={{ position: "relative", height: "220px", overflow: "hidden" }}>
                    <img
                      src={card.img}
                      alt={card.title}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                    <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.35)" }} />
                    {/* Badge */}
                    <div
                      style={{
                        position: "absolute",
                        top: "16px",
                        left: "16px",
                        background: "var(--color-accent)",
                        color: "#000",
                        fontWeight: 700,
                        fontSize: "12px",
                        padding: "4px 10px",
                        borderRadius: "4px",
                        letterSpacing: "0.06em",
                      }}
                    >
                      GymTeam
                    </div>
                  </div>
                  {/* Body */}
                  <div style={{ padding: "24px" }}>
                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "26px",
                        letterSpacing: "0.04em",
                        color: "var(--color-text)",
                        marginBottom: "12px",
                      }}
                    >
                      {card.title}
                    </h3>
                    <p
                      style={{
                        color: "var(--color-muted)",
                        fontSize: "14px",
                        lineHeight: 1.6,
                        marginBottom: "16px",
                      }}
                    >
                      {card.desc}
                    </p>
                    <a
                      href="#"
                      style={{
                        color: "var(--color-accent)",
                        textDecoration: "none",
                        fontWeight: 600,
                        fontSize: "13px",
                        letterSpacing: "0.05em",
                      }}
                    >
                      LEARN MORE ›
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next arrow */}
          <button
            onClick={next}
            aria-label="Next"
            disabled={index >= max}
            style={{
              flexShrink: 0,
              width: "44px",
              height: "44px",
              border: "1px solid var(--color-border)",
              borderRadius: "50%",
              background: "transparent",
              color: "var(--color-text)",
              fontSize: "20px",
              cursor: index >= max ? "not-allowed" : "pointer",
              opacity: index >= max ? 0.3 : 1,
              transition: "border-color 0.2s, color 0.2s",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            ›
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .carousel-track > div { min-width: calc(100% - 16px) !important; }
        }
      `}</style>
    </section>
  );
}
