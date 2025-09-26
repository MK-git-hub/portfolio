"use client";

import Tabs from "@/components/Tabs";
import Charts from "@/components/Charts";
import GeoMap from "@/components/GeoMap";
import Portfolio from "@/components/Portfolio";
import UXStrategy from "@/components/UXStrategy";

export default function Home() {
  const aboutContent = (
    <div className="space-y-3 text-sm leading-6">
      <p>
        Principal Frontend Engineer & UX Strategist crafting accessible, performant web applications with React, Angular, and Next.js.
        Specialized in journey mapping, ecosystem modeling, and experience vision design across finance, healthcare, education, and non-profit domains.
      </p>
      <div className="rounded-md border border-black/10 dark:border-white/15 p-4 space-y-3">
        <h3 className="text-base font-semibold">Education</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <span className="font-medium">MS (Computer Science)</span> — Marist College, NY, USA
          </li>
          <li>
            <span className="font-medium">Bachelor of Engineering, Computer Engineering</span> — University of Pune, India
          </li>
        </ul>
      </div>
          <div className="rounded-md border border-black/10 dark:border-white/15 p-4 space-y-3">
            <h3 className="text-base font-semibold">UX Strategy Expertise</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="space-y-2">
                <h4 className="font-medium text-gray-900 dark:text-white">🗺️ Journey Mapping</h4>
                <p className="text-gray-600 dark:text-gray-300">End-to-end user experience mapping with touchpoint analysis and pain point identification</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium text-gray-900 dark:text-white">🌐 Ecosystem Modeling</h4>
                <p className="text-gray-600 dark:text-gray-300">Stakeholder relationship mapping and system interaction modeling</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium text-gray-900 dark:text-white">🎯 Experience Visions</h4>
                <p className="text-gray-600 dark:text-gray-300">Future-state experience design and strategic roadmap development</p>
              </div>
            </div>
          </div>
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

  const uxStrategyContent = (
    <div className="space-y-4">
      <UXStrategy />
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
                { id: "ux-strategy", label: "UX Strategy", content: uxStrategyContent },
                { id: "about", label: "About me", content: aboutContent },
                { id: "contact", label: "Contact", content: contactContent },
                { id: "geo", label: "Client geographic location", content: geoContent },
              ]}
            />
      </div>
    </div>
  );
}
