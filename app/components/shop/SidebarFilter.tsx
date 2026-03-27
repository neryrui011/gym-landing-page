export default function SidebarFilter() {
  const categories = [
    { name: "BCAA", count: 3 },
    { name: "Gainers", count: 9 },
    { name: "Minerals", count: 5 },
    { name: "Vitamins", count: 2 },
    { name: "Immunity", count: 3 },
  ];

  return (
    <aside style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
      {/* Search */}
      <div>
        <div style={{ position: "relative" }}>
          <input
            type="text"
            placeholder="Search..."
            className="focus:border-[#C8FF00]"
            style={{
              width: "100%",
              background: "transparent",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius)",
              padding: "14px 16px",
              color: "var(--color-text)",
              fontSize: "14px",
              outline: "none",
              transition: "border-color 0.2s",
            }}
          />
          <span style={{ position: "absolute", right: "16px", top: "50%", transform: "translateY(-50%)", color: "var(--color-muted)" }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={18} height={18}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </span>
        </div>
      </div>

      {/* Price Filter */}
      <div>
        <h4 style={{ fontWeight: 700, fontSize: "18px", letterSpacing: "0.04em", marginBottom: "20px" }}>
          Filter by price
        </h4>
        <div style={{ background: "var(--color-border)", height: "4px", borderRadius: "2px", position: "relative", marginBottom: "16px" }}>
          <div style={{ position: "absolute", left: "0", right: "40%", background: "var(--color-accent)", height: "100%", borderRadius: "2px" }} />
          <div style={{ position: "absolute", left: "0", top: "50%", transform: "translate(-50%, -50%)", width: "12px", height: "12px", background: "var(--color-accent)", borderRadius: "50%", cursor: "pointer" }} />
          <div style={{ position: "absolute", right: "40%", top: "50%", transform: "translate(50%, -50%)", width: "12px", height: "12px", background: "var(--color-accent)", borderRadius: "50%", cursor: "pointer" }} />
        </div>
        <p style={{ fontSize: "14px", color: "var(--color-muted)" }}>
          Price: <span style={{ color: "var(--color-text)", fontWeight: 500 }}>$20 - $500</span>
        </p>
      </div>

      {/* Categories */}
      <div>
        <h4 style={{ fontWeight: 700, fontSize: "18px", letterSpacing: "0.04em", marginBottom: "20px" }}>
          Product of categories
        </h4>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
          {categories.map((c) => (
            <li key={c.name} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <a
                href="#"
                className="hover:text-[#C8FF00]"
                style={{
                  color: "var(--color-muted)",
                  textDecoration: "none",
                  fontSize: "14px",
                  transition: "color 0.2s",
                }}
              >
                {c.name}
              </a>
              <span style={{ color: "var(--color-muted)", fontSize: "13px" }}>({c.count})</span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
