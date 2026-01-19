import { profile } from "../data/profile";

export default function Hero() {
  return (
    <section className="hero">
      {/* Decorative Profile Image */}
      <div className="hero-avatar">
        <img src="/profile.jpg" alt={profile.name} />
      </div>

      {/* Content */}
      <div className="hero-content">
        <h1>{profile.name}</h1>
        <p>{profile.role}</p>
        <p>{profile.bio}</p>

        <div className="button-group">
          <a
            href={profile.contact.cv}
            target="_blank"
            className="button primary"
          >
            Curriculum Vitae
          </a>
          <a href={profile.contact.email} className="button">
            Email
          </a>
          <a
            href={profile.contact.whatsapp}
            target="_blank"
            className="button"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
