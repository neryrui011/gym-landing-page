"use client";
import { useState } from "react";

const plans = {
  monthly: {
    crossfit: "120",
    openGym: "109",
  },
  annual: {
    crossfit: "99",
    openGym: "89",
  },
};

const crossfitPerks = [
  "Unlimited CrossFit Classes",
  "Personal Progress Tracking",
  "Access to All Equipment",
  "Nutrition Consultation",
  "24/7 Gym Access",
];
const openGymPerks = [
  "Open Gym All Hours",
  "Group Class Discounts",
  "Personal Locker Included",
  "Nutrition & Meal Plans",
  "Priority Booking",
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);
  const current = annual ? plans.annual : plans.monthly;

  return (
    <section
      id="passes"
      style={{
        background: "var(--color-bg-alt)",
        padding: "96px 24px",
      }}
    >
      <div style={{ maxWidth: "var(--max-width)", margin: "0 auto" }}>
        <h2
          className="reveal"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(40px, 6vw, 64px)",
            letterSpacing: "0.04em",
            textAlign: "center",
            textTransform: "uppercase",
            marginBottom: "32px",
          }}
        >
          OUR GYM PASSES
        </h2>

        {/* Toggle */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",
            marginBottom: "56px",
          }}
        >
          <span
            style={{
              fontSize: "14px",
              fontWeight: 600,
              color: annual ? "var(--color-muted)" : "var(--color-text)",
            }}
          >
            Monthly
          </span>
          <div
            className={`toggle-switch ${annual ? "active" : ""}`}
            onClick={() => setAnnual(!annual)}
            role="switch"
            aria-checked={annual}
            aria-label="Toggle billing period"
          >
            <div className="toggle-thumb" />
          </div>
          <span
            style={{
              fontSize: "14px",
              fontWeight: 600,
              color: annual ? "var(--color-text)" : "var(--color-muted)",
            }}
          >
            Annual{" "}
            <span
              style={{
                background: "var(--color-accent)",
                color: "#000",
                fontSize: "10px",
                fontWeight: 700,
                padding: "2px 6px",
                borderRadius: "4px",
                marginLeft: "4px",
              }}
            >
              SAVE 17%
            </span>
          </span>
        </div>

        {/* Cards */}
        <div
          className="pricing-grid"
          style={{
            display: "flex",
            gap: "32px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {/* CrossFit Card */}
          <div
            className="card-hover"
            style={{
              background: "var(--color-bg)",
              padding: "40px 36px",
              borderRadius: "var(--radius)",
              flex: "1 1 320px",
              maxWidth: "380px",
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "32px",
                letterSpacing: "0.06em",
                marginBottom: "8px",
              }}
            >
              CROSSFIT
            </h3>
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: "4px",
                marginBottom: "32px",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "52px",
                  letterSpacing: "0.02em",
                  color: "var(--color-text)",
                  transition: "all 0.3s",
                }}
              >
                {current.crossfit}$
              </span>
              <span style={{ color: "var(--color-muted)", fontSize: "14px" }}>
                / {annual ? "mo (billed annually)" : "month"}
              </span>
            </div>
            <ul style={{ listStyle: "none", marginBottom: "36px" }}>
              {crossfitPerks.map((p) => (
                <li
                  key={p}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "10px 0",
                    borderBottom: "1px solid var(--color-border)",
                    fontSize: "14px",
                    color: "var(--color-muted)",
                  }}
                >
                  <span style={{ color: "var(--color-accent)", fontWeight: 700 }}>✓</span>
                  {p}
                </li>
              ))}
            </ul>
            <button className="btn-primary" style={{ width: "100%", padding: "16px", fontSize: "15px" }}>
              PURCHASE NOW
            </button>
          </div>

          {/* Open Gym Card — Featured */}
          <div
            style={{
              background: "var(--color-bg)",
              padding: "40px 36px",
              borderRadius: "var(--radius)",
              border: "2px solid var(--color-accent)",
              flex: "1 1 320px",
              maxWidth: "380px",
              position: "relative",
              transition: "transform var(--transition)",
            }}
          >
            {/* Popular badge */}
            <div
              style={{
                position: "absolute",
                top: "-14px",
                left: "50%",
                transform: "translateX(-50%)",
                background: "var(--color-accent)",
                color: "#000",
                fontWeight: 700,
                fontSize: "11px",
                padding: "4px 16px",
                borderRadius: "20px",
                letterSpacing: "0.08em",
                whiteSpace: "nowrap",
              }}
            >
              MOST POPULAR
            </div>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "32px",
                letterSpacing: "0.06em",
                marginBottom: "8px",
              }}
            >
              OPEN GYM
            </h3>
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: "4px",
                marginBottom: "32px",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "52px",
                  letterSpacing: "0.02em",
                  color: "var(--color-accent)",
                  transition: "all 0.3s",
                }}
              >
                {current.openGym}$
              </span>
              <span style={{ color: "var(--color-muted)", fontSize: "14px" }}>
                / {annual ? "mo (billed annually)" : "month"}
              </span>
            </div>
            <ul style={{ listStyle: "none", marginBottom: "36px" }}>
              {openGymPerks.map((p) => (
                <li
                  key={p}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "10px 0",
                    borderBottom: "1px solid var(--color-border)",
                    fontSize: "14px",
                    color: "var(--color-muted)",
                  }}
                >
                  <span style={{ color: "var(--color-accent)", fontWeight: 700 }}>✓</span>
                  {p}
                </li>
              ))}
            </ul>
            <button className="btn-primary" style={{ width: "100%", padding: "16px", fontSize: "15px" }}>
              PURCHASE NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
