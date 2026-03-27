import Link from "next/link";

export default function ShopHero() {
  return (
    <section
      id="shop-hero"
      style={{
        position: "relative",
        height: "320px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: "url('/image/1000s.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.85))",
        }}
      />
      <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "0 24px" }}>
        <h1
          className="reveal visible"
          style={{
            fontSize: "clamp(40px, 8vw, 64px)",
            letterSpacing: "0.04em",
            color: "var(--color-text)",
            textTransform: "uppercase",
            marginBottom: "16px",
          }}
        >
          OUR SHOP
        </h1>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
            fontSize: "13px",
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          <Link href="/" className="hover:text-[#C8FF00]" style={{ color: "var(--color-muted)", textDecoration: "none", transition: "color 0.2s" }}>
            BACK HOME
          </Link>
          <span style={{ color: "var(--color-accent)" }}>↗</span>
        </div>
      </div>
    </section>
  );
}
