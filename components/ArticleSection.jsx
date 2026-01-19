import { articles } from "../data/articles";
import { profile } from "../data/profile";

export default function ArticleSection() {
  return (
    <section>
      <h2>Writing</h2>

      <div
        className="grid"
        style={{ gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))" }}
      >
        {articles.map((a, i) => (
          <a
            key={i}
            href={a.url}
            target="_blank"
            className="card article-card"
          >
            <h3>{a.title}</h3>
            <p>{a.excerpt}</p>
          </a>
        ))}
      </div>

      {/* CTA */}
      <div style={{ marginTop: 24 }}>
        <a
          href={profile.socials.medium}
          target="_blank"
          className="button"
        >
          Read more on Medium →
        </a>
      </div>
    </section>
  );
}
