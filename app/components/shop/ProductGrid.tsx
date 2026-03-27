import ProductCard from "./ProductCard";

export const mockProducts = [
  {
    id: 1,
    title: "MEGA MASS 4000",
    tag: "Gainers",
    image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=400&q=80",
    oldPrice: 130,
    price: 120,
  },
  {
    id: 2,
    title: "MEGA MASS 4000",
    tag: "Gainers",
    image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=400&q=80",
    oldPrice: 130,
    price: 120,
  },
  {
    id: 3,
    title: "PRO MASS GAINER",
    tag: "Gainers",
    image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=400&q=80",
    oldPrice: 160,
    price: 120,
  },
  {
    id: 4,
    title: "HYPER MASS",
    tag: "Gainers",
    image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=400&q=80",
    oldPrice: 130,
    price: 120,
  },
  {
    id: 5,
    title: "MEGA MASS PRO",
    tag: "Gainers",
    image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=400&q=80",
    oldPrice: 130,
    price: 120,
  },
  {
    id: 6,
    title: "100% WHEY MULTI",
    tag: "Gainers",
    image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=400&q=80",
    oldPrice: 100,
    price: 120,
  },
];

export default function ProductGrid() {
  return (
    <div style={{ flex: 1, width: "100%" }}>
      {/* Top Bar */}
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "24px" }}>
        <button style={{ background: "none", border: "none", color: "var(--color-text)", fontSize: "14px", display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
          Default sorting
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </button>
      </div>

      {/* Grid */}
      <div className="product-grid" style={{ display: "grid", gap: "24px" }}>
        {mockProducts.map((p) => (
          <ProductCard key={p.id} {...p} />
        ))}
      </div>

      {/* Pagination */}
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "16px", marginTop: "48px" }}>
        <span style={{ color: "var(--color-muted)", fontSize: "14px", cursor: "pointer" }}>&lt;</span>
        <span style={{ color: "var(--color-text)", fontSize: "14px", fontWeight: 700, cursor: "pointer" }}>1</span>
        <span style={{ color: "var(--color-muted)", fontSize: "14px", cursor: "pointer" }}>2</span>
        <span style={{ color: "var(--color-muted)", fontSize: "14px", cursor: "pointer" }}>3</span>
        <span style={{ color: "var(--color-muted)", fontSize: "14px", cursor: "pointer" }}>&gt;</span>
      </div>

      <style>{`
        .product-grid {
          grid-template-columns: repeat(3, 1fr);
        }
        @media (max-width: 1024px) {
          .product-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 640px) {
          .product-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
