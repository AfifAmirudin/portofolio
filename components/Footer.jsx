import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* LEFT */}
        <div>
          <div className="footer-title">
            Let’s work together
          </div>
          <p className="footer-desc">
            Interested in collaborating or just want to say hi?
            Feel free to reach out or follow my work on social media.
          </p>
        </div>

        {/* RIGHT */}
        <div>
          <div className="footer-socials">
            <a href={profile.socials.linkedin} target="_blank">
              LinkedIn
            </a>
            <a href={profile.socials.behance} target="_blank">
              Behance
            </a>
            <a href={profile.socials.youtube} target="_blank">
              YouTube
            </a>
            <a href={profile.socials.medium} target="_blank">
              Medium
            </a>
            <a href={profile.contact.email}>
              Email
            </a>
            <a
              href={profile.contact.whatsapp}
              target="_blank"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} {profile.name}. All rights reserved.
      </div>
    </footer>
  );
}
