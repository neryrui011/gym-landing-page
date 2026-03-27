export default function Hero() {
  return (
    <section
      id="home"
      style={{
        height: "calc(100dvh - 44px)",
        minHeight: "min(600px, calc(100dvh - 44px))",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.55)",
        }}
      />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 1, padding: "0 24px", maxWidth: "900px", margin: "0 auto" }}>
        <h1
          className="reveal visible font-bold italic"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(36px, 10vw, 80px)",
            lineHeight: 1.0,
            letterSpacing: "0.04em",
            color: "var(--color-text)",
            marginBottom: "24px",
            textTransform: "uppercase",
          }}
        >
          WORK WITH
          <br />
          <span style={{ color: "var(--color-accent)" }}>PROFESSIONALS</span>
        </h1>

        <p
          style={{
            color: "var(--color-muted)",
            fontSize: "18px",
            lineHeight: 1.6,
            marginBottom: "40px",
            fontFamily: "var(--font-body)",
            maxWidth: "520px",
            margin: "0 auto 40px",
          }}
        >
          Achieve your fitness goals with world-class coaches.
          <br />
          Programs tailored for every level — beginner to elite.
        </p>

        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#passes">
            <button
              className="btn-primary"
              style={{ padding: "16px 40px", fontSize: "15px" }}
            >
              START NOW
            </button>
          </a>
          <a href="#about">
            <button
              className="btn-outline"
              style={{ padding: "16px 40px", fontSize: "15px" }}
            >
              LEARN MORE
            </button>
          </a>
        </div>

        {/* Scroll indicator dots */}
        <div style={{ marginTop: "56px", display: "flex", gap: "8px", justifyContent: "center" }}>
          <div className="dot-1" style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--color-accent)" }} />
          <div className="dot-2" style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--color-accent)" }} />
          <div className="dot-3" style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--color-accent)" }} />
        </div>
      </div>
    </section>
  );
}
