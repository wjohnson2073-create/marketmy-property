"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { portfolio } from "../site-data";

export function PortfolioRotator() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => setSlide((value) => (value + 1) % portfolio.length), 4200);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="hero-visual" aria-label="Portfolio preview">
      {portfolio.map((item, index) => <Image className={slide === index ? "active" : ""} key={item.src} src={item.src} alt={item.alt} fill sizes="(max-width: 1040px) 100vw, 44vw" priority={index === 0} />)}
      <span className="temp-label">TEMPORARY PORTFOLIO PREVIEW</span>
      <div className="visual-caption" aria-live="polite"><span>{portfolio[slide].label} / PHOTO + VIDEO + DRONE</span><span>{portfolio[slide].number} — 03</span></div>
      <div className="slide-dots">{portfolio.map((item, index) => <button type="button" aria-label={`Show portfolio preview ${item.number}`} aria-pressed={slide === index} className={slide === index ? "active" : ""} key={item.number} onClick={() => setSlide(index)} />)}</div>
    </div>
  );
}
