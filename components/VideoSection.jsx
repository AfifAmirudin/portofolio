import { videos } from "../data/videos";
import { profile } from "../data/profile";

export default function VideoSection() {
  return (
    <section>
      <h2>Video Work</h2>

      <div
        className="grid"
        style={{ gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))" }}
      >
        {videos.map((v, i) => (
          <div key={i} className="card">
            <div className="video-frame">
              <iframe
                src={v.embed}
                title={v.title}
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
            <p style={{ padding: 16 }}>{v.title}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div style={{ marginTop: 24 }}>
        <a
          href={profile.socials.drive}
          target="_blank"
          className="button"
        >
          View more on Gdrive →
        </a>
      </div>
    </section>
  );
}
