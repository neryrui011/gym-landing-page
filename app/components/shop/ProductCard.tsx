export default function ProductCard({
  title,
  tag,
  image,
  oldPrice,
  price,
}: {
  title: string;
  tag: string;
  image: string;
  oldPrice: number;
  price: number;
}) {
  return (
    <div
      className="card-hover"
      style={{
        background: "var(--color-bg-alt)",
        padding: "24px",
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
        position: "relative",
      }}
    >
      {/* Image Wrapper */}
      <div
        style={{
          width: "100%",
          aspectRatio: "1/1",
          background: "rgba(255,255,255,0.02)",
          borderRadius: "var(--radius)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "20px",
          padding: "20px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <img
          src={image}
          alt={title}
          className="hover:scale-110 object-contain max-w-full max-h-full block transition-transform duration-400 ease-in-out"
        />
        
        {/* Hover Add to Cart Button (Pure CSS controlled wrapper) */}
        <div className="add-to-cart-overlay" style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "16px", opacity: 0, transform: "translateY(10px)", transition: "all 0.3s ease" }}>
          <button className="btn-primary" style={{ width: "100%", padding: "12px", fontSize: "13px" }}>
            ADD TO CART
          </button>
        </div>
      </div>

      {/* Meta */}
      <span style={{ color: "var(--color-muted)", fontSize: "12px", marginBottom: "4px" }}>
        {tag}
      </span>
      <h3 style={{ fontSize: "18px", fontWeight: 700, letterSpacing: "0.04em", marginBottom: "8px", color: "var(--color-text)" }}>
        {title}
      </h3>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <span style={{ color: "var(--color-muted)", fontSize: "14px", textDecoration: "line-through", fontWeight: 500 }}>
          ${oldPrice}
        </span>
        <span style={{ color: "var(--color-accent)", fontSize: "16px", fontWeight: 700 }}>
          ${price}
        </span>
      </div>

      <style>{`
        .card-hover:hover .add-to-cart-overlay {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </div>
  );
}
