import { motion, AnimatePresence } from "framer-motion";
import {
    ComposableMap,
    Geographies,
    Geography,
    Marker,
    ZoomableGroup
} from "react-simple-maps";
import { Wifi, Maximize2, Minimize2 } from "lucide-react";
import { useState, useRef } from "react";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

interface GeographyType {
    rsmKey: string;
    properties: {
        name: string;
        [key: string]: any;
    };
}

const countryData = [
    {
        id: "UK", name: "REINO UNIDO", rank: 1, coordinates: [-3.4, 55.3], score: 95.3, ePart: 97.6, webNav: "30/30",
        services: ["E-Visa", "Tax Payment", "E-Signature"], color: "#22c55e"
    },
    {
        id: "NEW ZEALAND", name: "NUEVA ZELANDA", rank: 2, coordinates: [174.8, -40.9], score: 92.1, ePart: 91.2, webNav: "30/30",
        services: ["Self-employed", "Tax calc", "Online system"], color: "#701a75"
    },
    {
        id: "JAPAN", name: "JAPÓN", rank: 3, coordinates: [138.2, 36.2], score: 88.8, ePart: 100.0, webNav: "25/30",
        services: ["E-Visa", "E-Signature", "Passport update"], color: "#ec4899"
    },
    {
        id: "NETHERLANDS", name: "PAÍSES BAJOS", rank: 4, coordinates: [5.3, 52.1], score: 84.7, ePart: 90.6, webNav: "30/30",
        services: ["Self-employed", "Tech system", "Tax payment"], color: "#06b6d4"
    },
    {
        id: "DENMARK", name: "DINAMARCA", rank: 5, coordinates: [10.3, 56.1], score: 84.4, ePart: 100.0, webNav: "24/30",
        services: ["Identity Digital", "Full Interop", "Compulsory Digital"], color: "#f97316"
    },
    {
        id: "SAUDI ARABIA", name: "ARABIA SAUDÍ", rank: 6, coordinates: [45.0, 23.8], score: 84.2, ePart: 95.3, webNav: "18/30",
        services: ["7/9 Services", "Tax portal", "E-Visa"], color: "#3730a3"
    },
    {
        id: "ESTONIA", name: "ESTONIA", rank: 7, coordinates: [25.0, 58.5], score: 82.8, ePart: 95.3, webNav: "12/30",
        services: ["Voto Online", "E-Residency", "Full Digital"], color: "#d946ef"
    },
    {
        id: "SINGAPORE", name: "SINGAPUR", rank: 8, coordinates: [103.8, 1.3], score: 80.9, ePart: 95.3, webNav: "14/30",
        services: ["Business Reg", "Tax pay", "E-Signature"], color: "#ef4444"
    },
    {
        id: "SPAIN", name: "ESPAÑA", rank: 21, coordinates: [-3.7, 40.4], score: 78.5, ePart: 88.0, webNav: "22/30",
        services: ["Cl@ve System", "Sede Electrónica", "Tax portal"], color: "#fbbf24"
    },
    {
        id: "AUSTRALIA", name: "AUSTRALIA (Líder regional)", rank: 13, coordinates: [133.7, -25.2], score: 72.3, ePart: 76.4, webNav: "20/30",
        services: ["myGov Dashboard", "Medicare Online", "Centerlink Digital"], color: "#0891b2"
    },
    {
        id: "ECUADOR", name: "ECUADOR", rank: 70, coordinates: [-78.1, -1.8], score: 61.0, ePart: 48.0, webNav: "15/30",
        services: ["Registro Civil Online", "Portal Unico de Tramites", "Facturación Electrónica"], color: "#fbbf24"
    },
    {
        id: "USA", name: "ESTADOS UNIDOS", rank: 11, coordinates: [-95.7, 37.1], score: 76.2, ePart: 92.9, webNav: "28/30",
        services: ["USA.gov", "SSN Digital", "Tax E-file"], color: "#3b82f6"
    }
];

