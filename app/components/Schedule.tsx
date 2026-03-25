const DAYS = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
const TIMES = ["8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM"];

const schedule: Record<string, string> = {
  "8:00 AM-MON": "CARDIO",
  "8:00 AM-WED": "CROSSFIT",
  "8:00 AM-FRI": "OPEN GYM",
  "9:00 AM-TUE": "POWERLIFTING",
  "9:00 AM-THU": "GYMNASTICS",
  "9:00 AM-SAT": "CARDIO",
  "10:00 AM-MON": "CROSSFIT",
  "10:00 AM-WED": "OPEN GYM",
  "10:00 AM-SUN": "GYMNASTICS",
  "11:00 AM-TUE": "CARDIO",
  "11:00 AM-FRI": "POWERLIFTING",
  "11:00 AM-SAT": "CROSSFIT",
  "12:00 PM-MON": "GYMNASTICS",
  "12:00 PM-THU": "OPEN GYM",
  "12:00 PM-SUN": "CARDIO",
  "1:00 PM-TUE": "CROSSFIT",
  "1:00 PM-WED": "POWERLIFTING",
  "1:00 PM-SAT": "OPEN GYM",
  "2:00 PM-MON": "CARDIO",
  "2:00 PM-FRI": "GYMNASTICS",
  "2:00 PM-SUN": "POWERLIFTING",
};

export default function Schedule() {
  return (
    <section
      style={{
        background: "var(--color-bg)",
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
            marginBottom: "48px",
          }}
        >
          WEEKLY SCHEDULE
        </h2>

        <div style={{ overflowX: "auto" }}>
          <table
            style={{
              width: "100%",
              minWidth: "640px",
              borderCollapse: "collapse",
              border: "1px solid var(--color-border)",
            }}
          >
            <thead>
              <tr>
                <th
                  style={{
                    padding: "14px 16px",
                    background: "var(--color-bg-alt)",
                    border: "1px solid var(--color-border)",
                    color: "var(--color-muted)",
                    fontFamily: "var(--font-body)",
                    fontSize: "12px",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textAlign: "center",
                    textTransform: "uppercase",
                  }}
                >
                  TIME
                </th>
                {DAYS.map((d) => (
                  <th
                    key={d}
                    style={{
                      padding: "14px 10px",
                      background: "var(--color-bg-alt)",
                      border: "1px solid var(--color-border)",
                      color: "var(--color-text)",
                      fontFamily: "var(--font-body)",
                      fontSize: "12px",
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textAlign: "center",
                    }}
                  >
                    {d}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TIMES.map((time) => (
                <tr key={time}>
                  <td
                    style={{
                      padding: "12px 16px",
                      border: "1px solid var(--color-border)",
                      color: "var(--color-muted)",
                      fontSize: "12px",
                      fontWeight: 500,
                      textAlign: "center",
                      whiteSpace: "nowrap",
                      background: "var(--color-bg-alt)",
                    }}
                  >
                    {time}
                  </td>
                  {DAYS.map((day) => {
                    const key = `${time}-${day}`;
                    const cls = schedule[key];
                    return (
                      <td
                        key={day}
                        style={{
                          padding: "10px 8px",
                          border: "1px solid var(--color-border)",
                          textAlign: "center",
                        }}
                      >
                        {cls && (
                          <span className="schedule-cell-filled" style={{ padding: "4px 6px", borderRadius: "4px", fontSize: "10px", display: "inline-block" }}>
                            {cls}
                          </span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <a href="#passes">
            <button className="btn-primary" style={{ padding: "16px 48px", fontSize: "15px" }}>
              JOIN NOW
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
