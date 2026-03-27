const coaches = [
  {
    name: "Jane Cooper",
    role: "CrossFit Coach",
    img: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&q=80",
    socials: ["🐦", "📸", "💼"],
  },
  {
    name: "Brooklyn Simmons",
    role: "Strength Coach",
    img: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=400&q=80",
    socials: ["🐦", "📸", "💼"],
  },
  {
    name: "Savannah Nguyen",
    role: "Yoga & Mobility",
    img: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=400&q=80",
    socials: ["🐦", "📸", "💼"],
  },
  {
    name: "Kathryn Murphy",
    role: "Powerlifting Coach",
    img: "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?w=400&q=80",
    socials: ["🐦", "📸", "💼"],
  },
];

export default function Coaches() {
  return (
    <section
      id="coaches"
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
              color: "var(--color-text)",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}
          >
            OUR BEST COACHES
          </h2>
          <p style={{ color: "var(--color-muted)", fontSize: "15px" }}>
            World-class athletes and certified professionals dedicated to your success.
          </p>
        </div>

        {/* Cards grid */}
        <div
          className="coaches-grid reveal"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "24px",
          }}
        >
          {coaches.map((c) => (
            <div key={c.name} className="coach-card">
              <img
                src={c.img}
                alt={c.name}
                style={{
                  width: "100%",
                  aspectRatio: "3/4",
                  objectFit: "cover",
                  display: "block",
                }}
              />
              {/* Default name bar */}
              <div
                style={{
                  padding: "16px",
                  background: "var(--color-bg)",
                  borderTop: "2px solid var(--color-border)",
                  textAlign: "center",
                }}
              >
                <p style={{ fontWeight: 700, fontSize: "15px", letterSpacing: "0.04em" }}>{c.name}</p>
                <p style={{ color: "var(--color-accent)", fontSize: "12px", marginTop: "4px" }}>{c.role}</p>
              </div>
              {/* Hover overlay */}
              <div className="coach-overlay">
                <div style={{ width: "100%" }}>
                  <p
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "22px",
                      letterSpacing: "0.04em",
                      color: "var(--color-accent)",
                      marginBottom: "8px",
                    }}
                  >
                    {c.name}
                  </p>
                  <ul className="inline-flex w-full justify-start pt-[10px] list-none gap-3">
                    {/* Facebook */}
                    <li className="group relative bg-white rounded-full w-[40px] h-[40px] text-[18px] flex justify-center items-center flex-col shadow-[0_10px_10px_rgba(0,0,0,0.1)] cursor-pointer text-gray-700 transition-all duration-200 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] hover:bg-[#1877f2] hover:text-white">
                      <span className="absolute top-0 text-[12px] bg-white text-white px-2 py-1 rounded-[5px] shadow-[0_10px_10px_rgba(0,0,0,0.1)] opacity-0 pointer-events-none transition-all duration-300 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] group-hover:-top-[35px] group-hover:opacity-100 group-hover:pointer-events-auto group-hover:bg-[#1877f2] group-hover:[text-shadow:0px_-1px_0px_rgba(0,0,0,0.1)]">
                        Facebook
                        <div className="absolute w-2 h-2 bg-white -bottom-[3px] left-1/2 -translate-x-1/2 rotate-45 transition-all duration-300 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] group-hover:bg-[#1877f2]"></div>
                      </span>
                      <svg viewBox="0 0 320 512" height="1.2em" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                      </svg>
                    </li>
                
                    {/* TikTok */}
                    <li className="group relative bg-white rounded-full w-[40px] h-[40px] text-[18px] flex justify-center items-center flex-col shadow-[0_10px_10px_rgba(0,0,0,0.1)] cursor-pointer text-gray-700 transition-all duration-200 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] hover:bg-[#000000] hover:text-white">
                      <span className="absolute top-0 text-[12px] bg-white text-white px-2 py-1 rounded-[5px] shadow-[0_10px_10px_rgba(0,0,0,0.1)] opacity-0 pointer-events-none transition-all duration-300 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] group-hover:-top-[35px] group-hover:opacity-100 group-hover:pointer-events-auto group-hover:bg-[#000000] group-hover:[text-shadow:0px_-1px_0px_rgba(0,0,0,0.1)]">
                        TikTok
                        <div className="absolute w-2 h-2 bg-white -bottom-[3px] left-1/2 -translate-x-1/2 rotate-45 transition-all duration-300 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] group-hover:bg-[#000000]"></div>
                      </span>
                      <svg viewBox="0 0 448 512" height="1.2em" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/>
                      </svg>
                    </li>
                
                    {/* Instagram */}
                    <li className="group relative bg-white rounded-full w-[40px] h-[40px] text-[18px] flex justify-center items-center flex-col shadow-[0_10px_10px_rgba(0,0,0,0.1)] cursor-pointer text-gray-700 transition-all duration-200 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] hover:bg-[#e4405f] hover:text-white">
                      <span className="absolute top-0 text-[12px] bg-white text-white px-2 py-1 rounded-[5px] shadow-[0_10px_10px_rgba(0,0,0,0.1)] opacity-0 pointer-events-none transition-all duration-300 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] group-hover:-top-[35px] group-hover:opacity-100 group-hover:pointer-events-auto group-hover:bg-[#e4405f] group-hover:[text-shadow:0px_-1px_0px_rgba(0,0,0,0.1)]">
                        Instagram
                        <div className="absolute w-2 h-2 bg-white -bottom-[3px] left-1/2 -translate-x-1/2 rotate-45 transition-all duration-300 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] group-hover:bg-[#e4405f]"></div>
                      </span>
                      <svg height="1.2em" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path>
                      </svg>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "8px",
            marginTop: "32px",
          }}
        >
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              style={{
                width: i === 1 ? "24px" : "8px",
                height: "8px",
                borderRadius: "4px",
                background: i === 1 ? "var(--color-accent)" : "rgba(255,255,255,0.2)",
                transition: "width 0.3s",
              }}
            />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .coaches-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 480px) {
          .coaches-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
