const articles = [
  {
    title: "5 Science-Backed Strategies to Build Muscle Faster",
    tag: "TRAINING",
    date: "March 15, 2024",
    img: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=600&q=80",
  },
  {
    title: "The Ultimate Nutrition Guide for CrossFit Athletes",
    tag: "NEW ENTRY",
    date: "March 10, 2024",
    img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&q=80",
  },
  {
    title: "How to Recover Faster After High-Intensity Workouts",
    tag: "ORIGINAL",
    date: "March 5, 2024",
    img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80",
  },
];

export default function Blog() {
  return (
    <section
      id="blog"
      style={{
        background: "var(--color-bg-alt)",
        padding: "96px 24px",
      }}
    >
      <div style={{ maxWidth: "var(--max-width)", margin: "0 auto" }}>
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <h2
            className="reveal"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(40px, 6vw, 64px)",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}
          >
            BLOG & NEWS
          </h2>
          <p style={{ color: "var(--color-muted)", fontSize: "15px" }}>
            Insights, tips, and stories from the GymTeam community.
          </p>
        </div>

        {/* Article cards */}
        <div
          className="blog-grid reveal"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "28px",
          }}
        >
          {articles.map((a) => (
            <article
              key={a.title}
              className="card-hover article-card"
              style={{
                background: "var(--color-bg)",
                borderRadius: "var(--radius)",
                overflow: "hidden",
                cursor: "pointer",
              }}
            >
              {/* Cover */}
              <div style={{ overflow: "hidden", height: "200px" }}>
                <img
                  src={a.img}
                  alt={a.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.4s ease",
                    display: "block",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLImageElement).style.transform = "scale(1.05)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLImageElement).style.transform = "scale(1)")
                  }
                />
              </div>
              {/* Body */}
              <div style={{ padding: "24px" }}>
                {/* Tag */}
                <span
                  style={{
                    background: "var(--color-accent)",
                    color: "#000",
                    fontWeight: 700,
                    fontSize: "10px",
                    padding: "3px 10px",
                    borderRadius: "4px",
                    letterSpacing: "0.08em",
                    display: "inline-block",
                    marginBottom: "12px",
                  }}
                >
                  {a.tag}
                </span>
                <h3
                  style={{
                    fontWeight: 700,
                    fontSize: "16px",
                    lineHeight: 1.4,
                    marginBottom: "8px",
                    color: "var(--color-text)",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {a.title}
                </h3>
                <p
                  style={{
                    color: "var(--color-muted)",
                    fontSize: "12px",
                    marginBottom: "16px",
                  }}
                >
                  {a.date}
                </p>
                <a
                  href="#"
                  style={{
                    color: "var(--color-accent)",
                    textDecoration: "none",
                    fontSize: "13px",
                    fontWeight: 600,
                    letterSpacing: "0.04em",
                  }}
                >
                  READ MORE ›
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .blog-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 1024px) and (min-width: 769px) {
          .blog-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
