import { profile } from "../data/profile";

export default function ContactSection() {
  return (
    <section>
      <h2>Contact</h2>
      <div className="contact-box">
        <a href={profile.socials.email}>Email</a>
        <a href={profile.socials.linkedin}>LinkedIn</a>
        <a href={profile.socials.behance}>Behance</a>
        <a href={profile.socials.youtube}>YouTube</a>
      </div>
    </section>
  );
}
