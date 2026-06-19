import { ExternalLink, Pen } from "lucide-react";
import { FaDev } from "react-icons/fa";

interface DevToArticle {
  title: string;
  url: string;
  description: string;
  published_at: string;
}

async function getPosts(): Promise<DevToArticle[]> {
  try {
    const res = await fetch(
      "https://dev.to/api/articles?username=dotnettitan&per_page=10",
      { cache: "force-cache" }
    );
    if (!res.ok) return [];
    const data = await res.json();
    return data.map((a: DevToArticle) => ({
      title: a.title,
      url: a.url,
      description: a.description || "",
      published_at: a.published_at,
    }));
  } catch {
    return [];
  }
}

export default async function Writing() {
  const posts = await getPosts();
  if (posts.length === 0) return null;

  return (
    <section id="writing" className="section">
      <div className="container">
        <div className="section-header">
          <p className="label"><Pen size={13} style={{ verticalAlign: "middle", marginRight: "0.4rem" }} />WRITING</p>
          <h2>
            Words on the <span className="italic-accent">web</span>
          </h2>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--gutter)",
          }}
        >
          {posts.map((post) => (
            <a
              key={post.url}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                border: "1px solid var(--border-light)",
                padding: "1.5rem",
                textDecoration: "none",
                transition: "border-color 0.2s",
              }}
              className="writing-card"
            >
              <h3 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>
                {post.title}
              </h3>
              {post.description && (
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "var(--muted-earth)",
                    lineHeight: "1.6",
                    marginBottom: "0.75rem",
                  }}
                >
                  {post.description}
                </p>
              )}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                }}
              >
                <span
                  className="mono-label"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    color: "var(--ink)",
                  }}
                >
                  <FaDev size={16} /> dev.to <ExternalLink size={13} />
                </span>
                <span className="mono-label">
                  {new Date(post.published_at).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
