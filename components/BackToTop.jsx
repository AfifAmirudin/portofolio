"use client";
import { useEffect, useState } from "react";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 800);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`backtop ${show ? "show" : ""}`}
      onClick={() => window.scrollTo({ top: 0 })}
    >
      ↑ Top
    </div>
  );
}
