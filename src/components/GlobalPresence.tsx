import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const markers = [
  { markerOffset: -15, name: "Houston, USA (HQ & Plant)", coordinates: [-95.3698, 29.7604] },
  { markerOffset: 15, name: "Rotterdam, NL (Export Hub)", coordinates: [4.4777, 51.9244] },
  { markerOffset: -15, name: "Mumbai, IN (Manufacturing)", coordinates: [72.8777, 19.0760] },
  { markerOffset: 15, name: "Dubai, UAE (Distribution)", coordinates: [55.2708, 25.2048] },
  { markerOffset: -15, name: "Singapore (APAC HQ)", coordinates: [103.8198, 1.3521] },
  { markerOffset: 15, name: "Sydney, AU (Plant)", coordinates: [151.2093, -33.8688] },
  { markerOffset: 15, name: "São Paulo, BR (Plant)", coordinates: [-46.6333, -23.5505] },
];

export default function GlobalPresence() {
  return (
    <section id="global" className="py-24 bg-slate-900 overflow-hidden relative">
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'radial-gradient(#475569 1px, transparent 1px)',
        backgroundSize: '32px 32px'
      }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[2px] w-8 bg-amber-500" />
            <span className="text-slate-400 font-bold tracking-widest uppercase text-sm">
              Global Footprint
            </span>
            <div className="h-[2px] w-8 bg-amber-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
            Connecting Markets, <br /> Securing Supply Chains
          </h2>
          <p className="text-slate-400 text-lg font-light">
            With manufacturing hubs in 4 continents and a distribution network spanning 65+ countries, we ensure reliable delivery of premium steel products anywhere on the globe.
          </p>
        </div>

        <div className="relative w-full max-w-5xl mx-auto bg-slate-800/50 rounded-lg p-4 md:p-8 border border-slate-700/50 backdrop-blur-sm">
          <ComposableMap
            projectionConfig={{
              scale: 140,
              center: [0, 20]
            }}
            width={800}
            height={400}
            style={{ width: "100%", height: "auto" }}
          >
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="#1e293b" // slate-800
                    stroke="#334155" // slate-700
                    strokeWidth={0.5}
                    style={{
                      default: { outline: "none" },
                      hover: { fill: "#334155", outline: "none" },
                      pressed: { outline: "none" },
                    }}
                  />
                ))
              }
            </Geographies>
            {markers.map(({ name, coordinates, markerOffset }) => (
              <Marker key={name} coordinates={coordinates as [number, number]}>
                <motion.g
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                  <circle r={4} fill="#f59e0b" stroke="#fff" strokeWidth={1.5} />
                  <text
                    textAnchor="middle"
                    y={markerOffset}
                    style={{ fontFamily: "inherit", fill: "#cbd5e1", fontSize: "8px", fontWeight: 600, letterSpacing: "0.5px" }}
                  >
                    {name}
                  </text>
                </motion.g>
              </Marker>
            ))}
          </ComposableMap>
        </div>
      </div>
    </section>
  );
}
