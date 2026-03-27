export default function RealResults() {
  const images = {
    womanBefore: "/image/woman fat.png", // Person inactive/sad
    womanAfter: "/image/woman slim.png",  // Woman fit/happy
    manBefore: "/image/Man fat.png",    // Man looking inactive
    manAfter: "/image/man slim.png"      // Muscular man
  };

  return (
    <section
      style={{
        padding: "100px 24px",
        background: "var(--color-bg)",
        position: "relative",
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center" style={{ maxWidth: "var(--max-width)", margin: "0 auto" }}>

        {/* Left Side: Text Content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <span style={{ color: "var(--color-accent)", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", fontSize: "14px" }}>
            Real Results
          </span>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(32px, 5vw, 48px)",
              textTransform: "uppercase",
              letterSpacing: "0.04em",
              color: "var(--color-text)",
              lineHeight: 1.1,
            }}
          >
            REAL COMMITMENT BREEDS <span style={{ color: "var(--color-accent)" }}>TRANSFORMATION</span>
          </h2>
          <p style={{ color: "var(--color-muted)", fontSize: "16px", lineHeight: 1.6 }}>
            It doesn't happen overnight, but it does happen. See what our expert coaches and top-tier equipment can do for your absolute physique and your lifestyle. Start your journey today.
          </p>
          <button className="btn-primary hover:scale-105" style={{ padding: "16px 32px", fontSize: "14px", marginTop: "8px", width: "fit-content", transition: "transform 0.2s" }}>
            START YOUR JOURNEY
          </button>
        </div>

        {/* Right Side: Image Transition Container */}
        <div style={{ position: "relative", width: "100%", maxWidth: "600px", margin: "0 auto" }}>

          {/* SET 1: Woman Transition */}
          <div className="fade-set-a relative w-full">
            <div className="grid grid-cols-2 gap-4">
              {/* Before */}
              <div className="relative group overflow-hidden rounded-[var(--radius)] w-full aspect-[4/5]">
                <img
                  src={images.womanBefore}
                  alt="Before Transformation"
                  className="absolute inset-0 w-full h-full object-cover filter grayscale transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-black/80 px-4 py-1 rounded text-white text-xs font-bold tracking-wider uppercase border border-[var(--color-border)]">
                  Before
                </div>
              </div>
              {/* After */}
              <div className="relative group overflow-hidden rounded-[var(--radius)] w-full aspect-[4/5]">
                <img
                  src={images.womanAfter}
                  alt="After Transformation"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-[#C8FF00] text-black px-4 py-1 rounded text-xs font-bold tracking-wider uppercase shadow-lg">
                  After
                </div>
              </div>
            </div>
          </div>

          {/* SET 2: Man Transition */}
          <div className="fade-set-b absolute inset-0 w-full h-full">
            <div className="grid grid-cols-2 gap-4 h-full">
              {/* Before */}
              <div className="relative group overflow-hidden rounded-[var(--radius)] h-full w-full">
                <img
                  src={images.manBefore}
                  alt="Before Transformation"
                  className="absolute inset-0 w-full h-full object-cover filter grayscale transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-black/80 px-4 py-1 rounded text-white text-xs font-bold tracking-wider uppercase border border-[var(--color-border)]">
                  Before
                </div>
              </div>
              {/* After */}
              <div className="relative group overflow-hidden rounded-[var(--radius)] h-full w-full">
                <img
                  src={images.manAfter}
                  alt="After Transformation"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-[#C8FF00] text-black px-4 py-1 rounded text-xs font-bold tracking-wider uppercase shadow-lg">
                  After
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Pure CSS Animation Logic controlling exactly a 1-second transition interval over an 8s total loop */}
      <style>{`
        @keyframes crossfadeA {
          0%, 37.5% { opacity: 1; pointer-events: auto; }
          50%, 87.5% { opacity: 0; pointer-events: none; }
          100% { opacity: 1; pointer-events: auto; }
        }
        @keyframes crossfadeB {
          0%, 37.5% { opacity: 0; pointer-events: none; }
          50%, 87.5% { opacity: 1; pointer-events: auto; }
          100% { opacity: 0; pointer-events: none; }
        }

        .fade-set-a {
          animation: crossfadeA 8s ease-in-out infinite;
        }
        .fade-set-b {
          animation: crossfadeB 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
