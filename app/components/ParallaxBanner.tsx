export default function ParallaxBanner() {
  return (
    <div
      style={{
        height: "280px",
        overflow: "hidden",
        position: "relative",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=1600&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.4)",
        }}
      />
    </div>
  );
}
