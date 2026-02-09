import { motion } from "framer-motion";
import type { TimelineItem as Item } from "../data/timelineData";
import { Calendar, Globe, Cpu, Gavel, Building2 } from "lucide-react";

const TimelineItem = ({
  item,
  side,
}: {
  item: Item;
  side: "left" | "right";
}) => {
  const isEC = item.country === "ec";

  return (
    <div className={`timeline-item-row ${side}`}>
      {/* Central Connector */}
      <div className="timeline-connector">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          className={`timeline-dot ${isEC ? 'ec' : 'dk'}`}
        />
      </div>

      {/* Card Content */}
      <motion.div
        initial={{ opacity: 0, x: side === "left" ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        className={`timeline-card-wrapper ${side}`}
      >
        <div className={`glass-card timeline-card ${isEC ? 'ec-border' : 'dk-border'}`}>
          <div className="card-header">
            <span className="year-badge">
              <Calendar size={14} />
              {item.year}
            </span>
            <span className={`country-tag ${item.country}`}>
              <Globe size={14} />
              {item.country === "ec" ? "Ecuador" : "Dinamarca"}
            </span>
          </div>

          <h3 className="card-title">{item.title}</h3>
          <p className="card-description">{item.description}</p>

          <div className="focus-tags">
            {item.focus.map((f) => (
              <span key={f} className={`focus-tag ${f}`}>
                {f === "legal" && <Gavel size={12} />}
                {f === "tech" && <Cpu size={12} />}
                {f === "inst" && <Building2 size={12} />}
                {f === "legal" ? "Legal" : f === "tech" ? "Tecnológico" : "Institucional"}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      <style>{`
        .timeline-item-row {
          display: flex;
          position: relative;
          width: 100%;
          min-height: 200px;
          margin-bottom: 3rem;
        }

        .timeline-item-row.left { justify-content: flex-start; }
        .timeline-item-row.right { justify-content: flex-end; }

        .timeline-connector {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 2px;
          background: rgba(255, 255, 255, 0.1);
          transform: translateX(-50%);
          z-index: 1;
        }

        .timeline-dot {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          position: absolute;
          left: 50%;
          top: 40px;
          transform: translateX(-50%);
          z-index: 5;
          border: 4px solid var(--bg-primary);
        }

        .timeline-dot.ec { background: var(--accent-blue); box-shadow: 0 0 15px var(--accent-blue); }
        .timeline-dot.dk { background: var(--accent-green); box-shadow: 0 0 15px var(--accent-green); }

        .timeline-card-wrapper {
          width: 50%;
          padding: 0 40px;
          display: flex;
        }

        .timeline-card-wrapper.left { justify-content: flex-end; }
        .timeline-card-wrapper.right { justify-content: flex-start; }

        .timeline-card {
          width: 100%;
          max-width: 450px;
          padding: 24px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .timeline-card:hover {
          transform: translateY(-5px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }

        .ec-border { border-left: 4px solid var(--accent-blue); }
        .dk-border { border-left: 4px solid var(--accent-green); }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }

        .year-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-secondary);
        }

        .country-tag {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.75rem;
          padding: 4px 10px;
          border-radius: 999px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .country-tag.ec { background: rgba(59, 130, 246, 0.1); color: var(--accent-blue); }
        .country-tag.dk { background: rgba(16, 185, 129, 0.1); color: var(--accent-green); }

        .card-title {
          font-size: 1.25rem;
          margin-bottom: 10px;
          color: var(--text-primary);
        }

        .card-description {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 20px;
        }

        .focus-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .focus-tag {
          display: flex;
          align-items: center;
          gap: 5px;
          padding: 5px 12px;
          border-radius: 6px;
          font-size: 0.75rem;
          font-weight: 500;
          background: rgba(255, 255, 255, 0.05);
          color: var(--text-secondary);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .focus-tag.legal { border-color: rgba(139, 92, 246, 0.3); color: #a78bfa; }
        .focus-tag.tech { border-color: rgba(59, 130, 246, 0.3); color: #60a5fa; }
        .focus-tag.inst { border-color: rgba(16, 185, 129, 0.3); color: #34d399; }

        @media (max-width: 768px) {
          .timeline-item-row.left, .timeline-item-row.right { justify-content: flex-start; }
          .timeline-connector { left: 20px; }
          .timeline-dot { left: 20px; }
          .timeline-card-wrapper { width: 100%; padding-left: 60px; padding-right: 20px; }
          .timeline-card-wrapper.left { justify-content: flex-start; }
        }
      `}</style>
    </div>
  );
};

export default TimelineItem;
