import { personalInfo } from "@/data";

interface Repo {
  stargazers_count: number;
  fork: boolean;
}

interface User {
  public_repos: number;
  followers: number;
}

async function getStats() {
  try {
    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${personalInfo.github.split("/").pop()}`, {
        next: { revalidate: 3600 },
      }),
      fetch(
        `https://api.github.com/users/${personalInfo.github.split("/").pop()}/repos?per_page=100&sort=updated`,
        { next: { revalidate: 3600 } }
      ),
    ]);

    if (!userRes.ok || !reposRes.ok) return null;

    const user: User = await userRes.json();
    const repos: Repo[] = await reposRes.json();

    const stars = repos.reduce((sum, r) => sum + (r.fork ? 0 : r.stargazers_count), 0);

    return {
      repos: user.public_repos,
      stars,
      followers: user.followers,
    };
  } catch {
    return null;
  }
}

export default async function GitHubStats() {
  const stats = await getStats();
  if (!stats) return null;

  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <p className="label">GITHUB</p>
          <h2>
            By the <span className="italic-accent">numbers</span>
          </h2>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "var(--gutter)",
            maxWidth: "600px",
          }}
        >
          <StatBlock value={stats.repos} label="Public Repos" />
          <StatBlock value={stats.stars} label="Total Stars" />
          <StatBlock value={stats.followers} label="Followers" />
        </div>
      </div>
    </section>
  );
}

function StatBlock({ value, label }: { value: number; label: string }) {
  return (
    <div
      style={{
        border: "1px solid var(--border-light)",
        padding: "1.5rem",
        textAlign: "center",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "2.5rem",
          fontWeight: 700,
          lineHeight: 1.1,
          color: "var(--ink)",
        }}
      >
        {value}
      </p>
      <span
        className="mono-label"
        style={{ fontSize: "0.75rem", marginTop: "0.25rem", display: "block" }}
      >
        {label}
      </span>
    </div>
  );
}
