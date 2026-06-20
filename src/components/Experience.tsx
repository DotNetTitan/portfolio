import { Building2, MapPin, Calendar, Briefcase } from "lucide-react";
import { experience } from "@/data";
import Duration from "./Duration";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-header">
          <p className="label"><Briefcase size={13} style={{ verticalAlign: "middle", marginRight: "0.4rem" }} />EXPERIENCE</p>
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
              <span className="mono-label"><Calendar size={13} style={{ verticalAlign: "middle", marginRight: "0.35rem" }} />{job.period} (<Duration start={job.startDate.toISOString()} end={job.endDate?.toISOString()} />)</span>
            </div>
            <span style={{
              fontFamily: "var(--font-sans)",
              fontSize: "1rem",
              color: "var(--muted-earth)",
              display: "block",
              marginBottom: "var(--stack-md)",
            }}>
              <Building2 size={14} style={{ verticalAlign: "middle", marginRight: "0.35rem" }} />
              {job.company}
              <MapPin size={14} style={{ verticalAlign: "middle", marginLeft: "0.75rem", marginRight: "0.35rem" }} />
              {job.location}
            </span>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              {job.highlights.map((h, j) => (
                <p
                  key={j}
                  style={{
                    margin: 0,
                    lineHeight: "1.7",
                    color: "var(--ink)",
                  }}
                >
                  {h}
                </p>
              ))}
            </div>
            {i < experience.length - 1 && <hr />}
          </div>
        ))}
      </div>
    </section>
  );
}
