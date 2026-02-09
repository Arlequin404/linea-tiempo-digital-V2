import { motion } from "framer-motion";
import CountrySummary from "./CountrySummary";
import { BarChart3, Activity, Globe2, Lightbulb } from "lucide-react";

type IndicatorProps = {
  title: string;
  ecValue: number;
  dkValue: number;
  icon: React.ReactNode;
};

const IndicatorCard = ({ title, ecValue, dkValue, icon }: IndicatorProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="glass-card indicator-card"
    >
      <div className="card-header">
        <div className="icon-wrapper">{icon}</div>
        <h3 className="card-title">{title}</h3>
      </div>

      <div className="metric-row">
        <div className="metric-info">
          <span className="country-label">Ecuador</span>
          <span className="value-label">{ecValue}%</span>
        </div>
        <div className="progress-bg">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${ecValue}%` }}
            transition={{ duration: 1, delay: 0.2 }}
            className="progress-bar ec"
          />
        </div>
      </div>

      <div className="metric-row">
        <div className="metric-info">
          <span className="country-label">Dinamarca</span>
          <span className="value-label">{dkValue}%</span>
        </div>
        <div className="progress-bg">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${dkValue}%` }}
            transition={{ duration: 1, delay: 0.4 }}
            className="progress-bar dk"
          />
        </div>
      </div>

      <style>{`
        .indicator-card {
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 4px;
        }

        .icon-wrapper {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: rgba(59, 130, 246, 0.1);
          color: var(--accent-blue);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .card-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .metric-row {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .metric-info {
          display: flex;
          justify-content: space-between;
          font-size: 0.85rem;
          font-weight: 500;
        }

        .country-label { color: var(--text-secondary); }
        .value-label { color: var(--text-primary); }

        .progress-bg {
          height: 6px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 3px;
          overflow: hidden;
        }

        .progress-bar {
          height: 100%;
          border-radius: 3px;
        }

        .progress-bar.ec { background: var(--blue-gradient); }
        .progress-bar.dk { background: linear-gradient(90deg, #10b981 0%, #34d399 100%); }
      `}</style>
    </motion.div>
  );
};

const Indicators = () => {
  return (
    <section className="indicators-section">
      <div className="section-header">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Comparación de Indicadores
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="section-subtitle"
        >
          Análisis cuantitativo de los principales indicadores de transformación digital
        </motion.p>
      </div>

      <div className="indicators-grid">
        <IndicatorCard
          title="Índice Digital"
          ecValue={52}
          dkValue={98}
          icon={<BarChart3 size={18} />}
        />
        <IndicatorCard
          title="Servicios Online"
          ecValue={35}
          dkValue={98}
          icon={<Activity size={18} />}
        />
        <IndicatorCard
          title="Penetración Internet"
          ecValue={70}
          dkValue={99}
          icon={<Globe2 size={18} />}
        />
        <IndicatorCard
          title="Habilidades Digitales"
          ecValue={45}
          dkValue={95}
          icon={<Lightbulb size={18} />}
        />
      </div>

      <div className="summary-grid">
        <CountrySummary
          code="EC"
          country="Ecuador"
          description="Ecuador ha mostrado avances significativos en la última década, enfocándose en la infraestructura y marcos legales para la administración pública."
          maturity="Media"
          speed="Media"
          variant="ec"
        />

        <CountrySummary
          code="DK"
          country="Dinamarca"
          description="Dinamarca lidera consistentemente los rankings globales de administración electrónica gracias a una cultura de confianza y digitalización por defecto."
          maturity="Muy Alta"
          speed="Alta"
          variant="dk"
        />
      </div>

      <style>{`
        .indicators-section {
          padding: 100px 20px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .section-title {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .section-subtitle {
          color: var(--text-secondary);
          font-size: 1.1rem;
          max-width: 600px;
          margin: 0 auto;
        }

        .indicators-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 24px;
          margin-bottom: 48px;
        }

        .summary-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 32px;
        }

        @media (max-width: 768px) {
          .summary-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
};

export default Indicators;
