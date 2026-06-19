import { experience } from "@/data";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-header">
          <p className="label">EXPERIENCE</p>
          <h2>
            Where I&apos;ve <span className="italic-accent">been</span>
          </h2>
        </div>
        {experience.map((job, i) => (
          <div key={i} style={{ marginBottom: "var(--stack-lg)" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                flexWrap: "wrap",
                gap: "0.5rem",
                marginBottom: "0.25rem",
              }}
            >
              <h3>{job.role}</h3>
              <span className="mono-label">{job.period}</span>
            </div>
            <span style={{
              fontFamily: "var(--font-sans)",
              fontSize: "1rem",
              color: "var(--muted-earth)",
              display: "block",
              marginBottom: "var(--stack-md)",
            }}>{job.company} &middot; {job.location}</span>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              {job.highlights.map((h, j) => (
                <li
                  key={j}
                  style={{
                    paddingLeft: "1.5rem",
                    position: "relative",
                    color: "var(--ink)",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      left: 0,
                      color: "var(--terracotta)",
                    }}
                  >
                    &mdash;
                  </span>
                  {h}
                </li>
              ))}
            </ul>
            {i < experience.length - 1 && <hr />}
          </div>
        ))}
      </div>
    </section>
  );
}
