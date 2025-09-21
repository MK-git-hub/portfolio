"use client";

import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

// Simplified world-110m topojson hosted by react-simple-maps
const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

type City = { name: string; coordinates: [number, number] };

const cities: City[] = [
  { name: "New York, USA", coordinates: [-74.006, 40.7128] },
  { name: "California, USA", coordinates: [-119.4179, 36.7783] },
  { name: "Boston, USA", coordinates: [-71.0589, 42.3601] },
  { name: "Los Angeles, USA", coordinates: [-118.2437, 34.0522] },
  { name: "Pune, India", coordinates: [73.8567, 18.5204] },
];

export default function GeoMap() {
  return (
    <div className="w-full">
      <ComposableMap projectionConfig={{ scale: 150 }} className="w-full h-auto">
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                style={{
                  default: { fill: "#E5E7EB", outline: "none" },
                  hover: { fill: "#cbd5e1", outline: "none" },
                  pressed: { fill: "#94a3b8", outline: "none" },
                }}
              />
            ))
          }
        </Geographies>
        {cities.map((city) => (
          <Marker key={city.name} coordinates={city.coordinates}>
            <circle r={4} fill="#ef4444" stroke="#fff" strokeWidth={1} />
            <text textAnchor="middle" y={-10} className="fill-black text-[10px]">
              {city.name}
            </text>
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
}


