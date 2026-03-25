export default function FinalCTA() {
  return (
    <section
      style={{
        height: "320px",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=1600&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.65)",
        }}
      />
      <div style={{ position: "relative", zIndex: 1, padding: "0 24px" }}>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(36px, 7vw, 56px)",
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            color: "var(--color-text)",
            marginBottom: "16px",
          }}
        >
          GET YOUR FIRST TRIAL VISIT
        </h2>
        <p
          style={{
            color: "var(--color-muted)",
            fontSize: "16px",
            marginBottom: "32px",
          }}
        >
          No commitments. Just come, train, and feel the difference.
        </p>
        <a href="#passes">
          <button
            className="btn-accent2"
            style={{ padding: "18px 56px", fontSize: "17px" }}
          >
            START NOW
          </button>
        </a>
      </div>
    </section>
  );
}
