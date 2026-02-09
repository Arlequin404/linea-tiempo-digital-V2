import { motion } from "framer-motion";
import { TrendingUp, AlertCircle } from "lucide-react";

type GapCardProps = {
  title: string;
  value: string;
  progress: number;
  color: string;
};

const GapCard = ({ title, value, progress, color }: GapCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="glass-card gap-card"
    >
      <div className="gap-card-header">
        <span className="gap-title">{title}</span>
        <AlertCircle size={16} className="gap-icon" />
      </div>

      <div className="gap-value-container">
        <span className="gap-value">{value}</span>
        <TrendingUp size={20} className="trend-icon" style={{ color: color.includes('ef4444') ? '#ef4444' : '#10b981' }} />
      </div>

      <div className="gap-progress-bg">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${progress}%` }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{ background: color }}
          className="gap-progress-bar"
        />
      </div>

      <style>{`
        .gap-card {
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .gap-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: var(--text-muted);
        }

        .gap-title {
          font-size: 0.85rem;
          font-weight: 500;
          letter-spacing: 0.02em;
        }

        .gap-value-container {
          display: flex;
          align-items: baseline;
          gap: 12px;
        }

        .gap-value {
          font-size: 2rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .gap-progress-bg {
          height: 8px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 4px;
          overflow: hidden;
        }

        .gap-progress-bar {
          height: 100%;
          border-radius: 4px;
        }
      `}</style>
    </motion.div>
  );
};

const DigitalGapCards = () => {
  return (
    <section className="gap-section">
      <div className="gap-grid">
        <GapCard
          title="Brecha en Índice Digital"
          value="46 pts"
          progress={46}
          color="linear-gradient(90deg, #ef4444, #f97316)"
        />
        <GapCard
          title="Brecha en Servicios Online"
          value="63%"
          progress={63}
          color="linear-gradient(90deg, #f59e0b, #fbbf24)"
        />
        <GapCard
          title="Brecha en Internet"
          value="29%"
          progress={29}
          color="linear-gradient(90deg, #22c55e, #4ade80)"
        />
        <GapCard
          title="Brecha en Habilidades"
          value="50%"
          progress={50}
          color="linear-gradient(90deg, #f97316, #ef4444)"
        />
      </div>

      <style>{`
        .gap-section {
          padding: 0 20px 100px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .gap-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 20px;
        }
      `}</style>
    </section>
  );
};

export default DigitalGapCards;
