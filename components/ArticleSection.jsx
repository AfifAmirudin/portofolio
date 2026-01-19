import { articles, latestVlogs } from "../data/articles";
import { profile } from "../data/profile";

export default function ArticleSection() {
  return (
    <section>
      <h2>Insights & Updates</h2>

      <div className="article-grid">
        {/* LEFT — BLOG */}
        <div className="article-col">
          <h3 className="article-subtitle">Latest Blog</h3>

          <div className="article-list">
            {articles.slice(0, 3).map((a, i) => (
              <a
                key={i}
                href={a.url}
                target="_blank"
                className="article-card"
              >
                <h4>{a.title}</h4>
                <p>{a.excerpt}</p>
              </a>
            ))}
          </div>

          <a
            href={profile.socials.medium}
            target="_blank"
            className="button"
            style={{ marginTop: 16 }}
          >
            View more on Medium →
          </a>
        </div>

        {/* RIGHT — VLOG */}
        <div className="article-col">
          <h3 className="article-subtitle">Latest Vlog</h3>

          <div className="vlog-list">
            {latestVlogs.map((v, i) => (
              <div key={i} className="vlog-card">
                <div className="video-frame">
                  <iframe
                    src={v.embed}
                    title={v.title}
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                </div>
                <p>{v.title}</p>
              </div>
            ))}
          </div>

          <a
            href={profile.socials.youtube}
            target="_blank"
            className="button"
            style={{ marginTop: 16 }}
          >
            View more on YouTube →
          </a>
        </div>
      </div>
    </section>
  );
}
