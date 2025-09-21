"use client";

import Tabs from "@/components/Tabs";
import Charts from "@/components/Charts";
import GeoMap from "@/components/GeoMap";
import Portfolio from "@/components/Portfolio";

export default function Home() {
  const aboutContent = (
    <div className="space-y-3 text-sm leading-6">
      <p>
        Principal Frontend Engineer crafting accessible, performant web applications with React, Angular, and Next.js.
        Experienced across finance, healthcare, education, and non-profit domains.
      </p>
      <div className="rounded-md border border-black/10 dark:border-white/15 p-4">
        <Charts />
      </div>
    </div>
  );

  const contactContent = (
    <div className="text-sm space-y-2">
      <p>Email: <a className="text-blue-600 hover:underline" href="mailto:you@example.com">manalikulkarnie@gmail.com</a></p>
      <p>LinkedIn: <a className="text-blue-600 hover:underline" href="#">lhttps://www.linkedin.com/in/manali-sonawane-a3382a1b0/</a></p>
      <p>Location: USA</p>
    </div>
  );

  const portfolioContent = (
    <div className="space-y-4">
      <Portfolio />
    </div>
  );

  const geoContent = (
    <div className="space-y-4">
      <GeoMap />
    </div>
  );

  return (
    <div className="font-sans min-h-screen p-6 sm:p-10">
      <div className="max-w-6xl mx-auto flex flex-col gap-6">
        <h1 className="text-2xl sm:text-3xl font-bold">Portfolio - Manali Sonawane</h1>
        <Tabs
          initialId="portfolio"
          items={[
            { id: "portfolio", label: "Portfolio", content: portfolioContent },
            { id: "about", label: "About", content: aboutContent },
            { id: "contact", label: "Contact", content: contactContent },
            { id: "geo", label: "Client geographic location", content: geoContent },
          ]}
        />
      </div>
    </div>
  );
}
