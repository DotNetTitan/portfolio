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
                marginBottom: "var(--stack-sm)",
              }}
            >
              <h3>{job.role} &middot; {job.company}</h3>
              <span className="mono-label">{job.period}</span>
            </div>
            <p
              className="mono-label"
              style={{ marginBottom: "var(--stack-md)", textTransform: "none", letterSpacing: 0 }}
            >
              {job.location}
            </p>
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
