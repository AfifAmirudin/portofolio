import { graphics } from "../data/graphics";
import { profile } from "../data/profile";

export default function GraphicSection() {
  return (
    <section>
      <h2>Graphic Design</h2>

      <div
        className="grid"
        style={{ gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))" }}
      >
        {graphics.map((img, i) => (
          <div
            key={i}
            className="card graphic-card"
            style={{ aspectRatio: "1 / 1" }}
          >
            <img src={img} alt="Graphic work" />
          </div>
        ))}
      </div>

      {/* CTA */}
      <div style={{ marginTop: 24 }}>
        <a
          href={profile.socials.pinterest}
          target="_blank"
          className="button"
        >
          View full portfolio on Pinterest →
        </a>
      </div>
    </section>
  );
}
