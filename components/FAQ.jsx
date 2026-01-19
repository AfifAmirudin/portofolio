"use client";
import { useState } from "react";
import { faq } from "../data/faq";

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section>
      <h2>FAQ</h2>
      {faq.map((f, i) => (
        <div key={i} className="faq-item" onClick={() => setOpen(open === i ? null : i)}>
          <strong>{f.q}</strong>
          {open === i && <p>{f.a}</p>}
        </div>
      ))}
    </section>
  );
}
