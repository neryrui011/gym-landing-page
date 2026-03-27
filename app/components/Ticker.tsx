export default function Ticker() {
  const text =
    "CONVENIENT LOCATION & SCHEDULE  ·  DRAWING UP AN INDIVIDUAL TRAINING PROGRAM  ·  BEST PROFESSIONAL COACHES  ·  ";

  return (
    <div
      style={{
        background: "var(--color-accent)",
        height: "44px",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="marquee-inner">
        {/* Duplicate for seamless loop */}
        <span
          style={{
            flexShrink: 0,
            whiteSpace: "nowrap",
            color: "#000",
            fontFamily: "var(--font-body)",
            fontWeight: 700,
            fontSize: "13px",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            paddingRight: "0",
          }}
        >
          {text}
          {text}
        </span>
        <span
          style={{
            color: "#000",
            fontFamily: "var(--font-body)",
            fontWeight: 700,
            fontSize: "13px",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          {text}
          {text}
        </span>
      </div>
    </div>
  );
}