const GlobalDigitalMap = () => {
    const [activeCountry, setActiveCountry] = useState<string | null>(null);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            containerRef.current?.requestFullscreen().catch((err) => {
                alert(`Error al activar pantalla completa: ${err.message}`);
            });
            setIsFullscreen(true);
        } else {
            document.exitFullscreen();
            setIsFullscreen(false);
        }
    };

    // Escuchar el evento de cambio de pantalla completa (por si se sale con ESC)
    document.onfullscreenchange = () => {
        setIsFullscreen(!!document.fullscreenElement);
    };

    return (
        <section className="map-section">
            <div className="section-header">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-title"
                >
                    Líderes Mundiales en <span className="gradient-text">E-Government</span>
                </motion.h2>
                <p className="section-subtitle">Comparativa basada en el informe de Naciones Unidas (EGDI y E-Participación)</p>
            </div>

            <div
                ref={containerRef}
                className={`map-container glass-card ${isFullscreen ? 'fullscreen' : ''}`}
            >
                <div className="map-controls">
                    <button
                        className="control-btn"
                        onClick={toggleFullscreen}
                        title={isFullscreen ? "Salir de pantalla completa" : "Pantalla completa"}
                    >
                        {isFullscreen ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
                    </button>
                </div>

                <div className="map-legend">
                    <div className="legend-item">
                        <span className="dot navigation"></span> Navegación Web
                    </div>
                    <div className="legend-item">
                        <span className="dot participation"></span> E-Participación
                    </div>
                    <div className="legend-item">
                        <span className="dot ranking"></span> Score Global
                    </div>
                </div>

                <ComposableMap
                    projection="geoMercator"
                    projectionConfig={{
                        scale: isFullscreen ? 180 : 145,
                        center: [10, isFullscreen ? 0 : 20]
                    }}
                    style={{ width: "100%", height: "100%" }}
                >
                    {/* Mapa estático sin zoom activo para evitar desplazamientos accidentales */}
                    <Geographies geography={geoUrl}>
                        {({ geographies }: { geographies: GeographyType[] }) =>
                            geographies
                                .filter((geo: GeographyType) => geo.properties.name !== "Antarctica")
                                .map((geo: GeographyType) => {
                                    const countryName = geo.properties.name?.toUpperCase();
                                    const country = countryData.find(c => c.id === countryName || c.name.includes(countryName) || countryName.includes(c.id));
                                    return (
                                        <Geography
                                            key={geo.rsmKey}
                                            geography={geo}
                                            fill={country ? country.color : "#1e293b"}
                                            stroke="#0f172a"
                                            strokeWidth={0.5}
                                            style={{
                                                default: { outline: "none" },
                                                hover: { fill: country ? country.color : "#334155", outline: "none", cursor: "pointer" },
                                                pressed: { outline: "none" }
                                            }}
                                            onMouseEnter={() => country && setActiveCountry(country.id)}
                                            onMouseLeave={() => setActiveCountry(null)}
                                        />
                                    );
                                })
                        }
                    </Geographies>

                    {countryData.map((c) => {
                        const isTargetRegion = c.id === "ECUADOR" || c.id === "USA";
                        // Ajustar posición del tooltip según si estamos en pantalla completa o no
                        const tooltipX = c.coordinates[0] > 90 ? (isFullscreen ? -250 : -230) : 15;
                        return (
                            <Marker key={c.id} coordinates={c.coordinates as [number, number]}>
                                <motion.g
                                    onMouseEnter={() => setActiveCountry(c.id)}
                                    onMouseLeave={() => setActiveCountry(null)}
                                    className="marker-group"
                                >
                                    <circle
                                        r={isTargetRegion ? 8 : 5}
                                        fill={c.color}
                                        stroke="#fff"
                                        strokeWidth={1.5}
                                    />
                                    <motion.circle
                                        r={isTargetRegion ? 16 : 10}
                                        fill={c.color}
                                        opacity={0.3}
                                        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.1, 0.3] }}
                                        transition={{ duration: 2.5, repeat: Infinity }}
                                    />

                                    <foreignObject
                                        x={tooltipX}
                                        y={-120}
                                        width={isFullscreen ? 260 : 220}
                                        height={260}
                                        style={{ pointerEvents: 'none', overflow: 'visible' }}
                                    >
                                        <AnimatePresence mode="wait">
                                            {activeCountry === c.id && (
                                                <motion.div
                                                    initial={{ opacity: 0, scale: 0.9, x: c.coordinates[0] > 90 ? 20 : -20 }}
                                                    animate={{ opacity: 1, scale: 1, x: 0 }}
                                                    exit={{ opacity: 0, scale: 0.9 }}
                                                    className={`country-card-tooltip enhanced ${isFullscreen ? 'large' : ''} ${c.id === "ECUADOR" ? 'focus-ecuador' : ''}`}
                                                    style={{ pointerEvents: 'none' }}
                                                >
                                                    <div className="card-top" style={{ backgroundColor: c.color }}>
                                                        <span className="card-rank">#{c.rank}</span>
                                                        <span className="card-name">{c.name}</span>
                                                    </div>

                                                    <div className="card-main-score">
                                                        <Wifi size={14} className="score-icon" />
                                                        <span className="score-label">Score Global:</span>
                                                        <span className="score-value">{c.score}</span>
                                                    </div>

                                                    <div className="card-stats-grid">
                                                        <div className="stat-item">
                                                            <span className="stat-label">Web</span>
                                                            <span className="stat-value">{c.webNav}</span>
                                                        </div>
                                                        <div className="stat-item">
                                                            <span className="stat-label">Participación</span>
                                                            <span className="stat-value">{c.ePart}%</span>
                                                        </div>
                                                    </div>

                                                    <div className="card-services">
                                                        <span className="services-title">Servicios:</span>
                                                        <div className="services-tags">
                                                            {c.services.map(s => (
                                                                <span key={s} className="service-tag">{s}</span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </foreignObject>
                                </motion.g>
                            </Marker>
                        );
                    })}
                </ComposableMap>
            </div>

            <style>{`
        .map-section {
          padding: 80px 20px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .map-container {
          height: 600px;
          position: relative;
          background: #030712;
          border-radius: 32px;
          border: 1px solid var(--glass-border);
          overflow: hidden;
          margin-bottom: 60px;
          transition: all 0.3s ease;
        }

        .map-container.fullscreen {
          width: 100vw;
          height: 100vh;
          border-radius: 0;
          margin: 0;
          z-index: 9999;
          background: #020617; /* Fondo más profundo para pantalla completa */
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .country-card-tooltip.large {
          width: 240px;
          border-width: 2px;
        }

        .country-card-tooltip.large .card-top {
          padding: 14px 18px;
          font-size: 0.95rem;
        }

        .map-controls {
          position: absolute;
          top: 24px;
          right: 24px;
          z-index: 20;
          display: flex;
          gap: 12px;
        }

        .control-btn {
          background: rgba(15, 23, 42, 0.9);
          border: 1px solid var(--glass-border);
          color: white;
          width: 44px;
          height: 44px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          backdrop-filter: blur(8px);
          transition: all 0.2s ease;
        }

        .control-btn:hover {
          background: var(--blue-gradient);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
        }

        .map-legend {
          position: absolute;
          top: 24px;
          left: 24px;
          display: flex;
          gap: 20px;
          background: rgba(15, 23, 42, 0.9);
          padding: 12px 24px;
          border-radius: 100px;
          backdrop-filter: blur(8px);
          border: 1px solid var(--glass-border);
          z-index: 10;
        }

        .legend-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.8rem;
          font-weight: 500;
          color: var(--text-primary);
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .dot.navigation { background: #3b82f6; }
        .dot.participation { background: #ec4899; }
        .dot.ranking { background: #22c55e; }

        .country-card-tooltip {
          background: #111827;
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
          width: 200px;
          display: flex;
          flex-direction: column;
        }

        .country-card-tooltip.focus-ecuador {
          border: 2px solid #fbbf24;
          box-shadow: 0 0 20px rgba(251, 191, 36, 0.3);
        }

        .card-top {
          padding: 10px 14px;
          display: flex;
          align-items: center;
          gap: 10px;
          color: white;
          font-weight: 800;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.025em;
        }

        .card-rank {
          background: rgba(0, 0, 0, 0.3);
          padding: 2px 8px;
          border-radius: 6px;
          font-size: 0.7rem;
        }

        .card-main-score {
          padding: 10px 14px;
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.03);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .score-icon { color: #22c55e; }
        .score-label { font-size: 0.7rem; color: #94a3b8; }
        .score-value { font-size: 1rem; font-weight: 800; color: white; }

        .card-stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 12px 14px;
          gap: 12px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .stat-label { font-size: 0.6rem; color: #64748b; text-transform: uppercase; font-weight: 600; }
        .stat-value { font-size: 0.9rem; font-weight: 700; color: #f8fafc; }

        .card-services {
          padding: 12px 14px;
          background: rgba(0, 0, 0, 0.2);
        }

        .services-title { 
          font-size: 0.6rem; 
          color: #64748b; 
          display: block; 
          margin-bottom: 8px;
          text-transform: uppercase;
          font-weight: 600;
        }

        .services-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .service-tag {
          font-size: 0.65rem;
          background: rgba(255, 255, 255, 0.05);
          color: #cbd5e1;
          padding: 2px 8px;
          border-radius: 4px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          white-space: nowrap;
        }

        .marker-group { cursor: pointer; }

        @media (max-width: 768px) {
          .map-container { height: 450px; }
          .map-legend { display: none; }
        }
      `}</style>
        </section>
    );
};

export default GlobalDigitalMap;
