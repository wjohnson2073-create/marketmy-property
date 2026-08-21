"use client";

import { useEffect, useMemo, useState } from "react";
import { bookingSelectionEvent } from "../site-data";

const formId = "262311411147040";
const formUrl = `https://form.jotform.com/${formId}`;

export function JotformEmbed() {
  const [selectedPackage, setSelectedPackage] = useState("");
  const [frameHeight, setFrameHeight] = useState(940);

  useEffect(() => {
    const updatePackage = (event: Event) => setSelectedPackage((event as CustomEvent<string>).detail);
    const resizeFrame = (event: MessageEvent) => {
      if (typeof event.data !== "string") return;
      if (!URL.canParse(event.origin)) return;
      const hostname = new URL(event.origin).hostname;
      const trustedOrigin = hostname === "jotform.com" || hostname.endsWith(".jotform.com") || hostname === "jotfor.ms" || hostname.endsWith(".jotfor.ms");
      if (!trustedOrigin) return;
      const [action, height, messageFormId] = event.data.split(":");
      if (action === "setHeight" && messageFormId === formId) {
        const nextHeight = Number(height);
        if (Number.isFinite(nextHeight)) setFrameHeight(Math.max(720, nextHeight));
      }
    };

    window.addEventListener(bookingSelectionEvent, updatePackage);
    window.addEventListener("message", resizeFrame);
    return () => {
      window.removeEventListener(bookingSelectionEvent, updatePackage);
      window.removeEventListener("message", resizeFrame);
    };
  }, []);

  const embedUrl = useMemo(() => {
    const url = new URL(formUrl);
    url.searchParams.set("isIframeEmbed", "1");
    if (selectedPackage) {
      url.searchParams.set("packageInterest", selectedPackage);
      url.searchParams.set("q6_q6_dropdown4", selectedPackage);
    }
    return url.toString();
  }, [selectedPackage]);

  return (
    <div className="jotform-panel">
      <div className="jotform-topbar">
        <div><span>SECURE INTAKE</span><strong>{selectedPackage || "Tell us about the listing"}</strong></div>
        <i aria-hidden="true">01</i>
      </div>
      <iframe
        key={embedUrl}
        title="MarketMy.Property new client inquiry"
        src={embedUrl}
        style={{ height: `${frameHeight}px` }}
        allow="geolocation; microphone; camera; fullscreen; payment"
        loading="lazy"
      />
      <p>Having trouble with the embedded form? <a href={formUrl} target="_blank" rel="noreferrer">Open the secure form in a new tab ↗</a></p>
    </div>
  );
}
